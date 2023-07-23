/** @type {import('./$types').PageLoad} */
import { compile } from '../../../markdown'
import { formatPage } from '../../../markdown'
import paths from '../../../uploads/paths.json'
let postdata
export async function load({ params }) {
  let folder = `../../../uploads/pages/${paths[params.post]||params.post}`
  await import(`${folder}.md?raw`)
    .then((page) => {
      page = compile(page.default)
      page = formatPage(page)
      postdata = {
        meta: {
          date: page.attributes.date,
          description: page.attributes.description
        },
        page: page.page,
        type: 'md'
      }
    })
    .catch(async (err) => {
      await import(`${folder}.js`)
        .then(post => {
          post = post.default()
          postdata = {
            page: compile(post.page),
            type: 'jsmd',
            meta: {
              date: post.date,
              description: post.description
            }
          }
        }).catch(async () => {
          await import(`${folder}.svelte`)
            .then(async post => {
              postdata = {
                meta: {
                  date: post.date,
                  description: post.description
                },
                page: post.default,
                type: 'svelte'
              }
            }).catch(err => {
              postdata = {
                notFound: true
              }
            })
        })
    })
  return postdata
}