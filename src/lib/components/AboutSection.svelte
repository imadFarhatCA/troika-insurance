<script lang="ts">
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';

	const values = [
		{
			id: 'trust',
			icon: 'shield',
			title: 'Trust',
			description: 'We take pride in performing honest assessments.',
			size: 'medium',
			color: '#92278f',
			colorRgb: '146, 39, 143',
			iconColor: '#c7a0cb',
			iconColorRgb: '199, 160, 203'
		},
		{
			id: 'transparency',
			icon: 'info',
			title: 'Transparency',
			description: 'Every recommendation we make is based solely on what truly serves you, never on selling a product.',
			size: 'large',
			color: '#c7a0cb',
			colorRgb: '199, 160, 203',
			iconColor: '#a7d8e9',
			iconColorRgb: '167, 216, 233'
		},
		{
			id: 'tailored',
			icon: 'users',
			title: 'Tailored Protection',
			description: 'Three parties, one common goal: your best interest at the center of every decision.',
			size: 'medium',
			color: '#a7d8e9',
			colorRgb: '167, 216, 233',
			iconColor: '#92278f',
			iconColorRgb: '146, 39, 143'
		}
	];
</script>

<section id="about" class="about">
	<div class="container">
		<h2 class="about-title">Coverage You Can Trust, Guidance You Can Feel</h2>
		<div class="about-description">
			<p>At Troika, insurance isn't a product—it's a partnership. We assess, we advise, and you decide, with full clarity and transparency at every step. Your needs stay at the center of every recommendation, so you can protect what matters most with confidence.</p>
			<p>Our philosophy is simple: three parties, one shared goal—your best interest. With transparent advice and tailored protection, we help you safeguard your assets, your business, and your future with confidence.</p>
		</div>
		<div class="bubbles-container">
			{#each values as value, i}
				<div class="bubble bubble-{i + 1} bubble-{value.size}" style="--bubble-color: {value.color}; --bubble-color-rgb: {value.colorRgb}; --icon-color: {value.iconColor}; --icon-color-rgb: {value.iconColorRgb}">
					<div class="bubble-content">
						<div class="icon-wrapper">
							<div class="icon-shape"></div>
						</div>
						<h3>{value.title}</h3>
						<p class="bubble-description">{value.description}</p>
					</div>
				</div>
			{/each}

			<!-- Background animated shapes -->
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-1" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-2" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-3" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-4" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-5" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-6" />
			<img src={circle} alt="" class="bg-shape circle-bg circle-bg-7" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-1" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-2" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-3" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-4" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-5" />
			<img src={xShape} alt="" class="bg-shape x-bg x-bg-6" />
		</div>
	</div>
</section>

<style>
	.about {
		padding: 100px 24px;
		background: #ececec;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
	}

	.about-title {
		text-align: center;
		font-size: 48px;
		font-weight: 700;
		color: #4a4a4a;
		margin: 0 0 32px 0;
	}

	.about-description {
		max-width: 800px;
		margin: 0 auto 80px;
		text-align: center;
	}

	.about-description p {
		font-size: 18px;
		color: #4a4a4a;
		margin: 0 0 20px 0;
		line-height: 1.7;
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
		background: var(--bubble-color);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
		animation: bubbleFloat 6s ease-in-out infinite;
	}

	.bubble:hover {
		transform: scale(1.15);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
		z-index: 100 !important;
		animation-play-state: paused;
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
		top: 60px;
		left: 22%;
		z-index: 3;
		animation-delay: 0s;
	}

	.bubble-2 {
		top: 30px;
		right: 20%;
		z-index: 5;
		animation-delay: 1.2s;
	}

	.bubble-3 {
		top: 180px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 4;
		animation-delay: 0.6s;
	}

	.bubble-3:hover {
		transform: translateX(-50%) scale(1.15);
	}

	@keyframes bubbleFloat {
		0%, 100% { translate: 0 0; }
		50% { translate: 0 -15px; }
	}

	.bubble-content {
		text-align: center;
		color: white;
		padding: 30px;
		width: 100%;
		overflow: hidden;
		word-wrap: break-word;
	}

	.bubble-large .bubble-content {
		padding: 40px;
	}

	/* Trust - medium bubble */
	.bubble-1 .bubble-content {
		padding: 35px 30px;
	}

	/* Transparency - large bubble with most text */
	.bubble-2 .bubble-content {
		padding: 30px 40px 50px;
		margin-top: -5px;
	}

	/* Tailored Protection - medium bubble */
	.bubble-3 .bubble-content {
		padding: 25px 30px 40px;
	}

	.icon-wrapper {
		position: relative;
		display: inline-block;
		margin-bottom: 20px;
	}

	.bubble-large .icon-wrapper {
		margin-bottom: 25px;
	}

	.icon-shape {
		width: 60px;
		height: 60px;
		background: var(--icon-color);
		border-radius: 50%;
		transition: border-radius 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.bubble-large .icon-shape {
		width: 80px;
		height: 80px;
	}

	.bubble:hover .icon-shape {
		border-radius: 4px;
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
		background: white;
		transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease;
	}

	.bubble:hover .icon-wrapper::after {
		width: 30px;
		height: 2px;
		border-radius: 0;
	}

	/* Bubble 1 (Purple) - hover text to lavender */
	.bubble-1:hover h3,
	.bubble-1:hover .bubble-description {
		color: #c7a0cb;
	}

	.bubble-1:hover .icon-wrapper::after {
		background: #c7a0cb;
	}

	/* Bubble 2 (Lavender) - hover text to black */
	.bubble-2:hover h3,
	.bubble-2:hover .bubble-description {
		color: #000000;
	}

	.bubble-2:hover .icon-wrapper::after {
		background: #000000;
	}

	/* Bubble 3 (Blue) - hover text to dark grey */
	.bubble-3:hover h3,
	.bubble-3:hover .bubble-description {
		color: #4a4a4a;
	}

	.bubble-3:hover .icon-wrapper::after {
		background: #4a4a4a;
	}

	.bubble h3 {
		font-size: 20px;
		font-weight: 700;
		margin: 0 0 12px 0;
		color: white;
	}

	.bubble-large h3 {
		font-size: 24px;
		margin: 0 0 14px 0;
	}

	.bubble-description {
		font-size: 14px;
		margin: 0;
		line-height: 1.5;
		opacity: 0.95;
	}

	.bubble-large .bubble-description {
		font-size: 15px;
		line-height: 1.6;
	}

	/* Background animated shapes */
	.bg-shape {
		position: absolute;
		opacity: 0.5;
		pointer-events: none;
		z-index: 0;
	}

	.circle-bg-1 {
		width: 140px;
		top: 10%;
		left: 5%;
		animation: bgFloat1 10s ease-in-out infinite;
	}

	.circle-bg-2 {
		width: 60px;
		top: 60%;
		right: 10%;
		animation: bgFloat2 12s ease-in-out infinite;
	}

	.circle-bg-3 {
		width: 120px;
		bottom: 15%;
		left: 40%;
		animation: bgFloat3 14s ease-in-out infinite;
	}

	.circle-bg-4 {
		width: 70px;
		top: 35%;
		right: 25%;
		animation: bgFloat4 11s ease-in-out infinite;
	}

	.x-bg-1 {
		width: 110px;
		top: 20%;
		right: 5%;
		animation: bgFloat1 13s ease-in-out infinite, bgRotate 20s linear infinite;
	}

	.x-bg-2 {
		width: 65px;
		bottom: 25%;
		left: 8%;
		animation: bgFloat2 15s ease-in-out infinite, bgRotate 25s linear infinite reverse;
	}

	.x-bg-3 {
		width: 95px;
		top: 50%;
		left: 30%;
		animation: bgFloat3 11s ease-in-out infinite, bgRotate 18s linear infinite;
	}

	.circle-bg-5 {
		width: 100px;
		top: 25%;
		left: 12%;
		animation: bgFloat1 9s ease-in-out infinite;
	}

	.circle-bg-6 {
		width: 80px;
		bottom: 20%;
		right: 18%;
		animation: bgFloat4 13s ease-in-out infinite;
	}

	.circle-bg-7 {
		width: 130px;
		top: 48%;
		right: 8%;
		animation: bgFloat2 16s ease-in-out infinite;
	}

	.x-bg-4 {
		width: 75px;
		bottom: 10%;
		left: 25%;
		animation: bgFloat4 14s ease-in-out infinite, bgRotate 22s linear infinite;
	}

	.x-bg-5 {
		width: 120px;
		top: 15%;
		left: 35%;
		animation: bgFloat1 12s ease-in-out infinite, bgRotate 19s linear infinite reverse;
	}

	.x-bg-6 {
		width: 85px;
		bottom: 30%;
		right: 30%;
		animation: bgFloat3 10s ease-in-out infinite, bgRotate 21s linear infinite;
	}

	@keyframes bgFloat1 {
		0%, 100% { translate: 0 0; }
		50% { translate: 15px -20px; }
	}

	@keyframes bgFloat2 {
		0%, 100% { translate: 0 0; }
		50% { translate: -20px 15px; }
	}

	@keyframes bgFloat3 {
		0%, 100% { translate: 0 0; }
		30% { translate: 18px 12px; }
		70% { translate: -12px -15px; }
	}

	@keyframes bgFloat4 {
		0%, 100% { translate: 0 0; }
		50% { translate: 12px 18px; }
	}

	@keyframes bgRotate {
		0% { rotate: 0deg; }
		100% { rotate: 360deg; }
	}

	@media (max-width: 968px) {
		.about-title {
			font-size: 36px;
		}

		.bubbles-container {
			height: 850px;
		}

		.bubble-medium {
			width: 200px;
			height: 200px;
		}

		.bubble-large {
			width: 240px;
			height: 240px;
		}

		.bubble-1 {
			top: 30px;
			left: 8%;
		}

		.bubble-2 {
			top: 200px;
			right: 5%;
		}

		.bubble-3 {
			top: 500px;
			left: 50%;
			transform: translateX(-50%);
		}

		.bubble-3:hover {
			transform: translateX(-50%) scale(1.15);
		}

		.bubble-content {
			padding: 20px;
		}

		.icon-wrapper {
			margin-bottom: 15px;
		}

		.bubble h3 {
			font-size: 16px;
			margin: 0 0 8px 0;
		}

		.bubble-description {
			font-size: 11px;
			line-height: 1.4;
		}
	}

	@media (max-width: 640px) {
		.about {
			padding: 60px 16px 100px;
		}

		.about-title {
			font-size: 28px;
		}

		.bubbles-container {
			height: 750px;
		}

		.bubble-medium {
			width: 190px;
			height: 190px;
		}

		.bubble-large {
			width: 220px;
			height: 220px;
		}

		.bubble-1 {
			top: 20px;
			left: 10%;
		}

		.bubble-2 {
			top: 180px;
			right: 8%;
		}

		.bubble-3 {
			top: 450px;
		}

		.bubble-content {
			padding: 16px;
		}

		.bubble h3 {
			font-size: 14px;
			margin: 0 0 6px 0;
		}

		.bubble-description {
			font-size: 10px;
			line-height: 1.35;
		}
	}
</style>
