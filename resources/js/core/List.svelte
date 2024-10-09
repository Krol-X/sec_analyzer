<script>
  export let data // Array/Store
  export let item // Component
  export let hasLastItem = false

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }

  export let itemClass = ''
  export let itemStyle = ''

  export let onClick = (e, data, is_new) => {}

  import { isFunction } from '@/utils/types'
</script>

<div class={className} style={styles}>
  {#if Array.isArray(data)}
    {#each data as itemData}
      <svelte:component
        this={item} data={itemData} {onClick}
        class={itemClass} style={itemStyle}
      />
    {/each}
  {:else if isFunction(data.subscribe)}
    {#each $data as itemData}
      <svelte:component
        this={item} data={itemData} {onClick}
        class={itemClass} style={itemStyle}
      />
    {/each}
  {/if}
  {#if hasLastItem}
    <svelte:component
      this={item} data={null} {onClick} last=true
      class={itemClass} style={itemStyle}
    />
  {/if}
</div>
