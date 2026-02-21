<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';
	import carIcon from '$lib/assets/icons/Car Icon.svg';

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
			icon: 'car' as const,
			title: 'Vehicle Asset Protection',
			subtitle: 'Protecting the physical value of your vehicle',
			includesLabel: 'Includes protection for',
			includes: [
				'Collision damage',
				'Comprehensive protection (fire, theft, vandalism, weather)',
				'Replacement cost protection (new vehicle protection)',
				'Permanently attached equipment and accessories',
				'Glass and windshield protection',
				'Protection for leased and financed vehicles'
			],
			additionalLabel: 'Additional Protection Layers',
			additionalSub: 'Optional structured protection includes',
			additionalItems: [
				'Replacement cost coverage (new vehicle protection)',
				'Accident forgiveness options',
				'Coverage for attached business equipment',
				'Protection for leased, financed, or company vehicles',
				'Multi-vehicle and mixed-use structuring'
			],
			feature: 'Coverage structured to ensure proper replacement and eliminate unexpected financial gaps.',
			featureNote: 'This protects both personal and business vehicle investments.'
		},
		{
			icon: 'trending-up' as const,
			title: 'Mobility & Income Continuity Protection',
			subtitle: 'Protecting your ability to continue working and operating',
			includesLabel: 'Includes protection for',
			includes: [
				'Rental vehicle replacement',
				'Loss of use protection',
				'Coverage for business use exposure',
				'Protection for tools and equipment stored in the vehicle',
				'Continuity protection for vehicles essential to operations'
			],
			additionalLabel: null,
			additionalSub: null,
			additionalItems: null,
			feature: 'Coverage aligned with how the vehicle is actually used — personal and professional — ensuring uninterrupted mobility.',
			featureNote: 'This protects your ability to continue working and operating normally.'
		},
		{
			icon: 'shield' as const,
			title: 'Liability Shield',
			subtitle: 'Protecting your assets, income, and financial security',
			includesLabel: 'Includes protection for',
			includes: [
				'Civil liability for bodily injury and property damage',
				'Legal defense costs',
				'Protection against uninsured or underinsured drivers',
				'Protection aligned with business and personal usage exposure'
			],
			additionalLabel: null,
			additionalSub: null,
			additionalItems: null,
			feature: 'Liability limits structured based on real financial exposure.',
			featureNote: 'This protects your personal assets, business, and future income.'
		}
	];

	const troikaDiffPoints = [
		'Proper classification of vehicle usage',
		'Elimination of coverage gaps',
		'Protection aligned with real operational exposure',
		'Full transparency and structured advisory'
	];

	const idealFor = [
		'Personal vehicle owners',
		'Self-employed professionals and contractors',
		'Delivery and courier operators',
		'Rideshare and transportation operators',
		'Business vehicle and fleet owners',
		'Tradespeople who depend on their vehicle for work',
		'Leased and financed vehicle owners'
	];
</script>

<svelte:head>
	<title>Car Insurance – Troika Insurance</title>
</svelte:head>

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">

				<div class="hero-visual" class:animated={animated.title}>
					<img src={carIcon} alt="Car Insurance" class="hero-icon" />
				</div>

				<div class="eyebrow-tag" class:animated={animated.tag}>Auto Insurance</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						For Personal and<br>Commercial Vehicle Use
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">This is not just vehicle insurance. It is a structured protection system designed to protect your vehicle, your income, and your ability to continue operating — whether for personal or business use.</span>
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
				<span class="section-label">The Three Pillars of Mobility Continuity™</span>
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
				<h2 class="troika-diff-title">The Troika Difference:<br>Usage-Based Protection Structuring</h2>
				<p class="troika-diff-intro">Most vehicle policies fail to properly address mixed personal and commercial use. Troika Mobility Continuity Protection™ ensures:</p>
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
				<p class="objective-text">To ensure an accident does not interrupt your mobility, your business, or your financial stability.</p>
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

	<!-- Core Idea -->
	<section class="core-idea-section">
		<div class="core-idea-container">
			<p class="core-idea-lead">
				For many professionals and business owners, a vehicle is more than transportation.<br>
				It is essential to <strong>daily operations, income generation, and personal continuity.</strong>
			</p>
			<p class="core-idea-body">
				Troika Mobility Continuity Protection™ ensures that an accident does not interrupt your mobility, your business, or your financial stability.
			</p>
		</div>
	</section>

	<!-- CTA -->
	<section class="about-cta">
		<div class="container">
			<h2>Ready to Protect Your Vehicle?</h2>
			<p>We'll assess your situation and build a continuity plan tailored to your vehicle use and lifestyle.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>

</div>

<style>
.hero-visual {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
				transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	transition-delay: 100ms;
	margin-bottom: 24px;
}

.hero-visual.animated {
	opacity: 1;
	transform: translateY(0);
}

.hero-icon {
	width: 144px;
	height: 144px;
	display: block;
	margin: 0 auto;
}

/* ── Products Section ──────────────────────────────────── */
.products-section {
	padding: 80px 0;
	background: #ffffff;
}

.products-container {
	max-width: 1160px;
	margin: 0 auto;
	padding: 0 40px;
}

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

/* ── Core Idea ─────────────────────────────────────────── */
.core-idea-section {
	background: #ffffff;
	padding: 72px 0;
}

.core-idea-container {
	max-width: 720px;
	margin: 0 auto;
	padding: 0 40px;
	text-align: center;
}

.core-idea-lead {
	font-size: 20px;
	line-height: 1.7;
	color: #1a202c;
	margin-bottom: 20px;
	font-weight: 400;
}

.core-idea-lead strong {
	color: #92278f;
	font-weight: 600;
}

.core-idea-body {
	font-size: 16px;
	line-height: 1.6;
	color: #6b7280;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 980px) {
	.troika-diff-container {
		grid-template-columns: 1fr;
		gap: 40px;
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

	.core-idea-container {
		padding: 0 24px;
	}

	.core-idea-lead {
		font-size: 18px;
	}
}
</style>
