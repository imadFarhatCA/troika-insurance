<script lang="ts">
	import Icon from './Icon.svelte';
</script>

<section id="about" class="about">
	<div class="container">
		<h2 class="about-title">Coverage You Can Trust, Guidance You Can Feel</h2>
		<div class="about-description">
			<p>At Troika, insurance isn't a product—it's a partnership. We assess, we advise, and you decide, with full clarity and transparency at every step. Your needs stay at the center of every recommendation, so you can protect what matters most with confidence.</p>
			<p>Our philosophy is simple: three parties, one shared goal—your best interest. With transparent advice and tailored protection, we help you safeguard your assets, your business, and your future with confidence.</p>
		</div>
		<div class="about-boxes">
			<div class="about-box about-box-purple">
				<div class="about-box-icon">
					<Icon name="shield" size={36} />
				</div>
				<h3>Trust</h3>
				<p>We take pride in performing honest assessments.</p>
			</div>
			<div class="about-box about-box-pink">
				<div class="about-box-icon">
					<Icon name="info" size={36} />
				</div>
				<h3>Transparency</h3>
				<p>Every recommendation we make is based solely on what truly serves you, never on selling a product.</p>
			</div>
			<div class="about-box about-box-blue">
				<div class="about-box-icon">
					<Icon name="users" size={36} />
				</div>
				<h3>Tailored Protection</h3>
				<p>We work under a "power of three" philosophy: you, us, and the insurer. Three parties, one common goal, your best interest at the center of every decision.</p>
			</div>
		</div>
	</div>
</section>
