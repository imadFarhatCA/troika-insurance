<script lang="ts">
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';

	const values = [
		{
			id: 'trust',
			title: 'Trust',
			description: 'We take pride in performing honest assessments.',
			color: '#92278f',
			colorCode: '92-278F',
			colorName: 'Deep Purple',
			hex: '#92278F',
			rgb: 'RGB(146, 39, 143)',
			cmyk: 'CMYK(0, 73, 2, 43)'
		},
		{
			id: 'transparency',
			title: 'Transparency',
			description: 'Every recommendation we make is based solely on what truly serves you, never on selling a product.',
			color: '#c7a0cb',
			colorCode: 'C7-A0CB',
			colorName: 'Soft Lavender',
			hex: '#C7A0CB',
			rgb: 'RGB(199, 160, 203)',
			cmyk: 'CMYK(2, 21, 0, 20)'
		},
		{
			id: 'tailored',
			title: 'Tailored Protection',
			description: 'We work under a "power of three" philosophy: you, us, and the insurer. Three parties, one common goal, your best interest at the center of every decision.',
			color: '#a7d8e9',
			colorCode: 'A7-D8E9',
			colorName: 'Sky Blue',
			hex: '#A7D8E9',
			rgb: 'RGB(167, 216, 233)',
			cmyk: 'CMYK(28, 7, 0, 9)'
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
		<div class="pantone-cards-container">
			{#each values as value, i}
				<div class="pantone-card pantone-card-{i + 1}" style="--card-color: {value.color}">
					<div class="pantone-color-block">
						<div class="pantone-header">
							<span class="pantone-label">Troika</span>
							<div class="pantone-code-group">
								<span class="pantone-code">{value.colorCode}</span>
								<div class="pantone-color-specs">
									<p class="pantone-spec">{value.hex}</p>
									<p class="pantone-spec">{value.rgb}</p>
									<p class="pantone-spec">{value.cmyk}</p>
								</div>
							</div>
						</div>
						<div class="pantone-title-wrapper">
							<div class="title-shape"></div>
							<h3 class="pantone-title">{value.title}</h3>
						</div>
					</div>
					<div class="pantone-info">
						<div class="border-dot"></div>
						<p class="pantone-color-name">{value.colorName}</p>
						<p class="pantone-description">{value.description}</p>
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
