<script>
	/**
	 * @typedef {Object} props
	 * @property {any} data - array/store
	 * @property {any} item - component
	 * @property {boolean} [hasLastItem]
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {string} [itemClass]
	 * @property {string} [itemStyle]
	 */

	/** @type {props} */
	let {
		data,
		item: Item,
		hasLastItem = false,
		class: className = '',
		style: styles = '',
		itemClass = '',
		itemStyle = ''
	} = $props()

	import { isFunction } from '@/utils/types'
</script>

<div class={className} style={styles}>
	{#if Array.isArray(data)}
		{#each data as itemData}
			<Item data={itemData} class={itemClass} style={itemStyle} />
		{/each}
	{:else if isFunction(data.subscribe)}
		{#each $data as itemData}
			<Item data={itemData} class={itemClass} style={itemStyle} />
		{/each}
	{/if}
	{#if hasLastItem}
		<Item data={null} is_last={true} class={itemClass} style={itemStyle} />
	{/if}
</div>
