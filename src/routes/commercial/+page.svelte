<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import commercialIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let animated = { tag: false, title: false, description: false, action: false };
	let cardsVisible = false;

	onMount(() => {
		setTimeout(() => { animated.tag = true; }, 150);
		setTimeout(() => { animated.title = true; }, 350);
		setTimeout(() => { animated.description = true; }, 550);
		setTimeout(() => { animated.action = true; }, 750);

		const section = document.querySelector('.products-section');
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					cardsVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		if (section) observer.observe(section);
	});

	$: s = t[$language].commercial;
	const cardIcons = ['building', 'trending-up', 'shield'] as const;
</script>

<svelte:head>
	<title>Commercial Insurance – Troika Insurance</title>
	<meta name="description" content="Commercial insurance for business owners in Quebec. Property, revenue continuity, and liability protection built around keeping your business running after a loss." />
	<meta name="keywords" content="commercial insurance Quebec, business insurance Montreal, commercial property insurance Quebec, business interruption insurance, commercial liability insurance Quebec, small business insurance, contractor insurance Quebec, commercial insurance broker Montreal, revenue continuity insurance, business continuity insurance" />
	<link rel="canonical" href="https://troikainsurance.com/commercial" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Commercial Insurance – Troika Insurance" />
	<meta property="og:description" content="Commercial insurance for business owners in Quebec. Property, revenue continuity, and liability protection built around keeping your business running after a loss." />
	<meta property="og:url" content="https://troikainsurance.com/commercial" />
	<meta property="og:image" content="https://troikainsurance.com/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Commercial Insurance – Troika Insurance" />
	<meta name="twitter:description" content="Commercial insurance for business owners in Quebec. Property, revenue continuity, and liability protection built around keeping your business running after a loss." />
	<meta name="twitter:image" content="https://troikainsurance.com/og-image.jpg" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Commercial Insurance",
		"description": "Business insurance covering property & asset protection, revenue continuity, and commercial liability. Built for business owners, contractors, investors, and professional firms.",
		"url": "https://troikainsurance.com/commercial",
		"provider": {
			"@type": "InsuranceAgency",
			"name": "Troika Insurance",
			"url": "https://troikainsurance.com"
		},
		"areaServed": ["Quebec", "Ontario", "Canada"]
	}
	</script>
</svelte:head>

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">
				<div class="hero-visual" class:animated={animated.title}>
					<img src={commercialIcon} alt="Commercial Insurance" class="hero-icon" />
				</div>

				<div class="eyebrow-tag" class:animated={animated.tag}>{s.eyebrow}</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						{@html s.heroTitle.replace(/\n/g, '<br>')}
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">{s.heroDesc}</span>
					</p>
				</div>

				<div class="hero-actions">
					<a href="/contact" class="btn-primary-hero" class:animated={animated.action}>{s.heroCta}</a>
				</div>
			</div>
		</div>
	</section>

	<!-- 3 Product Cards -->
	<section class="products-section">
		<div class="products-container">
			<div class="products-grid">
				{#each s.cards as card, i}
					<TroikaProductCard
						index={i}
						icon={cardIcons[i]}
						title={card.title}
						subtitle={card.subtitle}
						badge={card.badge}
						badgeSpace={true}
						includes={card.includes}
						feature={card.feature}
						inView={cardsVisible}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Core Idea text -->
	<section class="core-idea-section">
		<div class="core-idea-container">
			<p class="core-idea-lead">
				{s.coreLeadPart1}<br>
				<strong>{s.coreLeadPart2}</strong>
			</p>
			<p class="core-idea-body">
				{s.coreBody}
			</p>
		</div>
	</section>

	<!-- Troika Difference -->
	<section class="troika-diff-section">
		<div class="troika-diff-container">

			<div class="troika-diff-main">
				<h2 class="troika-diff-title">{@html s.diffTitle.replace(/\n/g, '<br>')}</h2>
				<p class="troika-diff-intro">{s.diffIntro}</p>
				<ul class="troika-diff-list">
					{#each s.diffPoints as point}
						<li>
							<Icon name="check" size={14} strokeWidth={2.5} />
							{point}
						</li>
					{/each}
				</ul>
				<p class="objective-label">{s.objectiveLabel}</p>
				<p class="objective-text">{s.objectiveText}</p>
			</div>

			<div class="ideal-for-block">
				<h3 class="ideal-for-title">{s.idealForTitle}</h3>
				<ul class="ideal-for-list">
					{#each s.idealFor as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

		</div>

	</section>

	<!-- CTA -->
	<section class="about-cta">
		<div class="container">
			<h2>{s.ctaTitle}</h2>
			<p>{s.ctaBody}</p>
			<a href="/contact" class="btn-primary">{s.ctaBtn}</a>
		</div>
	</section>

</div>
