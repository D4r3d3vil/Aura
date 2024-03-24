import {getUploads} from '../../../utils/uploads'
export async function load({ params }) {
  return await getUploads(`${params.collection}`)
}