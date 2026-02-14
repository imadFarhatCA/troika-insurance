<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="contact-hero">
			<h2 class="contact-title">Let's start a conversation</h2>
			<p class="contact-lead">Whether you need a quote, have questions, or want to learn more about our services—we're just a message away.</p>
		</div>

		<div class="contact-bento">
			<div class="contact-card contact-card-large">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">Email us</span>
					<h3 class="card-title">info@troikainsurance.com</h3>
					<p class="card-desc">Send us an email and we'll respond within 24 hours</p>
					<a href="mailto:info@troikainsurance.com" class="card-link">
						Send message
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="contact-card contact-card-medium">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">Call us</span>
					<h3 class="card-title">+1 (555) 123-4567</h3>
					<p class="card-desc">Mon-Fri, 9am-6pm EST</p>
					<a href="tel:+15551234567" class="card-link">
						Start call
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="contact-card contact-card-small">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">Live chat</span>
					<h3 class="card-title">Chat with us</h3>
					<p class="card-desc">Get instant answers</p>
				</div>
			</div>
		</div>
	</div>
</section>
