<script>
  import Folderlist from "../Folderlist.svelte";

  // Import the array from a JSON file
  export let data;
  let collections = data.uploads;
  // A function that returns an icon based on the type of the item

  // A function that toggles the visibility of the contents of a folder
</script>

<!-- A component that renders a list of items -->
<Folderlist data={collections} />

<style>
  /* Some basic styling */
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
</style>
