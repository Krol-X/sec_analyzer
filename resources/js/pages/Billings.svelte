<script>
  import { onMount } from 'svelte'
  import AuthLayout from '@/layouts/Auth.svelte'
  import List from '@/core/List.svelte'
  import BillingItem from '@/components/BillingItem.svelte'
  import { state } from '@/state'

  async function loadData() {
    await state.billings.loadItems()
  }

  onMount(async() => {
    await loadData()
  })
</script>

<AuthLayout>
  <List data={state.billings} item={BillingItem} hasLastItem=true class='flex flex-wrap gap-8 justify-between' />
</AuthLayout>
