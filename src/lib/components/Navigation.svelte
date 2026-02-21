<script lang="ts">
	import logo from '$lib/assets/troikaInsurance logo.svg';
	import Icon from './Icon.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import { language } from '$lib/languageStore';
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function setLang(lang: 'EN' | 'FR') {
		language.set(lang);
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
			<a href="/claims" class="nav-claims-btn">Claims</a>
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

		<!-- Language Toggle -->
		<div class="lang-toggle" role="group" aria-label="Language">
			<button
				class="lang-btn"
				class:lang-active={$language === 'EN'}
				on:click={() => setLang('EN')}
				aria-pressed={$language === 'EN'}
			>EN</button>
			<button
				class="lang-btn"
				class:lang-active={$language === 'FR'}
				on:click={() => setLang('FR')}
				aria-pressed={$language === 'FR'}
			>FR</button>
		</div>

		<MobileMenu open={mobileMenuOpen} onToggle={toggleMobileMenu} lang={$language} onLangChange={setLang} />
	</div>
</nav>

<style>
.lang-toggle {
	display: flex;
	align-items: center;
	background: #f0e8f5;
	border-radius: 8px;
	padding: 3px;
	gap: 2px;
}

.lang-btn {
	background: transparent;
	border: none;
	border-radius: 6px;
	cursor: pointer;
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.8px;
	color: #7b2a7b;
	padding: 5px 10px;
	transition: background 0.18s ease, color 0.18s ease;
	font-family: inherit;
	line-height: 1;
}

.lang-btn:hover:not(.lang-active) {
	background: rgba(92, 26, 126, 0.1);
}

.lang-active {
	background: #4d1060;
	color: #ffffff;
}

@media (max-width: 968px) {
	.lang-toggle {
		display: none;
	}
}
</style>
