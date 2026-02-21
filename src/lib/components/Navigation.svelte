<script lang="ts">
	import logo from '$lib/assets/troikaInsurance logo.svg';
	import Icon from './Icon.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { claimModalOpen } from '$lib/claimStore';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
</script>

<nav class="nav">
	<div class="nav-container">
		<a href="/" class="logo">
			<img src={logo} alt="Troika Insurance" class="logo-img" />
		</a>

		<!-- Desktop Menu -->
		<div class="nav-links">
			<a href="/homeowners">Homeowners</a>
			<a href="/commercial">Commercial</a>
			<a href="/car">Car</a>
			<a href="/our-approach">Our Approach</a>
			<a href="/services">Services</a>
			<button class="nav-claims-btn" on:click={() => claimModalOpen.set(true)}>Claims</button>
			<div class="social-icons">
				<a href="/#contact" class="social-icon" aria-label="Contact">
					<Icon name="email" size={19} />
				</a>
				<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Facebook">
					<Icon name="facebook" size={19} />
				</a>
				<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Instagram">
					<Icon name="instagram" size={19} />
				</a>
			</div>
		</div>

		<MobileMenu open={mobileMenuOpen} onToggle={toggleMobileMenu} />
	</div>
</nav>
