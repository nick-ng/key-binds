import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { FILTER_STORE_KEY } from '$lib/constants';

export const editingKey = writable('');

export const keybindFiltersStore = writable({
	simple: '',
	include: '',
	exclude: '',
	useAdvanced: false
});
if (browser) {
	try {
		const storedKeybindFilters = localStorage.getItem(FILTER_STORE_KEY) || '';

		if (storedKeybindFilters) {
			const tempKeybindFilters = JSON.parse(storedKeybindFilters);
			keybindFiltersStore.set(tempKeybindFilters);
		}
	} catch (err) {
		console.error('error while retrieving filter settings', err);
	}

	keybindFiltersStore.subscribe((newKeybindFilters) => {
		const newKeybindFiltersJSONString = JSON.stringify(newKeybindFilters);
		localStorage.setItem(FILTER_STORE_KEY, newKeybindFiltersJSONString);
	});
}
