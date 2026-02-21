<script lang="ts">
	import logo from '$lib/assets/troikaInsurance logo.svg';
	import Icon from '$lib/components/Icon.svelte';
	import { claimModalOpen } from '$lib/claimStore';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<img src={logo} alt="Troika Insurance" class="footer-logo" />
				<p>Insurance made simple</p>
				<div class="footer-social">
					<a href="/#contact" class="footer-social-icon" aria-label="Contact">
						<Icon name="email" size={18} />
					</a>
					<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Facebook">
						<Icon name="facebook" size={18} />
					</a>
					<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="footer-social-icon" aria-label="Instagram">
						<Icon name="instagram" size={18} />
					</a>
				</div>
			</div>
			<div class="footer-links">
				<div class="footer-column">
					<h4><span class="the">the</span> products</h4>
					<a href="/homeowners">Homeowners</a>
					<a href="/#commercial">Commercial</a>
					<a href="/#car">Car</a>
				</div>
				<div class="footer-column">
					<h4><span class="the">the</span> company</h4>
					<a href="/our-approach">Our Approach</a>
					<a href="/services">Services</a>
					<button class="footer-claims-btn" on:click={() => claimModalOpen.set(true)}>Claims</button>
					<a href="/#contact">Contact</a>
				</div>
			</div>
		</div>
		<div class="footer-bottom">
			<p>&copy; 2026 Troika Insurance. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
.footer-social {
	display: flex;
	align-items: center;
	gap: 16px;
	margin-top: 20px;
}

.footer-social-icon {
	color: var(--color-text-footer);
	display: flex;
	align-items: center;
	transition: color 0.2s;
}

.footer-social-icon:hover {
	color: #ffffff;
}
</style>
