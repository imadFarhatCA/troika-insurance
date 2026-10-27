<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { openQuote } from '$lib/quoteStore';
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

<Seo path="/services" />

<div class="page">
	<ServicesHero />

	<section class="services-section" id="services">
		<div class="container">

			<!-- Tab Bar -->
			<div class="services-tabs">
				{#each s.tabs as tab, i}
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
			<a href="/#quote" class="btn-primary" on:click|preventDefault={() => openQuote()}>{s.ctaBtn}</a>
		</div>
	</section>
</div>
