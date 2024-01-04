import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';
import toc from '@jsdevtools/rehype-toc';
export default {
    extensions: [".md", ".svx"],
    smartypants: {},
    remarkPlugins: [
        remarkToc,
        remarkSlug
      ], 
      rehypePlugins: [toc],
};