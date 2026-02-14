<script lang="ts">
	import SemiPieChart from './SemiPieChart.svelte';
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';
</script>

<section class="switch-section">
	<div class="container">
		<h2>We can help you get Insured across the board!</h2>
		<p class="switch-subtitle">Whichever category your insurance falls under, we have the expertise to help you get the best out of it</p>

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
