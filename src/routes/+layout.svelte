<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}

<style>
	:global(*) { box-sizing: border-box; margin: 0; padding: 0; }
	:global(::before), :global(::after) { box-sizing: border-box; }
	:global(body) {
		font-family: 'Inter', sans-serif;
		background: #0D1117;
		color: #F0F6FC;
		min-height: 100vh;
	}
	:global(.mono) { font-family: 'JetBrains Mono', monospace; }
	:global(.accent) { color: #7EE787; }
	:global(.dim) { color: #8B949E; }

	@keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
	@keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: .4 } }
</style>
