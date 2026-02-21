<script lang="ts">
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';
	import corporateIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import carIcon from '$lib/assets/icons/Car Icon.svg';
	import customIcon from '$lib/assets/icons/CUSTOM Icon.svg';

	const products = [
		{ id: 'homeowners', icon: homeownersIcon, title: 'Homeowners', description: 'Protection for your home and stuff', pricing: 'Save Now', size: 'large', color: '#92278f', colorRgb: '146, 39, 143' },
		{ id: 'commercial', icon: corporateIcon, title: 'Commercial', description: 'Coverage for your business', pricing: 'Start Saving', size: 'medium', color: '#a7d8e9', colorRgb: '167, 216, 233' },
		{ id: 'car', icon: carIcon, title: 'Car', description: 'Protect your car, passengers, and the planet', pricing: 'Save Now', size: 'large', color: '#ff0095', colorRgb: '255, 0, 149' },
		{ id: 'custom', icon: customIcon, title: 'Custom', description: 'Tailored coverage for unique needs', pricing: 'Start Saving', size: 'small', color: '#92278f', colorRgb: '146, 39, 143' },
	];
</script>

<section id="pricing" class="pricing">
	<div class="container">
		<h2>Incredible Prices. Monthly Subscription.<br/>Bundle Discounts.</h2>
		<p class="pricing-subtitle">
			<svg class="star-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#92278f"/>
			</svg>
			Amazing savings when you bundle
		</p>

		<div class="bubbles-container">
			{#each products as product, i}
				<div class="bubble bubble-{i + 1} bubble-{product.size}" style="--bubble-color: {product.color}; --bubble-color-rgb: {product.colorRgb}">
					<div class="bubble-content">
						<div class="icon-wrapper">
							<img src={product.icon} alt={product.title} class="bubble-icon" />
						</div>
						<h3>{product.title}</h3>
						<p class="bubble-description">{product.description}</p>
						<p class="bubble-pricing">{product.pricing}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.pricing {
		padding: 100px 24px 150px;
		background: #ececec;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.pricing h2 {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 24px 0;
		line-height: 1.2;
	}

	.pricing-subtitle {
		text-align: center;
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 80px 0;
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
		height: 500px;
		margin: 0 auto;
	}

	.bubble {
		position: absolute;
		border-radius: 50%;
		background: linear-gradient(135deg, #ffffff, #f5f5f5);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
		box-shadow:
			0 8px 20px rgba(0, 0, 0, 0.06),
			0 0 20px rgba(var(--bubble-color-rgb), 0.3);
		animation: bubbleFloat 6s ease-in-out infinite;
	}

	.bubble:hover {
		transform: scale(1.15);
		box-shadow:
			0 12px 30px rgba(0, 0, 0, 0.08),
			0 0 35px rgba(var(--bubble-color-rgb), 0.5);
		z-index: 100 !important;
		animation-play-state: paused;
	}

	.bubble-small {
		width: 200px;
		height: 200px;
	}

	.bubble-medium {
		width: 280px;
		height: 280px;
	}

	.bubble-large {
		width: 350px;
		height: 350px;
	}

	.bubble-1 {
		top: 50px;
		left: 10%;
		z-index: 3;
		animation-delay: 0s;
	}

	.bubble-2 {
		top: 0;
		left: 28%;
		z-index: 5;
		animation-delay: 1s;
	}

	.bubble-3 {
		top: 120px;
		left: 48%;
		z-index: 2;
		animation-delay: 2s;
	}

	.bubble-4 {
		top: 40px;
		right: 12%;
		z-index: 4;
		animation-delay: 1.5s;
	}


	@keyframes bubbleFloat {
		0%, 100% { translate: 0 0; }
		50% { translate: 0 -15px; }
	}

	.bubble-content {
		text-align: center;
		color: #4a4a4a;
		padding: 30px;
		width: 100%;
		overflow: hidden;
		word-wrap: break-word;
	}

	.bubble-large .bubble-content {
		padding: 40px;
	}

	.bubble-small .bubble-content {
		padding: 20px;
	}

	/* Homeowners */
	.bubble-1 .bubble-content {
		padding: 5px 35px 65px;
	}

	/* Commercial */
	.bubble-2 .bubble-content {
		padding: 10px 30px 50px;
	}

	/* Car */
	.bubble-3 .bubble-content {
		padding: 0px 35px 80px;
		margin-top: -10px;
	}

	/* Custom */
	.bubble-4 .bubble-content {
		padding: 5px 20px 25px;
		margin-top: -10px;
	}

	.icon-wrapper {
		position: relative;
		display: inline-block;
		margin-bottom: 25px;
	}

	.bubble-large .icon-wrapper {
		margin-bottom: 30px;
	}

	.bubble-small .icon-wrapper {
		margin-bottom: 15px;
	}

	/* Homeowners and Car - smaller icons */
	.bubble-1 .icon-wrapper,
	.bubble-3 .icon-wrapper {
		margin-bottom: 20px;
	}

	.icon-wrapper::after {
		content: '';
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 4px;
		border-radius: 50%;
		background: var(--bubble-color);
		transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
	}

	.bubble:hover .icon-wrapper::after {
		width: 30px;
		height: 2px;
		border-radius: 0;
	}

	.bubble:hover .bubble-pricing {
		animation: pricingBob 0.6s ease-in-out infinite;
	}

	@keyframes pricingBob {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-5px); }
	}

	.bubble-icon {
		width: 60px;
		height: 60px;
		filter: none;
		display: block;
	}

	.bubble-large .bubble-icon {
		width: 90px;
		height: 90px;
	}

	.bubble-small .bubble-icon {
		width: 40px;
		height: 40px;
	}

	/* Homeowners and Car - smaller icons */
	.bubble-1 .bubble-icon,
	.bubble-3 .bubble-icon {
		width: 70px;
		height: 70px;
	}

	.bubble h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 0 0 10px 0;
		color: #4a4a4a;
	}

	.bubble-large h3 {
		font-size: 26px;
		margin: 0 0 14px 0;
	}

	.bubble-small h3 {
		font-size: 16px;
		margin: 0 0 8px 0;
	}

	/* Homeowners and Car - smaller titles */
	.bubble-1 h3,
	.bubble-3 h3 {
		font-size: 22px;
		margin: 0 0 10px 0;
	}

	.bubble-description {
		font-size: 13px;
		margin: 0 0 12px 0;
		opacity: 0.95;
		line-height: 1.4;
	}

	.bubble-large .bubble-description {
		font-size: 15px;
		margin: 0 0 15px 0;
	}

	.bubble-small .bubble-description {
		font-size: 11px;
		margin: 0 0 8px 0;
	}

	/* Homeowners and Car - smaller descriptions */
	.bubble-1 .bubble-description,
	.bubble-3 .bubble-description {
		font-size: 13px;
		margin: 0 0 10px 0;
	}

	.bubble-pricing {
		font-size: 13px;
		font-weight: 300;
		margin: 0;
		color: var(--bubble-color);
	}

	.bubble-large .bubble-pricing {
		font-size: 15px;
	}

	.bubble-small .bubble-pricing {
		font-size: 11px;
	}

	/* Homeowners and Car - smaller pricing */
	.bubble-1 .bubble-pricing,
	.bubble-3 .bubble-pricing {
		font-size: 13px;
	}

	@media (max-width: 968px) {
		.pricing h2 {
			font-size: 36px;
		}

		.bubbles-container {
			height: 700px;
		}

		.bubble-small {
			width: 130px;
			height: 130px;
		}

		.bubble-medium {
			width: 180px;
			height: 180px;
		}

		.bubble-large {
			width: 210px;
			height: 210px;
		}

		.bubble-1 {
			top: 30px;
			left: 10%;
		}

		.bubble-2 {
			top: 80px;
			right: 8%;
		}

		.bubble-3 {
			top: 340px;
			left: 5%;
		}

		.bubble-4 {
			top: 400px;
			right: 10%;
		}


		.bubble-content {
			padding: 15px;
		}

		/* Reset custom bubble padding for mobile */
		.bubble-1 .bubble-content,
		.bubble-2 .bubble-content,
		.bubble-3 .bubble-content,
		.bubble-4 .bubble-content {
			padding: 15px;
			margin-top: 0;
		}

		.icon-wrapper {
			margin-bottom: 12px;
		}

		.bubble h3 {
			margin: 0 0 6px 0;
		}

		.bubble-description {
			display: none;
		}
	}

	@media (max-width: 640px) {
		.pricing {
			padding: 60px 16px 100px;
		}

		.bubble-1 { left: 2%; }
		.bubble-2 { right: 2%; top: 190px; width: 270px; height: 270px; }
		.bubble-3 { top: 360px; left: 2%; }
		.bubble-4 { top: 430px; right: 2%; }

		.pricing h2 {
			font-size: 28px;
		}

		.bubbles-container {
			height: 650px;
		}

		.bubble-small {
			width: 140px;
			height: 140px;
		}

		.bubble-medium {
			width: 180px;
			height: 180px;
		}

		.bubble-large {
			width: 220px;
			height: 220px;
		}
	}
</style>
