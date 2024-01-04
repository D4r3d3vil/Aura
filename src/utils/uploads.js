import fs from 'fs'
const cache = new Map();
export async function getUploads(dirPath) {
  if(cache.has(dirPath)) {
    console.log('Cache hit')
    return cache.get(dirPath)
  }
  let tags = []
  async function createObject(path) {
    let result = [];
    let names = fs.readdirSync(path);
    for (let name of names) {
      let obj = {
        type: fs.statSync(path + '/' + name).isFile() ? 'file' : 'folder',
        path: path + '/' + name,
        name: name,
        contents: 0
      };
      if (obj.type === 'folder') {
        obj.contents = await createObject(obj.path);
        obj.showContents = false;
      }
      if (obj.type === 'file') {
        let fileContent = fs.readFileSync(obj.path, 'utf8');
        let metadata = getFileAttributes(fileContent);
        obj.tags = metadata.tags;
      }
      result.push(obj);
    }
    return result.flat(); // flatten the result array
  }
  function getFileAttributes(fileContent) {
    let result = {};
    let parts = fileContent.split('---');
    if (parts[0].trim() === '') {
      let yaml = parts[1];
      let lines = yaml.split('\n');
      for (let line of lines) {
        if (line.includes(':')) {
          let pair = line.split(':');
          let key = pair[0].trim();
          let value = pair[1].trim();
          if (value.startsWith('[') && value.endsWith(']')) {
            value = value.slice(1, -1).split(',');
            for (let i = 0; i < value.length; i++) {
              value[i] = value[i].trim().replace(/['"]/g, '');
            }
          } else {
            value = value.replace(/['"]/g, '');
          }
          result[key] = value;
        }
      }
    } else {
      return null;
    }
    return result;
  }  
  let uploadObj = {uploads: await createObject(dirPath), tags: tags}
  cache.set(dirPath, uploadObj)
  return uploadObj
}