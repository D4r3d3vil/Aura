<script>
    export let pubDate, author;
    import { SideTOC, CodeBlocks, LoadPlugins } from '../utils/plugins'
</script>
<div class="container">
<div class="content" on:load={LoadPlugins([SideTOC, CodeBlocks])}>
    <div style="display: flex; justify-content: space-between;">
        {#if author}<p style="display: inline;">{author}</p>{/if}
        {#if pubDate}<p style="display: inline;">{pubDate.split('T')[0]}</p>{/if}
    </div>
    
    <slot></slot>
</div>
<script>
</script>
<style>
    * {
        scroll-behavior: smooth;
    }
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .toc {
            display: none;
        }
    }
    a{
        text-decoration: none;
        color: #0578EA;
    }
</style>
</div>