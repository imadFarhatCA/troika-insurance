<script lang="ts">
	import Icon from './Icon.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	$: s = t[$language].contact;
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="contact-hero">
			<h2 class="contact-title">{s.title}</h2>
			<p class="contact-lead">{s.lead}</p>
		</div>

		<div class="contact-bento">
			<div class="contact-card contact-card-large">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">{s.emailLabel}</span>
					<h3 class="card-title">info@troikainsurance.com</h3>
					<p class="card-desc">{s.emailDesc}</p>
					<a href="mailto:info@troikainsurance.com" class="card-link">
						{s.emailCta}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="contact-card contact-card-medium">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">{s.phoneLabel}</span>
					<h3 class="card-title">+1 (555) 123-4567</h3>
					<p class="card-desc">{s.phoneHours}</p>
					<a href="tel:+15551234567" class="card-link">
						{s.phoneCta}
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</a>
				</div>
			</div>

			<div class="contact-card contact-card-small">
				<div class="card-glow"></div>
				<div class="card-content">
					<span class="card-label">{s.chatLabel}</span>
					<h3 class="card-title">{s.chatTitle}</h3>
					<p class="card-desc">{s.chatDesc}</p>
				</div>
			</div>
		</div>
	</div>
</section>
