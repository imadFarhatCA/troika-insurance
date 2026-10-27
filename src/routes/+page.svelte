<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { openQuote } from '$lib/quoteStore';
	import HeroIllustration from '$lib/components/HeroIllustration.svelte';
	import PricingSection from '$lib/components/PricingSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import SwitchSection from '$lib/components/SwitchSection.svelte';
	import ClaimsSection from '$lib/components/ClaimsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SocialImpactSection from '$lib/components/SocialImpactSection.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	$: s = t[$language].homepage;
</script>

<Seo path="/" />

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-container">
			<div class="hero-content">
				<h1>{s.heroTitle}</h1>
				<p class="hero-subtitle">{s.heroSubtitle}</p>
				<a href="/#quote" class="btn-primary" on:click|preventDefault={() => openQuote()}>{s.heroCta}</a>
			</div>
			<HeroIllustration />
		</div>
	</section>

	<PricingSection />
	<AboutSection />
	<TestimonialsSection />
	<SwitchSection />
	<ClaimsSection />
	<ContactSection />
	<SocialImpactSection />
</div>
