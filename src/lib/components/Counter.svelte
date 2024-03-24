<script lang="ts">
	$: count = 0;
</script>

<div class="counter">
	<p class="count">{count}</p>
	<button on:click={() => (count++)}>Increment</button>
	<button on:click={() => (count>0?count--:'')}>Decrement</button>
    <button on:click={() => (count = 0)}>Reset</button>
</div>

<style>
  .counter {
    text-align: center;
  }

  .count {
    font-size: 2rem;
    margin-bottom: calc(var(--spacing-unit) * 2);
  }

  .counter {
    margin-top: calc(var(--spacing-unit) * 4);
    margin-bottom: calc(var(--spacing-unit) * 4);
  }
</style>