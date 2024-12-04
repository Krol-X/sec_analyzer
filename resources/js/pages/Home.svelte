<script>
	const { state } = $props();

  state.profiles.update()
</script>

Home

<p>
  {JSON.stringify(state.profiles.list)}
</p>
