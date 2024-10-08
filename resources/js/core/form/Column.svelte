<script>
  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
</script>

<div class='app-column flex flex-col {className}' style={styles}>
  <slot></slot>
</div>
