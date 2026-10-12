<script lang="ts">
	import { onMount } from 'svelte';
	import { segments } from '$lib/data/chartData';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	import homeownersIcon from '$lib/assets/icons/HOMEOWNERS Icon.svg';
	import corporateIcon from '$lib/assets/icons/CORPORATE Icon.svg';
	import carIcon from '$lib/assets/icons/Car Icon.svg';

	const icons = [corporateIcon, homeownersIcon, carIcon, carIcon];

	$: c = t[$language].switchSection.chart;
	$: fmt = (n: number) => ($language === 'FR' ? `${String(n).replace('.', ',')} %` : `${n}%`);

	const R = 170;
	const C = 2 * Math.PI * R;
	const GAP = 5;
	let acc = 0;
	const arcs = segments.map((s) => {
		const len = (s.pct / 100) * C;
		const arc = { ...s, len: len - GAP, offset: -(acc + GAP / 2) };
		acc += len;
		return arc;
	});

	let el: SVGSVGElement;
	let inView = false;
	let hovered: number | null = null;

	onMount(() => {
		const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { inView = true; io.disconnect(); } }, { threshold: 0.3 });
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<div class="chart-wrap">
<svg bind:this={el} viewBox="0 0 1000 640" class="donut" class:in-view={inView} role="img" aria-label={c.caption}>
	<g transform="rotate(-90 500 320)">
		{#each arcs as a, i}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<circle
				class="arc"
				class:hovered={hovered === i}
				cx="500" cy="320" r={R}
				fill="none" stroke={a.color} stroke-width="62"
				stroke-dasharray="{inView ? a.len : 0} {C}"
				stroke-dashoffset={a.offset}
				style="transition-delay: {inView ? i * 160 : 0}ms; --glow: {a.glow}"
				on:mouseenter={() => (hovered = i)}
				on:mouseleave={() => (hovered = null)}
			/>
		{/each}
	</g>

	{#each arcs as a, i}
		<image class="seg-icon" class:shown={hovered === i} href={icons[i]} x={a.icon[0] - 22} y={a.icon[1] - 22} width="44" height="44" />
	{/each}

	{#each arcs as a, i}
		{@const right = a.side === 'right'}
		{@const hx = right ? a.elbow[0] + 32 : a.elbow[0] - 32}
		<g class="label label-{i + 1}" class:hovered={hovered === i} style="transition-delay: {600 + i * 150}ms; --ax: {a.attract[0]}px; --ay: {a.attract[1]}px">
			<circle cx={a.dot[0]} cy={a.dot[1]} r="3" fill={a.color} />
			<path d="M {a.dot[0]},{a.dot[1]} L {a.elbow[0]},{a.lineY} H {hx}" stroke={a.color} stroke-width="1" fill="none" opacity="0.5" />
			<text x={hx + (right ? 6 : -6)} y={a.lineY - 14} text-anchor={right ? 'start' : 'end'} class="pct" fill={a.numColor}>{fmt(a.pct)}</text>
			<text x={hx + (right ? 6 : -6)} y={a.lineY + 30} text-anchor={right ? 'start' : 'end'} class="name">{c.segments[i]}</text>
		</g>
	{/each}

	<text x="500" y="312" text-anchor="middle" class="center-top">{c.centerTop}</text>
	<text x="500" y="356" text-anchor="middle" class="center-main">{c.centerMain}</text>
	<text x="500" y="612" text-anchor="middle" class="caption">{c.caption}</text>
</svg>

<ul class="legend" aria-hidden="true">
	{#each arcs as a, i}
		<li><span class="swatch" style="background:{a.color}"></span><b style="color:{a.numColor}">{fmt(a.pct)}</b><span>{c.segments[i]}</span></li>
	{/each}
</ul>
</div>

<style>
	.chart-wrap { width: min(1000px, 100%); }
	.donut { width: 100%; height: auto; display: block; margin: 0 auto; overflow: visible; }

	/* Gentle float of the whole chart once it has scrolled into view */
	.donut.in-view { animation: graphBob 5s ease-in-out 1.2s infinite; }
	@keyframes graphBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

	/* Segments: grow, darken and glow in their own colour on hover */
	.arc {
		cursor: pointer;
		transform-box: view-box;
		transform-origin: 500px 320px;
		transition: stroke-dasharray 1s cubic-bezier(0.22, 0.8, 0.3, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease;
	}
	.arc.hovered { transform: scale(1.06); filter: brightness(0.85) saturate(1.3) drop-shadow(0 0 12px rgba(var(--glow), 0.7)); }

	/* Icon pops in over the hovered segment */
	.seg-icon { opacity: 0; transform: scale(0.6); transform-box: fill-box; transform-origin: center; pointer-events: none; filter: brightness(0) invert(1); transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1); }
	.seg-icon.shown { opacity: 1; transform: scale(1); }

	/* Labels fade in, bob on their own rhythm and slide toward the segment on hover */
	.label { opacity: 0; transition: opacity 0.6s ease, translate 0.4s ease; }
	.in-view .label { opacity: 1; }
	.in-view .label-1 { animation: labelBob 4.5s ease-in-out 1.6s infinite; }
	.in-view .label-2 { animation: labelBob 5.2s ease-in-out 1.9s infinite; }
	.in-view .label-3 { animation: labelBob 4.8s ease-in-out 2.1s infinite; }
	.in-view .label-4 { animation: labelBob 5.5s ease-in-out 1.5s infinite; }
	.label.hovered { translate: var(--ax) var(--ay); }
	@keyframes labelBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

	.pct { font-size: 36px; font-weight: 700; }
	.name { font-size: 21px; font-weight: 700; fill: var(--color-text, #4a4a4a); }
	.center-top { font-size: 24px; fill: #6b6a7c; }
	.center-main { font-size: 32px; font-weight: 700; fill: #92278f; letter-spacing: 0.5px; }
	.caption { font-size: 18px; fill: #6b6a7c; }

	.legend { display: none; list-style: none; margin: 18px auto 0; padding: 0; max-width: 360px; }
	.legend li { display: grid; grid-template-columns: 14px auto 1fr; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #ece9f0; font-size: 15px; color: var(--color-text, #4a4a4a); }
	.swatch { width: 14px; height: 14px; border-radius: 3px; }
	.legend b { font-size: 17px; white-space: nowrap; }

	/* On small screens the labels move out of the SVG into a list under the ring */
	@media (max-width: 760px) {
		.label, .name { display: none; }
		.legend { display: block; }
		.center-top { font-size: 26px; }
		.center-main { font-size: 30px; }
		.caption { font-size: 22px; }
	}

	@media (prefers-reduced-motion: reduce) {
		.arc, .label, .seg-icon { transition: none; }
		.donut.in-view, .in-view .label { animation: none; }
	}
</style>
