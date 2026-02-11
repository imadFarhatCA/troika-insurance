<script lang="ts">
	// Add any interactive functionality here
</script>

<div class="container">
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-content">
			<h1>Troika Insurance</h1>
			<p class="tagline">Comprehensive Insurance Solutions</p>
			<p class="subtitle">Protecting what matters most to you and your business</p>
			<div class="cta-buttons">
				<a href="#services" class="btn btn-primary">Our Services</a>
				<a href="#contact" class="btn btn-secondary">Get a Quote</a>
			</div>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="services">
		<h2>Our Services</h2>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon">🏥</div>
				<h3>Health Insurance</h3>
				<p>Comprehensive health coverage for you and your family with access to quality healthcare.</p>
			</div>

			<div class="service-card">
				<div class="service-icon">💼</div>
				<h3>Life Insurance</h3>
				<p>Secure your family's financial future with our flexible life insurance plans.</p>
			</div>

			<div class="service-card">
				<div class="service-icon">🏠</div>
				<h3>Property Insurance</h3>
				<p>Protect your home and assets against unexpected events and damages.</p>
			</div>

			<div class="service-card">
				<div class="service-icon">🏢</div>
				<h3>Business Insurance</h3>
				<p>Comprehensive coverage to protect your business operations and assets.</p>
			</div>

			<div class="service-card">
				<div class="service-icon">🚗</div>
				<h3>Auto Insurance</h3>
				<p>Complete vehicle protection with flexible coverage options and competitive rates.</p>
			</div>

			<div class="service-card">
				<div class="service-icon">🛡️</div>
				<h3>Liability Coverage</h3>
				<p>Protect yourself and your business from liability claims and legal expenses.</p>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="about">
		<h2>Why Choose Troika Insurance?</h2>
		<div class="about-grid">
			<div class="about-item">
				<h3>🎯 Tailored Solutions</h3>
				<p>We customize insurance plans to meet your specific needs and budget.</p>
			</div>
			<div class="about-item">
				<h3>🤝 Trusted Service</h3>
				<p>Years of experience providing reliable insurance solutions and customer support.</p>
			</div>
			<div class="about-item">
				<h3>💡 Expert Guidance</h3>
				<p>Our team of insurance professionals helps you make informed decisions.</p>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<h2>Get in Touch</h2>
		<p class="contact-subtitle">Ready to protect what matters most? Contact us today for a free consultation.</p>
		<div class="contact-info">
			<div class="contact-item">
				<strong>Email:</strong> info@troikainsurance.com
			</div>
			<div class="contact-item">
				<strong>Phone:</strong> +1 (555) 123-4567
			</div>
			<div class="contact-item">
				<strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<p>&copy; 2026 Troika Insurance. All rights reserved.</p>
	</footer>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		min-height: 100vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: white;
		padding: 40px 20px;
	}

	.hero-content h1 {
		font-size: 4rem;
		margin: 0 0 20px 0;
		font-weight: 700;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
	}

	.tagline {
		font-size: 1.8rem;
		margin: 0 0 10px 0;
		opacity: 0.95;
	}

	.subtitle {
		font-size: 1.2rem;
		margin: 0 0 40px 0;
		opacity: 0.85;
	}

	.cta-buttons {
		display: flex;
		gap: 20px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 14px 32px;
		font-size: 1rem;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background: white;
		color: #667eea;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: #667eea;
		transform: translateY(-2px);
	}

	/* Services Section */
	.services {
		background: white;
		padding: 80px 20px;
		text-align: center;
	}

	.services h2 {
		font-size: 2.5rem;
		margin: 0 0 50px 0;
		color: #333;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 30px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.service-card {
		background: #f8f9fa;
		padding: 40px 30px;
		border-radius: 12px;
		transition: all 0.3s ease;
		border: 1px solid #e9ecef;
	}

	.service-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		border-color: #667eea;
	}

	.service-icon {
		font-size: 3rem;
		margin-bottom: 20px;
	}

	.service-card h3 {
		font-size: 1.5rem;
		margin: 0 0 15px 0;
		color: #333;
	}

	.service-card p {
		margin: 0;
		color: #666;
		line-height: 1.6;
	}

	/* About Section */
	.about {
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		padding: 80px 20px;
		text-align: center;
		color: white;
	}

	.about h2 {
		font-size: 2.5rem;
		margin: 0 0 50px 0;
	}

	.about-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 40px;
		max-width: 1000px;
		margin: 0 auto;
	}

	.about-item h3 {
		font-size: 1.5rem;
		margin: 0 0 15px 0;
	}

	.about-item p {
		margin: 0;
		opacity: 0.9;
		line-height: 1.6;
	}

	/* Contact Section */
	.contact {
		background: white;
		padding: 80px 20px;
		text-align: center;
	}

	.contact h2 {
		font-size: 2.5rem;
		margin: 0 0 20px 0;
		color: #333;
	}

	.contact-subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0 0 40px 0;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 600px;
		margin: 0 auto;
	}

	.contact-item {
		padding: 20px;
		background: #f8f9fa;
		border-radius: 8px;
		font-size: 1.1rem;
		color: #333;
	}

	.contact-item strong {
		color: #667eea;
		margin-right: 10px;
	}

	/* Footer */
	.footer {
		background: #2d3748;
		color: white;
		text-align: center;
		padding: 30px 20px;
	}

	.footer p {
		margin: 0;
		opacity: 0.8;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero-content h1 {
			font-size: 2.5rem;
		}

		.tagline {
			font-size: 1.3rem;
		}

		.subtitle {
			font-size: 1rem;
		}

		.services h2,
		.about h2,
		.contact h2 {
			font-size: 2rem;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
