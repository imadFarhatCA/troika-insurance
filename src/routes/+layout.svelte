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
	<!-- Website Control Panel Analytics — replace data-key and data-endpoint with values from Settings -->
	<script
		src="https://website-control-panel.pages.dev/tracker.js"
		data-key="wcp_7b33239d466c0391cb8d45258d919135cc2600c5"
		data-endpoint="https://website-control-panel.pages.dev/api/track"
		defer
	></script>
</svelte:head>

<Navigation />
{@render children()}
<Footer />
<ClaimModal isOpen={$claimModalOpen} on:close={() => claimModalOpen.set(false)} />
