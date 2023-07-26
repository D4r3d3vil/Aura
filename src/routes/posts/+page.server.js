import {getUploads} from '../../utils/uploads'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {uploads: getUploads('./src/uploads/pages' )}
}