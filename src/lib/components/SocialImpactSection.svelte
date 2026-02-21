<script lang="ts">
	// Import all insurance logos
	import intactLogo from '$lib/assets/insurersLogos/intactLogo.svg';
	import avivaLogo from '$lib/assets/insurersLogos/avivaLogo.svg';
	import wawanesaLogo from '$lib/assets/insurersLogos/wawanesaLogo.svg';
	import echelonLogo from '$lib/assets/insurersLogos/echelonLogo.svg';
	import northBridgeLogo from '$lib/assets/insurersLogos/northBridge logo.svg';
	import aprilLogo from '$lib/assets/insurersLogos/aprilLogo.svg';
	import amfLogo from '$lib/assets/insurersLogos/AMFlogo.svg';
	import chubbLogo from '$lib/assets/insurersLogos/chubbLogo.svg';
	import intactPrestige from '$lib/assets/insurersLogos/intactPrestige.svg';
	import uniqueAssurance from '$lib/assets/insurersLogos/uniqueAssurance.svg';
	import optimum from '$lib/assets/insurersLogos/optimum.svg';
	import orbit from '$lib/assets/insurersLogos/orbit.svg';
	import pafco from '$lib/assets/insurersLogos/pafco.svg';
	import promutuel from '$lib/assets/insurersLogos/promutuel.svg';
	import premierCanada from '$lib/assets/insurersLogos/premierCanada.svg';
	import markel from '$lib/assets/insurersLogos/markel.svg';
	import victor from '$lib/assets/insurersLogos/victor.svg';
	import vago from '$lib/assets/insurersLogos/vago.svg';
	import revau from '$lib/assets/insurersLogos/revau.svg';
	import zurich from '$lib/assets/insurersLogos/Zurich.svg';
	import libertyMutual from '$lib/assets/insurersLogos/libertyMutual.svg';
	import ches from '$lib/assets/insurersLogos/Ches.svg';
	import smb from '$lib/assets/insurersLogos/SMB.svg';
	import juste from '$lib/assets/insurersLogos/JUSTe.svg';
	import tsw from '$lib/assets/insurersLogos/TSW.svg';
	import swg from '$lib/assets/insurersLogos/SWG.svg';
	import soplex from '$lib/assets/insurersLogos/soplex.svg';
	import cfc from '$lib/assets/insurersLogos/CFC.svg';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let expanded = false;
	$: s = t[$language].social;

	const logos = [
		{ src: intactLogo, alt: 'Intact Insurance', scale: 1.35 },
		{ src: avivaLogo, alt: 'Aviva', scale: 0.65 },
		{ src: wawanesaLogo, alt: 'Wawanesa', scale: 1.15 },
		{ src: echelonLogo, alt: 'Echelon Insurance', scale: 0.75 },
		{ src: northBridgeLogo, alt: 'Northbridge Insurance', scale: 1.4 },
		{ src: aprilLogo, alt: 'April Insurance', scale: 0.6 },
		{ src: amfLogo, alt: 'AMF', scale: 1.05 },
		{ src: chubbLogo, alt: 'Chubb', scale: 1.3 },
		{ src: intactPrestige, alt: 'Intact Prestige', scale: 0.7 },
		{ src: uniqueAssurance, alt: 'Unique Assurance', scale: 1.38 },
		{ src: optimum, alt: 'Optimum', scale: 0.68 },
		{ src: orbit, alt: 'Orbit', scale: 1.25 },
		{ src: pafco, alt: 'Pafco', scale: 0.73 },
		{ src: promutuel, alt: 'Promutuel', scale: 1.33 },
		{ src: premierCanada, alt: 'Premier Canada', scale: 0.72 },
		{ src: markel, alt: 'Markel', scale: 1.28 },
		{ src: victor, alt: 'Victor', scale: 0.78 },
		{ src: vago, alt: 'Vago', scale: 1.32 },
		{ src: revau, alt: 'Revau', scale: 0.67 },
		{ src: zurich, alt: 'Zurich', scale: 1.42 },
		{ src: libertyMutual, alt: 'Liberty Mutual', scale: 0.62 },
		{ src: ches, alt: 'Ches', scale: 1.22 },
		{ src: smb, alt: 'SMB', scale: 0.8 },
		{ src: juste, alt: 'JUSTe', scale: 1.27 },
		{ src: tsw, alt: 'TSW', scale: 0.76 },
		{ src: swg, alt: 'SWG', scale: 1.2 },
		{ src: soplex, alt: 'Soplex', scale: 0.69 },
		{ src: cfc, alt: 'CFC', scale: 1.36 }
	];

	$: displayedLogos = expanded ? logos : logos.slice(0, 15);
</script>

<section class="social-impact">
	<div class="container">
		<h2>{s.title}</h2>
		<p class="impact-subtitle">{s.subtitle}</p>

		<div class="insurers-wrapper">
			<div class="insurers-masonry" class:expanded>
				{#each displayedLogos as logo}
					<div class="insurer-logo-item" style="transform: scale({logo.scale});">
						<img src={logo.src} alt={logo.alt} />
					</div>
				{/each}
			</div>
			{#if !expanded}
				<div class="gradient-overlay"></div>
			{/if}
		</div>

		<button class="see-more-btn" on:click={() => (expanded = !expanded)}>
			{expanded ? s.showLess : s.showMore}
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="currentColor"
				style="transform: rotate({expanded ? 180 : 0}deg); transition: transform 0.3s;"
			>
				<path d="M8 10.5l-4-4 1-1 3 3 3-3 1 1-4 4z" />
			</svg>
		</button>
	</div>
</section>
