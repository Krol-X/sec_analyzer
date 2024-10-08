<script>
  import { Form, Group, Column, Row, Text, Input, Button } from '@/core/form'

  export let onSave = (formState) => {}
  export let onClose = (formState) => {}
</script>

<Form>
  <Group>
    <Text>Счёт</Text>
    <Input name='name'>Наименование</Input>
    <Row class='mt-4 gap-4'>
      <Button action={onSave} class='bg-black text-white'>Сохранить</Button>
      <Button action={onClose}>Закрыть</Button>
    </Row>
  </Group>
</Form>
