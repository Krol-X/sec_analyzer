<script>
  import { Form, Group, Column, Row, Text, Input, Select, Button } from '@/core/form'

  let dialogState
  export {dialogState as state}

  export let onSave = (formState) => {
    dialogState.close()
  }
  export let onClose = (formState) => {
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
  </Group>
</Form>
