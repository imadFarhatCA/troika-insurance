<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import commercialIcon from '$lib/assets/icons/CORPORATE Icon.svg';

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

	const troikaDiffPoints = [
		'Ongoing risk assessment',
		'Coverage gap identification',
		'Operational exposure review',
		'Protection aligned with business growth'
	];

	const idealFor = [
		'Business owners',
		'Commercial property owners',
		'Investors and landlords',
		'Contractors and trades',
		'Manufacturers and distributors',
		'Professional firms'
	];


	const cards = [
		{
			icon: 'building' as const,
			title: 'Property & Asset Protection',
			subtitle: 'Protects physical infrastructure',
			includes: [
				'Building replacement cost',
				'Tenant improvements',
				'Equipment & machinery',
				'Stock & inventory',
				'Tools and mobile equipment',
				'Sewer backup',
				'Flood',
				'Equipment breakdown'
			],
			feature: 'Annual reconstruction cost verification to avoid underinsurance.'
		},
		{
			icon: 'trending-up' as const,
			title: 'Revenue Continuity Protection',
			subtitle: 'Protects cashflow after a loss',
			badge: 'Key Differentiator',
			includes: [
				'Business interruption',
				'Crime / employee dishonesty',
				'Extra expense coverage',
				'Loss of rents',
				'Extended indemnity period (12–24 months recommended)'
			],
			feature: 'Cashflow-based indemnity calculation, not arbitrary limits.'
		},
		{
			icon: 'shield' as const,
			title: 'Liability Shield',
			subtitle: 'Protects against lawsuits',
			includes: [
				'Commercial General Liability',
				'Product liability',
				'Completed operations',
				'Tenant liability',
				'Legal defense costs',
				'Cyber liability'
			],
			feature: 'Risk-specific liability structuring based on actual operations.'
		}
	];
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

				<div class="eyebrow-tag" class:animated={animated.tag}>Commercial Insurance</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						Continuity Protection™<br>for Business Owners
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">This is not just insurance. It's a structured protection system designed to ensure a business can survive and continue after a loss.</span>
					</p>
				</div>

				<div class="hero-actions">
					<a href="/contact" class="btn-primary-hero" class:animated={animated.action}>Get a Quote</a>
				</div>
			</div>
		</div>
	</section>

	<!-- 3 Product Cards -->
	<section class="products-section">
		<div class="products-container">
			<div class="products-grid">
				{#each cards as card, i}
					<TroikaProductCard
						index={i}
						icon={card.icon}
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
				Most business owners think insurance replaces damaged property.<br>
				But what really kills businesses is <strong>interruption, liability, and operational gaps.</strong>
			</p>
			<p class="core-idea-body">
				Troika's Continuity Protection™ focuses on keeping the business alive, not just replacing assets.
			</p>
		</div>
	</section>

	<!-- Troika Difference -->
	<section class="troika-diff-section">
		<div class="troika-diff-container">

			<div class="troika-diff-main">
				<h2 class="troika-diff-title">The Troika Difference:<br>Continuity-Focused Protection</h2>
				<p class="troika-diff-intro">Troika Continuity Protection™ is built on a proactive advisory model. This includes:</p>
				<ul class="troika-diff-list">
					{#each troikaDiffPoints as point}
						<li>
							<Icon name="check" size={14} strokeWidth={2.5} />
							{point}
						</li>
					{/each}
				</ul>
				<p class="objective-label">Our objective is simple:</p>
				<p class="objective-text">To ensure that a loss does not become a permanent disruption.</p>
			</div>

			<div class="ideal-for-block">
				<h3 class="ideal-for-title">Ideal for</h3>
				<ul class="ideal-for-list">
					{#each idealFor as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

		</div>

	</section>

	<!-- CTA -->
	<section class="about-cta">
		<div class="container">
			<h2>Ready to Protect Your Business?</h2>
			<p>We'll assess your risks and build a continuity plan tailored to your operations.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>

</div>
