<script>
  import { Form, Group, Column, Row, Text, Input, Select, Button } from '@/core/form'

  export let onSave = (formState) => {}
  export let onClose = (formState) => {}
</script>

<Form>
  <Group>
    <Text>Профиль</Text>
    <Column>
      <Input name='name'>Наименование</Input>
      <Select data={['Tinkoff', 'Sberbank']}>Броекер</Select>
      <Input name='token'>Токен</Input>
    </Column>
    <Row class='mt-4 gap-4'>
      <Button action={onSave} class='bg-black text-white'>Сохранить</Button>
      <Button action={onClose}>Закрыть</Button>
    </Row>
  </Group>
</Form>
