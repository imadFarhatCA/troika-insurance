<script lang="ts">
	export let open: boolean = false;
	export let onToggle: () => void;
</script>

<!-- Hamburger Button -->
<button class="mobile-menu-btn" on:click={onToggle} aria-label="Menu">
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
		{#if open}
			<line x1="18" y1="6" x2="6" y2="18"></line>
			<line x1="6" y1="6" x2="18" y2="18"></line>
		{:else}
			<line x1="3" y1="12" x2="21" y2="12"></line>
			<line x1="3" y1="6" x2="21" y2="6"></line>
			<line x1="3" y1="18" x2="21" y2="18"></line>
		{/if}
	</svg>
</button>

<!-- Fullscreen Overlay -->
{#if open}
	<div class="mobile-menu-overlay">
		<button class="close-btn" on:click={onToggle} aria-label="Close menu">
			<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
		<nav class="mobile-nav">
			<a href="#homeowners" on:click={onToggle}>Homeowners</a>
			<a href="#commercial" on:click={onToggle}>Commercial</a>
			<a href="#car" on:click={onToggle}>Car</a>
			<a href="#about" on:click={onToggle}>About</a>
			<a href="#claims" on:click={onToggle}>Claims</a>
			<a href="#contact" on:click={onToggle}>Contact</a>
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

	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
		font-weight: 600;
		transition: color 0.2s;
	}

	.mobile-nav a:hover {
		color: #92278f;
	}

	@media (max-width: 968px) {
		.mobile-menu-btn {
			display: block;
		}
	}
</style>
