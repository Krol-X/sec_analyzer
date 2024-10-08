<script>
  import AuthForm from '@/components/forms/AuthForm.svelte'
  import ProfileForm from '@/components/forms/ProfileForm.svelte'
  import BillingForm from '@/components/forms/BillingForm.svelte'
  import SecurityForm from '@/components/forms/SecurityForm.svelte'

  const forms = {
    'Auth': AuthForm,
    'Profile': ProfileForm,
    'Billing': BillingForm,
    'Security': SecurityForm
  }

  let current = AuthForm
</script>

<div class='form-picker'>
  {#each Object.keys(forms) as name}
    <button on:click={() => current = forms[name]}>{name}</button>
  {/each}
</div>

<div class='test-layout'>
  <svelte:component this={current} />
</div>

<style lang='scss'>
  .form-picker {
    @apply flex z-10;

    button {
      @apply px-2 py-1 bg-slate-200 border-r border-b border-slate-500;
    }
  }
  .test-layout {
    @apply absolute w-full h-screen flex justify-center items-center p-4;
  }
</style>
