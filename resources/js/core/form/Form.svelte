<script context="module">
  export { default as Group } from './Group.svelte'
  export { default as Column } from './Column.svelte'
  export { default as Row } from './Row.svelte'
  export { default as Input } from './Input.svelte'
  export { default as Select } from './Row.svelte'
  export { default as Button } from './Button.svelte'
</script>

<script>
  import { setContext, onMount } from 'svelte'
  import { writable } from 'svelte/store'

  export let group = ''
  export let inital = {}

  const form = {
    group: writable(group),
    data: writable(inital),
    to: (newGroup) => {
      console.log(newGroup)
      form.group.set(newGroup)
    }
  }

  setContext('form', form)

  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
</script>

<div class='app-form {className}' style={styles}>
  <slot></slot>
</div>
