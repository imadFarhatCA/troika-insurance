<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';

	let animated = { tag: false, title: false, description: false, action: false };
	let cardsVisible = false;
	let additionalExpanded = false;

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
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">
				<div class="eyebrow-tag" class:animated={animated.tag}>Residential Insurance</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						For Homeowners, Tenants,<br>Rental Properties, Plex Owners,<br>and Chalets
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">This is not just home insurance. It is a structured protection system designed to protect your property, your financial stability, and your continuity after a loss.</span>
						<span class="hero-desc-line">Whether you live in the property, rent it, or own it as an investment or secondary residence, a loss can create far more than physical damage — it can disrupt your living situation, your income, and your long-term financial stability.</span>
						<span class="hero-desc-line">Troika Residential Continuity Protection™ ensures your home and your financial continuity remain secure.</span>
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
					<div class="card-wrapper" class:in-view={cardsVisible} style="--i: {i}">

						<!-- Hover caret arrow -->
						<div class="hover-caret" aria-hidden="true">
							<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M14 16L0 0H28L14 16Z" fill="#c0c0c8"/>
							</svg>
						</div>

						<div class="product-card">

							<!-- Upper content (header + body) — takes 1fr row -->
							<div class="card-content">

							<!-- Header -->
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
								<p class="includes-label">{card.includesLabel}</p>
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

								{#if card.additionalItems}
									<div class="additional-section">
										<button
											class="read-more-btn"
											on:click={() => additionalExpanded = !additionalExpanded}
											aria-expanded={additionalExpanded}
										>
											{additionalExpanded ? 'Show less' : card.additionalLabel}
											<svg
												class="read-more-chevron"
												class:open={additionalExpanded}
												width="14" height="14" viewBox="0 0 24 24" fill="none"
												stroke="currentColor" stroke-width="2.5"
												stroke-linecap="round" stroke-linejoin="round"
											>
												<polyline points="6 9 12 15 18 9"></polyline>
											</svg>
										</button>

										{#if additionalExpanded}
											<div class="additional-content">
												<p class="additional-sub">{card.additionalSub}</p>
												<ul class="includes-list">
													{#each card.additionalItems as item}
														<li>
															<svg class="check-icon check-icon--muted" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
																<polyline points="20 6 9 17 4 12"></polyline>
															</svg>
															{item}
														</li>
													{/each}
												</ul>
											</div>
										{/if}
									</div>
								{/if}
								</div><!-- end card-body -->
							</div><!-- end card-content -->

							<!-- Troika Feature — auto row, aligned across all cards via subgrid -->
							<div class="troika-feature">
								<div class="troika-feature-label">
									<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									Troika Feature
								</div>
								<p class="troika-feature-text">{card.feature}</p>
								<p class="troika-feature-note">{card.featureNote}</p>
							</div>

						</div>
					</div>
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

.products-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr auto; /* row 1: card content, row 2: troika (equal height) */
	gap: 28px;
}

/* ── Card Wrapper — spans both grid rows via subgrid ────── */
.card-wrapper {
	position: relative;
	padding-top: 20px;
	grid-row: span 2;
	display: grid;
	grid-template-rows: subgrid;
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

/* Hover caret */
.hover-caret {
	position: absolute;
	top: 20px;
	left: 50%;
	transform: translateX(-50%) translateY(-24px);
	opacity: 0;
	transition: opacity 0.25s ease, transform 0.25s ease;
	z-index: 5;
	pointer-events: none;
	line-height: 0;
}

.card-wrapper:hover .hover-caret {
	opacity: 1;
	transform: translateX(-50%) translateY(-10px);
}

/* ── Product Card — subgrid: row 1 = content, row 2 = troika */
.product-card {
	grid-row: span 2;
	display: grid;
	grid-template-rows: subgrid;
	border-radius: 24px;
	overflow: hidden;
	background: #fff;
	border: 1px solid #e8e8ea;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	transition: transform 0.38s cubic-bezier(0.34, 1.15, 0.64, 1),
				box-shadow 0.35s ease,
				border-color 0.3s ease;
}

/* Upper section (header + divider + body) fills row 1 */
.card-content {
	display: flex;
	flex-direction: column;
	min-height: 0;
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

/* Hairline divider */
.card-divider {
	height: 1px;
	background: #eeeeee;
	margin: 0 28px;
}

/* ── Card Body ─────────────────────────────────────────── */
.card-body {
	flex: 1;
	padding: 24px 28px 18px;
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
	font-size: 13px;
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

.check-icon--muted {
	color: #b59ab4;
}

/* Additional Protection Layers */
.additional-section {
	margin-top: 20px;
	padding-top: 16px;
	border-top: 1px dashed #ddd;
}

.read-more-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background: linear-gradient(135deg, #6b1669, #92278f);
	border: none;
	border-radius: 10px;
	cursor: pointer;
	padding: 13px 14px 13px 15px;
	font-size: 12px;
	font-weight: 700;
	color: #fff;
	font-family: inherit;
	letter-spacing: 0.3px;
	box-shadow: 0 3px 12px rgba(107, 22, 105, 0.30);
	transition: box-shadow 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.15, 0.64, 1),
				filter 0.22s ease;
}

.read-more-btn:hover {
	box-shadow: 0 6px 22px rgba(107, 22, 105, 0.45);
	transform: translateY(-2px);
	filter: brightness(1.1);
}

.read-more-chevron {
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	flex-shrink: 0;
}

.read-more-chevron.open {
	transform: rotate(180deg);
}

.additional-content {
	margin-top: 14px;
}

.additional-sub {
	font-size: 11px;
	color: #b0b0b8;
	margin-bottom: 12px;
	letter-spacing: 0.3px;
}

/* ── Troika Feature ────────────────────────────────────── */
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
	margin: 0 0 6px;
}

.troika-feature-note {
	font-size: 12px;
	line-height: 1.5;
	color: #7c7c8a;
	margin: 0;
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
