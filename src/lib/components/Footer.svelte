<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { claimModalOpen } from '$lib/claimStore';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<img src={logo} alt="Troika Insurance" class="footer-logo" />
				<p>Insurance made simple</p>
			</div>
			<div class="footer-links">
				<div class="footer-column">
					<h4><span class="the">the</span> products</h4>
					<a href="/#homeowners">Homeowners</a>
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
