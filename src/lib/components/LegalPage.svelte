<script lang="ts">
	import type { LegalBlock } from '$lib/data/legalPrivacyPolicy';

	export let title: string;
	export let updatedLabel: string;
	export let updatedDate: string;
	export let blocks: LegalBlock[];
</script>

<div class="page">
	<section class="legal-hero">
		<div class="container">
			<h1>{title}</h1>
			<p class="legal-updated">{updatedLabel}: {updatedDate}</p>
		</div>
	</section>

	<section class="legal-body">
		<div class="container">
			{#each blocks as block}
				{#if block.type === 'h2'}
					<h2>{block.text}</h2>
				{:else if block.type === 'p'}
					<p>{block.text}</p>
				{:else if block.type === 'list'}
					<ul>
						{#each block.items as item}<li>{item}</li>{/each}
					</ul>
				{/if}
			{/each}
		</div>
	</section>
</div>

<style>
.legal-hero {
	padding: 100px 0 32px;
	border-bottom: 1px solid var(--color-border);
}

.legal-hero h1 {
	font-size: 40px;
	font-weight: 700;
	color: var(--color-bg-dark);
	margin: 0 0 12px 0;
}

.legal-updated {
	color: var(--color-text-light);
	font-size: 14px;
	margin: 0;
}

.legal-body {
	padding: 48px 0 100px;
}

.legal-hero .container,
.legal-body .container {
	max-width: 780px;
	padding: 0 24px;
}

.legal-body h2 {
	font-size: 22px;
	font-weight: 700;
	color: var(--color-bg-dark);
	margin: 40px 0 16px 0;
}

.legal-body p {
	font-size: 16px;
	line-height: 1.8;
	color: var(--color-text);
	margin: 0 0 18px 0;
}

.legal-body ul {
	margin: 0 0 18px 0;
	padding-left: 22px;
}

.legal-body li {
	font-size: 16px;
	line-height: 1.8;
	color: var(--color-text);
	margin: 0 0 8px 0;
}
</style>
