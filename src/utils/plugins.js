export function SideTOC(){
    let TOC = document.querySelector(".toc");
    if(!TOC) throw new TypeError("Page does not contain a TOC (table of contents).");
    let container = document.querySelector(".container");
    let style = document.createElement('style')
    style.innerHTML = '.container {display: flex;flex: 1;width: 100%;margin: auto;background-color: #fff;box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);border-radius: 10px;overflow-y: hidden;}.content, .toc {overflow-y: scroll;}.toc {border: 1px solid #ddd;border-radius: 5px;width: 200px;overflow-x: hidden;padding: 20px;}.toc a, pre {border-radius: 5px;}.toc-level-1 {margin-bottom: 10px;}.toc ol {list-style-type: none;padding: 0;margin: 0;}.toc li {list-style-type: inherit;margin: 4px 0 0 0;padding: 0;}.toc a {text-decoration: none;color: #4285f4;display: block;transition: color 0.3s;}.toc a:hover {color: #0d47a1;background-color: #e0e0e0;}.content {flex: 1;box-sizing: border-box;}'
    TOC.innerHTML = TOC.innerHTML
        .replaceAll("<ol", "<ul")
        .replaceAll("</ol>", "</ul>")
    //Moving table of contents to container div to display on the side
    TOC.parentNode.removeChild(TOC);
    document.body.appendChild(style)
    container.insertBefore(TOC, container.firstChild);
}

export function CodeBlocks(){
    let style = document.createElement('style')
    style.innerHTML = 'pre {background-color: #1e1e1e;color: #f8f8f2;padding: 20px;overflow-x: auto;}pre code {font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;}.token.cdata, .token.comment, .token.doctype, .token.prolog {color: #6a9955;}.token.punctuation {color: #f8f8f2;}.token.constant, .token.deleted, .token.property, .token.symbol, .token.tag {color: #36acaa;}.token.boolean, .token.number {color: #ff79c6;}.token.attr-name, .token.builtin, .token.char, .token.inserted, .token.selector, .token.string {color: #f1fa8c;}.language-css .token.string, .style .token.string, .token.entity, .token.operator, .token.url, .token.variable {color: #bd93f9;}.token.atrule, .token.attr-value, .token.keyword {color: #f55;}.token.class-name, .token.function {color: #50fa7b;}.token.important, .token.regex, .token.variable {color: #ffb86c;}.token.bold, .token.important {font-weight: 700;}.token.italic {font-style: italic;}.token.entity {cursor: help;}'
    document.body.appendChild(style)
}

export function NoTOC(){
    let TOC = document.querySelector(".toc");
    TOC.parentNode.removeChild(TOC)
}

export function LoadPlugins(extensions){
    extensions.forEach(extension => {
        extension()
    });
}