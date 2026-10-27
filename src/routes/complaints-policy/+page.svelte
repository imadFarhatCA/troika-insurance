<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { language } from '$lib/languageStore';
	import { complaintsPolicy } from '$lib/data/legalComplaintsPolicy';

	$: s = complaintsPolicy[$language];
</script>

<Seo path="/complaints-policy" />

<LegalPage title={s.title} updatedLabel={s.updatedLabel} updatedDate={s.updatedDate} blocks={s.blocks} />
