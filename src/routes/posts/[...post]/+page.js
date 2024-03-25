import { error } from "@sveltejs/kit";
import paths from '../../../uploads/paths.json'
export const load = async ({ params }) => {
  const slugFromPath = (path) =>
	  path.replace('../../../uploads/pages/', '').slice(0, -3)
	let postPath = params.post
	if(paths[postPath]) postPath = paths[postPath]
    const modules = import.meta.glob(`../../../uploads/pages/**`);
    for (const [path, resolver] of Object.entries(modules)) {
      if(slugFromPath(path) == postPath || postPath == path){
        return { component: (await resolver()).default };
      }
    }
    throw error(400, "Page not found");
};
