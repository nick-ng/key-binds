import { writable } from 'svelte/store';
import { browser } from '$app/environment';

import { KEYBINDS_STORE_KEY } from '$lib/constants';

let keybinds: { [keyName: string]: { game: string; action: string }[] } = {};
if (browser) {
	try {
		const storedKeyBinds = localStorage.getItem(KEYBINDS_STORE_KEY) || '';

		if (storedKeyBinds) {
			keybinds = JSON.parse(storedKeyBinds);
		}
	} catch (err) {
		console.error('error while retrieving keybinds', err);
	}
}

export const keybindsStore = writable(keybinds);

if (browser) {
	keybindsStore.subscribe((newKeybinds) => {
		const newKeybindsJSONString = JSON.stringify(newKeybinds);
		localStorage.setItem(KEYBINDS_STORE_KEY, newKeybindsJSONString);
	});
}
