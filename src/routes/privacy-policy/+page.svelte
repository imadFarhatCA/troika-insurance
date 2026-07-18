<script lang="ts">
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { language } from '$lib/languageStore';
	import { privacyPolicy } from '$lib/data/legalPrivacyPolicy';

	$: s = privacyPolicy[$language];
</script>

<svelte:head>
	<title>{s.title} – Troika Insurance</title>
	<meta name="description" content="How Troika Insurance collects, uses, discloses, and protects your personal information." />
	<link rel="canonical" href="https://troikainsurance.com/privacy-policy" />
</svelte:head>

<LegalPage title={s.title} updatedLabel={s.updatedLabel} updatedDate={s.updatedDate} blocks={s.blocks} />
