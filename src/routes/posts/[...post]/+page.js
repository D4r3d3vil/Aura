export const load = async ({ params }) => {
  try{
	const {default: Post} = await import(`/src/uploads/pages/${params.post}.md`)
	return {
		component: Post
	}
}catch{
  return {
    notFound: true
  }
}
};