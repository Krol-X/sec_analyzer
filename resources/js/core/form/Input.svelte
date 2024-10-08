<script>
  import { getContext, onMount } from 'svelte'
  const { data } = getContext('form')

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
  export let controlClass = ''
  export let controlStyle = ''

  export let name = ''
  export let type = 'text'
  export let value = ''
  onMount(() => updateValue(value))

  function updateValue(value) {
    data.update(current => ({ ...current, [name]: value }))
  }

  function typeAction(node) {
    node.type = type
  }
</script>

<div class={className} style={styles}>
  <slot></slot>
  <input use:typeAction bind:value={$data[name]} on:input={(e) => updateValue(e.target.value)} {name}
         class="app-input px-1 py-0 {controlClass}" style={controlStyle} />
  <slot name='after'></slot>
</div>
