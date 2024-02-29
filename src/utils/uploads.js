import fs from 'fs'
const uploads = {}
export async function getUploads(dirPath) {
  if(dirPath.includes('../')) return //possible malicious path
  if('/' in uploads){ 
    let uploadObj = uploads['/']
    return {uploads:uploadObj.uploads.filter(upload=>upload.path.endsWith(dirPath))}
  }
  let uploadObj = {uploads: await createObject('./src/uploads/pages')}
  uploads['/'] = uploadObj
  if(dirPath!='/') uploadObj.uploads = uploadObj.uploads.filter(upload=>upload.path.endsWith(dirPath))
  return uploadObj
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
      name,
      contents: type=='folder'?await createObject(path):0,
      showContents: false
    };
    result.push(obj);
  }
  return result.flat(); // flatten the result array
}