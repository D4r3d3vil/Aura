import {getDirectoryContents} from '../../../utils/uploads'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {uploads: getDirectoryContents(`./src/uploads/pages/${params.collection}`)}
}