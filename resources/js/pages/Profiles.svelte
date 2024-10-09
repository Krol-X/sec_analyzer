<script>
  import { onMount } from 'svelte'
  import AuthLayout from '@/layouts/Auth.svelte'
  import List from '@/core/List.svelte'
  import ProfileItem from '@/components/ProfileItem.svelte'
  import { state } from '@/state'

  let is_loading = false

  async function loadData() {
    is_loading = true
    await state.profiles.loadItems()
    is_loading = false
  }

  onMount(loadData)

  function onClick(e, data, is_new) {
    state.dialog.openProfile(data, is_new)
  }
</script>

<AuthLayout title='Профили' noprofiles=true>
  <button class='border border-black p-1 bg-gray-200 mb-2 rounded'
    on:click={loadData}
  >
    Обновить
  </button>
  {#if is_loading}
    Загрузка...
  {:else}
    <List data={state.profiles} item={ProfileItem}
      hasLastItem=true class='flex flex-col gap-2'
      {onClick}
    />
  {/if}
</AuthLayout>
