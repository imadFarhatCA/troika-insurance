<script lang="ts">
	export let icon: string;
	export let title: string;
	export let description: string;
	export let cta: string = 'CHECK OUR PRICES';
	export let pricing: string;
	export let id: string = '';
</script>

<div class="pricing-card" {id}>
	<div class="pricing-icon">
		<img src={icon} alt="{title} Insurance" />
	</div>
	<h3>{title}</h3>
	<p>{description}</p>
	<a href="#quote" class="btn-pricing">{cta}</a>
	<p class="pricing-from">{pricing}</p>
</div>

<style>
	.pricing-card {
		background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
		border: none;
		border-radius: 20px;
		padding: 36px 20px 20px;
		text-align: center;
		transition: all 0.3s;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		display: flex;
		flex-direction: column;
	}

	.pricing-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(144, 39, 142, 0.2), 0 0 30px rgba(255, 0, 149, 0.15);
	}

	.pricing-icon {
		width: 100px;
		height: 100px;
		margin: 0 auto 20px;
	}

	.pricing-icon img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.pricing-card h3 {
		font-size: 22px;
		font-weight: 700;
		color: #3b3b3b;
		margin: 0 0 8px 0;
	}

	.pricing-card > p {
		color: #646464;
		margin: 0 0 32px 0;
		font-size: 13px;
		line-height: 1.6;
		flex-grow: 1;
	}

	.btn-pricing {
		display: block;
		background: #90278e;
		color: white;
		padding: 14px 24px;
		border-radius: 8px;
		text-decoration: none;
		font-weight: 700;
		font-size: 13px;
		transition: all 0.3s;
		border: none;
		cursor: pointer;
		letter-spacing: 0.5px;
		margin: 0 auto 12px;
		white-space: nowrap;
	}

	.btn-pricing:hover {
		background: #ff0095;
		transform: translateY(-2px);
		box-shadow: 0px 15px 40px rgba(255, 0, 149, 0.4);
	}

	.pricing-from {
		margin: 0;
		font-size: 10px;
		color: #b8b8b8;
		font-weight: 400;
		text-transform: lowercase;
	}
</style>
