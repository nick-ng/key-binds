<script lang="ts">
	import { keybindsStore } from '$lib/stores/keybind-store';
	import { keybindFiltersStore } from '$lib/stores/controls-store';
	import KeyboardButton from '$lib/components/keyboard-button.svelte';

	let keybindFilter = $state('');
	const escFSpacing = 0.25;

	let importKeybindString = $state('');

	// @todo(nick-ng): figure out how to clear the edit popup when you click "off" the edit form
</script>

<div class="text-center">
	<h1 class="text-3xl">Key Binds</h1>
	<div>
		<h3>Controls</h3>
		<div class="flex flex-row justify-center">
			{#if $keybindFiltersStore.useAdvanced}
				<div class="flex flex-col items-end">
					<label
						>Include: <input
							class="border px-1"
							type="text"
							bind:value={$keybindFiltersStore.include}
							placeholder="Enter RegExp"
						/></label
					>
					<label
						>Exclude: <input
							class="border px-1"
							type="text"
							bind:value={$keybindFiltersStore.exclude}
							placeholder="Enter RegExp"
						/></label
					>
				</div>
				<button
					class="border px-2"
					type="button"
					onclick={() => {
						$keybindFiltersStore.useAdvanced = false;
					}}>Use Simple Filter</button
				>
			{:else}
				<input
					class="border px-1"
					type="text"
					bind:value={$keybindFiltersStore.simple}
					placeholder="Filter Keybinds"
				/>
				<button
					class="border px-2"
					type="button"
					onclick={() => {
						$keybindFiltersStore.useAdvanced = true;
					}}>Use Advanced Filter</button
				>
			{/if}
			<div class="basis-2"></div>
			<input
				class="border px-1"
				type="text"
				bind:value={importKeybindString}
				placeholder="Keybinds Import String"
			/>
			<div class="flex flex-col items-stretch">
				<button
					class="border px-2"
					onclick={() => {
						navigator.clipboard.writeText(JSON.stringify($keybindsStore));
					}}>Copy Keybinds</button
				>
				<button
					class="border px-2"
					onclick={() => {
						try {
							const newKeybinds = JSON.parse(importKeybindString);
							if (!confirm('This will overwrite any existing keybinds')) {
								return;
							}
							$keybindsStore = newKeybinds;
							importKeybindString = '';
						} catch (e) {
							alert('Invalid import string');
						}
					}}>Import Keybinds</button
				>
			</div>
		</div>
	</div>
	<hr class="my-1" />
	<div class="flex flex-row justify-center">
		<div>
			<h3>Keyboard</h3>
			<div class="flex flex-row">
				<!-- row 1 -->
				<KeyboardButton keyName="esc" width={1} />
				<KeyboardButton
					keyName="esc-f1-spacing"
					width={escFSpacing}
					isSpacing
				/>
				<KeyboardButton keyName="f1" width={1} />
				<KeyboardButton keyName="f2" width={1} />
				<KeyboardButton keyName="f3" width={1} />
				<KeyboardButton keyName="f4" width={1} />
				<KeyboardButton keyName="f4-f5-spacing" width={escFSpacing} isSpacing />
				<KeyboardButton keyName="f5" width={1} />
				<KeyboardButton keyName="f6" width={1} />
				<KeyboardButton keyName="f7" width={1} />
				<KeyboardButton keyName="f8" width={1} />
				<KeyboardButton keyName="f8-f9-spacing" width={escFSpacing} isSpacing />
				<KeyboardButton keyName="f9" width={1} />
				<KeyboardButton keyName="f10" width={1} />
				<KeyboardButton keyName="f11" width={1} />
				<KeyboardButton keyName="f12" width={1} />
				<KeyboardButton
					keyName="f12-ins-spacing"
					width={escFSpacing}
					isSpacing
				/>
				<KeyboardButton keyName="ins" width={1} />
			</div>
			<div class="flex flex-row">
				<!-- row 2 -->
				<KeyboardButton keyName="backtick" label="`" width={1} />
				<KeyboardButton keyName="1" width={1} />
				<KeyboardButton keyName="2" width={1} />
				<KeyboardButton keyName="3" width={1} />
				<KeyboardButton keyName="4" width={1} />
				<KeyboardButton keyName="5" width={1} />
				<KeyboardButton keyName="6" width={1} />
				<KeyboardButton keyName="7" width={1} />
				<KeyboardButton keyName="8" width={1} />
				<KeyboardButton keyName="9" width={1} />
				<KeyboardButton keyName="0" width={1} />
				<KeyboardButton keyName="-" width={1} />
				<KeyboardButton keyName="=" width={1} />
				<KeyboardButton keyName="backspace" width={2} />
			</div>
			<div class="flex flex-row">
				<!-- row 2 -->
				<KeyboardButton keyName="tab" width={1.5} />
				<KeyboardButton keyName="q" width={1} />
				<KeyboardButton keyName="w" width={1} />
				<KeyboardButton keyName="e" width={1} />
				<KeyboardButton keyName="r" width={1} />
				<KeyboardButton keyName="t" width={1} />
				<KeyboardButton keyName="y" width={1} />
				<KeyboardButton keyName="u" width={1} />
				<KeyboardButton keyName="i" width={1} />
				<KeyboardButton keyName="o" width={1} />
				<KeyboardButton keyName="p" width={1} />
				<KeyboardButton keyName="leftbracket" label="[" width={1} />
				<KeyboardButton keyName="rightbracket" label="]" width={1} />
				<KeyboardButton keyName="backslash" label={'\\'} width={1.5} />
			</div>
			<div class="flex flex-row">
				<!-- row 3 -->
				<KeyboardButton keyName="capslock" label="Caps Lock" width={1.75} />
				<KeyboardButton keyName="a" width={1} />
				<KeyboardButton keyName="s" width={1} />
				<KeyboardButton keyName="d" width={1} />
				<KeyboardButton keyName="f" width={1} />
				<KeyboardButton keyName="g" width={1} />
				<KeyboardButton keyName="h" width={1} />
				<KeyboardButton keyName="j" width={1} />
				<KeyboardButton keyName="k" width={1} />
				<KeyboardButton keyName="l" width={1} />
				<KeyboardButton keyName="semicolon" label=";" width={1} />
				<KeyboardButton keyName="quote" label="'" width={1} />
				<KeyboardButton keyName="enter" width={2.25} />
			</div>
			<div class="flex flex-row">
				<!-- row 4 -->
				<KeyboardButton keyName="leftshift" label="shift" width={2.25} />
				<KeyboardButton keyName="z" width={1} />
				<KeyboardButton keyName="x" width={1} />
				<KeyboardButton keyName="c" width={1} />
				<KeyboardButton keyName="v" width={1} />
				<KeyboardButton keyName="b" width={1} />
				<KeyboardButton keyName="n" width={1} />
				<KeyboardButton keyName="m" width={1} />
				<KeyboardButton keyName="comma" label="," width={1} />
				<KeyboardButton keyName="period" label={'.'} width={1} />
				<KeyboardButton keyName="forwardslash" label="/" width={1} />
				<KeyboardButton keyName="rightshift" label="shift" width={1.75} />
			</div>
			<div class="flex flex-row">
				<!-- row 5 -->
				<KeyboardButton keyName="leftcontrol" label="ctrl" width={1.25} />
				<KeyboardButton keyName="leftwindows" label="win" width={1.25} />
				<KeyboardButton keyName="leftalt" label="alt" width={1.25} />
				<KeyboardButton keyName="space" label="" width={6.25} />
				<KeyboardButton keyName="rightalt" label="alt" width={1} />
				<KeyboardButton keyName="context" label="" width={1} />
				<KeyboardButton keyName="rightcontrol" label="ctrl" width={1} />
			</div>
		</div>
		<div class="ml-4">
			<h3>Mouse</h3>
			<div>
				<KeyboardButton keyName="mwheelup" label="MWheel Up" width={1.7} />
			</div>
			<div class="flex flex-row">
				<KeyboardButton keyName="mouse1" label="Mouse 1" width={1.7} />
				<KeyboardButton keyName="mouse3" label="M3" width={1} />
				<KeyboardButton keyName="mouse2" label="Mouse 2" width={1.7} />
			</div>
			<div class="flex flex-row justify-start">
				<KeyboardButton keyName="mouse5" label="M5" width={1} />
				<KeyboardButton
					keyName="mouse5-mwheeldown-space"
					isSpacing
					width={0.25}
				/>
				<KeyboardButton keyName="mwheeldown" label="MWheel Down" width={1.7} />
			</div>
			<div class="flex flex-row justify-start">
				<KeyboardButton keyName="mouse4" label="M4" width={1} />
				<KeyboardButton
					keyName="mouse5-mwheeldown-space"
					isSpacing
					width={0.25}
				/>
				<KeyboardButton keyName="mouse6" label="M6" width={1} />
				<KeyboardButton keyName="mouse7" label="M7" width={1} />
			</div>
		</div>
	</div>
</div>
