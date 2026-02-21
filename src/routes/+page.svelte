<script lang="ts">
	import HeroIllustration from '$lib/components/HeroIllustration.svelte';
	import PricingSection from '$lib/components/PricingSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import TestimonialsSection from '$lib/components/TestimonialsSection.svelte';
	import SwitchSection from '$lib/components/SwitchSection.svelte';
	import ClaimsSection from '$lib/components/ClaimsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SocialImpactSection from '$lib/components/SocialImpactSection.svelte';
</script>

<svelte:head>
	<title>Troika Insurance – Premium Insurance Brokers for Home, Auto & Business</title>
	<meta name="description" content="Troika Insurance is a premium insurance brokerage in Quebec offering homeowners, car, and commercial insurance. Continuity-focused protection for individuals and businesses." />
	<meta name="keywords" content="insurance broker Quebec, insurance broker Montreal, home insurance Quebec, car insurance Quebec, commercial insurance Quebec, property insurance, business insurance, auto insurance broker, residential insurance, continuity protection, insurance advisory" />
	<link rel="canonical" href="https://troikainsurance.com/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Troika Insurance – Premium Insurance Brokers for Home, Auto & Business" />
	<meta property="og:description" content="Troika Insurance is a premium insurance brokerage in Quebec offering homeowners, car, and commercial insurance. Continuity-focused protection for individuals and businesses." />
	<meta property="og:url" content="https://troikainsurance.com/" />
	<meta property="og:image" content="https://troikainsurance.com/og-image.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Troika Insurance – Premium Insurance Brokers for Home, Auto & Business" />
	<meta name="twitter:description" content="Troika Insurance is a premium insurance brokerage in Quebec offering homeowners, car, and commercial insurance. Continuity-focused protection for individuals and businesses." />
	<meta name="twitter:image" content="https://troikainsurance.com/og-image.jpg" />
	<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Troika Insurance – Premium Insurance Brokers for Home, Auto & Business",
		"description": "Troika Insurance is a premium insurance brokerage in Quebec offering homeowners, car, and commercial insurance. Continuity-focused protection for individuals and businesses.",
		"url": "https://troikainsurance.com/",
		"provider": {
			"@type": "InsuranceAgency",
			"name": "Troika Insurance",
			"url": "https://troikainsurance.com"
		}
	}
	</script>
</svelte:head>

<div class="page">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-container">
			<div class="hero-content">
				<h1>Peace of mind takes more than a policy.</h1>
				<p class="hero-subtitle">Your Premium Insurance Brokers for Home, Auto & Business</p>
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
</div>
