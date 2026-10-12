<script lang="ts">
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';
	import corporateIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import carIcon from '$lib/assets/icons/Car Icon.svg';
	import customIcon from '$lib/assets/icons/CUSTOM Icon.svg';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	$: s = t[$language].pricing;

	const icons = [homeownersIcon, corporateIcon, carIcon, customIcon];
	const hrefs = ['/homeowners', '/commercial', '/car', null];
	const colors = ['#92278f', '#a7d8e9', '#ff0095', '#92278f'];
	const colorRgbs = ['146, 39, 143', '167, 216, 233', '255, 0, 149', '146, 39, 143'];
	// Darker tones for link text so it stays readable on white
	const textColors = ['#92278f', '#2f8fb8', '#d6007f', '#92278f'];
</script>

<section id="pricing" class="pricing">
	<div class="container">
		<h2>{@html s.title.replace(/\n/g, '<br/>')}</h2>
		<p class="pricing-subtitle">
			<svg class="star-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#92278f"/>
			</svg>
			{s.subtitle}
		</p>

		<div class="bubbles-container">
			<svg class="flow-lines" viewBox="0 0 1400 520" preserveAspectRatio="none" aria-hidden="true">
				<path d="M0 250 C 180 120, 330 130, 470 230 S 760 330, 930 190 S 1250 60, 1400 120" class="line-purple" />
				<path d="M0 190 C 160 210, 300 330, 430 360 S 700 190, 880 250 S 1130 420, 1400 340" class="line-blue" />
				<circle cx="352" cy="169" r="5" fill="#92278f" />
				<circle cx="1013" cy="133" r="5" fill="#92278f" />
				<circle cx="672" cy="276" r="4" fill="#7fc4e0" />
				<circle cx="1269" cy="366" r="5" fill="#7fc4e0" />
			</svg>

			{#each s.products as product, i}
				<svelte:element this={hrefs[i] ? 'a' : 'div'} href={hrefs[i] ?? undefined} class="bubble bubble-{i + 1}" style="--bubble-color: {colors[i]}; --bubble-color-rgb: {colorRgbs[i]}; --bubble-text: {textColors[i]}">
					<div class="bubble-content">
						<img src={icons[i]} alt={product.title} class="bubble-icon" />
						<span class="bubble-dot"></span>
						<h3>{product.title}</h3>
						<p class="bubble-description">{product.description}</p>
						<p class="bubble-pricing">
							{product.pricing}
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
						</p>
					</div>
				</svelte:element>
			{/each}
		</div>
	</div>
</section>

<style>
	.pricing {
		padding: 100px 24px 130px;
		background: #f8f7fa;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.pricing h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #2b2748;
		margin: 0 0 24px 0;
		line-height: 1.2;
	}

	.pricing-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 70px 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.star-icon {
		display: inline-block;
		vertical-align: middle;
		margin-right: 8px;
		animation: starVibe 4s ease-in-out infinite;
	}

	@keyframes starVibe {
		0% { transform: rotate(0deg) scale(1); }
		20% { transform: rotate(180deg) scale(1.4); }
		40% { transform: rotate(360deg) scale(1); }
		60% { transform: rotate(360deg) scale(1.3); }
		80% { transform: rotate(360deg) scale(1); }
		100% { transform: rotate(360deg) scale(1); }
	}

	.bubbles-container {
		position: relative;
		width: 100%;
		height: 540px;
		margin: 0 auto;
	}

	/* Flowing lines behind the circles */
	.flow-lines {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}

	.line-purple, .line-blue {
		fill: none;
		stroke-width: 1.6;
		vector-effect: non-scaling-stroke;
	}

	.line-purple { stroke: rgba(146, 39, 143, 0.55); }
	.line-blue { stroke: rgba(127, 196, 224, 0.75); }

	a.bubble {
		text-decoration: none;
	}

	.bubble {
		position: absolute;
		width: 290px;
		height: 290px;
		border-radius: 50%;
		background: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		box-shadow:
			0 14px 34px rgba(43, 39, 72, 0.06),
			0 0 0 1px rgba(var(--bubble-color-rgb), 0.07),
			0 0 44px 8px rgba(var(--bubble-color-rgb), 0.2);
		transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease;
		animation: bubbleFloat 7s ease-in-out infinite;
	}

	.bubble:hover {
		transform: scale(1.05);
		box-shadow:
			0 18px 40px rgba(43, 39, 72, 0.08),
			0 0 0 1px rgba(var(--bubble-color-rgb), 0.12),
			0 0 56px 12px rgba(var(--bubble-color-rgb), 0.32);
		z-index: 100 !important;
		animation-play-state: paused;
	}

	/* Zig-zag placement: low, high, low, high */
	.bubble-1 { top: 150px; left: 3%; z-index: 3; animation-delay: 0s; }
	.bubble-2 { top: 40px; left: 26%; z-index: 4; animation-delay: 1s; }
	.bubble-3 { top: 190px; left: 49%; z-index: 3; animation-delay: 2s; }
	.bubble-4 { top: 20px; right: 3%; z-index: 4; animation-delay: 1.5s; }

	@keyframes bubbleFloat {
		0%, 100% { translate: 0 0; }
		50% { translate: 0 -10px; }
	}

	.bubble-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		color: #4a4a4a;
		padding: 0 30px 16px;
	}

	.bubble-icon {
		width: 76px;
		height: 76px;
		display: block;
		object-fit: contain;
	}

	.bubble-dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--bubble-color);
		margin: 10px 0 12px;
		transition: width 0.3s ease, border-radius 0.3s ease;
	}

	.bubble:hover .bubble-dot {
		width: 30px;
		border-radius: 3px;
	}

	.bubble h3 {
		font-family: Georgia, 'Times New Roman', serif;
		font-size: 24px;
		font-weight: 600;
		color: #1d1b3a;
		margin: 0 0 8px 0;
		line-height: 1.15;
	}

	.bubble-description {
		font-size: 13.5px;
		line-height: 1.45;
		color: #55536a;
		margin: 0 0 12px 0;
	}

	.bubble-pricing {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 13.5px;
		font-weight: 500;
		color: var(--bubble-text);
		margin: 0;
		line-height: 1.3;
	}

	.bubble-pricing svg {
		flex-shrink: 0;
		transition: transform 0.25s ease;
	}

	.bubble:hover .bubble-pricing svg {
		transform: translateX(4px);
	}

	@media (max-width: 1100px) {
		.bubble { width: 250px; height: 250px; }
		.bubble-content { padding: 0 26px; }
		.bubble-icon { width: 70px; height: 70px; }
		.bubble h3 { font-size: 22px; }
		.bubble-1 { left: 1%; }
		.bubble-2 { left: 25%; }
		.bubble-3 { left: 49%; }
		.bubble-4 { right: 1%; }
	}

	@media (max-width: 968px) {
		.pricing h2 { font-size: 36px; }

		.bubbles-container {
			height: auto;
			display: grid;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 28px 18px;
			padding: 10px 6px 0;
		}

		.flow-lines { opacity: 0.55; }

		.bubble {
			position: relative;
			inset: auto;
			width: 100%;
			max-width: 330px;
			height: auto;
			aspect-ratio: 1;
			margin: 0 auto;
		}

		.bubble-2, .bubble-4 { margin-top: 36px; }
		.bubble-icon { width: 60px; height: 60px; }
		.bubble h3 { font-size: 19px; }
		.bubble-description { display: none; }
		.bubble-content { padding: 0 14px; }
	}

	@media (max-width: 640px) {
		.pricing { padding: 60px 16px 90px; }
		.pricing h2 { font-size: 28px; }
		.bubble-icon { width: 48px; height: 48px; }
		.bubble h3 { font-size: 16px; }
		.bubble-pricing { font-size: 11.5px; }
		.bubble-pricing svg { width: 12px; height: 12px; }
	}
</style>
