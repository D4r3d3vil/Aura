const syntax = [
  { regex: /^# (.*$)/gim, tag: "<h1>$1</h1>" }, // Heading 1
  { regex: /^## (.*$)/gim, tag: "<h2>$1</h2>" }, // Heading 2
  { regex: /^### (.*$)/gim, tag: "<h3>$1</h3>" }, // Heading 3
  { regex: /^#### (.*$)/gim, tag: "<h4>$1</h4>" }, // Heading 4
  { regex: /^##### (.*$)/gim, tag: "<h5>$1</h5>" }, // Heading 5
  { regex: /^###### (.*$)/gim, tag: "<h6>$1</h6>" }, // Heading 6
  { regex: /\*\*(.*)\*\*/gim, tag: "<strong>$1</strong>" }, // Bold
  { regex: /\*(.*)\*/gim, tag: "<em>$1</em>" }, // Italic
  { regex: /^\* (.*)/gim, tag: "<li>$1</li>" }, // List item
  { regex: /`(.*)`/gim, tag: "<code>$1</code>" }, // Code
  { regex: /```(.*)```/gims, tag: "<pre><code>$1</code></pre>" }, // Code block
  { regex: /\[(.*?)\]\((.*?)\)/gim, tag: '<a href="$2">$1</a>' } // Link
];
export function compile(markdown) {
  let html = markdown;
  const placeholder = "empty";
  let htmlTags = [];
  html = html.replace(/<[^>]+>/gim, function (match) {
    htmlTags.push(match);
    return placeholder;
  });
  for (let i = 0; i < syntax.length; i++) {
    html = html.replace(syntax[i].regex, syntax[i].tag);
  }
  html = html.replace(/(<li>.*<\/li>)/gim, "<ul>$1</ul>");
  html = html.replace(/\{\{(.*?)\}\}/gim, function (match, code) {
    try {
      return eval(code);
    } catch (error) {
      return error.message;
    }
  });
  html = html.replace(new RegExp(placeholder, "g"), function () {
    return htmlTags.shift();
  });
  return html;
}
export function formatPage(mdFile) {
  const split = mdFile.split('---');
  if (split[0] === '') {
    split.shift();
  }
  const attributesStr = split[0];
  const attributesLines = attributesStr.split('\n');
  const attributes = {};
  for (let line of attributesLines) {
    const pair = line.split(':');
    if (pair.length === 2) {
      const key = pair[0].trim();
      const value = pair[1].trim();
      attributes[key] = value;
    }
  }
  return { attributes: attributes, page: split.pop() }
}