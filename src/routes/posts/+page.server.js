import {getUploads} from '../../utils/uploads'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {uploads: await getUploads('./src/uploads/pages')}
}