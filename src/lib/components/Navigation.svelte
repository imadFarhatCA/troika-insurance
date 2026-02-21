<script lang="ts">
	import logo from '$lib/assets/troikaInsurance logo.svg';
	import MobileMenu from './MobileMenu.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	let mobileMenuOpen = false;
	$: s = t[$language].nav;

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
		<div class="nav-right">
		<div class="nav-links">
			<a href="/homeowners">{s.homeowners}</a>
			<a href="/commercial">{s.commercial}</a>
			<a href="/car">{s.car}</a>
			<a href="/our-approach">{s.ourApproach}</a>
			<a href="/services">{s.services}</a>
			<a href="/claims" class="nav-claims-btn">{s.claims}</a>
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
		</div><!-- /nav-right -->

		<MobileMenu open={mobileMenuOpen} onToggle={toggleMobileMenu} lang={$language} onLangChange={setLang} />
	</div>
</nav>

<style>
.nav-right {
	display: flex;
	align-items: center;
	gap: 40px;
	margin-left: auto;
}

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
	padding: 8px 10px;
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
	.nav-right {
		display: none;
	}
}
</style>
