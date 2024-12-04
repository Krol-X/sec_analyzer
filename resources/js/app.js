import '~/css/app.css'
import './bootstrap'

import { createInertiaApp } from '@inertiajs/svelte'
import { mount } from 'svelte'

import Default from './layouts/Default.svelte'
import state from './state'

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob('./pages/**/*.svelte', { eager: true });
		const page = pages[`./pages/${name}.svelte`];
		return { default: page.default, layout: Default };
	},
	setup({ el, App, props }) {
		props.initialPage.props.state = state
		mount(App, { target: el, props });
	}
});
