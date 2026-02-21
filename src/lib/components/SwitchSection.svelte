<script lang="ts">
	import SemiPieChart from './SemiPieChart.svelte';
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	$: s = t[$language].switchSection;
</script>

<section class="switch-section">
	<div class="container">
		<h2>{s.title}</h2>
		<p class="switch-subtitle">{s.subtitle}</p>

		<div class="insurance-chart">
			<SemiPieChart />
		</div>
	</div>

	<!-- Background animated shapes -->
	<img src={circle} alt="" class="bg-shape circle-bg switch-circle-1" />
	<img src={circle} alt="" class="bg-shape circle-bg switch-circle-2" />
	<img src={circle} alt="" class="bg-shape circle-bg switch-circle-3" />
	<img src={circle} alt="" class="bg-shape circle-bg switch-circle-4" />
	<img src={circle} alt="" class="bg-shape circle-bg switch-circle-5" />
	<img src={xShape} alt="" class="bg-shape x-bg switch-x-1" />
	<img src={xShape} alt="" class="bg-shape x-bg switch-x-2" />
	<img src={xShape} alt="" class="bg-shape x-bg switch-x-3" />
	<img src={xShape} alt="" class="bg-shape x-bg switch-x-4" />
</section>
