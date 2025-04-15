<script lang="ts">
	interface Props {
		keyName: string;
		label?: string;
		width?: number;
		isSpacing?: boolean;
		keybindFilter: string;
	}

	import { DEFAULT_KEY_SIZE_PIXELS } from '$lib/components/constants';

	let { keyName, label, width, isSpacing, keybindFilter }: Props = $props();

	let keyLabel = typeof label === 'string' ? label : keyName;

	let elementStyle = [
		!isSpacing && 'border: 1px solid',
		`height: ${DEFAULT_KEY_SIZE_PIXELS}px`,
		`width: ${DEFAULT_KEY_SIZE_PIXELS * (width || 1)}px`
	]
		.filter((style) => style)
		.join(';');
</script>

<div style={elementStyle}>
	{#if !isSpacing}
		<span class="capitalize">{keyLabel}</span>
	{/if}
</div>
