<script module>
  export { default as Group } from './Group.svelte'
  export { default as Column } from './Column.svelte'
  export { default as Row } from './Row.svelte'
  export { default as Input } from './Input.svelte'
  export { default as Select } from './Row.svelte'
  export { default as Button } from './Button.svelte'
</script>

<script>
  import { setContext, onMount } from 'svelte'

  const { group = '', inital = {}, class: className = '', style: styles = '', children } = $props()

  const form = $state({
    group: group,
    data: inital,
    to: (newGroup) => {
      form.group = newGroup
    }
  })

  setContext('form', form)
</script>

<div class='app-form {className}' style={styles}>
  @render children?.()
</div>
