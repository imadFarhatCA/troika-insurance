<script lang="ts">
	import { partnerLogos } from '$lib/data/partnerLogos';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	// Resolve every logo file in the folder to its built URL
	const urls = import.meta.glob('$lib/assets/partnerLogos/*', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
	const logos = partnerLogos.map((l) => ({
		...l,
		src: urls[`/src/lib/assets/partnerLogos/${l.file}`]
	}));

	let expanded = false;
	$: s = t[$language].social;

	$: displayedLogos = expanded ? logos : logos.slice(0, 20);
</script>

<section class="social-impact">
	<div class="container">
		<h2>{s.title}</h2>
		<p class="impact-subtitle">{s.subtitle}</p>

		<div class="insurers-wrapper">
			<div class="insurers-masonry" class:expanded>
				{#each displayedLogos as logo}
					<div class="insurer-logo-item" style="--w: {logo.w}">
						<img src={logo.src} alt={logo.name} loading="lazy" />
					</div>
				{/each}
			</div>
			{#if !expanded}
				<div class="gradient-overlay"></div>
			{/if}
		</div>

		<button class="see-more-btn" on:click={() => (expanded = !expanded)}>
			{expanded ? s.showLess : s.showMore}
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="currentColor"
				style="transform: rotate({expanded ? 180 : 0}deg); transition: transform 0.3s;"
			>
				<path d="M8 10.5l-4-4 1-1 3 3 3-3 1 1-4 4z" />
			</svg>
		</button>
	</div>
</section>
