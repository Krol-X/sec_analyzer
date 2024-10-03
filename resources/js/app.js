import '~/css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/svelte';

import Layout from './core/Layout.svelte';

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob('./pages/**/*.svelte', { eager: true });
		const page = pages[`./pages/${name}.svelte`];
		return { default: page.default, layout: Layout };
	},
	setup({ el, App, props }) {
		new App({ target: el, props });
	}
});
