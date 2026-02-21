<script lang="ts">
	import { onMount } from 'svelte';
	import { trustIndicators } from '$lib/data/trustIndicators';

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
</script>

<section class="minimal-hero">
	<div class="container">
		<div class="hero-content">
			<div class="eyebrow-tag" class:animated={animatedElements.tag}>Our Services</div>

			<div class="hero-text-group" class:animated={animatedElements.title}>
				<h1 class="hero-title">
					Complete Protection,<br>Built Around You
				</h1>

				<p class="hero-description">
					<span class="hero-desc-line">We offer a comprehensive range of insurance solutions for businesses, individuals, and specialized industries.</span>
					<span class="hero-desc-line">Every policy we recommend is tailored to your specific risk profile — never off the shelf.</span>
				</p>
			</div>

			<div class="hero-stats" class:animated={animatedElements.stats}>
				<div class="stat-badge">
					<span class="stat-value">50+</span>
					<span class="stat-text">Products Available</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat-badge">
					<span class="stat-value">28</span>
					<span class="stat-text">Insurance Partners</span>
				</div>
				<div class="stat-divider">•</div>
				<div class="stat-badge">
					<span class="stat-value">100%</span>
					<span class="stat-text">Tailored Coverage</span>
				</div>
			</div>

			<div class="hero-actions">
				<a href="/contact" class="btn-primary-hero" class:animated={animatedElements.action1}>Get a Quote</a>
				<a href="#services" class="btn-secondary-hero" class:animated={animatedElements.action2}>Explore Services</a>
			</div>

			<div class="trust-indicators">
				{#each trustIndicators as indicator, i}
					<div class="trust-item" class:animated={animatedElements[`trust${i + 1}`]}>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							{@html indicator.svgContent}
						</svg>
						<span>{indicator.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
