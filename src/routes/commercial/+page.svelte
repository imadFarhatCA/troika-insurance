<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';

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
					<div class="card-wrapper" class:in-view={cardsVisible} style="--i: {i}">

						<!-- Floating badge — outside and above the card -->
						{#if card.badge}
							<div class="floating-badge">{card.badge}</div>
						{/if}

						<!-- Bigger arrow, floats above the card with gap on hover -->
						<div class="hover-caret" aria-hidden="true">
							<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 16L0 0H28L14 16Z" fill="#c0c0c8"/>
							</svg>
						</div>

						<div class="product-card">

							<!-- Header: soft gradient tint, outlined number, icon -->
							<div class="card-header">
								<div class="card-num">0{i + 1}</div>
								<div class="card-icon-wrap">
									<Icon name={card.icon} size={22} strokeWidth={1.5} />
								</div>
								<h3 class="card-title">{card.title}</h3>
								<p class="card-subtitle">{card.subtitle}</p>
							</div>

							<!-- Hairline divider -->
							<div class="card-divider"></div>

							<!-- Body -->
							<div class="card-body">
								<p class="includes-label">Includes</p>
								<ul class="includes-list">
									{#each card.includes as item}
										<li>
											<svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											{item}
										</li>
									{/each}
								</ul>
							</div>

							<!-- Troika Feature — grey, no separator line -->
							<div class="troika-feature">
								<div class="troika-feature-label">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									Troika Feature
								</div>
								<p class="troika-feature-text">{card.feature}</p>
							</div>

						</div>
					</div>
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

/* ── Card Wrapper ───────────────────────────────────────── */
.card-wrapper {
	position: relative;
	padding-top: 96px; /* space for badge + arrow (both pushed higher) */
	display: flex;
	flex-direction: column;
	opacity: 0;
	transform: translateY(48px);
	transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
				transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	transition-delay: calc(var(--i) * 180ms + 100ms);
}

.card-wrapper.in-view {
	opacity: 1;
	transform: translateY(0);
}

/* Floating badge — 30px higher → top: 30px further up */
.floating-badge {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	background: linear-gradient(135deg, #92278f, #b44db1);
	color: #fff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	padding: 6px 20px;
	border-radius: 20px;
	white-space: nowrap;
	z-index: 10;
	box-shadow: 0 4px 18px rgba(146, 39, 143, 0.38);
}

/* Grey arrow — 40px higher above the card */
.hover-caret {
	position: absolute;
	top: 96px; /* top of card */
	left: 50%;
	transform: translateX(-50%) translateY(-60px);
	opacity: 0;
	transition: opacity 0.25s ease, transform 0.25s ease;
	z-index: 5;
	pointer-events: none;
	line-height: 0;
}

.card-wrapper:hover .hover-caret {
	opacity: 1;
	transform: translateX(-50%) translateY(-40px); /* 40px above card */
}

/* ── Product Card ──────────────────────────────────────── */
.product-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: 24px;
	overflow: hidden;
	background: #fff;
	border: 1px solid #e8e8ea;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	transition: transform 0.38s cubic-bezier(0.34, 1.15, 0.64, 1),
				box-shadow 0.35s ease,
				border-color 0.3s ease;
}

.card-wrapper:hover .product-card {
	transform: translateY(10px);
	box-shadow: 0 24px 60px rgba(0, 0, 0, 0.10);
	border-color: #e8e8ea;
}

/* ── Card Header ───────────────────────────────────────── */
.card-header {
	padding: 32px 28px 26px;
	position: relative;
	background: linear-gradient(160deg, #fdf5ff 0%, #fff 55%);
}

/* Outlined number — trendy stroke-only typographic style */
.card-num {
	position: absolute;
	top: 18px;
	right: 22px;
	font-size: 72px;
	font-weight: 900;
	color: transparent;
	-webkit-text-stroke: 1.5px rgba(146, 39, 143, 0.18);
	line-height: 1;
	user-select: none;
	letter-spacing: -3px;
}

/* Square icon with purple fill */
.card-icon-wrap {
	width: 46px;
	height: 46px;
	border-radius: 13px;
	background: #92278f;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin-bottom: 20px;
}

.card-title {
	font-size: 18px;
	font-weight: 700;
	color: #111827;
	line-height: 1.3;
	margin: 0 0 7px;
}

.card-subtitle {
	font-size: 13px;
	color: #6b7280;
	font-weight: 400;
	margin: 0;
}

/* Hairline divider between header and body */
.card-divider {
	height: 1px;
	background: #eeeeee;
	margin: 0 28px;
}

/* ── Card Body ─────────────────────────────────────────── */
.card-body {
	flex: 1;
	padding: 24px 28px 28px;
}

.includes-label {
	font-size: 9.5px;
	font-weight: 700;
	letter-spacing: 1.8px;
	text-transform: uppercase;
	color: #9ca3af;
	margin-bottom: 14px;
}

.includes-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.includes-list li {
	font-size: 13.5px;
	color: #374151;
	line-height: 1.4;
	display: flex;
	align-items: flex-start;
	gap: 9px;
}

.check-icon {
	color: #92278f;
	min-width: 13px;
	margin-top: 2px;
	flex-shrink: 0;
}

/* ── Troika Feature — grey, no top border line ─────────── */
.troika-feature {
	padding: 20px 28px;
	background: #f2f2f4;
}

.troika-feature-label {
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 9.5px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	color: #92278f;
	margin-bottom: 7px;
}

.troika-feature-text {
	font-size: 13px;
	line-height: 1.6;
	color: #4a4a4a;
	font-style: italic;
	margin: 0;
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
