<script lang="ts">
	import { language } from '$lib/languageStore';
	import { SEO_COPY } from '$lib/data/seoCopy';
	import { withLang } from '$lib/localize';
	import { OG_IMAGE, SITE_NAME, SITE_URL } from '$lib/seo';

	let { path }: { path: string } = $props();

	const copy = $derived(SEO_COPY[path][$language]);
	const pageTitle = $derived(copy.full ? copy.title : `${copy.title} | ${SITE_NAME}`);
	const abs = (lang: 'EN' | 'FR') => SITE_URL + withLang(path, lang);
	const ld = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': copy.schema ?? 'WebPage',
			name: pageTitle,
			description: copy.description,
			url: abs($language),
			inLanguage: $language === 'FR' ? 'fr-CA' : 'en-CA',
			...(copy.schema === 'Service' && { serviceType: copy.title, areaServed: ['Quebec', 'Ontario'], provider: { '@id': `${SITE_URL}/#organization` } }),
			isPartOf: { '@id': `${SITE_URL}/#website` }
		})
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={copy.description} />
	<link rel="canonical" href={abs($language)} />
	<link rel="alternate" hreflang="en-CA" href={abs('EN')} />
	<link rel="alternate" hreflang="fr-CA" href={abs('FR')} />
	<link rel="alternate" hreflang="x-default" href={abs('EN')} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={copy.description} />
	<meta property="og:url" content={abs($language)} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:locale" content={$language === 'FR' ? 'fr_CA' : 'en_CA'} />
	<meta property="og:locale:alternate" content={$language === 'FR' ? 'en_CA' : 'fr_CA'} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={copy.description} />
	<meta name="twitter:image" content={OG_IMAGE} />
	{@html `<script type="application/ld+json">${ld}</script>`}
</svelte:head>
