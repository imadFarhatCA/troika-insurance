<script lang="ts">
	import heroIllustration from '$lib/assets/hero-illustration.svg';
	import logo from '$lib/assets/logo.svg';

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

	<!-- Products Section -->
	<section id="products" class="products">
		<div class="container">
			<h2>What can we cover?</h2>

			<div class="products-grid">
				<!-- Homeowners -->
				<div class="product-card" id="homeowners">
					<div class="product-icon">
						<svg viewBox="0 0 100 100">
							<rect x="20" y="40" width="60" height="50" fill="#90278e" rx="4"/>
							<path d="M 10 40 L 50 10 L 90 40 Z" fill="#FFB4DA"/>
							<rect x="42" y="60" width="16" height="30" fill="#f3f4f6" rx="2"/>
						</svg>
					</div>
					<h3>Homeowners</h3>
					<p>Protect your home and belongings with comprehensive coverage that's easy to understand.</p>
					<a href="#quote" class="link-arrow">Get covered →</a>
				</div>

				<!-- Commercial -->
				<div class="product-card" id="commercial">
					<div class="product-icon">
						<svg viewBox="0 0 100 100">
							<rect x="15" y="20" width="70" height="70" fill="#90278e" rx="4"/>
							<g fill="#FFB4DA">
								<rect x="25" y="30" width="15" height="15" rx="1"/>
								<rect x="25" y="50" width="15" height="15" rx="1"/>
								<rect x="25" y="70" width="15" height="15" rx="1"/>
								<rect x="45" y="30" width="15" height="15" rx="1"/>
								<rect x="45" y="50" width="15" height="15" rx="1"/>
								<rect x="65" y="30" width="15" height="15" rx="1"/>
								<rect x="65" y="50" width="15" height="15" rx="1"/>
							</g>
						</svg>
					</div>
					<h3>Commercial</h3>
					<p>Business insurance that scales with you. From liability to property coverage.</p>
					<a href="#quote" class="link-arrow">Learn more →</a>
				</div>

				<!-- Car -->
				<div class="product-card" id="car">
					<div class="product-icon">
						<svg viewBox="0 0 100 100">
							<rect x="15" y="45" width="70" height="30" fill="#90278e" rx="8"/>
							<path d="M 20 45 L 30 30 L 70 30 L 80 45 Z" fill="#FFB4DA"/>
							<circle cx="30" cy="75" r="8" fill="#6b7280"/>
							<circle cx="70" cy="75" r="8" fill="#6b7280"/>
							<rect x="35" y="35" width="12" height="12" fill="#a7d8e9" rx="2"/>
							<rect x="53" y="35" width="12" height="12" fill="#a7d8e9" rx="2"/>
						</svg>
					</div>
					<h3>Car</h3>
					<p>Auto insurance with instant quotes and claims that are handled in minutes, not weeks.</p>
					<a href="#quote" class="link-arrow">Get a quote →</a>
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
		border-radius: 50px;
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

	/* Products Section */
	.products {
		padding: 100px 24px;
		background: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.products h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 60px 0;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 32px;
	}

	.product-card {
		background: white;
		border: 2px solid #ececec;
		border-radius: 10px;
		padding: 40px 32px;
		transition: all 0.3s;
	}

	.product-card:hover {
		border-color: #90278e;
		transform: translateY(-4px);
		box-shadow: 0 30px 18px -13px rgba(0, 0, 0, 0.06);
	}

	.product-icon {
		width: 100px;
		height: 100px;
		margin: 0 0 24px 0;
	}

	.product-icon svg {
		width: 100%;
		height: 100%;
	}

	.product-card h3 {
		font-size: 28px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 16px 0;
	}

	.product-card p {
		color: #646464;
		margin: 0 0 24px 0;
		font-size: 16px;
		line-height: 1.6;
	}

	.link-arrow {
		color: #90278e;
		text-decoration: none;
		font-weight: 600;
		font-size: 16px;
		transition: all 0.3s;
	}

	.link-arrow:hover {
		color: #751e73;
		gap: 8px;
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
		border-radius: 50px;
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
		background: white;
		border: 2px solid #ececec;
		border-radius: 10px;
		padding: 40px;
		text-align: center;
		transition: all 0.3s;
	}

	.contact-card:hover {
		border-color: #a7d8e9;
		transform: translateY(-4px);
		box-shadow: 0 8px 16px rgba(167, 216, 233, 0.2);
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
		.products h2,
		.contact h2 {
			font-size: 36px;
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

		.products,
		.about,
		.claims,
		.contact {
			padding: 60px 20px;
		}

		.products-grid {
			grid-template-columns: 1fr;
		}

		.footer-links {
			grid-template-columns: 1fr;
		}
	}
</style>
