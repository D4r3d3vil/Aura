import { get_uploads } from "../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
  let [posts, categories] = await get_uploads()
  return {posts, categories}
}