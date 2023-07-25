/** @type {import('./$types').PageLoad} */
import { compile } from '../../../markdown'
import { formatPage } from '../../../markdown'
import paths from '../../../uploads/paths.json'
import fs from 'fs'
export async function load({ params }) {
  let folder = `../../../uploads/pages/${paths[params.post] || params.post}`
  if (fs.existsSync(`./src/uploads/pages/${paths[params.post] || params.post}.md`)){
    return await getMarkdownPage()
  }else if(fs.existsSync(`./src/uploads/pages/${paths[params.post] || params.post}.js`)){
    return await getJavascriptPage()
  }else if(fs.existsSync(`./src/uploads/pages/${paths[params.post] || params.post}.svelte`)){
    return await getSveltePage()
  }else{
    return {
      notFound: true
    }
  }
    async function getMarkdownPage() {
      return await import(`${folder}.md?raw`/* @vite-ignore */)
        .then((page) => {
          page = compile(page.default)
          page = formatPage(page)
          return {
            meta: {
              date: page.attributes.date,
              description: page.attributes.description
            },
            page: page.page,
            type: 'md'
          }
        })
    }
  async function getJavascriptPage() {
    return await import(`${folder}.js`/* @vite-ignore */)
      .then(post => {
        let meta = post.meta
        post = post.default()
        return {
          page: compile(post),
          type: 'jsmd',
          meta: meta
        }
      })
  }
  async function getSveltePage() {
    return await import(`${folder}.svelte`/* @vite-ignore */)
      .then(async post => {
          return {
          meta: {
            date: post.meta.date,
            description: post.meta.description
          },
          page: folder,
          type: 'svelte'
        }
      })
  }
}
/* @vite-ignore */