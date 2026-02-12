<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import HeroIllustration from '$lib/components/HeroIllustration.svelte';
	import PricingSection from '$lib/components/PricingSection.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';

	import intactLogo from '$lib/assets/insurersLogos/intactLogo.svg';
	import avivaLogo from '$lib/assets/insurersLogos/avivaLogo.svg';
	import wawanesaLogo from '$lib/assets/insurersLogos/wawanesaLogo.svg';
	import echelonLogo from '$lib/assets/insurersLogos/echelonLogo.svg';
	import northBridgeLogo from '$lib/assets/insurersLogos/northBridge logo.svg';
	import aprilLogo from '$lib/assets/insurersLogos/aprilLogo.svg';
	import amfLogo from '$lib/assets/insurersLogos/AMFlogo.svg';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<div class="page">
	<!-- Navigation -->
	<nav class="nav">
		<div class="nav-container">
			<a href="/" class="logo">
				<img src={logo} alt="Troika Insurance" class="logo-img" />
			</a>

			<!-- Desktop Menu -->
			<div class="nav-links">
				<a href="#homeowners">Homeowners</a>
				<a href="#commercial">Commercial</a>
				<a href="#car">Car</a>
				<a href="#about">About</a>
				<a href="#claims">Claims</a>
				<div class="social-icons">
				<a href="#contact" class="social-icon" aria-label="Contact">
					<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
				</a>
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
					<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
					</svg>
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
					<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
						<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
					</svg>
				</a>
			</div>
			</div>

			<MobileMenu open={mobileMenuOpen} onToggle={toggleMobileMenu} />
		</div>
	</nav>

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

	<!-- Pricing Section -->
	<PricingSection />

	<!-- About Section -->
	<section id="about" class="about">
		<div class="container">
			<h2 class="about-title">Coverage You Can Trust, Guidance You Can Feel</h2>
			<div class="about-description">
				<p>At Troika, insurance isn't a product—it's a partnership. We assess, we advise, and you decide, with full clarity and transparency at every step. Your needs stay at the center of every recommendation, so you can protect what matters most with confidence.</p>
				<p>Our philosophy is simple: three parties, one shared goal—your best interest. With transparent advice and tailored protection, we help you safeguard your assets, your business, and your future with confidence.</p>
			</div>
			<div class="about-boxes">
				<div class="about-box about-box-purple">
					<div class="about-box-icon">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
						</svg>
					</div>
					<h3>Trust</h3>
					<p>We take pride in performing honest assessments.</p>
				</div>
				<div class="about-box about-box-pink">
					<div class="about-box-icon">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<line x1="12" y1="16" x2="12" y2="12"/>
							<line x1="12" y1="8" x2="12.01" y2="8"/>
						</svg>
					</div>
					<h3>Transparency</h3>
					<p>Every recommendation we make is based solely on what truly serves you, never on selling a product.</p>
				</div>
				<div class="about-box about-box-blue">
					<div class="about-box-icon">
						<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
							<circle cx="9" cy="7" r="4"/>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
						</svg>
					</div>
					<h3>Tailored Protection</h3>
					<p>We work under a "power of three" philosophy: you, us, and the insurer. Three parties, one common goal, your best interest at the center of every decision.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="testimonials">
		<div class="container">
			<h2>The (Almost) 5 Star Insurance Company</h2>
			<p class="testimonials-subtitle">Troika has earned top ratings from customers,<br/>and is trusted by thousands of families and businesses</p>

			<div class="stars-container">
				{#each Array(5) as _, i}
					<svg class="review-star" style="animation-delay: {i * 0.8}s" width="160" height="160" viewBox="0 0 24 24" fill="#92278f">
						<path d="M12 2.5C12.3 2.5 12.6 2.7 12.7 3L14.8 7.8 20 8.5C20.3 8.6 20.6 8.8 20.7 9.1 20.8 9.4 20.7 9.7 20.5 9.9L16.7 13.6 17.6 18.8C17.7 19.1 17.5 19.4 17.3 19.6 17.1 19.7 16.8 19.8 16.5 19.6L12 17.2 7.5 19.6C7.2 19.8 6.9 19.7 6.7 19.6 6.5 19.4 6.3 19.1 6.4 18.8L7.3 13.6 3.5 9.9C3.3 9.7 3.2 9.4 3.3 9.1 3.4 8.8 3.7 8.6 4 8.5L9.2 7.8 11.3 3C11.4 2.7 11.7 2.5 12 2.5Z"/>
					</svg>
				{/each}
			</div>

			<div class="testimonials-grid">
				<div class="testimonial-card">
					<div class="testimonial-header">
						<div class="testimonial-avatar">JD</div>
						<div class="testimonial-author">
							<h4>John Davis</h4>
							<p>@johndavis</p>
						</div>
					</div>
					<p>Switched to Troika for homeowners insurance and couldn't be happier. The process was incredibly smooth and I'm saving $200/year!</p>
				</div>

				<div class="testimonial-card">
					<div class="testimonial-header">
						<div class="testimonial-avatar">SM</div>
						<div class="testimonial-author">
							<h4>Sarah Martinez</h4>
							<p>@sarahm</p>
						</div>
					</div>
					<p>Filed a claim and got paid in literally 3 minutes. This is the future of insurance. No more waiting weeks for a response!</p>
				</div>

				<div class="testimonial-card">
					<div class="testimonial-header">
						<div class="testimonial-avatar">MK</div>
						<div class="testimonial-author">
							<h4>Michael Kim</h4>
							<p>@mkim_biz</p>
						</div>
					</div>
					<p>Best business insurance I've found. Clear pricing, no hidden fees, and actual human support when I need it.</p>
				</div>

				<div class="testimonial-card">
					<div class="testimonial-header">
						<div class="testimonial-avatar">AL</div>
						<div class="testimonial-author">
							<h4>Amanda Lopez</h4>
							<p>@alopez</p>
						</div>
					</div>
					<p>Finally, an insurance company that speaks plain English. Got my car insured in under 5 minutes from my phone.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Switch Section -->
	<section class="switch-section">
		<div class="container">
			<h2>Already insured? We'll help you switch!</h2>
			<p class="switch-subtitle">People left these insurance companies to join Troika:</p>

			<div class="competitor-bubbles">
				<div class="bubble bubble-large">
					<span class="bubble-percent">31%</span>
					<span class="bubble-text">Assurant, Farmers,<br/>Homesite, Progressive,<br/>Stillwater & more...</span>
				</div>
				<div class="bubble bubble-medium">
					<span class="bubble-percent">19%</span>
					<span class="bubble-text">Allstate</span>
				</div>
				<div class="bubble bubble-medium">
					<span class="bubble-percent">16%</span>
					<span class="bubble-text">State Farm</span>
				</div>
				<div class="bubble bubble-small">
					<span class="bubble-percent">14%</span>
					<span class="bubble-text">Travelers</span>
				</div>
				<div class="bubble bubble-small">
					<span class="bubble-percent">10%</span>
					<span class="bubble-text">Geico</span>
				</div>
				<div class="bubble bubble-small">
					<span class="bubble-percent">10%</span>
					<span class="bubble-text">Liberty<br/>Mutual</span>
				</div>
			</div>

			<a href="#quote" class="btn-switch">CHECK PRICES AND SWITCH</a>
		</div>
	</section>

	<!-- Claims Section -->
	<section id="claims" class="claims">
		<div class="container">
			<div class="claims-content">
				<div class="claims-illustration">
					<svg viewBox="0 0 300 300">
						<circle cx="150" cy="150" r="100" fill="#FFB4DA" stroke="#92278f" stroke-width="8"/>
						<circle cx="150" cy="150" r="80" fill="white"/>
						<line x1="150" y1="150" x2="150" y2="90" stroke="#92278f" stroke-width="6" stroke-linecap="round"/>
						<line x1="150" y1="150" x2="190" y2="150" stroke="#a7d8e9" stroke-width="6" stroke-linecap="round"/>
						<circle cx="150" cy="150" r="8" fill="#92278f"/>
					</svg>
				</div>
				<div class="claims-text">
					<h2>Lightning-fast claims</h2>
					<p>File a claim from your phone and get paid in minutes. Our AI handles the paperwork so you don't have to.</p>
					<a href="#quote" class="btn-secondary">File a claim</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="container">
			<h2>Get in touch</h2>
			<p class="contact-subtitle">Questions? We're here to help.</p>
			<div class="contact-grid">
				<div class="contact-card">
					<div class="contact-icon">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
					</div>
					<h3>Email</h3>
					<p>info@troikainsurance.com</p>
				</div>
				<div class="contact-card">
					<div class="contact-icon">
						<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>
					<h3>Phone</h3>
					<p>+1 (555) 123-4567</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Social Impact Section -->
	<section class="social-impact">
		<div class="container">
			<h2>Insurance with Impact</h2>
			<p class="impact-subtitle">We partner up with the best on the market to provide you with what you deserve</p>

			<div class="insurers-grid">
				<div class="insurer-logo">
					<img src={intactLogo} alt="Intact Insurance" />
				</div>
				<div class="insurer-logo">
					<img src={avivaLogo} alt="Aviva" />
				</div>
				<div class="insurer-logo">
					<img src={wawanesaLogo} alt="Wawanesa" />
				</div>
				<div class="insurer-logo">
					<img src={echelonLogo} alt="Echelon Insurance" />
				</div>
				<div class="insurer-logo">
					<img src={northBridgeLogo} alt="Northbridge Insurance" />
				</div>
				<div class="insurer-logo">
					<img src={aprilLogo} alt="April Insurance" />
				</div>
				<div class="insurer-logo">
					<img src={amfLogo} alt="AMF" />
				</div>
			</div>

		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-brand">
					<img src={logo} alt="Troika Insurance" class="footer-logo" />
					<p>Insurance made simple</p>
				</div>
				<div class="footer-links">
					<div class="footer-column">
						<h4>Products</h4>
						<a href="#homeowners">Homeowners</a>
						<a href="#commercial">Commercial</a>
						<a href="#car">Car</a>
					</div>
					<div class="footer-column">
						<h4>Company</h4>
						<a href="#about">About</a>
						<a href="#claims">Claims</a>
						<a href="#contact">Contact</a>
					</div>
				</div>
			</div>
			<div class="footer-bottom">
				<p>&copy; 2026 Troika Insurance. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		background: white;
		color: #4a4a4a;
		line-height: 1.6;
	}

	.page {
		overflow-x: hidden;
	}

	/* Navigation */
	.nav {
		position: sticky;
		top: 0;
		background: white;
		border-bottom: 1px solid #ececec;
		z-index: 100;
	}

	.nav-container {
		max-width: 100%;
		margin: 0 auto;
		padding: 20px 60px 20px 120px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.logo-img {
		height: 96px;
		width: auto;
		object-fit: contain;
	}

	.nav-links {
		display: flex;
		gap: 32px;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: #4a4a4a;
		font-weight: 500;
		font-size: 15px;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: #92278f;
	}

	.social-icons {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.social-icon {
		color: #92278f;
		display: flex;
		align-items: center;
		transition: color 0.2s;
	}

	.social-icon:hover {
		color: #ff0095;
	}

	/* Hero Section */
	.hero {
		background: #ececec;
		min-height: calc(100vh - 230px);
		display: flex;
		align-items: flex-end;
		padding: 0;
		position: relative;
		overflow: hidden;
	}

	.hero-container {
		max-width: 100%;
		width: 100%;
		position: relative;
		height: calc(100vh - 230px);
		display: flex;
		align-items: flex-end;
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 650px;
		padding: 0 60px 100px 120px;
	}

	.hero-content h1 {
		font-size: 72px;
		font-weight: 400;
		color: #4a4a4a;
		margin: 0 0 24px 0;
		line-height: 1.05;
		letter-spacing: -2px;
	}

	.hero-subtitle {
		font-size: 24px;
		color: #4a4a4a;
		margin: 0 0 48px 0;
		line-height: 1.5;
		font-weight: 400;
	}

	.btn-primary {
		display: inline-block;
		background: #92278f;
		color: #ffffff;
		padding: 24px 80px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 20px;
		box-shadow: 0px 20px 60px rgba(146, 39, 143, 0.5);
		transition: all 0.3s, transform 0.5s;
		border: none;
		cursor: pointer;
	}

	.btn-primary:hover {
		background: #751e73;
		transform: translateY(-2px);
		box-shadow: 0px 25px 70px rgba(146, 39, 143, 0.7);
	}

	.btn-primary:active {
		background: #5f1a5d;
		transform: translateY(1px);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* Testimonials Section */
	.testimonials {
		padding: 100px 24px;
		background: #f9fafb;
	}

	.testimonials h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 16px 0;
	}

	.testimonials-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 48px 0;
		line-height: 1.6;
	}

	.stars-container {
		display: flex;
		justify-content: center;
		gap: 4px;
		margin-bottom: 60px;
	}

	.review-star {
		animation: starShimmer 4s ease-in-out infinite;
	}

	@keyframes starShimmer {
		0%, 100% { filter: brightness(1); }
		40% { filter: brightness(1.3) drop-shadow(0 0 12px rgba(255, 180, 218, 0.5)); }
		50% { filter: brightness(1.35) drop-shadow(0 0 16px rgba(255, 180, 218, 0.6)); }
		60% { filter: brightness(1.3) drop-shadow(0 0 12px rgba(255, 180, 218, 0.5)); }
	}

	.testimonials-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 24px;
	}

	.testimonial-card {
		background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
		border: none;
		border-radius: 16px;
		padding: 32px;
		transition: all 0.3s;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.testimonial-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 15px 35px rgba(146, 39, 143, 0.15), 0 0 25px rgba(146, 39, 143, 0.1);
	}

	.testimonial-header {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 16px;
	}

	.testimonial-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: linear-gradient(135deg, #92278f 0%, #ff0095 100%);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 16px;
		flex-shrink: 0;
	}

	.testimonial-author h4 {
		margin: 0;
		font-size: 16px;
		font-weight: 700;
		color: #4a4a4a;
	}

	.testimonial-author p {
		margin: 4px 0 0 0;
		font-size: 14px;
		color: #9ca3af;
	}

	.testimonial-card > p {
		color: #4a4a4a;
		line-height: 1.7;
		margin: 0;
		font-size: 15px;
	}

	/* Switch Section */
	.switch-section {
		padding: 100px 24px;
		background: white;
	}

	.switch-section h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 16px 0;
	}

	.switch-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 60px 0;
	}

	.competitor-bubbles {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 32px;
		margin-bottom: 60px;
		padding: 40px 0;
	}

	.bubble {
		border-radius: 50%;
		background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 20px;
		transition: all 0.3s;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.bubble:hover {
		background: linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%);
		transform: scale(1.08);
		box-shadow: 0 10px 30px rgba(146, 39, 143, 0.15), 0 0 20px rgba(146, 39, 143, 0.1);
	}

	.bubble-large {
		width: 220px;
		height: 220px;
	}

	.bubble-medium {
		width: 180px;
		height: 180px;
	}

	.bubble-small {
		width: 150px;
		height: 150px;
	}

	.bubble-percent {
		font-size: 42px;
		font-weight: 700;
		color: #4a4a4a;
		margin-bottom: 8px;
	}

	.bubble-medium .bubble-percent {
		font-size: 36px;
	}

	.bubble-small .bubble-percent {
		font-size: 32px;
	}

	.bubble-text {
		font-size: 14px;
		color: #4a4a4a;
		line-height: 1.4;
	}

	.bubble-large .bubble-text {
		font-size: 13px;
	}

	.btn-switch {
		display: block;
		background: #92278f;
		color: white;
		padding: 18px 48px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 15px;
		transition: all 0.3s;
		border: none;
		cursor: pointer;
		letter-spacing: 0.5px;
		margin: 0 auto;
		width: fit-content;
	}

	.btn-switch:hover {
		background: #ff0095;
		transform: translateY(-2px);
		box-shadow: 0px 20px 50px rgba(255, 0, 149, 0.4);
	}

	/* Social Impact Section */
	.social-impact {
		padding: 100px 24px;
		background: #f9fafb;
	}

	.social-impact h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 16px 0;
	}

	.impact-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 60px 0;
	}

	.insurers-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 8px 4px;
		margin-bottom: 0;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.insurer-logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.insurer-logo img {
		height: 220px;
		width: auto;
		max-width: 240px;
		object-fit: contain;
		filter: grayscale(100%) brightness(0) invert(0);
		opacity: 0.7;
		transition: all 0.3s;
	}

	.insurer-logo:hover img {
		opacity: 1;
	}


	/* About Section */
	.about {
		padding: 100px 24px;
		background: #ececec;
	}

	.about-title {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 32px 0;
		letter-spacing: -1px;
	}

	.about-description {
		max-width: 800px;
		margin: 0 auto 60px;
		text-align: center;
	}

	.about-description p {
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 20px 0;
		line-height: 1.7;
	}

	.about-boxes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
	}

	.about-box {
		background: white;
		border-radius: 16px;
		padding: 40px 32px;
		text-align: left;
		transition: all 0.3s;
		border-left: 4px solid transparent;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
	}

	.about-box:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
	}

	.about-box-purple {
		border-left-color: #92278f;
	}

	.about-box-pink {
		border-left-color: #ff0095;
	}

	.about-box-blue {
		border-left-color: #a7d8e9;
	}

	.about-box-icon {
		margin-bottom: 20px;
	}

	.about-box-purple .about-box-icon {
		color: #92278f;
	}

	.about-box-pink .about-box-icon {
		color: #ff0095;
	}

	.about-box-blue .about-box-icon {
		color: #4dadc9;
	}

	.about-box h3 {
		font-size: 22px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 12px 0;
	}

	.about-box p {
		font-size: 15px;
		color: #6b7280;
		margin: 0;
		line-height: 1.7;
	}

	/* Claims Section */
	.claims {
		padding: 100px 24px;
		background: white;
	}

	.claims-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
	}

	.claims-illustration {
		display: flex;
		justify-content: center;
	}

	.claims-illustration svg {
		width: 100%;
		max-width: 300px;
		height: auto;
	}

	.claims-text h2 {
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 24px 0;
	}

	.claims-text p {
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 32px 0;
		line-height: 1.7;
	}

	.btn-secondary {
		display: inline-block;
		background: white;
		color: #92278f;
		padding: 18px 42px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		border: 2px solid #92278f;
		transition: all 0.3s;
		cursor: pointer;
	}

	.btn-secondary:hover {
		background: #92278f;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0px 20px 50px rgba(146, 39, 143, 0.4);
	}

	.btn-secondary:active {
		background: #751e73;
		border-color: #751e73;
		transform: translateY(1px);
	}

	/* Contact Section */
	.contact {
		padding: 100px 24px;
		background: #f9fafb;
	}

	.contact h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 16px 0;
	}

	.contact-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 48px 0;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 32px;
		max-width: 800px;
		margin: 0 auto;
	}

	.contact-card {
		background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
		border: none;
		border-radius: 16px;
		padding: 40px;
		text-align: center;
		transition: all 0.3s;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	}

	.contact-card:hover {
		transform: translateY(-6px);
		box-shadow: 0 15px 35px rgba(167, 216, 233, 0.25), 0 0 25px rgba(167, 216, 233, 0.15);
	}

	.contact-icon {
		color: #92278f;
		margin-bottom: 16px;
	}

	.contact-card h3 {
		font-size: 20px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 12px 0;
	}

	.contact-card p {
		color: #4a4a4a;
		margin: 0;
		font-size: 16px;
	}

	/* Footer */
	.footer {
		background: #161616;
		color: white;
		padding: 60px 24px 32px;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 60px;
		margin-bottom: 48px;
	}

	.footer-logo {
		height: 100px;
		width: auto;
		margin-bottom: 16px;
		filter: brightness(0) invert(1);
		opacity: 0.9;
	}

	.footer-brand p {
		color: #b7b7b7;
		margin: 0;
	}

	.footer-links {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
	}

	.footer-column h4 {
		font-size: 14px;
		font-weight: 600;
		color: white;
		margin: 0 0 16px 0;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.footer-column a {
		display: block;
		color: #b7b7b7;
		text-decoration: none;
		margin-bottom: 12px;
		font-size: 15px;
		transition: color 0.3s;
	}

	.footer-column a:hover {
		color: #ffffff;
	}

	.footer-bottom {
		padding-top: 32px;
		border-top: 1px solid #374151;
		text-align: center;
	}

	.footer-bottom p {
		color: #b7b7b7;
		margin: 0;
		font-size: 14px;
	}

	/* Responsive Design */
	@media (max-width: 968px) {
		.nav-links {
			display: none;
		}

		.nav-container {
			padding: 20px 24px;
		}

		.logo-img {
			height: 72px;
			width: auto;
			object-fit: contain;
		}

		.hero {
			min-height: 100vh;
			padding: 0;
			align-items: flex-end;
		}

		.hero-container {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			height: 100vh;
		}

		.hero-content {
			padding: 30px 40px 20px 24px;
			max-width: 100%;
			z-index: 10;
		}

		.claims-content,
		.footer-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.about-boxes {
			grid-template-columns: 1fr;
			max-width: 500px;
			margin: 0 auto;
		}

		.hero-content h1 {
			font-size: 56px;
			letter-spacing: -1.5px;
		}

		.about-title,
		.claims-text h2,
		.testimonials h2,
		.switch-section h2,
		.social-impact h2,
		.contact h2 {
			font-size: 36px;
		}

		.testimonials-grid {
			grid-template-columns: 1fr;
		}

		.competitor-bubbles {
			gap: 20px;
		}

		.bubble-large {
			width: 180px;
			height: 180px;
		}

		.bubble-medium {
			width: 150px;
			height: 150px;
		}

		.bubble-small {
			width: 130px;
			height: 130px;
		}

		.claims-content {
			grid-template-columns: 1fr;
		}

		.claims-illustration {
			order: -1;
		}
	}

	@media (max-width: 640px) {
		.hero {
			min-height: 100vh;
			padding: 0;
		}

		.hero-container {
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-start;
			height: 100vh;
		}

		.hero-content {
			padding: 20px 24px 15px 24px;
			max-width: 100%;
			z-index: 10;
		}

		.hero-content h1 {
			font-size: 42px;
			letter-spacing: -1px;
		}

		.hero-subtitle {
			font-size: 18px;
		}

		.btn-primary {
			padding: 19px 64px;
			font-size: 16px;
		}

		.about,
		.claims,
		.testimonials,
		.switch-section,
		.social-impact,
		.contact {
			padding: 60px 20px;
		}

		.testimonials-grid {
			grid-template-columns: 1fr;
		}

		.stars-container {
			max-width: 70%;
			margin-left: auto;
			margin-right: auto;
		}

		.stars-container svg {
			width: 80px;
			height: 80px;
		}

		.competitor-bubbles {
			flex-direction: column;
			gap: 16px;
		}

		.bubble-large,
		.bubble-medium,
		.bubble-small {
			width: 160px;
			height: 160px;
		}

		.bubble-percent {
			font-size: 32px;
		}

		.insurers-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 10px 6px;
		}

		.insurer-logo img {
			height: 110px;
			max-width: 130px;
		}

		.footer-links {
			grid-template-columns: 1fr;
		}
	}
</style>
