<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Key Binds</title>
</svelte:head>

{@render children()}
