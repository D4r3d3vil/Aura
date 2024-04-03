export const prerender = true
export async function load({ params }) {
  let posts = await import.meta.glob('../uploads/pages/**');
  let metadata = await Promise.all(Object.entries(posts).map(async (post) => {
      let meta = (await post[1]()).metadata;
      meta['path'] = post[0];
      return meta;
  }));
  metadata = metadata.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
  });
  return {
      metadata
  };
}
