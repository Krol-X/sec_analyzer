<script>
  import {isFunction} from '@/utils/types'

  export let schema // yup.InferType
  export let data // input data
  export let error = null // function/store/component

  let validated = null
  let validationError = null
  let errorAsComponent = false

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

  $: validateData().then(result => validated = result)
</script>

{#if validated}
  <slot />
  <slot name='success' />
{:else if validationError}
  <slot name='error' />
  {#if error && errorAsComponent}
    <svelte:component this={error} errors={validationError} />
  {/if}
{/if}
