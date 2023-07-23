<script>
    export let data;
</script>

{#if data.notFound}
    <p>Not found.</p>
{:else}
    {#if data.type.includes("md")}
        {@html data.page}
    {:else}
        <svelte:component this={data.page} />
    {/if}
    <p>Upload date: {data.meta.date}</p>
{/if}
