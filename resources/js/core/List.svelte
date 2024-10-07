<script>
  export let data // Array
  export let item // Component
  export let hasLastItem = false

  let className = undefined
  let styles = undefined
  export { className as class }
  export { styles as style }

  export let itemClass = undefined
  export let itemStyle = undefined

  import { isFunction } from '@/utils/types'
</script>

<div class={className} style={styles}>
  {#if Array.isArray(data)}
    {#each data as itemData}
      <svelte:component
        this={item} data={itemData}
        class={itemClass} style={itemStyle}
      />
    {/each}
  {:else if isFunction(data.subscribe)}
    {#each $data as itemData}
      <svelte:component
        this={item} data={itemData}
        class={itemClass} style={itemStyle}
      />
    {/each}
  {/if}
  {#if hasLastItem}
    <svelte:component
      this={item} data=null last=true
      class={itemClass} style={itemStyle}
    />
  {/if}
</div>
