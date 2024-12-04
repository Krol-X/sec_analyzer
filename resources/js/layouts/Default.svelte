<script>
	const { children, state } = $props();

  state.brokers.update()
</script>

Layout


<p>
  {JSON.stringify(state.brokers.list)}
</p>

<hr>

{@render children?.()}

<style>
  hr {
    border: thin solid black;
  }
</style>