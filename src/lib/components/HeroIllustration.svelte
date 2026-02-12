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

	<!-- Sun -->
	<img src={sun} alt="" class="anim sun" />

	<!-- Clouds -->
	<img src={cloud} alt="" class="anim cloud cloud-1" />
	<img src={cloud} alt="" class="anim cloud cloud-2" />

	<!-- X shapes scattered -->
	<img src={xShape} alt="" class="anim x-shape x-1" />
	<img src={xShape} alt="" class="anim x-shape x-2" />
	<img src={xShape} alt="" class="anim x-shape x-3" />

	<!-- Circles scattered -->
	<img src={circle} alt="" class="anim circle-shape circle-1" />
	<img src={circle} alt="" class="anim circle-shape circle-2" />
	<img src={circle} alt="" class="anim circle-shape circle-3" />

	<!-- Lines -->
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
		width: 180px;
		height: 180px;
		bottom: 35%;
		right: calc(6% + 200px);
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
		bottom: 45%;
		right: 30%;
		animation: cloudDrift1 14s ease-in-out infinite;
	}

	.cloud-2 {
		width: 100px;
		bottom: 38%;
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

	/* ---- X shapes ---- */
	.x-shape {
		opacity: 0.9;
	}

	.x-1 {
		width: 70px;
		bottom: 42%;
		right: calc(18% + 150px);
		animation: xFloat1 10s ease-in-out infinite, xRotate 20s linear infinite;
	}

	.x-2 {
		width: 35px;
		bottom: calc(30% + 100px);
		right: 45%;
		animation: xFloat2 13s ease-in-out infinite, xRotate 25s linear infinite reverse;
	}

	.x-3 {
		width: 50px;
		bottom: 50%;
		right: 65%;
		animation: xFloat3 11s ease-in-out infinite, xRotate 18s linear infinite;
	}

	@keyframes xFloat1 {
		0%, 100% { translate: 0 0; }
		50% { translate: -20px 18px; }
	}

	@keyframes xFloat2 {
		0%, 100% { translate: 0 0; }
		40% { translate: 15px -12px; }
		80% { translate: -10px 8px; }
	}

	@keyframes xFloat3 {
		0%, 100% { translate: 0 0; }
		50% { translate: 12px 15px; }
	}

	@keyframes xRotate {
		0% { rotate: 0deg; }
		100% { rotate: 360deg; }
	}

	/* ---- Circles ---- */
	.circle-shape {
		opacity: 0.9;
	}

	.circle-1 {
		width: 75px;
		bottom: calc(48% + 100px);
		right: 10%;
		animation: circleFloat1 12s ease-in-out infinite;
	}

	.circle-2 {
		width: 40px;
		bottom: 35%;
		right: 38%;
		animation: circleFloat2 15s ease-in-out infinite;
	}

	.circle-3 {
		width: 58px;
		bottom: 28%;
		right: 58%;
		animation: circleFloat3 11s ease-in-out infinite;
	}

	@keyframes circleFloat1 {
		0%, 100% { translate: 0 0; }
		30% { translate: 18px -15px; }
		70% { translate: -15px 12px; }
	}

	@keyframes circleFloat2 {
		0%, 100% { translate: 0 0; }
		50% { translate: -12px -18px; }
	}

	@keyframes circleFloat3 {
		0%, 100% { translate: 0 0; }
		40% { translate: 15px 10px; }
		80% { translate: -10px -8px; }
	}

	/* ---- Lines ---- */
	.lines {
		opacity: 0.9;
	}

	.lines-1 {
		width: 100px;
		bottom: 40%;
		right: 40%;
		animation: linesDrift1 15s ease-in-out infinite;
	}

	.lines-2 {
		width: 80px;
		bottom: 32%;
		right: 60%;
		animation: linesDrift2 12s ease-in-out infinite;
	}

	.lines-3 {
		width: 70px;
		bottom: 50%;
		right: 48%;
		animation: linesDrift3 18s ease-in-out infinite;
	}

	.lines-4 {
		width: 90px;
		bottom: 28%;
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

		/* Big illustration, partially cropped at bottom */
		.illustration {
			width: 360%;
			max-width: none;
			height: auto;
			object-fit: contain;
			object-position: center bottom;
			opacity: 0.9;
		}

		/* Elements at ~50% desktop size, matching user layout */
		.anim {
			opacity: 0.9;
		}

		/* Sun: center-right, overlapping top of illustration */
		.sun {
			width: 90px;
			height: 90px;
			bottom: auto;
			top: 60%;
			right: 20%;
			opacity: 0.9;
		}

		/* Cloud 1: left side, above trees */
		.cloud-1 {
			width: 80px;
			bottom: auto;
			top: 55%;
			left: 8%;
			right: auto;
		}

		/* Cloud 2: center area */
		.cloud-2 {
			width: 55px;
			bottom: auto;
			top: 57%;
			left: 38%;
			right: auto;
		}

		/* X-1: far right, just below CTA */
		.x-1 {
			width: 30px;
			bottom: auto;
			top: 53%;
			right: 3%;
		}

		/* X-2: lower right, near houses */
		.x-2 {
			width: 18px;
			bottom: auto;
			top: 66%;
			right: 12%;
		}

		/* X-3: center-left area */
		.x-3 {
			width: 22px;
			bottom: auto;
			top: 58%;
			left: 28%;
			right: auto;
		}

		/* Circle-1: right side, near X-1 */
		.circle-1 {
			width: 30px;
			bottom: auto;
			top: 54%;
			right: 12%;
		}

		/* Circle-2: left side, near cloud */
		.circle-2 {
			width: 20px;
			bottom: auto;
			top: 58%;
			left: 3%;
			right: auto;
		}

		/* Circle-3: center area */
		.circle-3 {
			width: 25px;
			bottom: auto;
			top: 62%;
			left: 52%;
			right: auto;
		}

		/* Lines spread across middle zone */
		.lines-1 {
			width: 55px;
			bottom: auto;
			top: 56%;
			left: 20%;
			right: auto;
		}

		.lines-2 {
			width: 40px;
			bottom: auto;
			top: 63%;
			left: 5%;
			right: auto;
		}

		.lines-3 {
			width: 35px;
			bottom: auto;
			top: 55%;
			right: 30%;
		}

		.lines-4 {
			width: 45px;
			bottom: auto;
			top: 61%;
			right: 40%;
		}
	}
</style>
