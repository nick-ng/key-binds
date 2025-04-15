<script lang="ts">
	import { keybindsStore } from '$lib/stores/keybind-store';
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
		<input
			type="text"
			class="border"
			bind:value={keybindFilter}
			placeholder="Filter Keybinds"
		/>
		<button
			class="border px-2"
			onclick={() => {
				navigator.clipboard.writeText(JSON.stringify($keybindsStore));
			}}>Copy Keybinds</button
		>
		<input
			type="text"
			class="border"
			bind:value={importKeybindString}
			placeholder="Import Keybinds"
		/>
		<button
			class="border px-2"
			onclick={() => {
				try {
					const newKeybinds = JSON.parse(importKeybindString);
					$keybindsStore = newKeybinds;
				} catch (e) {
					alert('Invalid import string');
				}
			}}>Import Keybinds</button
		>
	</div>
	<hr class="my-1" />
	<div class="flex flex-row justify-center">
		<div>
			<h3>Keyboard</h3>
			<div class="flex flex-row">
				<!-- row 1 -->
				<KeyboardButton keyName="esc" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="esc-f1-spacing"
					width={escFSpacing}
					{keybindFilter}
					isSpacing
				/>
				<KeyboardButton keyName="f1" width={1} {keybindFilter} />
				<KeyboardButton keyName="f2" width={1} {keybindFilter} />
				<KeyboardButton keyName="f3" width={1} {keybindFilter} />
				<KeyboardButton keyName="f4" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="f4-f5-spacing"
					width={escFSpacing}
					{keybindFilter}
					isSpacing
				/>
				<KeyboardButton keyName="f5" width={1} {keybindFilter} />
				<KeyboardButton keyName="f6" width={1} {keybindFilter} />
				<KeyboardButton keyName="f7" width={1} {keybindFilter} />
				<KeyboardButton keyName="f8" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="f8-f9-spacing"
					width={escFSpacing}
					{keybindFilter}
					isSpacing
				/>
				<KeyboardButton keyName="f9" width={1} {keybindFilter} />
				<KeyboardButton keyName="f10" width={1} {keybindFilter} />
				<KeyboardButton keyName="f11" width={1} {keybindFilter} />
				<KeyboardButton keyName="f12" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="f12-ins-spacing"
					width={escFSpacing}
					{keybindFilter}
					isSpacing
				/>
				<KeyboardButton keyName="ins" width={1} {keybindFilter} />
			</div>
			<div class="flex flex-row">
				<!-- row 2 -->
				<KeyboardButton
					keyName="backtick"
					label="`"
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton keyName="1" width={1} {keybindFilter} />
				<KeyboardButton keyName="2" width={1} {keybindFilter} />
				<KeyboardButton keyName="3" width={1} {keybindFilter} />
				<KeyboardButton keyName="4" width={1} {keybindFilter} />
				<KeyboardButton keyName="5" width={1} {keybindFilter} />
				<KeyboardButton keyName="6" width={1} {keybindFilter} />
				<KeyboardButton keyName="7" width={1} {keybindFilter} />
				<KeyboardButton keyName="8" width={1} {keybindFilter} />
				<KeyboardButton keyName="9" width={1} {keybindFilter} />
				<KeyboardButton keyName="0" width={1} {keybindFilter} />
				<KeyboardButton keyName="-" width={1} {keybindFilter} />
				<KeyboardButton keyName="=" width={1} {keybindFilter} />
				<KeyboardButton keyName="backspace" width={2} {keybindFilter} />
			</div>
			<div class="flex flex-row">
				<!-- row 2 -->
				<KeyboardButton keyName="tab" width={1.5} {keybindFilter} />
				<KeyboardButton keyName="q" width={1} {keybindFilter} />
				<KeyboardButton keyName="w" width={1} {keybindFilter} />
				<KeyboardButton keyName="e" width={1} {keybindFilter} />
				<KeyboardButton keyName="r" width={1} {keybindFilter} />
				<KeyboardButton keyName="t" width={1} {keybindFilter} />
				<KeyboardButton keyName="y" width={1} {keybindFilter} />
				<KeyboardButton keyName="u" width={1} {keybindFilter} />
				<KeyboardButton keyName="i" width={1} {keybindFilter} />
				<KeyboardButton keyName="o" width={1} {keybindFilter} />
				<KeyboardButton keyName="p" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="leftbracket"
					label="["
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="rightbracket"
					label="]"
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="backslash"
					label={'\\'}
					width={1.5}
					{keybindFilter}
				/>
			</div>
			<div class="flex flex-row">
				<!-- row 3 -->
				<KeyboardButton
					keyName="capslock"
					label="Caps Lock"
					width={1.75}
					{keybindFilter}
				/>
				<KeyboardButton keyName="a" width={1} {keybindFilter} />
				<KeyboardButton keyName="s" width={1} {keybindFilter} />
				<KeyboardButton keyName="d" width={1} {keybindFilter} />
				<KeyboardButton keyName="f" width={1} {keybindFilter} />
				<KeyboardButton keyName="g" width={1} {keybindFilter} />
				<KeyboardButton keyName="h" width={1} {keybindFilter} />
				<KeyboardButton keyName="j" width={1} {keybindFilter} />
				<KeyboardButton keyName="k" width={1} {keybindFilter} />
				<KeyboardButton keyName="l" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="semicolon"
					label=";"
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton keyName="quote" label="'" width={1} {keybindFilter} />
				<KeyboardButton keyName="enter" width={2.25} {keybindFilter} />
			</div>
			<div class="flex flex-row">
				<!-- row 4 -->
				<KeyboardButton
					keyName="leftshift"
					label="shift"
					width={2.25}
					{keybindFilter}
				/>
				<KeyboardButton keyName="z" width={1} {keybindFilter} />
				<KeyboardButton keyName="x" width={1} {keybindFilter} />
				<KeyboardButton keyName="c" width={1} {keybindFilter} />
				<KeyboardButton keyName="v" width={1} {keybindFilter} />
				<KeyboardButton keyName="b" width={1} {keybindFilter} />
				<KeyboardButton keyName="n" width={1} {keybindFilter} />
				<KeyboardButton keyName="m" width={1} {keybindFilter} />
				<KeyboardButton keyName="comma" label="," width={1} {keybindFilter} />
				<KeyboardButton
					keyName="period"
					label={'.'}
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="forwardslash"
					label="/"
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="rightshift"
					label="shift"
					width={1.75}
					{keybindFilter}
				/>
			</div>
			<div class="flex flex-row">
				<!-- row 5 -->
				<KeyboardButton
					keyName="leftcontrol"
					label="ctrl"
					width={1.25}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="leftwindows"
					label="win"
					width={1.25}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="leftalt"
					label="alt"
					width={1.25}
					{keybindFilter}
				/>
				<KeyboardButton keyName="space" label="" width={6.25} {keybindFilter} />
				<KeyboardButton
					keyName="rightalt"
					label="alt"
					width={1}
					{keybindFilter}
				/>
				<KeyboardButton keyName="context" label="" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="rightcontrol"
					label="ctrl"
					width={1}
					{keybindFilter}
				/>
			</div>
		</div>
		<div class="ml-4">
			<h3>Mouse</h3>
			<div>
				<KeyboardButton
					keyName="mwheelup"
					label="MWheel Up"
					width={1.7}
					{keybindFilter}
				/>
			</div>
			<div class="flex flex-row">
				<KeyboardButton
					keyName="mouse1"
					label="Mouse 1"
					width={1.7}
					{keybindFilter}
				/>
				<KeyboardButton keyName="mouse3" label="M3" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="mouse2"
					label="Mouse 2"
					width={1.7}
					{keybindFilter}
				/>
			</div>
			<div class="flex flex-row justify-start">
				<KeyboardButton keyName="mouse5" label="M5" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="mouse5-mwheeldown-space"
					isSpacing
					width={0.25}
					{keybindFilter}
				/>
				<KeyboardButton
					keyName="mwheeldown"
					label="MWheel Down"
					width={1.7}
					{keybindFilter}
				/>
			</div>
			<div class="flex flex-row justify-start">
				<KeyboardButton keyName="mouse4" label="M4" width={1} {keybindFilter} />
				<KeyboardButton
					keyName="mouse5-mwheeldown-space"
					isSpacing
					width={0.25}
					{keybindFilter}
				/>
				<KeyboardButton keyName="mouse6" label="M6" width={1} {keybindFilter} />
				<KeyboardButton keyName="mouse7" label="M7" width={1} {keybindFilter} />
			</div>
		</div>
	</div>
</div>
