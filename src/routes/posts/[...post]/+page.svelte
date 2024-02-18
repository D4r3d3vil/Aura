<script>
  import { onMount } from "svelte";
  import NotFoundPage from '../../../components/404.svelte'
  export let data;
  let Component,
    notFound = false,
    metadata;

  onMount(async () => {
    try {
      const C = await import(
        /* @vite-ignore */ `/src/uploads/pages/${data.path}.md`
      );
      metadata = C.metadata;
      Component = C.default;
    } catch (error) {
      notFound = true;
      console.log(error)
    }
  });
</script>

{#if notFound}
<NotFoundPage></NotFoundPage>
{:else if Component}
      <Component />
{:else}
  <p>Loading...</p>
{/if}