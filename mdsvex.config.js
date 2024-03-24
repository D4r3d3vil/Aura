import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import toc from 'rehype-toc';
export default {
    extensions: [".md", ".svx"],
    smartypants: { dashes: 'oldschool' },
    rehypePlugins: [ rehypeSlug, [
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		], toc],
    layout: {
      IT: 'src/layouts/IT_blog.svelte',
      fallback: 'src/layouts/fallback.svelte'
    }
};