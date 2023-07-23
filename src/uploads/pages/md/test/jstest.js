let views = 0;
export default function jstest(){
    views++
    let name = 'World'
    let page = `## test for js pages\n#### Hello ${name}<br>views: ${views}`
    return {page: page, description:'In this we test js pages', date: "29 May 2000"}
}