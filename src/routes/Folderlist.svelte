<script>
  // Import the Item component
  import Folder from "./Folder.svelte";
  import {selectedTagsStore} from '../stores'
  // A prop that receives an array of items
  export let data = [];
  export let tags = [];
  let selectedTags = [];

  selectedTagsStore.subscribe(val => {
    selectedTags = val
  })
</script>
{#each tags as tag}
{#if !selectedTags.includes(tag)}
<button on:click={()=>{selectedTags = [...selectedTags, tag];selectedTagsStore.set(selectedTags)}}>#{tag}</button>
{:else}
<button on:click={()=>{selectedTags.splice(selectedTags.indexOf(tag), 1);selectedTagsStore.set(selectedTags)}} class="selected">#{tag}</button>
{/if}
{/each}
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