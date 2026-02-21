<script lang="ts">
	import { onMount } from 'svelte';
	import { trustIndicators } from '$lib/data/trustIndicators';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let animatedElements = {
		tag: false,
		title: false,
		description: false,
		stats: false,
		action1: false,
		action2: false,
		trust1: false,
		trust2: false,
		trust3: false
	};

	onMount(() => {
		setTimeout(() => { animatedElements.tag = true; }, 150);
		setTimeout(() => { animatedElements.title = true; }, 350);
		setTimeout(() => { animatedElements.description = true; }, 550);
		setTimeout(() => { animatedElements.stats = true; }, 750);
		setTimeout(() => { animatedElements.action1 = true; }, 950);
		setTimeout(() => { animatedElements.action2 = true; }, 1100);
		setTimeout(() => { animatedElements.trust1 = true; }, 1250);
		setTimeout(() => { animatedElements.trust2 = true; }, 1400);
		setTimeout(() => { animatedElements.trust3 = true; }, 1550);
	});

	$: s = t[$language].ourApproach;
</script>

<section class="minimal-hero">
	<div class="container">
		<div class="hero-content">
			<div class="eyebrow-tag" class:animated={animatedElements.tag}>{s.eyebrow}</div>

			<div class="hero-text-group" class:animated={animatedElements.title}>
				<h1 class="hero-title">
					{@html s.heroTitle.replace(/\n/g, '<br>')}
				</h1>

				<p class="hero-description">
					<span class="hero-desc-line">{s.heroDesc1}</span>
					<span class="hero-desc-line">{s.heroDesc2}</span>
				</p>
			</div>

			<div class="hero-stats" class:animated={animatedElements.stats}>
				<div class="stat-badge">
					<span class="stat-value">15+</span>
					<span class="stat-text">{s.statsYears}</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat-badge">
					<span class="stat-value">28</span>
					<span class="stat-text">{s.statsPartners}</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat-badge">
					<span class="stat-value">100%</span>
					<span class="stat-text">{s.statsClient}</span>
				</div>
			</div>

			<div class="hero-actions">
				<a href="/contact" class="btn-primary-hero" class:animated={animatedElements.action1}>{s.heroBtn1}</a>
				<a href="#mission" class="btn-secondary-hero" class:animated={animatedElements.action2}>{s.heroBtn2}</a>
			</div>

			<div class="trust-indicators">
				{#each trustIndicators as indicator, i}
					<div class="trust-item" class:animated={animatedElements[`trust${i + 1}`]}>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							{@html indicator.svgContent}
						</svg>
						<span>{s.trustLabels[i]}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
