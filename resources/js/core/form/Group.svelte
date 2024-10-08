<script>
  import { getContext } from 'svelte'
  const { group } = getContext('form')

  let name = ''
  export { name as name }

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }

  $: visible = $group === name
</script>

{#if visible}
  <div class='app-group {className}' style={styles}>
    <slot></slot>
  </div>
{/if}
