<script lang="ts">
	import { testimonials } from '$lib/data/testimonials';
</script>

<section class="testimonials">
	<div class="container">
		<h2>Trust, Earned One Client at a Time</h2>
		<p class="testimonials-subtitle">Troika has earned top ratings from customers,<br/>and is trusted by hundreds of families and businesses</p>

		<div class="stars-container">
			{#each Array(5) as _, i}
				<svg class="review-star" style="animation-delay: {i * 0.8}s" width="112" height="112" viewBox="0 0 24 24" fill="#92278f">
					<path d="M12 2.5C12.3 2.5 12.6 2.7 12.7 3L14.8 7.8 20 8.5C20.3 8.6 20.6 8.8 20.7 9.1 20.8 9.4 20.7 9.7 20.5 9.9L16.7 13.6 17.6 18.8C17.7 19.1 17.5 19.4 17.3 19.6 17.1 19.7 16.8 19.8 16.5 19.6L12 17.2 7.5 19.6C7.2 19.8 6.9 19.7 6.7 19.6 6.5 19.4 6.3 19.1 6.4 18.8L7.3 13.6 3.5 9.9C3.3 9.7 3.2 9.4 3.3 9.1 3.4 8.8 3.7 8.6 4 8.5L9.2 7.8 11.3 3C11.4 2.7 11.7 2.5 12 2.5Z"/>
				</svg>
			{/each}
		</div>

		<div class="testimonials-grid">
			{#each testimonials as testimonial}
				<div class="testimonial-card">
					<div class="testimonial-header">
						<div class="testimonial-avatar">{testimonial.initials}</div>
						<div class="testimonial-author">
							<h4>{testimonial.name}</h4>
							<p>{testimonial.handle}</p>
						</div>
					</div>
					<p>{testimonial.quote}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
