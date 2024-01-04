<script>
  import Folderlist from "../../components/Folderlist.svelte";
  export let data;
  let collections = data.uploads;
</script>
<Folderlist data={collections.uploads} tags={collections.tags} />
