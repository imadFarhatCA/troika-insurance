<script lang="ts">
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { language } from '$lib/languageStore';
	import { complaintsPolicy } from '$lib/data/legalComplaintsPolicy';

	$: s = complaintsPolicy[$language];
</script>

<svelte:head>
	<title>{s.title} – Troika Insurance</title>
	<meta name="description" content="How Troika Insurance handles client complaints and disputes, from receipt through to resolution." />
	<link rel="canonical" href="https://troikainsurance.com/complaints-policy" />
</svelte:head>

<LegalPage title={s.title} updatedLabel={s.updatedLabel} updatedDate={s.updatedDate} blocks={s.blocks} />
