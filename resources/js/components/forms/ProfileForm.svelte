<script>
  import { get } from 'svelte/store'
  import { Form, Group, Column, Row, Text, Input, Select, Button } from '@/core/form'

  export let state
  const dialogState = state.dialog

  const onSave = (formState) => {
    state.profiles.updateItem(get(formState.data))
    dialogState.close()
  }
  const onClose = (formState) => {
    dialogState.close()
  }
  const onDelete = (formState) => {
    state.profiles.deleteItem(get(formState.data).id)
    dialogState.close()
  }
</script>

<Form inital={$dialogState.data}>
  <Group>
    <Text>Профиль</Text>
    <Column>
      <Input name='name'>Наименование</Input>
      <Select data={['Tinkoff', 'Sberbank']}>Брокер</Select>
      <Input name='token'>Токен</Input>
    </Column>
    <Row class='mt-4 gap-4'>
      <Button action={onSave} class='bg-black text-white'>Сохранить</Button>
      <Button action={onClose}>Закрыть</Button>
    </Row>
    {#if !$dialogState?.is_new}
      <Button action={onDelete} class='mt-2 bg-red-800 text-white'>Удалить</Button>
    {/if}
  </Group>
</Form>
