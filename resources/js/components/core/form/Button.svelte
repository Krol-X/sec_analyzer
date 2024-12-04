<script>
	import { getContext } from 'svelte';
	const form = getContext('form');

	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {any} [action]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { class: className = '', style: styles = '', action = () => {}, children } = $props();
</script>

<button
	onclick={() => action(form)}
	class="app-button border border-black {className}"
	style={styles}
>
	{@render children?.()}
</button>
