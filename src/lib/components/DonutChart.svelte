<script lang="ts">
	import { onMount } from 'svelte';
	import { segments } from '$lib/data/chartData';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

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
				style="transition-delay: {i * 160}ms"
				on:mouseenter={() => (hovered = i)}
				on:mouseleave={() => (hovered = null)}
			/>
		{/each}
	</g>

	{#each arcs as a, i}
		{@const right = a.side === 'right'}
		{@const hx = right ? a.elbow[0] + 32 : a.elbow[0] - 32}
		<g class="label" class:hovered={hovered === i} style="transition-delay: {600 + i * 150}ms">
			<circle cx={a.dot[0]} cy={a.dot[1]} r="4" fill={a.color} />
			<path d="M {a.dot[0]},{a.dot[1]} L {a.elbow[0]},{a.lineY} H {hx}" stroke={a.color} stroke-width="1.2" fill="none" />
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

	.arc { transition: stroke-dasharray 1s cubic-bezier(0.22, 0.8, 0.3, 1), stroke-width 0.25s ease, filter 0.25s ease; cursor: pointer; }
	.arc.hovered { stroke-width: 70; filter: drop-shadow(0 0 10px rgba(146, 39, 143, 0.35)); }

	.label { opacity: 0; transition: opacity 0.6s ease; }
	.in-view .label { opacity: 1; }
	.label.hovered .pct { font-size: 40px; }

	.pct { font-size: 36px; font-weight: 700; transition: font-size 0.2s ease; }
	.name { font-size: 21px; font-weight: 700; fill: #1d1b3a; }
	.center-top { font-size: 24px; fill: #6b6a7c; }
	.center-main { font-size: 32px; font-weight: 700; fill: #92278f; letter-spacing: 0.5px; }
	.caption { font-size: 18px; fill: #6b6a7c; }

	.legend { display: none; list-style: none; margin: 18px auto 0; padding: 0; max-width: 360px; }
	.legend li { display: grid; grid-template-columns: 14px auto 1fr; align-items: center; gap: 10px; padding: 8px 0; border-bottom: 1px solid #ece9f0; font-size: 15px; color: #1d1b3a; }
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
		.arc, .label { transition: none; }
	}
</style>
