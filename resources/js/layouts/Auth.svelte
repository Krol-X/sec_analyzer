<script>
	import HeaderBar from './components/HeaderBar.svelte'
  import Modal from './components/Modal.svelte'

  import { state } from '@/state'
</script>

<div class="flex min-h-screen flex-col w-screen">
	<HeaderBar {...$$restProps} />
	<div class="w-full pt-4 overflow-hidden bg-gray-10 sm:px-24 px-4 flex-1">
		<slot />
	</div>
</div>

<Modal {state} />
