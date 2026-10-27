<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { language } from '$lib/languageStore';
	import { privacyPolicy } from '$lib/data/legalPrivacyPolicy';

	$: s = privacyPolicy[$language];
</script>

<Seo title={s.title} description="How Troika Insurance collects, uses, discloses, and protects your personal information." path="/privacy-policy" />

<LegalPage title={s.title} updatedLabel={s.updatedLabel} updatedDate={s.updatedDate} blocks={s.blocks} />
