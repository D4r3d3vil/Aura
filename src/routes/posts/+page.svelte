<script>
  import Folderlist from "../../components/Folderlist.svelte";

  // Import the array from a JSON file
  export let data;
  let collections = data.uploads;
  // A function that returns an icon based on the type of the item

  // A function that toggles the visibility of the contents of a folder
</script>

<!-- A component that renders a list of items -->
<Folderlist data={collections.uploads} tags={collections.tags} />
