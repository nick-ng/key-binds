<script lang="ts">
	interface Props {
		keyName: string;
	}

	import { keybindsStore } from '$lib/stores/keybind-store';
	import { editingKey } from '$lib/stores/controls-store';

	let { keyName }: Props = $props();

	let currentKeybinds = $state($keybindsStore[keyName] || []);
</script>

<form
	class="w-96"
	onsubmit={(formEvent) => {
		formEvent.preventDefault();
		$keybindsStore[keyName] = currentKeybinds
			.filter(({ game, action }) => game || action)
			.sort((a, b) => a.game.localeCompare(b.game));
		$editingKey = '';
	}}
>
	<div
		class={`${currentKeybinds.length > 0 ? 'mb-2' : ''} flex flex-row justify-between px-2`}
	>
		<button
			class="inline-block border p-2"
			type="button"
			onclick={() => {
				currentKeybinds = currentKeybinds.concat([{ game: '', action: '' }]);
			}}>Add</button
		><button class="inline-block border p-2">Save</button>
	</div>
	{#each currentKeybinds as keybind}
		<div class="flex flex-row">
			<input
				class="border px-1"
				bind:value={keybind.game}
				placeholder="Category/Game"
			/>
			<input
				class="border px-1"
				bind:value={keybind.action}
				placeholder="Action"
			/>
		</div>
	{/each}
</form>
