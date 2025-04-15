<script lang="ts">
	interface Props {
		keyName: string;
		label?: string;
		width?: number;
		height?: number;
		isSpacing?: boolean;
		keybindFilter: string;
	}

	import { DEFAULT_KEY_SIZE_PIXELS } from '$lib/components/constants';
	import { keybindsStore } from '$lib/stores/keybind-store';
	import { editingKey } from '$lib/stores/controls-store';
	import KeybindForm from './keybind-form.svelte';

	let { keyName, label, width, height, isSpacing, keybindFilter }: Props =
		$props();
	let keyLabel = typeof label === 'string' ? label : keyName;

	let keybinds = $derived(
		($keybindsStore[keyName] || [])
			.filter(({ game }) => game.includes(keybindFilter))
			.toSorted((a, b) => a.game.localeCompare(b.game))
	);

	let elementStyle = [
		!isSpacing && 'border: 1px solid',
		`height: ${DEFAULT_KEY_SIZE_PIXELS * (height || 1)}px`,
		`width: ${DEFAULT_KEY_SIZE_PIXELS * (width || 1)}px`
	]
		.filter((style) => style)
		.join(';');
</script>

<div class="group relative">
	<button
		style={elementStyle}
		class={`${!isSpacing && keybinds.length === 0 ? 'bg-gray-300' : ''}`}
		onclick={() => {
			if ($editingKey === keyName) {
				$editingKey = '';
			} else {
				$editingKey = keyName;
			}
		}}
	>
		{#if !isSpacing}
			<span class="capitalize">{keyLabel}</span>
			{#if keybinds.length > 0}
				<table
					class="pointer-events-none absolute top-[80%] left-8 z-10 hidden border-collapse flex-col items-start border bg-white p-1 group-hover:flex"
				>
					<tbody>
						{#each keybinds as keybind}
							<tr>
								<td class="px-1 text-left text-nowrap">{keybind.game}</td>
								<td class="px-1 text-left text-nowrap">{keybind.action}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}
		{/if}
	</button>
	{#if $editingKey === keyName}
		<div class="absolute top-[80%] left-8 z-10 border bg-white p-2">
			<KeybindForm {keyName} />
		</div>
	{/if}
</div>
