<script>
	import HeaderBar from './components/HeaderBar.svelte'
</script>

<div class="flex min-h-screen flex-col w-screen">
	<HeaderBar />
	<div class="w-full pt-4 overflow-hidden bg-gray-10 px-16 flex-1">
		<slot />
	</div>
</div>
