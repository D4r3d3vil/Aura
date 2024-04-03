export async function get_uploads(category) {
  const posts = await import.meta.glob(`../uploads/pages/**`);
  const foldersSet = []
  let metadata = await Promise.all(Object.entries(posts).map(async (post) => {
    const meta = (await post[1]()).metadata;
    const path = post[0].replace(/\\/g, '/').replace(/(\.\.\/)+uploads\/pages\//, '')
    const pathArray = path.split('/');
    pathArray.pop();
    const folderPath = pathArray.join('/');
    if (folderPath) foldersSet.push({path: folderPath,name: folderPath.split('/').pop()});
    return {'path': path, 'metadata': meta};
  }));
  const categories = [...new Set(foldersSet)]
  if(!category) return [metadata, categories]
  let regex = new RegExp(`${category}\/[^\\/]+$`)
  return [metadata.filter((item) => regex.test(item.path)), categories]
  }