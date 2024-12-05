<script>
	/**
	 * @typedef {Object} props
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {string} [controlClass]
	 * @property {string} [controlStyle]
	 * @property {string} [name]
	 * @property {string} [type]
	 * @property {any} [value]
	 * @property {import('svelte').Snippet} [children]
	 * @property {import('svelte').Snippet} [after]
	 */

	/** @type {props} */
	let {
		class: className = '',
		style: styles = '',
		controlClass = '',
		controlStyle = '',
		name = '',
		type = 'text',
		value = null,
		children,
		after
	} = $props()

	import { getContext, onMount } from 'svelte'
	const { data } = getContext('form')

	onMount(() => {
		if (value) {
			data[name] = value
		}
	})

	function typeAction(node) {
		node.type = type
	}
</script>

<div class={className} style={styles}>
	{@render children?.()}
	<input
		use:typeAction
		bind:value={data[name]}
		{name}
		class="app-input px-1 py-0 {controlClass}"
		style={controlStyle}
	/>
	{@render after?.()}
</div>
