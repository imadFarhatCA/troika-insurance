<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import HeroIllustration from '$lib/components/HeroIllustration.svelte';
	import PricingSection from '$lib/components/PricingSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import SwitchSection from '$lib/components/SwitchSection.svelte';
	import ClaimsSection from '$lib/components/ClaimsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SocialImpactSection from '$lib/components/SocialImpactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="page">
	<Navigation />

	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-container">
			<div class="hero-content">
				<h1>Insurance that doesn't feel like insurance</h1>
				<p class="hero-subtitle">Fast, friendly, and transparent coverage for your home, car, and business.</p>
				<a href="#quote" class="btn-primary">Get a Quote</a>
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
	<Footer />
</div>
