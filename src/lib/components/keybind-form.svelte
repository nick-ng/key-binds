<script lang="ts">
	interface Props {
		keyName: string;
		label?: string;
	}

	import { keybindsStore } from '$lib/stores/keybind-store';
	import { editingKey } from '$lib/stores/controls-store';

	let { keyName, label }: Props = $props();
	let keyLabel = typeof label === 'string' ? label : keyName;

	let currentKeybinds = $state(
		$keybindsStore[keyName] || [{ game: '', action: '' }]
	);
</script>

<form
	class="min-w-96"
	onsubmit={(formEvent) => {
		formEvent.preventDefault();
		$keybindsStore[keyName] = currentKeybinds
			.filter(({ game, action }) => game || action)
			.sort((a, b) => a.game.localeCompare(b.game));
		$editingKey = '';
	}}
>
	<h3 class="text-xl capitalize">{keyLabel}</h3>
	<div class={`flex flex-row justify-between px-2`}>
		<button
			class="inline-block border p-2"
			type="button"
			onclick={() => {
				currentKeybinds = currentKeybinds.concat([{ game: '', action: '' }]);
			}}>Add</button
		><button class="inline-block border p-2">Save</button>
	</div>
	{#each currentKeybinds as keybind}
		<div class="mt-1 flex flex-row gap-1">
			<input
				class="border px-1"
				bind:value={keybind.game}
				placeholder="Genre:Game[:Class][:Modifier]"
			/>
			<input
				class="border px-1"
				bind:value={keybind.action}
				placeholder="Action"
			/>
		</div>
	{/each}
</form>
