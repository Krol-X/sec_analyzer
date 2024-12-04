<script>
	import { getContext } from 'svelte';
	const { group } = getContext('form');

	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { name = '', class: className = '', style: styles = '', children } = $props();

	let visible = $derived($group === name);
</script>

{#if visible}
	<div class="app-group {className}" style={styles}>
		{@render children?.()}
	</div>
{/if}
