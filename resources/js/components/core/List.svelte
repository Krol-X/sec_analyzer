<script>
	import { isFunction } from '@/utils/types';
	/**
	 * @typedef {Object} Props
	 * @property {any} data - Array/Store
	 * @property {any} item - Component
	 * @property {boolean} [hasLastItem]
	 * @property {string} [class]
	 * @property {string} [style]
	 * @property {string} [itemClass]
	 * @property {string} [itemStyle]
	 * @property {any} [onClick]
	 */

	/** @type {Props} */
	let {
		data,
		item: Item,
		hasLastItem = false,
		class: className = '',
		style: styles = '',
		itemClass = '',
		itemStyle = '',
		onClick = (e, data, is_new) => {}
	} = $props();
</script>

<div class={className} style={styles}>
	{#if Array.isArray(data)}
		{#each data as itemData}
			<Item data={itemData} {onClick} class={itemClass} style={itemStyle} />
		{/each}
	{:else if isFunction(data.subscribe)}
		{#each $data as itemData}
			<Item data={itemData} {onClick} class={itemClass} style={itemStyle} />
		{/each}
	{/if}
	{#if hasLastItem}
		<Item data={null} {onClick} last="true" class={itemClass} style={itemStyle} />
	{/if}
</div>
