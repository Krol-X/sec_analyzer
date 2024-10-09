<script>
  import { onMount } from 'svelte'
  import AuthLayout from '@/layouts/Auth.svelte'
  import List from '@/core/List.svelte'
  import ProfileItem from '@/components/ProfileItem.svelte'
  import { state } from '@/state'

  async function loadData() {
    await state.profiles.loadItems()
  }

  onMount(async() => {
    await loadData()
  })

  function onClick(e, data, is_new) {
    state.dialog.openProfile(data, is_new)
  }
</script>

<AuthLayout>
  <List data={state.profiles} item={ProfileItem}
    hasLastItem=true class='flex flex-col gap-2'
    {onClick}
  />
</AuthLayout>
