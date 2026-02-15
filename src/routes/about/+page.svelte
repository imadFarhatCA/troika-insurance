<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AboutHero from '$lib/components/AboutHero.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { brokerBenefits } from '$lib/data/brokerBenefits';
	import { networkFeatures } from '$lib/data/networkFeatures';

	let expandedSection: string | null = null;

	function toggleSection(section: string) {
		expandedSection = expandedSection === section ? null : section;
	}
</script>

<svelte:head>
	<title>About Us - Troika Insurance</title>
</svelte:head>

<div class="page">
	<Navigation />

	<AboutHero />

	<!-- Mission Section -->
	<section class="about-section" id="mission">
		<div class="container">
			<div class="content-wrapper">
				<p class="lead-text">
					At Troika, our mission goes far beyond selling insurance. We protect what matters most
					to you, with honesty, transparency, and a genuine understanding of your reality. Real
					protection starts with clarity, trust, and having the right partner by your side.
				</p>
			</div>
		</div>
	</section>

	<!-- Expandable Values Section -->
	<section class="values-section">
		<div class="container">
			<div class="values-wrapper">
				<!-- Our Role -->
				<button class="value-item" class:expanded={expandedSection === 'role'} on:click={() => toggleSection('role')}>
					<div class="value-header">
						<h2>Our Role</h2>
						<p class="value-subtitle">Guiding you with integrity</p>
					</div>
					{#if expandedSection === 'role'}
						<div class="value-content">
							<p>
								We guide you with integrity so you can make informed choices and confidently protect
								your:
							</p>
							<ul class="protection-list">
								<li>Assets</li>
								<li>Business</li>
								<li>Family</li>
								<li>Future</li>
							</ul>
							<p>
								And when life happens — when the unexpected strikes — we are right there beside you,
								supporting you through every step of the process.
							</p>
						</div>
					{/if}
				</button>

				<!-- Why Different -->
				<button class="value-item" class:expanded={expandedSection === 'different'} on:click={() => toggleSection('different')}>
					<div class="value-header">
						<h2>Why We're Different</h2>
						<p class="value-subtitle">Personal experience, real understanding</p>
					</div>
					{#if expandedSection === 'different'}
						<div class="value-content">
							<p>
								Being a married family man with three little daughters, I understand what it truly means
								to work hard for the things that matter. All those long days, the sacrifices, the effort
								— everything you build has meaning.
							</p>
							<p>
								Whether you're buying your first car, your first condo, or building your own business,
								these moments aren't just transactions. They're achievements. Memories. Proof of
								everything you've worked for.
							</p>
							<p class="highlight-text">
								That's why, for me, insurance is not just a piece of paper. Insurance is a safety net — a
								way to protect what you've built and ensure that when the unexpected happens, you don't
								lose the things that matter most.
							</p>
							<p>
								My goal is simple: To mitigate the loss, restore stability, and help put you back in the
								same position you were in before the event — or as close as possible.
							</p>
						</div>
					{/if}
				</button>

				<!-- How We Work -->
				<button class="value-item" class:expanded={expandedSection === 'work'} on:click={() => toggleSection('work')}>
					<div class="value-header">
						<h2>How We Work</h2>
						<p class="value-subtitle">Your advocates, not the insurer's</p>
					</div>
					{#if expandedSection === 'work'}
						<div class="value-content">
							<p>
								At Troika, our mission is simple: protect what matters most to you with clarity,
								expertise, and the strength of a national insurance network.
							</p>
							<p>
								As your brokers, we represent you — not the insurer. Our priority is to secure the right
								coverage, the right protection, and the right value for your business and your future.
							</p>
						</div>
					{/if}
				</button>

				<!-- Broker Benefits -->
				<button class="value-item" class:expanded={expandedSection === 'broker'} on:click={() => toggleSection('broker')}>
					<div class="value-header">
						<h2>Broker Advantage</h2>
						<p class="value-subtitle">Experience, expertise, and advocacy</p>
					</div>
					{#if expandedSection === 'broker'}
						<div class="value-content">
							<div class="benefit-grid">
								{#each brokerBenefits as benefit}
									<div class="benefit-card">
										<div class="benefit-icon-wrapper">
											<Icon name={benefit.icon} size={32} strokeWidth={1.5} />
										</div>
										<h3>{benefit.title}</h3>
										<p>{benefit.description}</p>
									</div>
								{/each}
							</div>
						</div>
					{/if}
				</button>

				<!-- Network -->
				<button class="value-item" class:expanded={expandedSection === 'network'} on:click={() => toggleSection('network')}>
					<div class="value-header">
						<h2>Our Network</h2>
						<p class="value-subtitle">AssurUni strength, boutique service</p>
					</div>
					{#if expandedSection === 'network'}
						<div class="value-content">
							<div class="network-features">
								{#each networkFeatures as feature}
									<div class="network-feature">
										<div class="network-icon-wrapper">
											<Icon name={feature.icon} size={32} strokeWidth={1.5} />
										</div>
										<h3>{feature.title}</h3>
										<p>{feature.description}</p>
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
			<h2>Ready to Protect What Matters Most?</h2>
			<p>Let's discuss how we can help secure your future with the right coverage.</p>
			<a href="/contact" class="btn-primary">Get in Touch</a>
		</div>
	</section>

	<Footer />
</div>
