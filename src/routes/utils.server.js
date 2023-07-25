import fs from 'fs'
import { formatPage } from '../markdown';
export async function getUploads(dir) {
  let results = [];
  let tags = [];
  async function readDirectory(path) {
    let items = fs.readdirSync(path);
    for (let item of items) {
      let fullPath = path + '/' + item;
      let stats = fs.statSync(fullPath);
      let obj = {
        name: item,
        path: fullPath,
        type: null,
        tags: [],
        contents:[]
      };
      if (stats.isFile()) {
        obj.type = 'file';
        let filePath = obj.path
        if(obj.name.endsWith('svelte')||obj.name.endsWith('js')){
             import(`../uploads/${filePath.replace('./src/uploads/', '')}` /* @vite-ignore */).then(post=>{
              if(post.meta&&post.meta.tags){
              post.meta.tags.forEach(tag => {
                if(!tags.includes(tag)) tags.push(tag);
                obj.tags.push(tag);
              })
            }
            }).catch(()=>'')
        }
        if (obj.name.endsWith("md")) {
           import(`../uploads/${filePath.replace('./src/uploads/', '')}?raw` /* @vite-ignore */)
          .then((post) => {
            let meta = formatPage(post.default).attributes
            if(meta&&meta.tags){
            JSON.parse(meta.tags.replace(/'/g, '"')).forEach(tag => {
                if(!tags.includes(tag)) tags.push(tag);
                obj.tags.push(tag)
            });
          }
          })
        }
      } else if (stats.isDirectory()) {
        obj.type = 'folder';
        readDirectory(fullPath);
        obj.contents = results.filter(r => r.path.startsWith(fullPath));
        results = results.filter(r => !r.path.startsWith(fullPath));
      }
      results.push(obj);
    }
  }
  readDirectory(dir);
  console.log(results[0].contents[0].contents);
  return {uploads:results, tags:tags};
}