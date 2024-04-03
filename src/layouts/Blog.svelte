<script>
    export let data;
  </script>
    <h1 class="h1">Blog Posts</h1>
  <nav class="category-filters">
    <button class="filter-btn" on:click={()=>window.location.href = '/posts'}>All</button>
    {#each data.categories as category}
    <button class="filter-btn" data-category="{category.name}" on:click={()=>window.location.href = '/category/' + category.path}>{category.name}</button>
    {/each}
  </nav>
  <main class="posts-container">
  {#each data.uploads as post}
  <div class="post" on:click={()=>window.location.href='/blog/'+post.path.replace('.md', '')}>
  {#if post.metadata.image}<img src={post.metadata.image}>{/if}
  <p class="post-content">{post.metadata.title}</p>
  </div>
  {/each}
  </main>
  <link rel="stylesheet" href="/styles/posts.css">