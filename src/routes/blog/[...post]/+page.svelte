<script>
  export let data;

  $: component = data.component || null;
</script>
<svelte:component this={component} />
