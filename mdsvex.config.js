import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug';
import toc from '@jsdevtools/rehype-toc';
export default {
    extensions: [".md", ".svx"],
    smartypants: {dashes: 'oldschool'},
    remarkPlugins: [
        remarkToc,
        remarkSlug
      ], 
      rehypePlugins: [toc],
    layout: {
      blog: 'src/layouts/fallback.svelte'
    }
};