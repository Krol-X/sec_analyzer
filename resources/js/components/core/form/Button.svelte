<script>
	/**
	 * @typedef {Object} props
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {function} [action]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {props} */
	let { class: className = '', style: styles = '', action = (form) => {}, children } = $props()

	import { getContext } from 'svelte'
	const form = getContext('form')
</script>

<button
	onclick={() => action(form)}
	class="app-button border border-black {className}"
	style={styles}
>
	{@render children?.()}
</button>
