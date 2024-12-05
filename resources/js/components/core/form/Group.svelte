<script>
	/**
	 * @typedef {Object} props
	 * @property {string} [name]
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {props} */
	let { name = '', class: className = '', style: styles = '', children } = $props()

	import { getContext } from 'svelte'
	const { group } = getContext('form')

	let visible = $derived($group === name)
</script>

{#if visible}
	<div class="app-group {className}" style={styles}>
		{@render children?.()}
	</div>
{/if}
