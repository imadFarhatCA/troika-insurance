<script lang="ts">
	import heroIllustration from '$lib/assets/hero-illustration.svg';
	import logo from '$lib/assets/logo.svg';
	import rentersIcon from '$lib/assets/icons/RENTERS Icon.svg';
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';
	import corporateIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import carIcon from '$lib/assets/icons/Car Icon.svg';
	import customIcon from '$lib/assets/icons/CUSTOM Icon.svg';

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
				<a href="#contact" class="contact-icon" aria-label="Contact">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
						<polyline points="22,6 12,13 2,6"></polyline>
					</svg>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button class="mobile-menu-btn" on:click={toggleMobileMenu} aria-label="Menu">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					{#if mobileMenuOpen}
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					{:else}
						<line x1="3" y1="12" x2="21" y2="12"></line>
						<line x1="3" y1="6" x2="21" y2="6"></line>
						<line x1="3" y1="18" x2="21" y2="18"></line>
					{/if}
				</svg>
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="mobile-menu">
				<a href="#homeowners">Homeowners</a>
				<a href="#commercial">Commercial</a>
				<a href="#car">Car</a>
				<a href="#about">About</a>
				<a href="#claims">Claims</a>
				<a href="#contact">Contact</a>
			</div>
		{/if}
	</nav>

	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-container">
			<div class="hero-content">
				<h1>Insurance that doesn't feel like insurance</h1>
				<p class="hero-subtitle">Fast, friendly, and transparent coverage for your home, car, and business.</p>
				<a href="#quote" class="btn-primary">Get a Quote</a>
			</div>
			<div class="hero-illustration">
				<img src={heroIllustration} alt="Troika Insurance Hero" class="illustration" />
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section id="pricing" class="pricing">
		<div class="container">
			<h2>Incredible Prices. Monthly Subscription.<br/>Bundle Discounts.</h2>
			<p class="pricing-subtitle">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#90278e"/>
				</svg>
				Amazing savings when you bundle
			</p>

			<div class="pricing-grid">
				<!-- Renters -->
				<div class="pricing-card" id="renters">
					<div class="pricing-icon">
						<img src={rentersIcon} alt="Renters Insurance" />
					</div>
					<h3>Renters</h3>
					<p>Coverage for your stuff, and peace of mind</p>
					<a href="#quote" class="btn-pricing">CHECK OUR PRICES</a>
					<p class="pricing-from">from $5 / month</p>
				</div>

				<!-- Homeowners -->
				<div class="pricing-card" id="homeowners">
					<div class="pricing-icon">
						<img src={homeownersIcon} alt="Homeowners Insurance" />
					</div>
					<h3>Homeowners</h3>
					<p>Protection for your home and stuff</p>
					<a href="#quote" class="btn-pricing">CHECK OUR PRICES</a>
					<p class="pricing-from">from $25 / month</p>
				</div>

				<!-- Commercial -->
				<div class="pricing-card" id="commercial">
					<div class="pricing-icon">
						<img src={corporateIcon} alt="Commercial Insurance" />
					</div>
					<h3>Commercial</h3>
					<p>Coverage for your business</p>
					<a href="#quote" class="btn-pricing">CHECK OUR PRICES</a>
					<p class="pricing-from">from $50 / month</p>
				</div>

				<!-- Car -->
				<div class="pricing-card" id="car">
					<div class="pricing-icon">
						<img src={carIcon} alt="Car Insurance" />
					</div>
					<h3>Car</h3>
					<p>Protect your car, passengers, and the planet</p>
					<a href="#quote" class="btn-pricing">CHECK OUR PRICES</a>
					<p class="pricing-from">as low as $30 / month</p>
				</div>

				<!-- Custom -->
				<div class="pricing-card" id="custom">
					<div class="pricing-icon">
						<img src={customIcon} alt="Custom Insurance" />
					</div>
					<h3>Custom</h3>
					<p>Tailored coverage for unique needs</p>
					<a href="#quote" class="btn-pricing">CHECK OUR PRICES</a>
					<p class="pricing-from">custom pricing</p>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="about">
		<div class="container">
			<div class="about-content">
				<div class="about-text">
					<h2>Insurance, but better</h2>
					<p>We're rebuilding insurance from the ground up. No confusing jargon, no hidden fees, just straightforward protection when you need it most.</p>
					<ul class="feature-list">
						<li>
							<span class="check-icon">✓</span>
							<span>Instant quotes in 90 seconds</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Claims paid in minutes</span>
						</li>
						<li>
							<span class="check-icon">✓</span>
							<span>Cancel anytime, no fees</span>
						</li>
					</ul>
				</div>
				<div class="about-illustration">
					<svg viewBox="0 0 300 300">
						<!-- Shield with checkmark -->
						<path d="M 150 30 L 240 80 L 240 160 Q 240 220 150 270 Q 60 220 60 160 L 60 80 Z"
							fill="#90278e" stroke="#FFB4DA" stroke-width="4"/>
						<path d="M 100 150 L 130 180 L 200 100"
							stroke="#a7d8e9" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
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
				<svg width="120" height="120" viewBox="0 0 24 24" fill="#90278e">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#90278e" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
				</svg>
				<svg width="120" height="120" viewBox="0 0 24 24" fill="#90278e">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#90278e" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
				</svg>
				<svg width="120" height="120" viewBox="0 0 24 24" fill="#90278e">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#90278e" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
				</svg>
				<svg width="120" height="120" viewBox="0 0 24 24" fill="#90278e">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#90278e" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
				</svg>
				<svg width="120" height="120" viewBox="0 0 24 24" fill="#90278e">
					<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#90278e" stroke-width="1" stroke-linejoin="round" stroke-linecap="round"/>
				</svg>
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
						<!-- Clock illustration -->
						<circle cx="150" cy="150" r="100" fill="#FFB4DA" stroke="#90278e" stroke-width="8"/>
						<circle cx="150" cy="150" r="80" fill="white"/>
						<line x1="150" y1="150" x2="150" y2="90" stroke="#90278e" stroke-width="6" stroke-linecap="round"/>
						<line x1="150" y1="150" x2="190" y2="150" stroke="#a7d8e9" stroke-width="6" stroke-linecap="round"/>
						<circle cx="150" cy="150" r="8" fill="#90278e"/>
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
			<p class="impact-subtitle">We donate to causes you care about</p>

			<div class="causes-grid">
				<div class="cause-logo">
					<svg viewBox="0 0 120 60" fill="#3b3b3b">
						<text x="60" y="35" text-anchor="middle" font-size="16" font-weight="600">Direct Relief</text>
					</svg>
				</div>
				<div class="cause-logo">
					<svg viewBox="0 0 120 60" fill="#3b3b3b">
						<text x="60" y="35" text-anchor="middle" font-size="14" font-weight="600">American Red Cross</text>
					</svg>
				</div>
				<div class="cause-logo">
					<svg viewBox="0 0 120 60" fill="#3b3b3b">
						<text x="60" y="35" text-anchor="middle" font-size="16" font-weight="600">Habitat for Humanity</text>
					</svg>
				</div>
				<div class="cause-logo">
					<svg viewBox="0 0 120 60" fill="#3b3b3b">
						<text x="60" y="35" text-anchor="middle" font-size="16" font-weight="600">Feeding America</text>
					</svg>
				</div>
			</div>

			<div class="certifications">
				<div class="cert-item">
					<div class="cert-badge">
						<svg width="80" height="80" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r="45" fill="none" stroke="#90278e" stroke-width="3"/>
							<text x="50" y="45" text-anchor="middle" font-size="18" font-weight="700" fill="#3b3b3b">B-CORP</text>
							<text x="50" y="60" text-anchor="middle" font-size="10" fill="#646464">Certified</text>
						</svg>
					</div>
					<h4>Designed for Social Impact</h4>
				</div>

				<div class="cert-item">
					<div class="cert-badge">
						<svg width="80" height="80" viewBox="0 0 100 100">
							<rect x="10" y="10" width="80" height="80" fill="none" stroke="#90278e" stroke-width="3" rx="8"/>
							<text x="50" y="50" text-anchor="middle" font-size="20" font-weight="700" fill="#3b3b3b">A+</text>
							<text x="50" y="70" text-anchor="middle" font-size="10" fill="#646464">RATED</text>
						</svg>
					</div>
					<h4>A-Rated and Backed by Giants</h4>
				</div>

				<div class="cert-item">
					<div class="cert-badge">
						<svg width="80" height="80" viewBox="0 0 100 100">
							<path d="M50 10 L70 30 L90 30 L90 70 L70 70 L50 90 L30 70 L10 70 L10 30 L30 30 Z" fill="none" stroke="#90278e" stroke-width="3"/>
							<text x="50" y="55" text-anchor="middle" font-size="12" font-weight="700" fill="#3b3b3b">SECURE</text>
						</svg>
					</div>
					<h4>Your Data is Protected</h4>
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
		color: #646464;
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
		border-bottom: 1px solid #e5e7eb;
		z-index: 100;
	}

	.nav-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px 24px;
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
		height: 80px;
		width: auto;
	}

	.nav-links {
		display: flex;
		gap: 32px;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: #4b5563;
		font-weight: 500;
		font-size: 15px;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: #90278e;
	}

	.contact-icon {
		color: #90278e;
		display: flex;
		align-items: center;
	}

	.mobile-menu-btn {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		color: #4b5563;
	}

	.mobile-menu {
		display: none;
		flex-direction: column;
		padding: 20px 24px;
		border-top: 1px solid #e5e7eb;
		background: white;
	}

	.mobile-menu a {
		padding: 12px 0;
		text-decoration: none;
		color: #4b5563;
		font-weight: 500;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 0;
		position: relative;
		overflow: hidden;
	}

	.hero-container {
		max-width: 100%;
		width: 100%;
		position: relative;
		height: 100vh;
		display: flex;
		align-items: center;
	}

	.hero-content {
		position: relative;
		z-index: 10;
		max-width: 650px;
		padding: 80px 60px 80px 120px;
	}

	.hero-content h1 {
		font-size: 72px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 24px 0;
		line-height: 1.05;
		letter-spacing: -2px;
	}

	.hero-subtitle {
		font-size: 24px;
		color: #646464;
		margin: 0 0 48px 0;
		line-height: 1.5;
		font-weight: 400;
	}

	.btn-primary {
		display: inline-block;
		background: #90278e;
		color: #ffffff;
		padding: 20px 48px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 18px;
		box-shadow: 0px 20px 60px rgba(144, 39, 142, 0.5);
		transition: all 0.3s, transform 0.5s;
		border: none;
		cursor: pointer;
	}

	.btn-primary:hover {
		background: #751e73;
		transform: translateY(-2px);
		box-shadow: 0px 25px 70px rgba(144, 39, 142, 0.7);
	}

	.btn-primary:active {
		background: #5f1a5d;
		transform: translateY(1px);
	}

	.hero-illustration {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 1;
		overflow: hidden;
	}

	.illustration {
		width: 80%;
		height: 100%;
		object-fit: contain;
		object-position: right center;
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
	}

	/* Pricing Section */
	.pricing {
		padding: 100px 24px;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.pricing h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 24px 0;
		line-height: 1.2;
	}

	.pricing-subtitle {
		text-align: center;
		font-size: 18px;
		color: #646464;
		margin: 0 0 60px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 32px;
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 60px;
	}

	.pricing-card {
		background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
		border: none;
		border-radius: 20px;
		padding: 40px 28px;
		text-align: center;
		transition: all 0.3s;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		display: flex;
		flex-direction: column;
	}

	.pricing-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(144, 39, 142, 0.2), 0 0 30px rgba(255, 0, 149, 0.15);
	}

	.pricing-icon {
		width: 120px;
		height: 120px;
		margin: 0 auto 24px;
	}

	.pricing-icon svg,
	.pricing-icon img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.pricing-card h3 {
		font-size: 24px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 12px 0;
	}

	.pricing-card > p {
		color: #646464;
		margin: 0 0 40px 0;
		font-size: 14px;
		line-height: 1.6;
		flex-grow: 1;
	}

	.btn-pricing {
		display: block;
		background: #ff0095;
		color: white;
		padding: 16px 32px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 14px;
		transition: all 0.3s;
		border: none;
		cursor: pointer;
		letter-spacing: 0.5px;
		margin: 0 auto 12px;
		width: fit-content;
	}

	.btn-pricing:hover {
		background: #d6007d;
		transform: translateY(-2px);
		box-shadow: 0px 15px 40px rgba(255, 0, 149, 0.4);
	}

	.pricing-from {
		margin: 0;
		font-size: 10px;
		color: #b8b8b8;
		font-weight: 400;
		text-transform: lowercase;
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
		color: #3b3b3b;
		margin: 0 0 16px 0;
	}

	.testimonials-subtitle {
		text-align: center;
		font-size: 18px;
		color: #646464;
		margin: 0 0 48px 0;
		line-height: 1.6;
	}

	.stars-container {
		display: flex;
		justify-content: center;
		gap: 16px;
		margin-bottom: 60px;
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
		box-shadow: 0 15px 35px rgba(255, 0, 149, 0.15), 0 0 25px rgba(255, 0, 149, 0.1);
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
		background: linear-gradient(135deg, #90278e 0%, #ff0095 100%);
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
		color: #3b3b3b;
	}

	.testimonial-author p {
		margin: 4px 0 0 0;
		font-size: 14px;
		color: #9ca3af;
	}

	.testimonial-card > p {
		color: #646464;
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
		color: #3b3b3b;
		margin: 0 0 16px 0;
	}

	.switch-subtitle {
		text-align: center;
		font-size: 18px;
		color: #646464;
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
		box-shadow: 0 10px 30px rgba(144, 39, 142, 0.15), 0 0 20px rgba(144, 39, 142, 0.1);
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
		color: #3b3b3b;
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
		color: #646464;
		line-height: 1.4;
	}

	.bubble-large .bubble-text {
		font-size: 13px;
	}

	.btn-switch {
		display: inline-block;
		background: #ff0095;
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
		display: block;
		width: fit-content;
	}

	.btn-switch:hover {
		background: #d6007d;
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
		color: #3b3b3b;
		margin: 0 0 16px 0;
	}

	.impact-subtitle {
		text-align: center;
		font-size: 18px;
		color: #646464;
		margin: 0 0 60px 0;
	}

	.causes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 40px;
		margin-bottom: 80px;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.cause-logo {
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0.7;
		transition: opacity 0.3s;
	}

	.cause-logo:hover {
		opacity: 1;
	}

	.certifications {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 48px;
		max-width: 900px;
		margin: 0 auto;
	}

	.cert-item {
		text-align: center;
	}

	.cert-badge {
		margin-bottom: 24px;
		display: flex;
		justify-content: center;
	}

	.cert-item h4 {
		font-size: 18px;
		font-weight: 600;
		color: #3b3b3b;
		margin: 0;
	}

	/* About Section */
	.about {
		padding: 100px 24px;
		background: linear-gradient(135deg, #FFB4DA 0%, #a7d8e9 100%);
	}

	.about-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: center;
	}

	.about-text h2 {
		font-size: 48px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 24px 0;
		letter-spacing: -1px;
	}

	.about-text p {
		font-size: 18px;
		color: #3b3b3b;
		margin: 0 0 32px 0;
		line-height: 1.7;
	}

	.feature-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.feature-list li {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 16px;
		font-size: 18px;
		color: #3b3b3b;
	}

	.check-icon {
		width: 28px;
		height: 28px;
		background: #90278e;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		flex-shrink: 0;
	}

	.about-illustration {
		display: flex;
		justify-content: center;
	}

	.about-illustration svg {
		width: 100%;
		max-width: 300px;
		height: auto;
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
		color: #3b3b3b;
		margin: 0 0 24px 0;
	}

	.claims-text p {
		font-size: 18px;
		color: #646464;
		margin: 0 0 32px 0;
		line-height: 1.7;
	}

	.btn-secondary {
		display: inline-block;
		background: white;
		color: #90278e;
		padding: 18px 42px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 16px;
		border: 2px solid #90278e;
		transition: all 0.3s;
		cursor: pointer;
	}

	.btn-secondary:hover {
		background: #90278e;
		color: white;
		transform: translateY(-2px);
		box-shadow: 0px 20px 50px rgba(144, 39, 142, 0.4);
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
		color: #3b3b3b;
		margin: 0 0 16px 0;
	}

	.contact-subtitle {
		text-align: center;
		font-size: 18px;
		color: #646464;
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
		color: #90278e;
		margin-bottom: 16px;
	}

	.contact-card h3 {
		font-size: 20px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 12px 0;
	}

	.contact-card p {
		color: #646464;
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

		.mobile-menu-btn {
			display: block;
		}

		.mobile-menu {
			display: flex;
		}

		.hero {
			min-height: 100vh;
			padding: 0;
		}

		.hero-container {
			flex-direction: column;
			align-items: flex-start;
		}

		.hero-content {
			padding: 80px 40px 40px 40px;
			max-width: 100%;
			z-index: 10;
		}

		.hero-illustration {
			position: absolute;
			width: 100%;
			height: 100%;
			justify-content: center;
		}

		.illustration {
			width: 100%;
			height: 60%;
			object-position: center bottom;
		}

		.about-content,
		.claims-content,
		.footer-content {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.hero-content h1 {
			font-size: 56px;
			letter-spacing: -1.5px;
		}

		.about-text h2,
		.claims-text h2,
		.pricing h2,
		.testimonials h2,
		.switch-section h2,
		.social-impact h2,
		.contact h2 {
			font-size: 36px;
		}

		.pricing-grid,
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
		}

		.hero-content {
			padding: 60px 24px 30px 24px;
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

		.hero-illustration {
			position: absolute;
			width: 100%;
			height: 100%;
		}

		.illustration {
			width: 100%;
			height: 55%;
			object-fit: contain;
			object-position: center bottom;
		}

		.pricing,
		.about,
		.claims,
		.testimonials,
		.switch-section,
		.social-impact,
		.contact {
			padding: 60px 20px;
		}

		.pricing-grid,
		.testimonials-grid {
			grid-template-columns: 1fr;
		}

		.stars-container svg {
			width: 60px;
			height: 60px;
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

		.causes-grid {
			grid-template-columns: 1fr 1fr;
			gap: 24px;
		}

		.certifications {
			grid-template-columns: 1fr;
			gap: 32px;
		}

		.footer-links {
			grid-template-columns: 1fr;
		}
	}
</style>
