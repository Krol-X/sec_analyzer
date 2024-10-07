<script>
  import AuthLayout from '@/layouts/Auth.svelte'
  import List from '@/core/List.svelte'
  import ProfileItem from '@/components/ProfileItem.svelte'

  let data = [
    {name: 'Профиль 1', broker_name: 'Tinkoff'},
    {name: 'Профиль 2', broker_name: 'Tinkoff'},
    {name: 'Профиль 3', broker_name: 'Sberbank'},
  ]
</script>

<AuthLayout>
  <List {data} item={ProfileItem} hasLastItem=true class='flex flex-col gap-2' />
</AuthLayout>
