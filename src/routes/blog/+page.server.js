import { get_uploads } from "../../utils/uploads";

export const prerender = true;
export async function load({ params }) {
  const [uploads, categories] = await get_uploads()
  return {uploads, categories}
}