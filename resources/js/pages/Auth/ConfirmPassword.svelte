<script>
	import BreezeButton from '@/components_old/Button.svelte';
	import BreezeGuestLayout from '@/Layouts/Guest.svelte';
	import BreezeInput from '@/components_old/Input.svelte';
	import BreezeLabel from '@/components_old/Label.svelte';
	import BreezeValidationErrors from '@/components_old/ValidationErrors.svelte';
	import { useForm } from '@inertiajs/svelte';
	const form = useForm({
		password: ''
	});
	const submit = () => {
		$form.post(window.route('password.confirm'), {
			onFinish: () => $form.reset()
		});
	};
</script>

<svelte:head>
	<title>Confirm Password</title>
</svelte:head>

<BreezeGuestLayout>
	<div class="mb-4 text-sm text-gray-600">
		This is a secure area of the application. Please confirm your password before continuing.
	</div>

	<BreezeValidationErrors class="mb-4" />

	<form on:submit|preventDefault={submit}>
		<div>
			<BreezeLabel for="password" value="Password" />
			<BreezeInput
				id="password"
				type="password"
				class="mt-1 block w-full"
				value={form.password}
				required
				autocomplete="current-password"
				autofocus
				on:input={(evt) => ($form.password = evt.detail)}
			/>
		</div>

		<div class="flex justify-end mt-4">
			<BreezeButton class="ml-4" xclass:opacity-25={form.processing} disabled={form.processing}>
				Confirm
			</BreezeButton>
		</div>
	</form>
</BreezeGuestLayout>
