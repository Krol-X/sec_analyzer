<script>
	import { Form, Group, Column, Row, Text, Input, Button } from '@/components/core/form'

	export let onLogin = (formState) => {}
	export let onRegister = (formState) => {}
</script>

<Form group="login">
	<Group name="login">
		<Text>Войти</Text>
		<Column>
			<Input name="email" type="email">Email</Input>
			<Input name="password" type="password">Пароль</Input>
		</Column>
		<Column class="mt-4">
			<Button action={onLogin} class="bg-black text-white">Войти</Button>
			<Button action={(form) => form.to('register')}>Есть аккаунт?</Button>
		</Column>
	</Group>

	<Group name="register">
		<Text>Зарегистрироваться</Text>
		<Column>
			<Input name="name">Имя</Input>
			<Input name="email" type="email">Email</Input>
			<Input name="password" type="password">Пароль</Input>
		</Column>
		<Column>
			<Button action={onRegister} class="bg-black text-white">Зарегистрироваться</Button>
			<Button action={(form) => form.to('login')}>Есть аккаунт?</Button>
		</Column>
	</Group>
</Form>
