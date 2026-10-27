<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import ClaimModal from '$lib/components/ClaimModal.svelte';
	import { claimModalOpen } from '$lib/claimStore';
	import QuoteModal from '$lib/components/QuoteModal.svelte';
	import WebsiteTracker from '$lib/components/WebsiteTracker.svelte';

	import { onMount } from 'svelte';
	import { language } from '$lib/languageStore';
	import { SITE_EMAIL, SITE_NAME, SITE_PHONE, SITE_URL } from '$lib/seo';

	let { children } = $props();

	const siteLd = JSON.stringify([
		{
			'@context': 'https://schema.org',
			'@type': 'InsuranceAgency',
			'@id': `${SITE_URL}/#organization`,
			name: SITE_NAME,
			url: SITE_URL,
			logo: `${SITE_URL}/troika-logo.png`,
			image: `${SITE_URL}/og-image.jpg`,
			telephone: SITE_PHONE,
			email: SITE_EMAIL,
			areaServed: ['Quebec', 'Ontario']
		},
		{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: ['en-CA', 'fr-CA'], publisher: { '@id': `${SITE_URL}/#organization` } }
	]);

	onMount(() => {
		try {
			const saved = localStorage.getItem('lang');
			if (saved === 'EN' || saved === 'FR') language.set(saved);
		} catch {}
		return language.subscribe((l) => {
			document.documentElement.lang = l === 'FR' ? 'fr' : 'en';
			try {
				localStorage.setItem('lang', l);
			} catch {}
		});
	});
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${siteLd}</script>`}
</svelte:head>
<WebsiteTracker />

<Navigation />
{@render children()}
<Footer />
<QuoteModal />
<ClaimModal isOpen={$claimModalOpen} on:close={() => claimModalOpen.set(false)} />
