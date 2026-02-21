<script lang="ts">
	import { onMount } from 'svelte';
	import TroikaProductCard from '$lib/components/TroikaProductCard.svelte';

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
</svelte:head>

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">
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

	<!-- CTA -->
	<section class="about-cta">
		<div class="container">
			<h2>Ready to Protect Your Business?</h2>
			<p>We'll assess your risks and build a continuity plan tailored to your operations.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>

</div>

<style>
/* ── Core Idea ─────────────────────────────────────────── */
.core-idea-section {
	background: #ffffff;
	padding: 72px 0 72px;
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

.products-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 28px;
	align-items: stretch;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
	.products-grid {
		grid-template-columns: 1fr;
		max-width: 480px;
		margin: 0 auto;
	}

	.products-container {
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
