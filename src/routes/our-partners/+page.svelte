<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	import { personalPartners, businessPartners } from '$lib/data/partners';

	$: s = t[$language].partners;
</script>

<svelte:head>
	<title>{s.title} – Troika Insurance</title>
	<meta name="description" content="Troika Insurance partners with Canada's top personal and business insurers to give you the best coverage and pricing." />
	<link rel="canonical" href="https://troikainsurance.com/our-partners" />
</svelte:head>

<div class="page">
	<section class="partners-hero">
		<div class="container">
			<h1>{s.title}</h1>
			<p>{s.subtitle}</p>
		</div>
	</section>

	<section class="partners-body">
		<div class="container">
			<div class="partners-group">
				<div class="group-heading">
					<div class="group-icon"><Icon name="home" size={22} strokeWidth={1.75} /></div>
					<h2>{s.personalTitle}</h2>
				</div>
				<div class="partners-grid">
					{#each personalPartners as name}
						<div class="partner-card">{name}</div>
					{/each}
				</div>
			</div>

			<div class="partners-group">
				<div class="group-heading">
					<div class="group-icon"><Icon name="briefcase" size={22} strokeWidth={1.75} /></div>
					<h2>{s.businessTitle}</h2>
				</div>
				<div class="partners-grid">
					{#each businessPartners as name}
						<div class="partner-card">{name}</div>
					{/each}
				</div>
			</div>
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
	margin-top: 56px;
}

.group-heading {
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: 24px;
}

.group-icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 10px;
	background: rgba(146, 39, 143, 0.1);
	color: var(--color-primary);
	flex-shrink: 0;
}

.group-heading h2 {
	font-size: 24px;
	font-weight: 700;
	color: var(--color-bg-dark);
	margin: 0;
}

.partners-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 14px;
}

.partner-card {
	padding: 18px 20px;
	border: 1px solid var(--color-border);
	border-radius: 12px;
	background: var(--color-bg-white);
	font-size: 15px;
	font-weight: 600;
	color: var(--color-text);
	text-align: center;
	transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.partner-card:hover {
	border-color: var(--color-primary);
	box-shadow: 0 6px 16px rgba(146, 39, 143, 0.12);
	transform: translateY(-2px);
}

@media (max-width: 640px) {
	.partners-grid {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}
}
</style>
