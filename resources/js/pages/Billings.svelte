<script>
  import AuthLayout from '@/layouts/Auth.svelte'
  import List from '@/core/List.svelte'
  import BillingItem from '@/components/BillingItem.svelte'

  let data = [
    {name: 'Основной счёт', value: '10.2K $', sec_count: '20 вложений'},
    {name: 'Второй счёт', value: '0 $'},
    {name: 'Тестовый счёт', value: '1454 $', sec_count: '5 вложений'},
    {name: 'Тестовый счёт 2', value: '1M $', sec_count: '1 вложение'},
  ]
</script>

<AuthLayout>
  <List {data} item={BillingItem} hasLastItem=true class='flex flex-wrap gap-8 justify-between' />
</AuthLayout>
