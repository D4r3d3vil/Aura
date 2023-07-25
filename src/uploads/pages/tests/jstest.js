let views = 0;
export const meta = {date:'whatev', description:'js test', tags:['js', 'test']}
export default function jstest(){
    views++
    let name = 'World'
    let page = `## test for js pages\n#### Hello ${name}<br>views: ${views}`
    return page
}