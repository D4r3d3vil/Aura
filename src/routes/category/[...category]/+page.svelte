<script>
  import Posts from "../../../layouts/Blog.svelte";

  export let data;
</script>
<div>
<Posts posts={data.uploads} categories={data.categories}/>
</div>