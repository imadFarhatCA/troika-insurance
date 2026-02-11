<script lang="ts">
	import PricingCard from './PricingCard.svelte';
	import rentersIcon from '$lib/assets/icons/RENTERS Icon.svg';
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';
	import corporateIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import carIcon from '$lib/assets/icons/Car Icon.svg';
	import customIcon from '$lib/assets/icons/CUSTOM Icon.svg';

	const products = [
		{ id: 'renters', icon: rentersIcon, title: 'Renters', description: 'Coverage for your stuff, and peace of mind', pricing: 'from $5 / month' },
		{ id: 'homeowners', icon: homeownersIcon, title: 'Homeowners', description: 'Protection for your home and stuff', pricing: 'from $25 / month' },
		{ id: 'commercial', icon: corporateIcon, title: 'Commercial', description: 'Coverage for your business', pricing: 'from $50 / month' },
		{ id: 'car', icon: carIcon, title: 'Car', description: 'Protect your car, passengers, and the planet', pricing: 'as low as $30 / month' },
		{ id: 'custom', icon: customIcon, title: 'Custom', description: 'Tailored coverage for unique needs', pricing: 'custom pricing' },
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

		<div class="pricing-grid">
			{#each products as product}
				<PricingCard
					id={product.id}
					icon={product.icon}
					title={product.title}
					description={product.description}
					pricing={product.pricing}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.pricing {
		padding: 100px 24px;
		background: white;
	}

	.container {
		max-width: 1200px;
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
		margin: 0 0 60px 0;
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

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 24px;
		max-width: 100%;
		margin: 0 auto;
		padding: 0 40px;
	}

	@media (max-width: 968px) {
		.pricing h2 {
			font-size: 36px;
		}

		.pricing-grid {
			grid-template-columns: repeat(2, 1fr);
			padding: 0;
		}
	}

	@media (max-width: 640px) {
		.pricing {
			padding: 60px 16px;
		}

		.pricing h2 {
			font-size: 28px;
		}

		.pricing-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}
	}
</style>
