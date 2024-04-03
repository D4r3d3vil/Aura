import { get_uploads } from "../../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
  let [uploads, categories] = await get_uploads(params.category)
  return {uploads, categories}
}