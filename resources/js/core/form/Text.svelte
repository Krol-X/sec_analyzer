<script>
  let className = ''
  let styles = ''
  export { className as class }
  export { styles as style }
</script>

<div class='app-text {className}' style={styles}>
  <slot></slot>
</div>
