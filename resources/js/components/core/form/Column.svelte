<script>
	/**
	 * @typedef {Object} props
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {props} */
	let { class: className = '', style: styles = '', children } = $props()
</script>

<div class="app-column flex flex-col {className}" style={styles}>
	{@render children?.()}
</div>
