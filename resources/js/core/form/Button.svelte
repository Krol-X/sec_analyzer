<script>
  import { getContext } from 'svelte'
  const form = getContext('form')

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
  export let action = () => {}
</script>

<button on:click={() => action(form)} class='app-button border border-black {className}' style={styles}>
  <slot></slot>
</button>
