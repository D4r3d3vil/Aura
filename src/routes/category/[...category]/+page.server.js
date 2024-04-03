import { get_uploads } from "../../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
  const [uploads, categories] = await get_uploads(params.category)
  return {uploads, categories}
}
export async function entries(){
  const [uploads, categories] = await get_uploads()
  const slugs = categories.map((category)=>{ return {category: category.name}})
  return slugs
}