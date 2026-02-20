<script lang="ts">
	import SemiPieChart from './SemiPieChart.svelte';
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';
</script>

<section class="switch-section">
	<div class="container">
		<h2>Full-Spectrum Protection for Your Life and Work</h2>
		<p class="switch-subtitle">Your risks are unique — your insurance should be too. We offer a complete suite of commercial, personal, and specialized coverage, all supported by expert guidance and access to Canada's top insurers. Whatever you're building, growing, or protecting, we're here to make sure you're covered with confidence.</p>

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
