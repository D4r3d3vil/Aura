<script>
  import Folderlist from "./Folderlist.svelte";
  import paths from "../uploads/paths.json";
  import {selectedTagsStore} from '../interstitial/stores'
  export let item = {};
  function getIcon(type) {
    if (type === "file") {
      return "📄";
    } else if (type === "folder") {
      return "📁";
    } else {
      return "❓";
    }
  }
  let selectedTags = []
  let inTag = false;
  let noContent = item.contents.length > 0;
  let itemName = item.name.substring(0, item.name.lastIndexOf("."));
  let itemPath = item.path
    .replace("./src/uploads/pages", "")
    .substring(
      0,
      item.path.replace("./src/uploads/pages", "").lastIndexOf(".")
    );
  if (paths[itemName] && paths[itemName] == itemPath) {
    itemPath = "/posts/" + itemName;
  } else {
    itemPath = "/posts" + itemPath;
  }
  selectedTagsStore.subscribe(async val=>{
    selectedTags = val;
    if(item.type == 'file'){
    if(!item.tags) return inTag = false
    inTag = item.tags.filter(v=>selectedTags.includes(v)).length > 0
    }else{
    async function checkFolder(folder){
      if(folder.contents.length > 0){
        folder.contents.forEach(async element => {
          if(element.type=='folder'&&!inTag){
            await checkFolder(element)
          }else{
            let tagChecker = element.tags.filter(v=>selectedTags.includes(v)).length > 0
            if(tagChecker) return inTag = true
          }
        });      
      }
    }
    await checkFolder(item)
    }
  })
</script>

<div class="content">
  <ul>
    {#if selectedTags.length < 1 || inTag}
    {#if item.type === "folder"}
      <li
        class={item.type}
        on:click={() => {
          item.showContents = !item.showContents;
        }}
      >
        {getIcon(item.type)}
        <a
          class={noContent ? "" : "noDecor"}
          href={noContent
            ? `/collection${item.path.replace("./src/uploads/pages", "")}`
            : ""}>{item.name}</a
        >
        <p class="open">
          {noContent ? (item.showContents ? "▼" : "▶") : " (empty)"}
        </p>
      </li>
      {#if item.showContents}
        <Folderlist data={item.contents} />
      {/if}
    {:else}
      <li class={item.type} on:click={() => (window.location.href = itemPath)}>
        {getIcon(item.type)}
        {itemName}
      </li>
      {/if}
    {/if}
  </ul>
</div>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0.5rem;
    padding: 0.5rem;
    border: 1px solid gray;
    cursor: pointer;
  }
  .folder {
    background-color: lightblue;
  }
  a{
    text-decoration: none;

  }
  .file {
    background-color: lightgreen;
  }
  .hidden {
    display: none;
  }
  .content {
    border-left: 1px solid black;
  }
  .noDecor {
    color: black;
  }
  .open {
    float: right;
    margin: 2px;
  }
</style>
