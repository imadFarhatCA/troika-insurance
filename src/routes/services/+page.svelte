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
					<button
						class="tab-btn"
						class:active={activeTab === i}
						on:click={() => setTab(i)}
					>
						<Icon name={tab.icon} size={18} strokeWidth={1.75} />
						<span>{tab.label}</span>
					</button>
				{/each}
			</div>

			<!-- Animated Content Area -->
			<div class="tab-content-area">
				{#key activeTab}
					<div
						class="tab-panel"
						in:fly={{ x: 72, duration: 420, easing: cubicOut }}
						out:fly={{ x: -72, duration: 280, easing: cubicOut }}
					>

						{#if activeTab === 0}
							<!-- Commercial Insurance -->
							<div class="service-items">
								<div class="service-item">
									<div class="service-item-header">
										<span class="service-emoji">🏢</span>
										<h3>Commercial Property Insurance</h3>
									</div>
									<p>Protection for your building, equipment, inventory, and improvements.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<span class="service-emoji">🛡️</span>
										<h3>Commercial General Liability (CGL)</h3>
									</div>
									<p>Coverage for bodily injury, property damage, and legal liability.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<span class="service-emoji">📦</span>
										<h3>Business Interruption / Loss of Income</h3>
									</div>
									<p>Ensures financial stability when your operations are interrupted by a covered loss.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<span class="service-emoji">🚛</span>
										<h3>Commercial Auto &amp; Fleet Insurance</h3>
									</div>
									<p>From single vehicles to full fleets — tailored coverage for your road exposure.</p>
								</div>
								<div class="service-item">
									<div class="service-item-header">
										<span class="service-emoji">🧱</span>
										<h3>Builders Risk &amp; Construction Projects</h3>
									</div>
									<p>Protection during renovation, construction, and contractor operations.</p>
								</div>
							</div>

						{:else if activeTab === 1}
							<!-- Specialized Coverage — content coming soon -->
							<div class="tab-placeholder">
								<p>Content coming soon.</p>
							</div>

						{:else if activeTab === 2}
							<!-- Industry Expertise — content coming soon -->
							<div class="tab-placeholder">
								<p>Content coming soon.</p>
							</div>

						{:else if activeTab === 3}
							<!-- Personal Insurance — content coming soon -->
							<div class="tab-placeholder">
								<p>Content coming soon.</p>
							</div>

						{:else if activeTab === 4}
							<!-- Advisory & Support — content coming soon -->
							<div class="tab-placeholder">
								<p>Content coming soon.</p>
							</div>
						{/if}

					</div>
				{/key}
			</div>

		</div>
	</section>

	<!-- CTA Section -->
	<section class="about-cta">
		<div class="container">
			<h2>Not Sure What Coverage You Need?</h2>
			<p>We'll assess your risks and recommend the right protection — no jargon, no pressure.</p>
			<a href="/contact" class="btn-primary">Talk to a Broker</a>
		</div>
	</section>
</div>
