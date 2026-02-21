<script lang="ts">
	import { onMount } from 'svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let animatedElements = { tag: false, title: false, description: false, action1: false, action2: false };

	onMount(() => {
		setTimeout(() => { animatedElements.tag = true; }, 150);
		setTimeout(() => { animatedElements.title = true; }, 350);
		setTimeout(() => { animatedElements.description = true; }, 550);
		setTimeout(() => { animatedElements.action1 = true; }, 750);
		setTimeout(() => { animatedElements.action2 = true; }, 900);
	});

	$: s = t[$language].services;
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

			<div class="hero-actions">
				<a href="/contact" class="btn-primary-hero" class:animated={animatedElements.action1}>{s.heroCta1}</a>
				<a href="#services" class="btn-secondary-hero" class:animated={animatedElements.action2}>{s.heroCta2}</a>
			</div>
		</div>
	</div>
</section>
