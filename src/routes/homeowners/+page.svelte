<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';

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

	const cards = [
		{
			icon: 'home' as const,
			title: 'Property & Asset Protection',
			subtitle: 'Protecting the physical structure and contents',
			includesLabel: 'Includes protection for',
			includes: [
				'Building replacement cost (homes, plex, rental dwellings, chalets)',
				'Condo improvements and tenant improvements',
				'Personal belongings and contents',
				'Detached structures (garage, sheds, outbuildings)',
				'Equipment and installations attached to the building',
				'Sewer backup and water damage',
				'Flood protection (where available)',
				'Fire, theft, vandalism, and weather damage'
			],
			additionalLabel: 'Additional Protection Layers',
			additionalSub: 'Optional structured protection includes',
			additionalItems: [
				'Protection for high-value contents',
				'Coverage for water damage extensions',
				'Protection for secondary and seasonal residences',
				'Protection for rented dwellings and plex structures',
				'Coverage aligned with tenant, owner, or landlord status'
			],
			feature: 'Reconstruction cost verification to ensure full rebuilding capability and eliminate underinsurance risk.',
			featureNote: 'This ensures your property can be fully restored after a loss.'
		},
		{
			icon: 'trending-up' as const,
			title: 'Living & Income Continuity Protection',
			subtitle: 'Protecting your financial stability and ability to recover',
			includesLabel: 'Includes protection for',
			includes: [
				'Additional living expenses if the property becomes uninhabitable',
				'Loss of rental income for landlords and plex owners',
				'Coverage for tenant relocation expenses',
				'Protection for secondary residences and seasonal properties (chalets)',
				'Coverage aligned with owner-occupied or rented status'
			],
			additionalLabel: null,
			additionalSub: null,
			additionalItems: null,
			feature: 'Continuity-based protection aligned with your real financial exposure and living situation.',
			featureNote: 'This ensures stability during the recovery period.'
		},
		{
			icon: 'shield' as const,
			title: 'Liability Shield',
			subtitle: 'Protecting you from financial and legal exposure',
			includesLabel: 'Includes protection for',
			includes: [
				'Personal liability protection',
				'Property owner liability protection',
				'Tenant liability protection',
				'Protection against bodily injury or property damage claims',
				'Legal defense costs'
			],
			additionalLabel: null,
			additionalSub: null,
			additionalItems: null,
			feature: 'Liability structuring aligned with ownership type, occupancy, and exposure level.',
			featureNote: 'This protects your assets and long-term financial security.'
		}
	];

	const troikaDiffPoints = [
		'Property reconstruction cost validation',
		'Coverage gap identification',
		'Protection aligned with occupancy and usage',
		'Protection aligned with investment and ownership structure'
	];

	const idealFor = [
		'Homeowners',
		'Tenants',
		'Condo owners',
		'Plex owners (duplex, triplex, multi-unit buildings)',
		'Real estate investors',
		'Rental property owners',
		'Chalet and secondary residence owners'
	];
</script>

<svelte:head>
	<title>Homeowners Insurance – Troika Insurance</title>
	<meta name="description" content="Structured residential insurance for homeowners, tenants, plex owners, and chalets. Property, income continuity, and liability protection from Troika Insurance." />
	<meta property="og:title" content="Homeowners Insurance – Troika Insurance" />
	<meta property="og:description" content="Structured residential insurance for homeowners, tenants, plex owners, and chalets. Property, income continuity, and liability protection from Troika Insurance." />
	<meta property="og:url" content="https://troikainsurance.com/homeowners" />
	<meta name="twitter:title" content="Homeowners Insurance – Troika Insurance" />
	<meta name="twitter:description" content="Structured residential insurance for homeowners, tenants, plex owners, and chalets. Property, income continuity, and liability protection from Troika Insurance." />
</svelte:head>

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">

				<div class="hero-visual" class:animated={animated.title}>
					<img src={homeownersIcon} alt="Homeowners Insurance" class="hero-icon" />
				</div>

				<div class="eyebrow-tag" class:animated={animated.tag}>Residential Insurance</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						For Homeowners, Tenants,<br>Plex Owners,<br>and Chalets
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">A structured protection system designed to protect your property, your financial stability, and your continuity after a loss.</span>
						<span class="hero-desc-line">Whether you live in the property, rent it, or own it as an investment — Troika Residential Continuity Protection™ keeps you covered.</span>
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

			<div class="section-label-wrap">
				<span class="section-label">The Three Pillars of Residential Continuity™</span>
			</div>

			<div class="products-grid">
				{#each cards as card, i}
					<TroikaProductCard
						index={i}
						icon={card.icon}
						title={card.title}
						subtitle={card.subtitle}
						includesLabel={card.includesLabel}
						includes={card.includes}
						additionalLabel={card.additionalLabel}
						additionalSub={card.additionalSub}
						additionalItems={card.additionalItems}
						feature={card.feature}
						featureNote={card.featureNote}
						inView={cardsVisible}
						subgrid={true}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- Troika Difference -->
	<section class="troika-diff-section">
		<div class="troika-diff-container">

			<div class="troika-diff-main">
				<h2 class="troika-diff-title">The Troika Difference:<br>Continuity-Focused Residential Protection</h2>
				<p class="troika-diff-intro">Troika Residential Continuity Protection™ includes structured advisory and proactive review:</p>
				<ul class="troika-diff-list">
					{#each troikaDiffPoints as point}
						<li>
							<Icon name="check" size={14} strokeWidth={2.5} />
							{point}
						</li>
					{/each}
				</ul>
				<p class="objective-label">Our objective is simple:</p>
				<p class="objective-text">To ensure a loss does not disrupt your home, your income, or your financial stability.</p>
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
			<h2>Ready to Protect Your Home?</h2>
			<p>We'll assess your situation and build a continuity plan tailored to your property and lifestyle.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>

</div>
