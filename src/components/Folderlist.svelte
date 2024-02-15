<script>
  // Import the Item component
  import Folder from "./Folder.svelte";
  // A prop that receives an array of items
  export let data = [];
</script>
<!-- A component that renders a list of items -->
<ul>
  {#if data.length < 1}
    <p>No data.</p>
  {/if}
  {#each data as item}
    <Folder {item} />
  {/each}
</ul>
<style>
  button{
    background-color: transparent;
    margin: 20px;
  }
  button.selected{
    background-color: blue;
  }
</style>