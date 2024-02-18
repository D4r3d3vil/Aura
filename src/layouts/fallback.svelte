<script>
    export let pubDate, author;
    import { SideTOC, CodeBlocks, LoadPlugins } from '../utils/plugins'
</script>
<div class="container">
<div class="content" on:load={LoadPlugins([SideTOC, CodeBlocks])}>
    <div style="display: flex; justify-content: space-between;">
        <p style="display: inline;">{author}</p>
        <p style="display: inline;">{pubDate.split('T')[0]}</p>
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
</style>
</div>