<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';
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
</svelte:head>

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero hero-split-section">
		<div class="container">
			<div class="hero-split">

				<!-- Left: text -->
				<div class="hero-content hero-text-col">
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

				<!-- Right: illustration -->
				<div class="hero-visual" class:animated={animated.title}>
					<div class="icon-bubble">
						<img src={homeownersIcon} alt="Homeowners Insurance" class="bubble-icon" />
					</div>
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
							<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
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

<style>
/* ── Hero 2-column layout ──────────────────────────────── */
.hero-split-section :global(.container) {
	max-width: 1100px;
}

.hero-split {
	display: grid;
	grid-template-columns: 1fr 420px;
	gap: 48px;
	align-items: center;
	padding: 60px 0 48px;
}

/* Override global centered hero-content for this page */
.hero-text-col {
	text-align: left !important;
	max-width: none !important;
	padding: 0 !important;
	align-items: flex-start !important;
}

.hero-text-col :global(.hero-title),
.hero-text-col :global(.hero-description) {
	text-align: left !important;
}

.hero-text-col :global(.hero-actions) {
	justify-content: flex-start !important;
	margin-bottom: 0 !important;
}

.hero-visual {
	opacity: 0;
	transform: translateY(32px) scale(0.97);
	transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
				transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
	transition-delay: 400ms;
}

.hero-visual.animated {
	opacity: 1;
	transform: translateY(0) scale(1);
}

.icon-bubble {
	width: 360px;
	height: 360px;
	border-radius: 50%;
	background: linear-gradient(135deg, #ffffff, #f5f5f5);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow:
		0 8px 32px rgba(0, 0, 0, 0.07),
		0 0 48px rgba(146, 39, 143, 0.18);
	animation: heroBubbleFloat 6s ease-in-out infinite;
}

.bubble-icon {
	width: 180px;
	height: 180px;
	display: block;
}

@keyframes heroBubbleFloat {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-14px); }
}


/* ── Products Section ──────────────────────────────────── */
.products-section {
	padding: 80px 0 80px;
	background: #ffffff;
}

.products-container {
	max-width: 1160px;
	margin: 0 auto;
	padding: 0 40px;
}

/* Section label above grid — pill badge style */
.section-label-wrap {
	text-align: center;
	margin-bottom: 48px;
}

.section-label {
	display: inline-block;
	background: linear-gradient(135deg, #92278f, #b44db1);
	color: #fff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	padding: 6px 20px;
	border-radius: 20px;
	white-space: nowrap;
	box-shadow: 0 4px 18px rgba(146, 39, 143, 0.38);
}

/* Subgrid: row 1 = card content (1fr), row 2 = troika feature (auto, equal height) */
.products-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr auto;
	gap: 28px;
}

/* ── Troika Difference Section ─────────────────────────── */
.troika-diff-section {
	background: #f9f9fb;
	padding: 80px 0;
}

.troika-diff-container {
	max-width: 1080px;
	margin: 0 auto;
	padding: 0 40px;
	display: grid;
	grid-template-columns: 1fr 320px;
	gap: 64px;
	align-items: start;
}

.troika-diff-title {
	font-size: 26px;
	font-weight: 700;
	color: #111827;
	line-height: 1.3;
	margin: 0 0 20px;
}

.troika-diff-intro {
	font-size: 15px;
	color: #4b5563;
	line-height: 1.6;
	margin-bottom: 20px;
}

.troika-diff-list {
	list-style: none;
	padding: 0;
	margin: 0 0 28px;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.troika-diff-list li {
	display: flex;
	align-items: flex-start;
	gap: 10px;
	font-size: 14px;
	color: #374151;
	line-height: 1.4;
}

.troika-diff-list li svg {
	color: #92278f;
	min-width: 14px;
	margin-top: 2px;
	flex-shrink: 0;
}

.objective-label {
	font-size: 14px;
	font-weight: 600;
	color: #111827;
	margin-bottom: 6px;
}

.objective-text {
	font-size: 15px;
	color: #4b5563;
	line-height: 1.6;
	font-style: italic;
	margin: 0;
	padding-left: 14px;
	border-left: 3px solid #92278f;
}

/* Ideal for block */
.ideal-for-block {
	background: #fff;
	border: 1px solid #e8e8ea;
	border-radius: 20px;
	padding: 28px 28px 24px;
}

.ideal-for-title {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	color: #92278f;
	margin: 0 0 18px;
}

.ideal-for-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.ideal-for-list li {
	font-size: 13.5px;
	color: #374151;
	line-height: 1.4;
	padding-left: 16px;
	position: relative;
}

.ideal-for-list li::before {
	content: '';
	position: absolute;
	left: 0;
	top: 7px;
	width: 5px;
	height: 5px;
	border-radius: 50%;
	background: #92278f;
	opacity: 0.5;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 980px) {
	.troika-diff-container {
		grid-template-columns: 1fr;
		gap: 40px;
	}
}

@media (max-width: 960px) {
	.hero-split {
		grid-template-columns: 1fr;
		gap: 32px;
		padding: 48px 0 32px;
	}

	.hero-text-col {
		text-align: center !important;
		align-items: center !important;
	}

	.hero-text-col :global(.hero-title),
	.hero-text-col :global(.hero-description) {
		text-align: center !important;
	}

	.hero-text-col :global(.hero-actions) {
		justify-content: center !important;
	}

	.hero-visual {
		display: flex;
		justify-content: center;
	}

	.icon-bubble {
		width: 280px;
		height: 280px;
	}

	.bubble-icon {
		width: 140px;
		height: 140px;
	}
}

@media (max-width: 900px) {
	.products-grid {
		grid-template-columns: 1fr;
		max-width: 480px;
		margin: 0 auto;
	}

	.products-container {
		padding: 0 24px;
	}

	.troika-diff-container {
		padding: 0 24px;
	}
}
</style>
