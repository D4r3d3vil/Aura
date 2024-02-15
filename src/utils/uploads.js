import fs from 'fs'
const cache = new Map();
export async function getUploads(dirPath) {
  if(cache.has(dirPath)) {
    return cache.get(dirPath)
  }
  async function createObject(dirPath) {
    let result = [];
    let names = fs.readdirSync(dirPath);
    for (let name of names) {
      let path = dirPath + '/' + name
      let type = fs.statSync(path).isFile() ? 'file' : 'folder'
      let obj = {
        type,
        path,
        name: name,
        contents: type=='folder'?await createObject(path):0,
        showContents: false
      };
      result.push(obj);
    }
    return result.flat(); // flatten the result array
  }
  let uploadObj = {uploads: await createObject(dirPath)}
  cache.set(dirPath, uploadObj)
  return uploadObj
}