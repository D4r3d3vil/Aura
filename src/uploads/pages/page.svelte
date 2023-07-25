<script context="module">
import {compile} from '../../markdown'
export const meta = {description:'In this we test svelte pages', date:'January 1 2000', tags:['svelte', 'test']}
let post = '## test for svelte pages <br> <p>dynamic markdown can also be used inside the svelte code</p><br>If you dont like svelte you can just write regular html inside'
</script>
{@html compile(post)}
{#each ['item 1', 'item 2', 'item 3', 'item 4'] as test}
<p>{test}</p>
{/each}