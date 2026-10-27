<script lang="ts">
	import { OG_IMAGE, SITE_NAME, SITE_URL } from '$lib/seo';

	let { title, description, path, schema = 'WebPage', full = false }: { title: string; description: string; path: string; schema?: 'WebPage' | 'Service' | 'AboutPage'; full?: boolean } = $props();

	const url = $derived(SITE_URL + (path === '/' ? '/' : path));
	const pageTitle = $derived(full ? title : `${title} | ${SITE_NAME}`);
	const ld = $derived(
		JSON.stringify({
			'@context': 'https://schema.org',
			'@type': schema,
			name: pageTitle,
			description,
			url,
			...(schema === 'Service' && { serviceType: title, areaServed: ['Quebec', 'Ontario'], provider: { '@id': `${SITE_URL}/#organization` } }),
			isPartOf: { '@id': `${SITE_URL}/#website` }
		})
	);
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={OG_IMAGE} />
	<meta property="og:locale" content="en_CA" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={OG_IMAGE} />
	{@html `<script type="application/ld+json">${ld}</script>`}
</svelte:head>
