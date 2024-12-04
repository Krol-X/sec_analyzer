<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { class: className = '', style: styles = '', children } = $props();
</script>

<div class="app-row flex flex-row {className}" style={styles}>
	{@render children?.()}
</div>
