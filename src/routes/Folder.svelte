<script>
  // A prop that receives an item object
  import Folderlist from "./Folderlist.svelte";
  import paths from "../uploads/paths.json";
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
  let noContent = item.contents.length > 0;
  let itemName = item.name.substring(0, item.name.lastIndexOf("."));
  let itemPath = item.path
    .replace("./src/uploads/pages", "")
    .substring(
      0,
      item.path.replace("./src/uploads/pages", "").lastIndexOf(".")
    );
  console.log(paths);
  if (paths[itemName] && paths[itemName] == itemPath) {
    itemPath = "/posts/" + itemName;
  } else {
    itemPath = "/posts" + itemPath;
  }
</script>

<div class="content">
  <ul>
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
  .file {
    background-color: lightblue;
  }
  .folder {
    background-color: lightgreen;
  }
  .hidden {
    display: none;
  }
  .content {
    border-left: 1px solid black;
  }
  .noDecor {
    text-decoration: none;
    color: black;
  }
  .open {
    float: right;
    margin: 2px;
  }
</style>
