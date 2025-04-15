import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { KEYBINDS_STORE_KEY } from '$lib/constants';

interface Keybinds {
	[keyName: string]: { game: string; action: string }[];
}

export const keybindsStore = writable<Keybinds>({});
if (browser) {
	try {
		const storedKeybinds = localStorage.getItem(KEYBINDS_STORE_KEY) || '';

		if (storedKeybinds) {
			const tempKeybinds = JSON.parse(storedKeybinds);
			keybindsStore.set(tempKeybinds);
		}
	} catch (err) {
		console.error('error while retrieving keybinds', err);
	}

	keybindsStore.subscribe((newKeybinds) => {
		const newKeybindsJSONString = JSON.stringify(newKeybinds);
		localStorage.setItem(KEYBINDS_STORE_KEY, newKeybindsJSONString);
	});
}
