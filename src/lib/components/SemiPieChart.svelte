<script lang="ts">
	import { onMount } from 'svelte';
	import { segments, connectors, labels } from '$lib/data/chartData';

	let chartEl: SVGSVGElement;
	let inView = false;
	let hovered: number | null = null;
	let revealed: boolean[] = [false, false, false, false, false];
	let revealTimers: ReturnType<typeof setTimeout>[] = [];

	function startReveal() {
		[100, 250, 400, 550, 700].forEach((delay, i) => {
			revealTimers.push(setTimeout(() => {
				revealed[i] = true;
				revealed = revealed;
			}, delay));
		});
	}

	function resetReveal() {
		revealTimers.forEach(clearTimeout);
		revealTimers = [];
		revealed = [false, false, false, false, false];
		inView = false;
	}

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					inView = true;
					startReveal();
				} else if (inView) {
					resetReveal();
				}
			},
			{ threshold: 0.25 }
		);
		observer.observe(chartEl);
		return () => {
			observer.disconnect();
			revealTimers.forEach(clearTimeout);
		};
	});
</script>

<svg bind:this={chartEl} viewBox="0 0 860 600" class="semi-pie-chart" class:in-view={inView} xmlns="http://www.w3.org/2000/svg">
	<defs>
		{#each ['#d4b5e9,#b088c8', '#a43daa,#751e73', '#b5e3f4,#7fc4dc', '#ff2da8,#d10080', '#5ec5de,#3592b0'] as colors, i}
			<linearGradient id="grad{i + 1}" x1="0%" y1="0%" x2="100%" y2="100%">
				<stop offset="0%" stop-color={colors.split(',')[0]} />
				<stop offset="100%" stop-color={colors.split(',')[1]} />
			</linearGradient>
		{/each}
		<filter id="centerShadow" x="-50%" y="-50%" width="200%" height="200%">
			<feDropShadow dx="0" dy="6" stdDeviation="14" flood-opacity="0.18" />
		</filter>
	</defs>

	{#each segments as seg, i}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<g class="segment segment-{seg.id}" class:revealed={revealed[i]} class:hovered={hovered === i} on:mouseenter={() => hovered = i} on:mouseleave={() => hovered = null}>
			<path d={seg.path} fill="url(#{seg.grad})" />
			<g class="segment-icon" transform="translate({seg.iconPos})" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
				<path d={seg.icon} />
			</g>
		</g>
	{/each}

	{#each connectors as conn, i}
		<g class="connector connector-{conn.id}" class:attract={hovered === i}>
			<circle cx={conn.cx} cy={conn.cy} r="3" fill={conn.color} />
			<path d={conn.path} stroke={conn.color} stroke-width="1" fill="none" opacity="0.5" />
		</g>
	{/each}

	{#each labels as lbl, i}
		<g class="label-group label-bob-{lbl.id}" class:attract={hovered === i}>
			<text x={lbl.x} y={lbl.y} text-anchor={lbl.anchor} font-size="26" font-weight="700" fill={lbl.color}>{lbl.pct}</text>
			<text x={lbl.x} y={lbl.y + 28} text-anchor={lbl.anchor} font-size="16" font-weight="600" fill="#4a4a4a">{lbl.title}</text>
			<text x={lbl.x} y={lbl.y + 49} text-anchor={lbl.anchor} font-size="14" fill="#9ca3af">{lbl.desc1}<tspan x={lbl.x} dy="16">{lbl.desc2}</tspan></text>
		</g>
	{/each}

	<circle cx="400" cy="330" r="120" fill="white" filter="url(#centerShadow)" />
	<text x="400" y="323" text-anchor="middle" font-size="16" font-weight="300" fill="#9ca3af" letter-spacing="1">a diverse</text>
	<text x="400" y="346" text-anchor="middle" font-size="20" font-weight="700" fill="#92278f" letter-spacing="2">PORTFOLIO</text>
</svg>
