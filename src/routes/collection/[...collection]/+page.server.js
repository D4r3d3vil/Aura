import {getDirectoryContents} from '../../utils.server'
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  return {uploads: getDirectoryContents(`./src/uploads/pages/${params.collection}`)}
}