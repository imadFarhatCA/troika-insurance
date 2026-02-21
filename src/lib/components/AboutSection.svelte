<script lang="ts">
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	$: s = t[$language].about;

	const colorData = [
		{ id: 'trust',        color: '#92278f', colorCode: '92-278F', hex: '#92278F', rgb: 'RGB(146, 39, 143)', cmyk: 'CMYK(0, 73, 2, 43)' },
		{ id: 'transparency', color: '#c7a0cb', colorCode: 'C7-A0CB', hex: '#C7A0CB', rgb: 'RGB(199, 160, 203)', cmyk: 'CMYK(2, 21, 0, 20)' },
		{ id: 'tailored',     color: '#a7d8e9', colorCode: 'A7-D8E9', hex: '#A7D8E9', rgb: 'RGB(167, 216, 233)', cmyk: 'CMYK(28, 7, 0, 9)' },
	];
</script>

<section id="about" class="about">
	<div class="container">
		<h2 class="about-title">{s.title}</h2>
		<div class="about-description">
			<p>{s.p1}</p>
			<p>{s.p2}</p>
		</div>
		<div class="pantone-cards-container">
			{#each s.values as value, i}
				<div class="pantone-card pantone-card-{i + 1}" style="--card-color: {colorData[i].color}">
					<div class="pantone-color-block">
						<div class="pantone-header">
							<span class="pantone-label">Troika</span>
							<div class="pantone-code-group">
								<span class="pantone-code">{colorData[i].colorCode}</span>
								<div class="pantone-color-specs">
									<p class="pantone-spec">{colorData[i].hex}</p>
									<p class="pantone-spec">{colorData[i].rgb}</p>
									<p class="pantone-spec">{colorData[i].cmyk}</p>
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
