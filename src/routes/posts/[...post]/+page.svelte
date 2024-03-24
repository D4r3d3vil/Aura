<script>
  import NotFoundPage from '../../../components/404.svelte'
  export let data;

  $: component = data.component || null;
</script>
{#if data.notFound}
<NotFoundPage />
{:else}
<svelte:component this={component} />
{/if}