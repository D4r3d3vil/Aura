<script>
    export let data;
    let component;
    if (data.type=='svelte') {
        import(`./${data.page}.svelte`).then(module => {
            component = module.default
        })
    }
</script>

{#if data.notFound}
    <p>Not found.</p>
{:else}
    {#if data.type.includes("md")}
        {@html data.page}
    {:else}
    {#if component}
        <svelte:component this={component} />
    {:else}
    <p>Loading...</p>
    {/if}
    {/if}
    <p>Upload date: {data.meta.date}</p>
{/if}