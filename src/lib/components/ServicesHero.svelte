<script lang="ts">
	import { onMount } from 'svelte';

	let animatedElements = { tag: false, title: false, description: false, action1: false, action2: false };

	onMount(() => {
		setTimeout(() => { animatedElements.tag = true; }, 150);
		setTimeout(() => { animatedElements.title = true; }, 350);
		setTimeout(() => { animatedElements.description = true; }, 550);
		setTimeout(() => { animatedElements.action1 = true; }, 750);
		setTimeout(() => { animatedElements.action2 = true; }, 900);
	});
</script>

<section class="minimal-hero">
	<div class="container">
		<div class="hero-content">
			<div class="eyebrow-tag" class:animated={animatedElements.tag}>Our Services</div>

			<div class="hero-text-group" class:animated={animatedElements.title}>
				<h1 class="hero-title">
					Insurance Made Clear,<br>Complete, and Centered on You
				</h1>

				<p class="hero-description">
					<span class="hero-desc-line">We offer a full range of insurance solutions to protect your business, your assets, and your lifestyle.</span>
					<span class="hero-desc-line">Backed by the strength of the AssurUni network, we combine personalized guidance with access to top insurers and industry-leading expertise.</span>
				</p>
			</div>

			<div class="hero-actions">
				<a href="/contact" class="btn-primary-hero" class:animated={animatedElements.action1}>Get a Quote</a>
				<a href="#services" class="btn-secondary-hero" class:animated={animatedElements.action2}>Explore Services</a>
			</div>
		</div>
	</div>
</section>
