<script>
  import { Form, Group, Column, Row, Text, Input, Button } from '@/components/core/form'

  import state from '@/state'
  const dialogState = state.dialog

  const onSave = (formState) => {
    state.profiles.updateItem(formState.data)
    dialogState.close()
  }
  const onClose = (formState) => {
    dialogState.close()
  }
  const onDelete = (formState) => {
    state.profiles.deleteItem(formState.data.id)
    dialogState.close()
  }
</script>

<Form inital={dialogState.data}>
  <Group>
    <Text>{dialogState?.is_new? 'Новый профиль': `Профиль ${dialogState.data.id}`}</Text>
    <Column>
      <Input name='name'>Наименование</Input>
      <Input name='broker'>Брокер</Input>
      <Input name='token'>Токен</Input>
    </Column>
    <Row class='mt-4 gap-4'>
      <Button action={onSave} class='bg-black text-white'>Сохранить</Button>
      <Button action={onClose}>Закрыть</Button>
    </Row>
    {#if !dialogState?.is_new}
      <Button action={onDelete} class='mt-2 bg-red-800 text-white'>Удалить</Button>
    {/if}
  </Group>
</Form>
