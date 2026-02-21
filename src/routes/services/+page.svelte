<script lang="ts">
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import ServicesHero from '$lib/components/ServicesHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	$: s = t[$language].services;

	const tabIcons = ['trending-up', 'star', 'award', 'users', 'handshake'] as const;
	const tab0Icons = ['building', 'shield', 'clock', 'truck', 'layers'] as const;
	const tab1Icons = ['zap', 'file', 'briefcase', 'tag', 'trending-down'] as const;
	const tab2Icons = ['coffee', 'package', 'tool', 'home', 'settings', 'star', 'layers', 'monitor', 'briefcase'] as const;
	const tab3Icons = ['home', 'car', 'zap', 'compass', 'anchor'] as const;
	const tab4Icons = ['bar-chart', 'file-text', 'phone'] as const;

	let activeTab = 0;

	function setTab(i: number) {
		activeTab = i;
	}
</script>

<svelte:head>
	<title>Insurance Services – Troika Insurance</title>
	<meta name="description" content="Troika Insurance offers commercial, personal, and specialized insurance services in Quebec — including professional liability, cyber coverage, industry-specific programs, and full advisory support." />
	<meta name="keywords" content="insurance services Quebec, specialized insurance Montreal, professional liability insurance Quebec, cyber liability insurance Quebec, industry specific insurance, commercial insurance services, personal insurance services Quebec, insurance advisory Montreal" />
	<link rel="canonical" href="https://troikainsurance.com/services" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Insurance Services – Troika Insurance" />
	<meta property="og:description" content="Troika Insurance offers commercial, personal, and specialized insurance services in Quebec — including professional liability, cyber coverage, industry-specific programs, and full advisory support." />
	<meta property="og:url" content="https://troikainsurance.com/services" />
	<meta property="og:image" content="https://troikainsurance.com/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Insurance Services – Troika Insurance" />
	<meta name="twitter:description" content="Troika Insurance offers commercial, personal, and specialized insurance services in Quebec — including professional liability, cyber coverage, industry-specific programs, and full advisory support." />
	<meta name="twitter:image" content="https://troikainsurance.com/og-image.jpg" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Service",
		"name": "Insurance Services",
		"description": "Comprehensive insurance services including commercial insurance, specialized coverage, industry expertise programs, personal insurance, and advisory & claims support.",
		"url": "https://troikainsurance.com/services",
		"provider": {
			"@type": "InsuranceAgency",
			"name": "Troika Insurance",
			"url": "https://troikainsurance.com"
		}
	}
	</script>
</svelte:head>

<div class="page">
	<ServicesHero />

	<section class="services-section" id="services">
		<div class="container">

			<!-- Tab Bar -->
			<div class="services-tabs">
				{#each tabs as tab, i}
					<button class="tab-btn" class:active={activeTab === i} on:click={() => setTab(i)}>
						<Icon name={tabIcons[i]} size={36} strokeWidth={1.25} />
						<span>{s.tabs[i].label}</span>
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
						{#each s.tab0 as item, j}
							<div class="service-item">
								<div class="service-item-header">
									<div class="service-icon-wrapper"><Icon name={tab0Icons[j]} size={28} strokeWidth={1.5} /></div>
									<h3>{item.title}</h3>
								</div>
								<p>{item.desc}</p>
							</div>
						{/each}
					</div>

				{:else if activeTab === 1}
					<div class="service-items">
						{#each s.tab1 as item, j}
							<div class="service-item">
								<div class="service-item-header">
									<div class="service-icon-wrapper"><Icon name={tab1Icons[j]} size={28} strokeWidth={1.5} /></div>
									<h3>{item.title}</h3>
								</div>
								<p>{item.desc}</p>
							</div>
						{/each}
					</div>

				{:else if activeTab === 2}
					<div class="service-items">
						{#each s.tab2 as item, j}
							<div class="service-item">
								<div class="service-item-header">
									<div class="service-icon-wrapper"><Icon name={tab2Icons[j]} size={28} strokeWidth={1.5} /></div>
									<h3>{item.title}</h3>
								</div>
								<p>{item.desc}</p>
							</div>
						{/each}
					</div>

				{:else if activeTab === 3}
					<div class="service-items">
						{#each s.tab3 as item, j}
							<div class="service-item">
								<div class="service-item-header">
									<div class="service-icon-wrapper"><Icon name={tab3Icons[j]} size={28} strokeWidth={1.5} /></div>
									<h3>{item.title}</h3>
								</div>
								<p>{item.desc}</p>
							</div>
						{/each}
					</div>

				{:else if activeTab === 4}
					<div class="service-items">
						{#each s.tab4 as item, j}
							<div class="service-item">
								<div class="service-item-header">
									<div class="service-icon-wrapper"><Icon name={tab4Icons[j]} size={28} strokeWidth={1.5} /></div>
									<h3>{item.title}</h3>
								</div>
								<p>{item.desc}</p>
							</div>
						{/each}
					</div>
				{/if}

					</div>
				{/key}
			</div>

		</div>
	</section>

	<section class="about-cta">
		<div class="container">
			<h2>{s.ctaTitle}</h2>
			<p>{s.ctaBody}</p>
			<a href="/contact" class="btn-primary">{s.ctaBtn}</a>
		</div>
	</section>
</div>
