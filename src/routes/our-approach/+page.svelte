<script lang="ts">
	import AboutHero from '$lib/components/AboutHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let expandedSection: string | null = null;

	function toggleSection(section: string) {
		expandedSection = expandedSection === section ? null : section;
	}

	$: s = t[$language].ourApproach;
	const brokerIcons = ['shield', 'info', 'handshake', 'message-circle', 'clock'] as const;
	const networkIcons = ['trending-up', 'users', 'award'] as const;
</script>

<svelte:head>
	<title>Our Approach – Troika Insurance</title>
	<meta name="description" content="Troika Insurance operates as a trusted advisory partner — not just a broker. Our continuity-focused approach means we assess, protect, and remain by your side before and after a loss." />
	<meta name="keywords" content="insurance broker philosophy Quebec, continuity focused insurance, trusted insurance advisor Montreal, transparent insurance broker, proactive insurance broker, insurance advisory service Quebec, Troika approach" />
	<link rel="canonical" href="https://troikainsurance.com/our-approach" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Our Approach – Troika Insurance" />
	<meta property="og:description" content="Troika Insurance operates as a trusted advisory partner — not just a broker. Our continuity-focused approach means we assess, protect, and remain by your side before and after a loss." />
	<meta property="og:url" content="https://troikainsurance.com/our-approach" />
	<meta property="og:image" content="https://troikainsurance.com/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Our Approach – Troika Insurance" />
	<meta name="twitter:description" content="Troika Insurance operates as a trusted advisory partner — not just a broker. Our continuity-focused approach means we assess, protect, and remain by your side before and after a loss." />
	<meta name="twitter:image" content="https://troikainsurance.com/og-image.jpg" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "AboutPage",
		"name": "Our Approach – Troika Insurance",
		"description": "Troika Insurance operates as a proactive advisory partner focused on continuity protection — ensuring clients are properly covered before, during, and after a loss.",
		"url": "https://troikainsurance.com/our-approach",
		"provider": {
			"@type": "InsuranceAgency",
			"name": "Troika Insurance",
			"url": "https://troikainsurance.com"
		}
	}
	</script>
</svelte:head>

<div class="page">
	<AboutHero />

	<!-- Mission Section -->
	<section class="about-section" id="mission">
		<div class="container">
			<div class="content-wrapper">
				<p class="lead-text">
					{s.missionText}
				</p>
			</div>
		</div>
	</section>

	<!-- Expandable Values Section -->
	<section class="values-section">
		<div class="container">
			<div class="values-wrapper">
				<!-- Our Core Principles -->
				<button class="value-item" class:expanded={expandedSection === 'principles'} on:click={() => toggleSection('principles')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.principles.label}</h2>
							<p class="value-subtitle">{s.principles.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'principles'}
						<div class="value-content">
							<div class="benefit-grid">
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="handshake" size={32} strokeWidth={1.5} />
									</div>
									<h3>{s.principles.trust.title}</h3>
									<p>{@html s.principles.trust.desc.replace(/\n/g, '<br>')}</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="target" size={32} strokeWidth={1.5} />
									</div>
									<h3>{s.principles.transparency.title}</h3>
									<p>{@html s.principles.transparency.desc.replace(/\n/g, '<br>')}</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="shield" size={32} strokeWidth={1.5} />
									</div>
									<h3>{s.principles.tailored.title}</h3>
									<p>{s.principles.tailored.desc}</p>
								</div>
							</div>

							<div class="pot-wrapper">
								<span class="pot-eyebrow">{s.principles.potEyebrow}</span>

								<div class="pot-trio">
									<div class="pot-node">
										<div class="pot-circle">{s.principles.potClientLabel}</div>
									<span class="pot-role">{s.principles.potClientRole}</span>
									</div>
									<div class="pot-arrow">
										<span class="pot-line"></span>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
									</div>
									<div class="pot-node pot-node-accent">
										<div class="pot-circle pot-circle-accent">{s.principles.potBrokerLabel}</div>
									<span class="pot-role">{s.principles.potBrokerRole}</span>
									</div>
									<div class="pot-arrow">
										<span class="pot-line"></span>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
									</div>
									<div class="pot-node">
										<div class="pot-circle">{s.principles.potInsurerLabel}</div>
									<span class="pot-role">{s.principles.potInsurerRole}</span>
									</div>
								</div>

								<p class="pot-goal">{s.principles.potGoal}</p>

								<div class="pot-steps">
									<div class="pot-step">
										<span class="pot-step-num">01</span>
										<span class="pot-step-text">{s.principles.step1}</span>
									</div>
									<div class="pot-step-divider"></div>
									<div class="pot-step">
										<span class="pot-step-num">02</span>
										<span class="pot-step-text">{s.principles.step2}</span>
									</div>
									<div class="pot-step-divider"></div>
									<div class="pot-step">
										<span class="pot-step-num">03</span>
										<span class="pot-step-text">{s.principles.step3}</span>
									</div>
								</div>

								<p class="pot-closing">{s.principles.potClosing}</p>
							</div>
						</div>
					{/if}
				</button>

				<!-- Our Role -->
				<button class="value-item" class:expanded={expandedSection === 'role'} on:click={() => toggleSection('role')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.role.label}</h2>
							<p class="value-subtitle">{s.role.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'role'}
						<div class="value-content">
							<p>
								{s.role.desc}
							</p>
							<ul class="protection-list">
							{#each s.role.items as item}<li>{item}</li>{/each}
						</ul>
							<p>
								{s.role.closing}
							</p>
						</div>
					{/if}
				</button>

				<!-- Why Troika Is Different -->
				<button class="value-item" class:expanded={expandedSection === 'different'} on:click={() => toggleSection('different')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.different.label}</h2>
							<p class="value-subtitle">{s.different.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'different'}
					<div class="value-content">
						<p>{s.different.p1}</p>
						<p>{s.different.p2}</p>
						<p>{@html s.different.p3.replace(/\n/g, '<br>')}</p>
						<p class="highlight-text">{@html s.different.p4.replace(/\n/g, '<br>')}</p>
						<p>{@html s.different.p5.replace(/\n/g, '<br>')}</p>
					</div>
				{/if}
				</button>

				<!-- How We Work -->
				<button class="value-item" class:expanded={expandedSection === 'work'} on:click={() => toggleSection('work')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.work.label}</h2>
							<p class="value-subtitle">{s.work.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'work'}
					<div class="value-content">
						<p>{@html s.work.p1.replace(/\n/g, '<br>')}</p>
						<p>{@html s.work.p2.replace(/\n/g, '<br>')}</p>
					</div>
				{/if}
				</button>

				<!-- Broker Benefits -->
				<button class="value-item" class:expanded={expandedSection === 'broker'} on:click={() => toggleSection('broker')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.broker.label}</h2>
							<p class="value-subtitle">{s.broker.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'broker'}
					<div class="value-content">
						<div class="benefit-grid">
							{#each s.broker.cards as card, j}
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name={brokerIcons[j]} size={32} strokeWidth={1.5} />
									</div>
									<h3>{card.title}</h3>
									<p>{card.desc}</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
				</button>

				<!-- Network -->
				<button class="value-item" class:expanded={expandedSection === 'network'} on:click={() => toggleSection('network')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>{s.network.label}</h2>
							<p class="value-subtitle">{s.network.subtitle}</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'network'}
					<div class="value-content">
						<div class="benefit-grid">
							{#each s.network.cards as card, j}
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name={networkIcons[j]} size={32} strokeWidth={1.5} />
									</div>
									<h3>{card.title}</h3>
									<p>{card.desc}</p>
								</div>
							{/each}
						</div>
					</div>
				{/if}
				</button>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="about-cta">
		<div class="container">
			<h2>{s.ctaTitle}</h2>
			<p>{s.ctaBody}</p>
			<a href="/contact" class="btn-primary">{s.ctaBtn}</a>
		</div>
	</section>

</div>
