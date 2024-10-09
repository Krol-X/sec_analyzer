<script>
  export let state = null
</script>

{#if $state}
  <div
    class="absolute w-screen h-screen bg-black bg-opacity-35
           flex justify-center items-center p-4 z-10"
  >
    <svelte:component this={$state.form} {state} />
  </div>
{/if}
