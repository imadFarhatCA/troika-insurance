<script lang="ts">
	export let open: boolean = false;
	export let onToggle: () => void;
	export let lang: 'EN' | 'FR' = 'EN';
	export let onLangChange: (l: 'EN' | 'FR') => void = () => {};
</script>

<!-- Hamburger Button -->
<button class="mobile-menu-btn" on:click={onToggle} aria-label="Menu">
	<svg class="hamburger-icon" class:open width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		{#if open}
			<line class="x-line" x1="18" y1="6" x2="6" y2="18"></line>
			<line class="x-line" x1="6" y1="6" x2="18" y2="18"></line>
		{:else}
			<line class="bar bar-top" x1="3" y1="6" x2="21" y2="6"></line>
			<line class="bar bar-mid" x1="3" y1="12" x2="21" y2="12"></line>
			<line class="bar bar-bot" x1="3" y1="18" x2="21" y2="18"></line>
		{/if}
	</svg>
</button>

<!-- Fullscreen Overlay -->
{#if open}
	<div class="mobile-menu-overlay">
		<button class="close-btn" on:click={onToggle} aria-label="Close menu">
			<svg class="close-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
		<!-- Language Toggle -->
		<div class="mobile-lang-toggle" role="group" aria-label="Language">
			<button
				class="mobile-lang-btn"
				class:mobile-lang-active={lang === 'EN'}
				on:click={() => onLangChange('EN')}
				aria-pressed={lang === 'EN'}
			>EN</button>
			<button
				class="mobile-lang-btn"
				class:mobile-lang-active={lang === 'FR'}
				on:click={() => onLangChange('FR')}
				aria-pressed={lang === 'FR'}
			>FR</button>
		</div>

		<nav class="mobile-nav">
			<a href="/homeowners" on:click={onToggle}>Homeowners</a>
			<a href="/commercial" on:click={onToggle}>Commercial</a>
			<a href="/car" on:click={onToggle}>Car</a>
			<a href="/our-approach" on:click={onToggle}>Our Approach</a>
			<a href="/services" on:click={onToggle}>Services</a>
			<a href="/claims" class="mobile-claims-btn" on:click={onToggle}>Claims</a>
			<a href="/#contact" on:click={onToggle}>Contact</a>
		</nav>
	</div>
{/if}

<style>
	.mobile-menu-btn {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		color: #4a4a4a;
		padding: 8px;
		z-index: 200;
	}

	.hamburger-icon {
		transition: transform 0.3s ease;
	}

	.mobile-menu-btn:hover .hamburger-icon {
		transform: scale(1.15);
		color: #92278f;
	}

	.mobile-menu-btn:active .hamburger-icon {
		transform: scale(0.9) rotate(90deg);
	}

	.bar {
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.mobile-menu-btn:hover .bar-top {
		transform: translateY(-1px);
	}

	.mobile-menu-btn:hover .bar-bot {
		transform: translateY(1px);
	}

	.x-line {
		transform-origin: center;
		animation: xSpin 0.3s ease-out;
	}

	@keyframes xSpin {
		0% { transform: rotate(0deg) scale(0.5); opacity: 0; }
		100% { transform: rotate(0deg) scale(1); opacity: 1; }
	}

	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		animation: fadeIn 0.25s ease-out;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 1; }
	}

	.close-btn {
		position: absolute;
		top: 24px;
		right: 24px;
		background: none;
		border: none;
		cursor: pointer;
		color: #4a4a4a;
		padding: 8px;
	}

	.close-icon {
		transition: all 0.3s ease;
	}

	.close-btn:hover .close-icon {
		transform: rotate(90deg) scale(1.15);
		color: #92278f;
	}

	.close-btn:active .close-icon {
		transform: rotate(180deg) scale(0.9);
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;
	}

	.mobile-nav a {
		text-decoration: none;
		color: #4a4a4a;
		font-size: 28px;
		font-weight: 300;
		transition: color 0.2s;
	}

	.mobile-nav a:hover {
		color: #92278f;
	}

	.mobile-claims-btn {
		background: none;
		border: none;
		cursor: pointer;
		color: #4a4a4a;
		font-size: 28px;
		font-weight: 300;
		font-family: inherit;
		padding: 0;
		transition: color 0.2s;
	}

	.mobile-claims-btn:hover {
		color: #92278f;
	}

	@media (max-width: 968px) {
		.mobile-menu-btn {
			display: block;
		}
	}
	.mobile-lang-toggle {
		display: flex;
		align-items: center;
		background: #f0e8f5;
		border-radius: 8px;
		padding: 3px;
		gap: 2px;
		margin-bottom: 32px;
	}

	.mobile-lang-btn {
		background: transparent;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.8px;
		color: #7b2a7b;
		padding: 7px 18px;
		transition: background 0.18s ease, color 0.18s ease;
		font-family: inherit;
		line-height: 1;
	}

	.mobile-lang-btn:hover:not(.mobile-lang-active) {
		background: rgba(92, 26, 126, 0.1);
	}

	.mobile-lang-active {
		background: #4d1060;
		color: #ffffff;
	}

</style>
