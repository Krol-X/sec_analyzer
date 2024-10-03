<script context="module">
	import { writable } from 'svelte/store';

	export const layout = writable('');
	export const title = writable('');
</script>

<script>
	// import DefaultLayout from '@/layouts/Default.svelte'
	import GuestLayout from '@/layouts/Guest.svelte';

	const layouts = {};

	$: layout_component = layouts[$layout] ?? GuestLayout;
</script>

<svelte:component this={layout_component} title={$title}>
	<slot />
</svelte:component>
