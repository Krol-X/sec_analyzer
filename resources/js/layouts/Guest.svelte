<script>
	import BreezeApplicationLogo from '@/components/ApplicationLogo.svelte';
	import { Link } from '@inertiajs/svelte';
</script>

<!-- sm:justify-center sm:pt-0 -->
<div class="flex min-h-screen flex-col items-center bg-gray-100 pt-6">
	<div>
		<Link href="/">
			<BreezeApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
		</Link>
	</div>

	<!-- sm:max-w-md sm:rounded-lg -->
	<div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md">
		<slot />
	</div>
</div>
