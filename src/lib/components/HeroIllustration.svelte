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
		bottom: calc(45% - 20px);
		right: 30%;
		animation: cloudDrift1 14s ease-in-out infinite;
	}

	.cloud-2 {
		width: 100px;
		bottom: calc(38% - 20px);
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
		bottom: calc(42% - 20px);
		right: calc(18% + 150px);
		animation: xFloat1 10s ease-in-out infinite, xRotate 20s linear infinite;
	}

	.x-2 {
		width: 35px;
		bottom: calc(30% + 80px);
		right: 45%;
		animation: xFloat2 13s ease-in-out infinite, xRotate 25s linear infinite reverse;
	}

	.x-3 {
		width: 50px;
		bottom: calc(50% - 20px);
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
		bottom: calc(48% + 80px);
		right: 10%;
		animation: circleFloat1 12s ease-in-out infinite;
	}

	.circle-2 {
		width: 40px;
		bottom: calc(35% - 20px);
		right: 38%;
		animation: circleFloat2 15s ease-in-out infinite;
	}

	.circle-3 {
		width: 58px;
		bottom: calc(28% - 20px);
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
		bottom: calc(40% - 20px);
		right: 40%;
		animation: linesDrift1 15s ease-in-out infinite;
	}

	.lines-2 {
		width: 80px;
		bottom: calc(32% - 20px);
		right: 60%;
		animation: linesDrift2 12s ease-in-out infinite;
	}

	.lines-3 {
		width: 70px;
		bottom: calc(50% - 20px);
		right: 48%;
		animation: linesDrift3 18s ease-in-out infinite;
	}

	.lines-4 {
		width: 90px;
		bottom: calc(28% - 20px);
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
			width: auto;
			height: 60%;
			max-width: none;
			object-fit: cover;
			object-position: center bottom;
			opacity: 0.8;
		}

		.anim {
			opacity: 0.8;
		}

		.sun {
			width: 180px;
			height: 180px;
			bottom: auto;
			top: 50%;
			right: 3%;
			opacity: 0.8;
		}

		.cloud-1 {
			width: 140px;
			bottom: auto;
			top: calc(40% + 20px);
			left: 2%;
			right: auto;
		}

		.cloud-2 {
			width: 100px;
			bottom: auto;
			top: calc(42% + 20px);
			left: 48%;
			right: auto;
		}

		.x-1 {
			width: 56px;
			bottom: auto;
			top: calc(38% + 20px);
			right: 2%;
		}

		.x-2 {
			width: 32px;
			bottom: auto;
			top: calc(52% + 20px);
			left: 38%;
			right: auto;
		}

		.x-3 {
			width: 40px;
			bottom: auto;
			top: calc(58% + 20px);
			right: 35%;
		}

		.circle-1 {
			width: 56px;
			bottom: auto;
			top: calc(41% + 20px);
			right: 20%;
		}

		.circle-2 {
			width: 36px;
			bottom: auto;
			top: calc(54% + 20px);
			left: 12%;
			right: auto;
		}

		.circle-3 {
			width: 44px;
			bottom: auto;
			top: calc(60% + 20px);
			right: 8%;
		}

		.lines-1 {
			width: 100px;
			bottom: auto;
			top: calc(44% + 20px);
			left: 28%;
			right: auto;
		}

		.lines-2 {
			width: 70px;
			bottom: auto;
			top: calc(56% + 20px);
			left: 58%;
			right: auto;
		}

		.lines-3 {
			width: 80px;
			bottom: auto;
			top: calc(39% + 20px);
			right: 42%;
		}

		.lines-4 {
			width: 60px;
			bottom: auto;
			top: calc(57% + 20px);
			left: 1%;
			right: auto;
		}
	}
</style>
