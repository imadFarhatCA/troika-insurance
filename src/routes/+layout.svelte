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
</svelte:head>

<Navigation />
{@render children()}
<Footer />
<ClaimModal isOpen={$claimModalOpen} on:close={() => claimModalOpen.set(false)} />
