<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { openQuote } from '$lib/quoteStore';
	import { onMount } from 'svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ClaimModal from '$lib/components/ClaimModal.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let animated = { tag: false, title: false, action: false };
	let isModalOpen = false;

	onMount(() => {
		setTimeout(() => { animated.tag = true; }, 150);
		setTimeout(() => { animated.title = true; }, 350);
		setTimeout(() => { animated.action = true; }, 750);
	});

	$: s = t[$language].claims;
</script>

<Seo path="/claims" />

<div class="page">

	<!-- Hero -->
	<section class="minimal-hero">
		<div class="container">
			<div class="hero-content">

				<div class="hero-icon-wrap" class:animated={animated.title}>
					<svg class="hero-svg-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M32 4L8 14v18c0 14.4 10.4 27.8 24 31 13.6-3.2 24-16.6 24-31V14L32 4z" fill="#92278f" opacity="0.1" stroke="#92278f" stroke-width="2" stroke-linejoin="round"/>
						<path d="M22 33l7 7 13-14" stroke="#92278f" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>

				<div class="eyebrow-tag" class:animated={animated.tag}>{s.eyebrow}</div>

				<div class="hero-text-group" class:animated={animated.title}>
					<h1 class="hero-title">
						{@html s.heroTitle.replace(/\n/g, '<br>')}
					</h1>
					<p class="hero-description">
						<span class="hero-desc-line">{s.heroDesc1}</span>
						<span class="hero-desc-line">{s.heroDesc2}</span>
					</p>
				</div>

			</div>
		</div>
	</section>

	<!-- Your Advocate -->
	<section class="advocate-section">
		<div class="advocate-container">
			<p class="advocate-eyebrow">{s.advocateEyebrow}</p>
			<h2 class="advocate-title">{s.advocateTitle}</h2>
			<p class="advocate-intro">{s.advocateIntro}</p>

			<div class="advocate-grid">
				{#each s.advocateItems as item}
					<div class="advocate-item">
						<div class="advocate-check">
							<Icon name="check" size={14} strokeWidth={2.5} />
						</div>
						<span>{item}</span>
					</div>
				{/each}
			</div>

			<p class="advocate-closing">{s.advocateClosing}</p>
		</div>
	</section>

	<!-- Troika Claims Model -->
	<section class="model-section">
		<div class="model-container">
			<h2 class="model-title">{s.modelTitle}</h2>
			<div class="model-steps">
				{#each s.steps as step}
					<div class="model-step">
						<span class="step-number">{step.number}</span>
						<h3 class="step-title">{step.title}</h3>
						<p class="step-body">{step.body}</p>
					</div>
				{/each}
			</div>

			<div class="model-cta">
				<button class="btn-primary" on:click={() => isModalOpen = true}>{s.reportCta}</button>
			</div>
		</div>
	</section>

	<!-- Claim Support Contact -->
	<section class="contact-section">
		<div class="contact-container">
			<div class="contact-text">
				<h2 class="contact-title">{s.contactTitle}</h2>
				<p class="contact-intro">{s.contactIntro}</p>
				<p class="contact-body">{s.contactBody1}</p>
				<p class="contact-body">{s.contactBody2}</p>
			</div>
			<div class="contact-card">
				<p class="contact-card-title">{s.contactCardTitle}</p>
				<ul class="contact-details">
					<li>
						<span class="contact-icon">📞</span>
						<span><strong>{s.contactPhone}</strong> [Insert Troika Phone Number]</span>
					</li>
					<li>
						<span class="contact-icon">✉️</span>
						<span><strong>{s.contactEmail}</strong> [Insert Troika Claims Email]</span>
					</li>
					<li>
						<span class="contact-icon">🕒</span>
						<span><strong>{s.contactAvailability}</strong> {s.contactHours}</span>
					</li>
					<li class="emergency-note">
						<span class="contact-icon">🚨</span>
						<span>{s.contactEmergency}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- The Troika Commitment -->
	<section class="commitment-section">
		<div class="commitment-container">
			<p class="commitment-eyebrow">{s.commitmentEyebrow}</p>
			<blockquote class="commitment-quote">
				{s.commitmentQuote}
			</blockquote>
			<p class="commitment-body">
			{s.commitmentBody}
		</p>
		</div>
	</section>

	<!-- CTA -->
	<section class="about-cta">
		<div class="container">
			<h2>{s.ctaTitle}</h2>
			<p>{s.ctaBody}</p>
			<a href="/#quote" class="btn-primary" on:click|preventDefault={() => openQuote()}>{s.ctaBtn}</a>
		</div>
	</section>

</div>

<ClaimModal isOpen={isModalOpen} on:close={() => isModalOpen = false} />

<style>
/* ── Hero Icon ─────────────────────────────────────────── */
.hero-icon-wrap {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
				transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	transition-delay: 100ms;
	margin-bottom: 24px;
}

.hero-icon-wrap.animated {
	opacity: 1;
	transform: translateY(0);
}

.hero-svg-icon {
	width: 100px;
	height: 100px;
	display: block;
	margin: 0 auto;
}

/* ── Advocate Section ──────────────────────────────────── */
.advocate-section {
	background: #f9f9fb;
	padding: 80px 0;
}

.advocate-container {
	max-width: 780px;
	margin: 0 auto;
	padding: 0 40px;
	text-align: center;
}

.advocate-eyebrow {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	color: #92278f;
	margin: 0 0 12px;
}

.advocate-title {
	font-size: 28px;
	font-weight: 700;
	color: #111827;
	line-height: 1.3;
	margin: 0 0 16px;
}

.advocate-intro {
	font-size: 16px;
	color: #4b5563;
	line-height: 1.7;
	margin-bottom: 40px;
}

.advocate-grid {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 14px;
	margin-bottom: 40px;
	text-align: left;
}

.advocate-item {
	display: flex;
	align-items: flex-start;
	gap: 14px;
	background: #fff;
	border: 1px solid #e8e8ea;
	border-radius: 14px;
	padding: 18px 20px;
	font-size: 15px;
	color: #374151;
	line-height: 1.5;
}

.advocate-item:last-child {
	grid-column: 1 / -1;
}

.advocate-check {
	flex-shrink: 0;
	width: 28px;
	height: 28px;
	border-radius: 8px;
	background: #92278f;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin-top: 1px;
}

.advocate-closing {
	font-size: 15px;
	color: #6b7280;
	font-style: italic;
	line-height: 1.6;
	margin: 0;
}

/* ── Claims Model ──────────────────────────────────────── */
.model-section {
	background: #f9f9fb;
	padding: 80px 0;
}

.model-container {
	max-width: 1080px;
	margin: 0 auto;
	padding: 0 40px;
}

.model-title {
	font-size: 28px;
	font-weight: 700;
	color: #111827;
	line-height: 1.3;
	margin: 0 0 40px;
	text-align: center;
}

.model-steps {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 28px;
}

.model-step {
	background: #fff;
	border: 1px solid #e8e8ea;
	border-radius: 20px;
	padding: 36px 32px;
	position: relative;
	overflow: hidden;
	background: linear-gradient(160deg, #fdf5ff 0%, #fff 55%);
}

.step-number {
	position: absolute;
	top: 14px;
	right: 20px;
	font-size: 72px;
	font-weight: 900;
	color: transparent;
	-webkit-text-stroke: 1.5px rgba(146, 39, 143, 0.18);
	line-height: 1;
	user-select: none;
	letter-spacing: -3px;
}

.step-title {
	font-size: 20px;
	font-weight: 700;
	color: #111827;
	margin: 56px 0 14px;
}

.step-body {
	font-size: 15px;
	color: #4b5563;
	line-height: 1.65;
	margin: 0;
}

.model-cta {
	text-align: center;
	margin-top: 78px;
}

/* ── Contact Section ───────────────────────────────────── */
.contact-section {
	background: #ffffff;
	padding: 80px 0;
}

.contact-container {
	max-width: 1080px;
	margin: 0 auto;
	padding: 0 40px;
	display: grid;
	grid-template-columns: 1fr 380px;
	gap: 64px;
	align-items: start;
}

.contact-title {
	font-size: 24px;
	font-weight: 700;
	color: #111827;
	margin: 0 0 16px;
}

.contact-intro {
	font-size: 16px;
	color: #111827;
	font-weight: 500;
	line-height: 1.6;
	margin-bottom: 12px;
}

.contact-body {
	font-size: 15px;
	color: #4b5563;
	line-height: 1.7;
	margin-bottom: 12px;
}

.contact-card {
	background: #f9f9fb;
	border: 1px solid #e8e8ea;
	border-radius: 20px;
	padding: 32px;
}

.contact-card-title {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	color: #92278f;
	margin: 0 0 20px;
}

.contact-details {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.contact-details li {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	font-size: 15px;
	color: #374151;
	line-height: 1.5;
}

.contact-icon {
	flex-shrink: 0;
	font-size: 16px;
	margin-top: 1px;
}

.emergency-note {
	padding-top: 14px;
	border-top: 1px solid #e8e8ea;
	color: #6b7280;
	font-size: 13px !important;
}

/* ── Commitment Section ────────────────────────────────── */
.commitment-section {
	background: #92278f;
	padding: 80px 0;
}

.commitment-container {
	max-width: 720px;
	margin: 0 auto;
	padding: 0 40px;
	text-align: center;
}

.commitment-eyebrow {
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.6px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.6);
	margin: 0 0 24px;
}

.commitment-quote {
	font-size: 22px;
	font-weight: 400;
	color: #ffffff;
	line-height: 1.6;
	margin: 0 0 20px;
	font-style: italic;
}

.commitment-body {
	font-size: 16px;
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.6;
	margin: 0;
}

/* ── Responsive ────────────────────────────────────────── */
@media (max-width: 900px) {
	.model-steps {
		grid-template-columns: 1fr;
		max-width: 480px;
		margin: 0 auto;
	}

	.contact-container {
		grid-template-columns: 1fr;
		gap: 40px;
	}

	.contact-text {
		text-align: center;
	}

	.advocate-grid {
		grid-template-columns: 1fr;
	}

	.advocate-item:last-child {
		grid-column: auto;
	}

	.advocate-container,
	.model-container,
	.contact-container,
	.commitment-container {
		padding: 0 24px;
	}
}
</style>
