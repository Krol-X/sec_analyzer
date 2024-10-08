<!-- todo: select bind value -->

<script>
  import { getContext, onMount } from 'svelte'

  export let name = ''
  export let data = []
  let defaultIndex = null
  export { defaultIndex as index }
  export let novalue = null

  const { data: formData } = getContext('form')

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
  export let controlClass = ''
  export let controlStyle = ''

  $: selected = formData[name] || (defaultIndex? data[defaultIndex] : '')
  $: if (defaultIndex && formData[name] === undefined) {
    formData.update(current => ({ ...current, [name]: data[defaultIndex] }))
  }

  function updateSelected(event) {
    formData.update(current => ({ ...current, [name]: event.target.value }))
  }
</script>

<div class={className} style={styles}>
  <slot></slot>
  <select bind:value={selected} on:change={updateSelected}
    class="app-select appearance-none px-1 py-0 h-7 {controlClass}" style={controlStyle}
  >
    {#if novalue}
      <option value="">{novalue}</option>
    {/if}
    {#each data as item}
      <option value={item}>{item}</option>
    {/each}
  </select>
  <slot name='after'></slot>
</div>
