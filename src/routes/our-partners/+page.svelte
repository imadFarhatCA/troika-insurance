<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	import { insurersIn } from '$lib/data/insurers';

	$: s = t[$language].partners;
	$: groups = [
		{ title: s.personalTitle, partners: insurersIn('personal') },
		{ title: s.commercialTitle, partners: insurersIn('commercial') },
		{ title: s.mgaTitle, partners: insurersIn('mga') }
	];
	const host = (url: string) => new URL(url).hostname.replace(/^www\./, '');
</script>

<Seo title={s.title} description="Troika Insurance partners with Canada's top personal and business insurers to give you the best coverage and pricing." path="/our-partners" />

<div class="page">
	<section class="partners-hero">
		<div class="container">
			<h1>{s.title}</h1>
			<p>{s.subtitle}</p>
		</div>
	</section>

	<section class="partners-body">
		<div class="container">
			{#each groups as group}
				<div class="partners-group">
					<h2>{group.title}</h2>
					<div class="partners-grid">
						{#each group.partners as partner}
							<article class="partner-card">
								<h3>{partner.name}</h3>
								<div class="partner-line">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
									<div>
										<a href={partner.website} target="_blank" rel="noopener noreferrer">{host(partner.website)}</a>
									</div>
								</div>
							</article>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
.partners-hero {
	padding: 100px 0 40px;
	border-bottom: 1px solid var(--color-border);
	text-align: center;
}

.partners-hero .container {
	max-width: 680px;
	padding: 0 24px;
	margin: 0 auto;
}

.partners-hero h1 {
	font-size: 40px;
	font-weight: 700;
	color: var(--color-bg-dark);
	margin: 0 0 14px 0;
}

.partners-hero p {
	font-size: 17px;
	line-height: 1.7;
	color: var(--color-text-light);
	margin: 0;
}

.partners-body {
	padding: 64px 0 110px;
}

.partners-body .container {
	max-width: 980px;
	padding: 0 24px;
	margin: 0 auto;
}





.partners-group + .partners-group {
	margin-top: 72px;
}

.partners-group h2 {
	font-size: 28px;
	font-weight: 700;
	color: var(--color-bg-dark);
	margin: 0 0 6px 0;
}


.partners-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: 16px;
}

.partner-card {
	display: flex;
	flex-direction: column;
	gap: 12px;
	padding: 20px 22px;
	border: 1px solid var(--color-border);
	border-radius: 12px;
	background: var(--color-bg-white);
	transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.partner-card:hover {
	border-color: var(--color-primary);
	box-shadow: 0 6px 16px rgba(146, 39, 143, 0.12);
	transform: translateY(-2px);
}

.partner-card h3 {
	font-size: 17px;
	font-weight: 700;
	color: var(--color-text);
	margin: 0;
}

.partner-line {
	display: flex;
	gap: 10px;
	align-items: flex-start;
	font-size: 14px;
}

.partner-line svg {
	flex-shrink: 0;
	margin-top: 2px;
	color: var(--color-primary);
}

.partner-line > div {
	display: flex;
	flex-direction: column;
	gap: 2px;
	min-width: 0;
}


.partner-line a {
	display: inline-block;
	padding: 10px 0;
	color: var(--color-text);
	font-weight: 500;
	text-decoration: none;
	overflow-wrap: anywhere;
}

.partner-line a:hover {
	color: var(--color-primary);
	text-decoration: underline;
}


@media (max-width: 640px) {
	.partners-grid {
		grid-template-columns: 1fr;
	}
}
</style>
