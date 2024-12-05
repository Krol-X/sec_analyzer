<script>
	/**
	 * @typedef {Object} props
	 * @property {import('svelte').Snippet} [children]
	 * @property {yup.InferType} [schema]
	 * @property {object} [data]
	 * @property {any} error - function/store/component
	 */

	/** @type {props} */
	const { children, schema, data, error } = $props()

	import { isFunction } from '@/utils/types'

	let validated = $state(null)
	let validationError = $state(null)
	let errorAsComponent = $state(false)

	async function validateData() {
		try {
			const result = await schema.validate(data, { abortEarly: false })
			validationError = null
			return result
		} catch (err) {
			validationError = err.errors

			errorAsComponent = false
			if (isFunction(error)) {
				error(validationError)
			} else if (isFunction(error?.set)) {
				error.set(validationError)
			} else {
				errorAsComponent = true
			}

			return null
		}
	}

	$effect(() => {
		validateData().then((result) => (validated = result))
	})
</script>

{#if validated}
	{@render children?.()}
{:else if validationError}
	{#if errorAsComponent}
		{@render error?.(validationError)}
	{/if}
{/if}
