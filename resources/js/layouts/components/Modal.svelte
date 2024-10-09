<script>
  export let state = null

  const dialog = state.dialog
</script>

{#if $dialog}
  <div
    class="absolute w-screen h-screen bg-black bg-opacity-35
           flex justify-center items-center p-4 z-10"
  >
    <svelte:component this={$dialog.form} {state} />
  </div>
{/if}
