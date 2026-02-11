<script lang="ts">
	import heroIllustration from '$lib/assets/hero-illustration.svg';
</script>

<div class="hero-illustration">
	<img src={heroIllustration} alt="Troika Insurance Hero" class="illustration" />
</div>

<style>
	.hero-illustration {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		z-index: 1;
		overflow: hidden;
	}

	.illustration {
		width: 70%;
		height: 100%;
		object-fit: contain;
		object-position: right center;
		animation: float 6s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-20px); }
	}

	@media (max-width: 968px) {
		.hero-illustration {
			justify-content: center;
			align-items: flex-end;
		}

		.illustration {
			width: 80%;
			height: auto;
			max-height: 45%;
			object-fit: contain;
			object-position: center bottom;
		}
	}

	@media (max-width: 640px) {
		.illustration {
			width: 80%;
			max-height: 40%;
		}
	}
</style>
