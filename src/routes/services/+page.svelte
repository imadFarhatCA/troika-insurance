<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ServicesHero from '$lib/components/ServicesHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const tabs = [
		{ label: 'Commercial Insurance', icon: 'trending-up' as const },
		{ label: 'Specialized Coverage', icon: 'star' as const },
		{ label: 'Industry Expertise', icon: 'award' as const },
		{ label: 'Personal Insurance', icon: 'users' as const },
		{ label: 'Advisory & Support', icon: 'handshake' as const }
	];

	let activeTab = 0;

	function setTab(i: number) {
		activeTab = i;
	}
</script>

<svelte:head>
	<title>Services - Troika Insurance</title>
</svelte:head>

<div class="page">
	<ServicesHero />

	<section class="services-section" id="services">
		<div class="container">

			<!-- Tab Bar -->
			<div class="services-tabs">
				{#each tabs as tab, i}
					<button class="tab-btn" class:active={activeTab === i} on:click={() => setTab(i)}>
						<Icon name={tab.icon} size={36} strokeWidth={1.25} />
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>

			<!-- Animated Content Area -->
			<div class="tab-content-area">
				{#key activeTab}
					<div class="tab-panel"
						in:fly={{ x: 72, duration: 420, easing: cubicOut }}
						out:fly={{ x: -72, duration: 280, easing: cubicOut }}
					>

						{#if activeTab === 0}
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="building" size={28} strokeWidth={1.5} /></div>
										<h3>Commercial Property Insurance</h3>
									</div>
									<p>Protection for your building, equipment, inventory, and improvements.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="shield" size={28} strokeWidth={1.5} /></div>
										<h3>Commercial General Liability (CGL)</h3>
									</div>
									<p>Coverage for bodily injury, property damage, and legal liability.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="clock" size={28} strokeWidth={1.5} /></div>
										<h3>Business Interruption / Loss of Income</h3>
									</div>
									<p>Ensures financial stability when your operations are interrupted by a covered loss.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="truck" size={28} strokeWidth={1.5} /></div>
										<h3>Commercial Auto &amp; Fleet Insurance</h3>
									</div>
									<p>From single vehicles to full fleets — tailored coverage for your road exposure.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="layers" size={28} strokeWidth={1.5} /></div>
										<h3>Builders Risk &amp; Construction Projects</h3>
									</div>
									<p>Protection during renovation, construction, and contractor operations.</p>
								</div>
							</div>

						{:else if activeTab === 1}
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="zap" size={28} strokeWidth={1.5} /></div>
										<h3>Cyber Insurance</h3>
									</div>
									<p>Protection against hacking, ransomware, data breaches, and digital threats.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="file" size={28} strokeWidth={1.5} /></div>
										<h3>Errors &amp; Omissions (E&amp;O)</h3>
									</div>
									<p>Coverage for professional mistakes or service-related losses.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="briefcase" size={28} strokeWidth={1.5} /></div>
										<h3>Directors &amp; Officers (D&amp;O)</h3>
									</div>
									<p>Protects the personal liability of executives and board members.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="tag" size={28} strokeWidth={1.5} /></div>
										<h3>Product Liability &amp; Recall</h3>
									</div>
									<p>Essential for manufacturers, importers, and distributors.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="trending-down" size={28} strokeWidth={1.5} /></div>
										<h3>Credit Insurance</h3>
									</div>
									<p>Protects your accounts receivable if a client becomes insolvent.</p>
								</div>
							</div>

						{:else if activeTab === 2}
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="coffee" size={28} strokeWidth={1.5} /></div>
										<h3>Restaurants &amp; Food Services</h3>
									</div>
									<p>Complete coverage for restaurants, cafés, and commercial kitchens.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="package" size={28} strokeWidth={1.5} /></div>
										<h3>Warehousing &amp; Logistics</h3>
									</div>
									<p>Cargo, stock, and warehouse liability protection.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="tool" size={28} strokeWidth={1.5} /></div>
										<h3>Contractors &amp; Skilled Trades</h3>
									</div>
									<p>Liability, tools, equipment, and project coverage.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="home" size={28} strokeWidth={1.5} /></div>
										<h3>Real Estate Owners &amp; Landlords</h3>
									</div>
									<p>Insurance solutions for residential, commercial, and multi-unit properties.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="settings" size={28} strokeWidth={1.5} /></div>
										<h3>Manufacturing &amp; Distribution</h3>
									</div>
									<p>Coverage for production, importing, exporting, and supply chain risks.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="star" size={28} strokeWidth={1.5} /></div>
										<h3>Jewelers &amp; High-Value Goods</h3>
									</div>
									<p>Specialized protection for jewelry stores, designers, and high-value inventory — including burglary, stock, and transit coverage.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="layers" size={28} strokeWidth={1.5} /></div>
										<h3>Construction &amp; Developers</h3>
									</div>
									<p>Complete solutions for general contractors, developers, subcontractors, and major projects.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="monitor" size={28} strokeWidth={1.5} /></div>
										<h3>Startups &amp; Technology Companies</h3>
									</div>
									<p>Tailored coverage for SaaS, AI, robotics, e-commerce, and tech innovators — including cyber, E&amp;O, IP, and commercialization risks.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="briefcase" size={28} strokeWidth={1.5} /></div>
										<h3>Finance, Consulting &amp; Professional Services</h3>
									</div>
									<p>Protection for accountants, financial advisors, consultants, and service firms facing advisory or error-related exposure.</p>
								</div>
							</div>

						{:else if activeTab === 3}
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="home" size={28} strokeWidth={1.5} /></div>
										<h3>Home Insurance</h3>
									</div>
									<p>Coverage for houses, condos, cottages, and rental properties.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="car" size={28} strokeWidth={1.5} /></div>
										<h3>Auto Insurance</h3>
									</div>
									<p>Competitive and customized coverage for all types of vehicles.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="zap" size={28} strokeWidth={1.5} /></div>
										<h3>Motorcycle Insurance</h3>
									</div>
									<p>Protection for cruisers, touring, and sport motorcycles.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="compass" size={28} strokeWidth={1.5} /></div>
										<h3>ATV / Quad / Side-by-Side Insurance</h3>
									</div>
									<p>Coverage for off-road recreational vehicles.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="anchor" size={28} strokeWidth={1.5} /></div>
										<h3>Watercraft Insurance</h3>
									</div>
									<p>Protection for boats, jet skis, pontoons, and personal watercraft.</p>
								</div>
							</div>

						{:else if activeTab === 4}
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="bar-chart" size={28} strokeWidth={1.5} /></div>
										<h3>Risk Analysis &amp; Coverage Review</h3>
									</div>
									<p>We help identify exposures and recommend the right protection.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="file-text" size={28} strokeWidth={1.5} /></div>
										<h3>Claims Guidance &amp; Advocacy</h3>
									</div>
									<p>We represent your interests and support you through the claims process.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<div class="service-icon-wrapper"><Icon name="phone" size={28} strokeWidth={1.5} /></div>
										<h3>Ongoing Support &amp; Annual Reviews</h3>
									</div>
									<p>Your insurance evolves as your business or life evolves — and we evolve with you.</p>
								</div>
							</div>
						{/if}

					</div>
				{/key}
			</div>

		</div>
	</section>

	<section class="about-cta">
		<div class="container">
			<h2>Not Sure What Coverage You Need?</h2>
			<p>We'll assess your risks and recommend the right protection — no jargon, no pressure.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>
</div>
