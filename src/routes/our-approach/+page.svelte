<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AboutHero from '$lib/components/AboutHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let expandedSection: string | null = null;

	function toggleSection(section: string) {
		expandedSection = expandedSection === section ? null : section;
	}
</script>

<svelte:head>
	<title>Our Approach - Troika Insurance</title>
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
				<!-- Our Core Principles -->
				<button class="value-item" class:expanded={expandedSection === 'principles'} on:click={() => toggleSection('principles')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>Our Core Principles</h2>
							<p class="value-subtitle">Trust, transparency, and tailored protection</p>
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
									<h3>Trust</h3>
									<p>We take pride in giving honest, thorough assessments.<br>No shortcuts, no guesswork — just real conversations about your needs.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="target" size={32} strokeWidth={1.5} />
									</div>
									<h3>Transparency</h3>
									<p>Every recommendation we make is guided by what truly serves you.<br>No upselling. No hidden agenda. Just clear, honest advice.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="shield" size={32} strokeWidth={1.5} />
									</div>
									<h3>Tailored Protection</h3>
									<p>We work under a unique "power of three" philosophy — three parties, one shared goal.</p>
								</div>
							</div>

							<div class="pot-wrapper">
								<span class="pot-eyebrow">The Power of Three</span>

								<div class="pot-trio">
									<div class="pot-node">
										<div class="pot-circle">You</div>
										<span class="pot-role">The client</span>
									</div>
									<div class="pot-arrow">
										<span class="pot-line"></span>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
									</div>
									<div class="pot-node pot-node-accent">
										<div class="pot-circle pot-circle-accent">Us</div>
										<span class="pot-role">Your broker</span>
									</div>
									<div class="pot-arrow">
										<span class="pot-line"></span>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
									</div>
									<div class="pot-node">
										<div class="pot-circle">Insurer</div>
										<span class="pot-role">The carrier</span>
									</div>
								</div>

								<p class="pot-goal">One shared goal — <em>your best interest</em> at the center of every decision.</p>

								<div class="pot-steps">
									<div class="pot-step">
										<span class="pot-step-num">01</span>
										<span class="pot-step-text">We assess</span>
									</div>
									<div class="pot-step-divider"></div>
									<div class="pot-step">
										<span class="pot-step-num">02</span>
										<span class="pot-step-text">We advise</span>
									</div>
									<div class="pot-step-divider"></div>
									<div class="pot-step">
										<span class="pot-step-num">03</span>
										<span class="pot-step-text">You decide</span>
									</div>
								</div>

								<p class="pot-closing">Because your peace of mind requires more than a policy — it requires understanding, clarity, and a team that stands with you.</p>
							</div>
						</div>
					{/if}
				</button>

				<!-- Our Role -->
				<button class="value-item" class:expanded={expandedSection === 'role'} on:click={() => toggleSection('role')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>Our Role</h2>
							<p class="value-subtitle">Guiding you with integrity</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'role'}
						<div class="value-content">
							<p>
								We guide you with integrity so you can make informed choices and confidently protect your:
							</p>
							<ul class="protection-list">
								<li>Assets</li>
								<li>Business</li>
								<li>Family</li>
								<li>Future</li>
							</ul>
							<p>
								And when life happens — when the unexpected strikes — we are right there beside you, supporting you through every step of the process.
							</p>
						</div>
					{/if}
				</button>

				<!-- Why Troika Is Different -->
				<button class="value-item" class:expanded={expandedSection === 'different'} on:click={() => toggleSection('different')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>Why Troika Is Different</h2>
							<p class="value-subtitle">Personal experience, real understanding</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'different'}
						<div class="value-content">
							<p>
								Being a married family man with three little daughters, I understand what it truly means to work hard for the things that matter.
							</p>
							<p>
								All those long days, the sacrifices, the effort — everything you build has meaning.
							</p>
							<p>
								Whether you're buying your first car, your first condo, or building your own business, these moments aren't just transactions.<br>
								They're achievements. Memories. Proof of everything you've worked for.
							</p>
							<p class="highlight-text">
								That's why, for me, insurance is not just a piece of paper.<br>
								Insurance is a safety net — a way to protect what you've built and ensure that when the unexpected happens, you don't lose the things that matter most.
							</p>
							<p>
								My goal is simple:<br>
								To mitigate the loss, restore stability, and help put you back in the same position you were in before the event — or as close as possible.
							</p>
						</div>
					{/if}
				</button>

				<!-- How We Work -->
				<button class="value-item" class:expanded={expandedSection === 'work'} on:click={() => toggleSection('work')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>How We Work</h2>
							<p class="value-subtitle">Your advocates, not the insurer's</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'work'}
						<div class="value-content">
							<p>
								At Troika, our mission is simple:<br>
								protect what matters most to you with clarity, expertise, and the strength of a national insurance network.
							</p>
							<p>
								As your brokers, we represent you — not the insurer.<br>
								Our priority is to secure the right coverage, the right protection, and the right value for your business and your future.
							</p>
						</div>
					{/if}
				</button>

				<!-- Broker Benefits -->
				<button class="value-item" class:expanded={expandedSection === 'broker'} on:click={() => toggleSection('broker')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>Broker Advantage</h2>
							<p class="value-subtitle">Experience, expertise, and advocacy</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'broker'}
						<div class="value-content">
							<div class="benefit-grid">
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="shield" size={32} strokeWidth={1.5} />
									</div>
									<h3>We Protect Your Interests</h3>
									<p>We don't work for a single insurance company — we work for you. We search the market, compare insurers, and recommend coverage that truly fits your needs.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="info" size={32} strokeWidth={1.5} />
									</div>
									<h3>We Speak the Insurer's Language</h3>
									<p>Insurance contracts can be complex. We ensure every detail is accurate, properly represented, and aligned with your risk — preventing issues at claim time.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="handshake" size={32} strokeWidth={1.5} />
									</div>
									<h3>We Negotiate on Your Behalf</h3>
									<p>Experienced brokers secure better premiums and stronger terms. We know each insurer's appetite, helping us negotiate from a position of knowledge and strength.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="message-circle" size={32} strokeWidth={1.5} />
									</div>
									<h3>We Stand With You During Claims</h3>
									<p>If a loss happens, you're not facing the insurer alone. We advocate for you, guide the process, and ensure you receive what your policy entitles you to.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="clock" size={32} strokeWidth={1.5} />
									</div>
									<h3>We Save You Time &amp; Stress</h3>
									<p>You run your business. We handle the strategy, paperwork, follow-ups, and market negotiations.</p>
								</div>
							</div>
						</div>
					{/if}
				</button>

				<!-- Network -->
				<button class="value-item" class:expanded={expandedSection === 'network'} on:click={() => toggleSection('network')}>
					<div class="value-header">
						<div class="value-header-text">
							<h2>The Strength of the AssurUni Network</h2>
							<p class="value-subtitle">AssurUni strength, boutique service</p>
						</div>
						<svg class="value-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if expandedSection === 'network'}
						<div class="value-content">
							<div class="benefit-grid">
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="trending-up" size={32} strokeWidth={1.5} />
									</div>
									<h3>Enhanced Market Capacity</h3>
									<p>Through the AssurUni network, we access more insurers, specialty markets, and competitive products — allowing us to handle both simple and complex risks effectively.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="users" size={32} strokeWidth={1.5} />
									</div>
									<h3>Access to Top Industry Experts</h3>
									<p>We collaborate with leading underwriters and specialists across Canada. This network expertise ensures you receive knowledgeable, high-quality advice tailored to your operations.</p>
								</div>
								<div class="benefit-card">
									<div class="benefit-icon-wrapper">
										<Icon name="award" size={32} strokeWidth={1.5} />
									</div>
									<h3>Big-Network Power, Boutique-Level Service</h3>
									<p>With AssurUni, you benefit from the reach of a large organization while enjoying the personalized attention of a dedicated advisor.</p>
								</div>
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
