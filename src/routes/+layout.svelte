<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ClaimModal from '$lib/components/ClaimModal.svelte';
	import { claimModalOpen } from '$lib/claimStore';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script
		src="https://website-control-panel.pages.dev/tracker.js"
		data-key="wcp_ffdccebbb511dd0c0689f038e07f887bb6d7b9b1"
		data-endpoint="https://website-control-panel.pages.dev/api/track"
		defer
	></script>
</svelte:head>

<Navigation />
{@render children()}
<Footer />
<ClaimModal isOpen={$claimModalOpen} on:close={() => claimModalOpen.set(false)} />
