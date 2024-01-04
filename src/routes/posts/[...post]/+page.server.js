import paths from '../../../uploads/paths.json'
export async function load({params}){
  let post = params.post
  if(paths[post]) post=paths[post]
  return {path:post}
}