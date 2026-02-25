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
		src="https://CONTROL_PANEL_URL/tracker.js"
		data-key="TROIKA_API_KEY"
		data-endpoint="https://CONTROL_PANEL_URL/api/track"
		defer
	></script>
</svelte:head>

<Navigation />
{@render children()}
<Footer />
<ClaimModal isOpen={$claimModalOpen} on:close={() => claimModalOpen.set(false)} />
