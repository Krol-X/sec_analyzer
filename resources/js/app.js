import '~/css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/svelte';

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob('./pages/**/*.svelte', { eager: true });
		const page = pages[`./pages/${name}.svelte`];
		return { default: page.default };
	},
	setup({ el, App, props }) {
		new App({ target: el, props });
	}
});
