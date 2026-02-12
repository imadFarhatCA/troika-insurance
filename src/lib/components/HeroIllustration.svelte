<script lang="ts">
	import cityscape from '$lib/assets/heroAnimation/hero-illustration-001.svg';
	import sun from '$lib/assets/heroAnimation/heroAnimation Sun.svg';
	import cloud from '$lib/assets/heroAnimation/heroAnimation Cloud.svg';
	import xShape from '$lib/assets/heroAnimation/heroAnimation X.svg';
	import circle from '$lib/assets/heroAnimation/heroAnimation cirlce.svg';
	import lines1 from '$lib/assets/heroAnimation/heroAnimation lines.svg';
	import lines2 from '$lib/assets/heroAnimation/heroAnimation lines 001.svg';
	import lines3 from '$lib/assets/heroAnimation/heroAnimation lines 002.svg';
	import lines4 from '$lib/assets/heroAnimation/heroAnimation lines 003.svg';
</script>

<div class="hero-illustration">
	<img src={cityscape} alt="Troika Insurance Hero" class="illustration" />

	<!-- Sun: top-right, slow spin + gentle drift -->
	<img src={sun} alt="" class="anim sun" />

	<!-- Clouds: drift on X axis at different speeds -->
	<img src={cloud} alt="" class="anim cloud cloud-1" />
	<img src={cloud} alt="" class="anim cloud cloud-2" />

	<!-- X shape: gentle float + slow rotation -->
	<img src={xShape} alt="" class="anim x-shape" />

	<!-- Circle: soft float -->
	<img src={circle} alt="" class="anim circle-shape" />

	<!-- Lines: subtle X drift at staggered speeds -->
	<img src={lines1} alt="" class="anim lines lines-1" />
	<img src={lines2} alt="" class="anim lines lines-2" />
	<img src={lines3} alt="" class="anim lines lines-3" />
	<img src={lines4} alt="" class="anim lines lines-4" />
</div>

<style>
	.hero-illustration {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: flex-end;
		z-index: 1;
		overflow: hidden;
	}

	.illustration {
		width: 70%;
		height: auto;
		object-fit: contain;
		object-position: right bottom;
		opacity: 0.9;
		animation: illustrationFloat 8s ease-in-out infinite;
	}

	@keyframes illustrationFloat {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(-8px); }
	}

	/* Shared animated element styles */
	.anim {
		position: absolute;
		pointer-events: none;
		opacity: 0.9;
	}

	/* ---- Sun ---- */
	.sun {
		width: 150px;
		height: 150px;
		top: 6%;
		right: 6%;
		opacity: 0.9;
		animation: sunSpin 60s linear infinite, sunDrift 10s ease-in-out infinite;
	}

	@keyframes sunSpin {
		0% { rotate: 0deg; }
		100% { rotate: 360deg; }
	}

	@keyframes sunDrift {
		0%, 100% { translate: 0 0; }
		50% { translate: 25px -18px; }
	}

	/* ---- Clouds ---- */
	.cloud {
		opacity: 0.9;
	}

	.cloud-1 {
		width: 140px;
		top: 12%;
		right: 30%;
		animation: cloudDrift1 14s ease-in-out infinite;
	}

	.cloud-2 {
		width: 100px;
		top: 22%;
		right: 55%;
		animation: cloudDrift2 18s ease-in-out infinite;
	}

	@keyframes cloudDrift1 {
		0%, 100% { translate: 0 0; }
		30% { translate: 50px 8px; }
		70% { translate: -35px -5px; }
	}

	@keyframes cloudDrift2 {
		0%, 100% { translate: 0 0; }
		40% { translate: -40px 12px; }
		80% { translate: 25px -8px; }
	}

	/* ---- X shape ---- */
	.x-shape {
		width: 50px;
		top: 35%;
		right: 18%;
		opacity: 0.9;
		animation: xFloat 10s ease-in-out infinite, xRotate 20s linear infinite;
	}

	@keyframes xFloat {
		0%, 100% { translate: 0 0; }
		50% { translate: -20px 18px; }
	}

	@keyframes xRotate {
		0% { rotate: 0deg; }
		100% { rotate: 360deg; }
	}

	/* ---- Circle ---- */
	.circle-shape {
		width: 55px;
		top: 18%;
		right: 12%;
		opacity: 0.9;
		animation: circleFloat 12s ease-in-out infinite;
	}

	@keyframes circleFloat {
		0%, 100% { translate: 0 0; }
		30% { translate: 18px -15px; }
		70% { translate: -15px 12px; }
	}

	/* ---- Lines ---- */
	.lines {
		opacity: 0.9;
	}

	.lines-1 {
		width: 100px;
		top: 28%;
		right: 40%;
		animation: linesDrift1 15s ease-in-out infinite;
	}

	.lines-2 {
		width: 80px;
		top: 42%;
		right: 60%;
		animation: linesDrift2 12s ease-in-out infinite;
	}

	.lines-3 {
		width: 70px;
		top: 15%;
		right: 48%;
		animation: linesDrift3 18s ease-in-out infinite;
	}

	.lines-4 {
		width: 90px;
		top: 50%;
		right: 25%;
		animation: linesDrift4 14s ease-in-out infinite;
	}

	@keyframes linesDrift1 {
		0%, 100% { translate: 0 0; }
		50% { translate: 40px 8px; }
	}

	@keyframes linesDrift2 {
		0%, 100% { translate: 0 0; }
		50% { translate: -35px 6px; }
	}

	@keyframes linesDrift3 {
		0%, 100% { translate: 0 0; }
		40% { translate: 30px 10px; }
		80% { translate: -18px -6px; }
	}

	@keyframes linesDrift4 {
		0%, 100% { translate: 0 0; }
		50% { translate: -28px 5px; }
	}

	/* ---- Mobile ---- */
	@media (max-width: 968px) {
		.hero-illustration {
			justify-content: center;
			align-items: flex-end;
		}

		.illustration {
			width: 100%;
			height: auto;
			object-fit: contain;
			object-position: center bottom;
			transform: scale(2.5);
			transform-origin: center bottom;
		}

		/* Reposition elements for mobile */
		.anim {
			opacity: 0.05;
		}

		.sun {
			width: 80px;
			top: 5%;
			right: 10%;
			opacity: 0.07;
		}

		.cloud-1 {
			width: 90px;
			top: 8%;
			right: 40%;
		}

		.cloud-2 {
			width: 70px;
			top: 16%;
			right: 15%;
		}

		.x-shape {
			width: 35px;
			top: 25%;
			right: 25%;
		}

		.circle-shape {
			width: 40px;
			top: 12%;
			right: 65%;
		}

		.lines-1 {
			width: 70px;
			top: 20%;
			right: 50%;
		}

		.lines-2 {
			width: 55px;
			top: 30%;
			right: 70%;
		}

		.lines-3 {
			width: 50px;
			top: 10%;
			right: 55%;
		}

		.lines-4 {
			width: 60px;
			top: 35%;
			right: 30%;
		}
	}
</style>
