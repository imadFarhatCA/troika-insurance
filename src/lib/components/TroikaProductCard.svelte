<script lang="ts">
	import Icon from '$lib/components/Icon.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	$: pc = t[$language].productCard;

	type IconName = 'home' | 'shield' | 'building' | 'trending-up' | 'briefcase' |
		'layers' | 'zap' | 'target' | 'award' | 'users' | 'car';

	export let index: number;
	export let icon: IconName;
	export let title: string;
	export let subtitle: string;
	/** Floating pill badge rendered above the card (commercial variant) */
	export let badge: string | undefined = undefined;
	/**
	 * Reserve 96px top space for badge/caret alignment across a row.
	 * Use on all cards in a commercial-style grid so spacing is consistent
	 * even on cards without a badge text.
	 */
	export let badgeSpace: boolean = false;
	export let includesLabel: string = 'Includes';
	export let includes: string[];
	/** Expandable section label — triggers the expand button when set */
	export let additionalLabel: string | null = null;
	export let additionalSub: string | null = null;
	export let additionalItems: string[] | null = null;
	export let feature: string;
	export let featureNote: string | undefined = undefined;
	/** Passed from parent IntersectionObserver to trigger entrance animation */
	export let inView: boolean = false;
	/**
	 * Set to true when the parent grid uses `grid-template-rows: 1fr auto`.
	 * Enables subgrid so all troika-feature rows align across columns.
	 */
	export let subgrid: boolean = false;

	let additionalExpanded = false;
</script>

<div
	class="card-wrapper"
	class:in-view={inView}
	class:subgrid
	class:has-badge={!!badge || badgeSpace}
	style="--i: {index}"
>
	{#if badge}
		<div class="floating-badge">{badge}</div>
	{/if}

	<div class="hover-caret" aria-hidden="true">
		<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14 16L0 0H28L14 16Z" fill="#c0c0c8"/>
		</svg>
	</div>

	<div class="product-card" class:subgrid>

		<!-- card-content: row 1 in subgrid, flex-1 in flex mode -->
		<div class="card-content">

			<div class="card-header">
				<div class="card-num">0{index + 1}</div>
				<div class="card-icon-wrap">
					<Icon name={icon} size={22} strokeWidth={1.5} />
				</div>
				<h3 class="card-title">{title}</h3>
				<p class="card-subtitle">{subtitle}</p>
			</div>

			<div class="card-divider"></div>

			<div class="card-body">
				<p class="includes-label">{includesLabel}</p>
				<ul class="includes-list">
					{#each includes as item}
						<li>
							<svg class="check-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<polyline points="20 6 9 17 4 12"></polyline>
							</svg>
							{item}
						</li>
					{/each}
				</ul>

				{#if additionalItems}
					<div class="additional-section">
						<button
							class="read-more-btn"
							on:click={() => additionalExpanded = !additionalExpanded}
							aria-expanded={additionalExpanded}
						>
							{additionalExpanded ? pc.showLess : additionalLabel}
							<svg
								class="read-more-chevron"
								class:open={additionalExpanded}
								width="14" height="14" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2.5"
								stroke-linecap="round" stroke-linejoin="round"
							>
								<polyline points="6 9 12 15 18 9"></polyline>
							</svg>
						</button>

						{#if additionalExpanded}
							<div class="additional-content">
								<p class="additional-sub">{additionalSub}</p>
								<ul class="includes-list">
									{#each additionalItems as item}
										<li>
											<svg class="check-icon check-icon--muted" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
												<polyline points="20 6 9 17 4 12"></polyline>
											</svg>
											{item}
										</li>
									{/each}
								</ul>
							</div>
						{/if}
					</div>
				{/if}
			</div><!-- end card-body -->
		</div><!-- end card-content -->

		<!-- troika-feature: row 2 in subgrid, auto height in flex mode -->
		<div class="troika-feature">
			<div class="troika-feature-label">
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
				{pc.troikaFeature}
			</div>
			<p class="troika-feature-text">{feature}</p>
			{#if featureNote}
				<p class="troika-feature-note">{featureNote}</p>
			{/if}
		</div>

	</div>
</div>

<style>
/* ── Card Wrapper ──────────────────────────────────────────── */
.card-wrapper {
	position: relative;
	padding-top: 20px;
	display: flex;
	flex-direction: column;
	opacity: 0;
	transform: translateY(48px);
	transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
				transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
	transition-delay: calc(var(--i) * 180ms + 100ms);
}

.card-wrapper.has-badge {
	padding-top: 96px;
}

.card-wrapper.subgrid {
	grid-row: span 2;
	display: grid;
	grid-template-rows: subgrid;
}

.card-wrapper.in-view {
	opacity: 1;
	transform: translateY(0);
}

/* ── Hover Caret ───────────────────────────────────────────── */
.hover-caret {
	position: absolute;
	top: 20px;
	left: 50%;
	transform: translateX(-50%) translateY(-24px);
	opacity: 0;
	transition: opacity 0.25s ease, transform 0.25s ease;
	z-index: 5;
	pointer-events: none;
	line-height: 0;
}

.has-badge .hover-caret {
	top: 96px;
	transform: translateX(-50%) translateY(-60px);
}

.card-wrapper:hover .hover-caret {
	opacity: 1;
	transform: translateX(-50%) translateY(-10px);
}

.card-wrapper.has-badge:hover .hover-caret {
	transform: translateX(-50%) translateY(-40px);
}

/* ── Floating Badge ────────────────────────────────────────── */
.floating-badge {
	position: absolute;
	top: 30px;
	left: 50%;
	transform: translateX(-50%);
	background: linear-gradient(135deg, #92278f, #b44db1);
	color: #fff;
	font-size: 11px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	padding: 6px 20px;
	border-radius: 20px;
	white-space: nowrap;
	z-index: 10;
	box-shadow: 0 4px 18px rgba(146, 39, 143, 0.38);
}

/* ── Product Card ──────────────────────────────────────────── */
.product-card {
	flex: 1;
	display: flex;
	flex-direction: column;
	border-radius: 24px;
	overflow: hidden;
	background: #fff;
	border: 1px solid #e8e8ea;
	box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	transition: transform 0.38s cubic-bezier(0.34, 1.15, 0.64, 1),
				box-shadow 0.35s ease,
				border-color 0.3s ease;
}

.product-card.subgrid {
	grid-row: span 2;
	display: grid;
	grid-template-rows: subgrid;
}

.card-wrapper:hover .product-card {
	transform: translateY(10px);
	box-shadow: 0 24px 60px rgba(0, 0, 0, 0.10);
	border-color: #e8e8ea;
}

/* ── Card Content (row 1) ──────────────────────────────────── */
.card-content {
	flex: 1;
	display: flex;
	flex-direction: column;
	min-height: 0;
}

/* ── Card Header ───────────────────────────────────────────── */
.card-header {
	padding: 32px 28px 26px;
	position: relative;
	background: linear-gradient(160deg, #fdf5ff 0%, #fff 55%);
}

.card-num {
	position: absolute;
	top: 18px;
	right: 22px;
	font-size: 72px;
	font-weight: 900;
	color: transparent;
	-webkit-text-stroke: 1.5px rgba(146, 39, 143, 0.18);
	line-height: 1;
	user-select: none;
	letter-spacing: -3px;
}

.card-icon-wrap {
	width: 46px;
	height: 46px;
	border-radius: 13px;
	background: #92278f;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	margin-bottom: 20px;
}

.card-title {
	font-size: 18px;
	font-weight: 700;
	color: #111827;
	line-height: 1.3;
	margin: 0 0 7px;
}

.card-subtitle {
	font-size: 13px;
	color: #6b7280;
	font-weight: 400;
	margin: 0;
}

/* ── Hairline Divider ──────────────────────────────────────── */
.card-divider {
	height: 1px;
	background: #eeeeee;
	margin: 0 28px;
}

/* ── Card Body ─────────────────────────────────────────────── */
.card-body {
	flex: 1;
	padding: 24px 28px 18px;
}

.includes-label {
	font-size: 9.5px;
	font-weight: 700;
	letter-spacing: 1.8px;
	text-transform: uppercase;
	color: #9ca3af;
	margin-bottom: 14px;
}

.includes-list {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 9px;
}

.includes-list li {
	font-size: 13px;
	color: #374151;
	line-height: 1.4;
	display: flex;
	align-items: flex-start;
	gap: 9px;
}

.check-icon {
	color: #92278f;
	min-width: 13px;
	margin-top: 2px;
	flex-shrink: 0;
}

.check-icon--muted {
	color: #b59ab4;
}

/* ── Additional Protection Layers ──────────────────────────── */
.additional-section {
	margin-top: 20px;
	padding-top: 16px;
	border-top: 1px dashed #ddd;
}

.read-more-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background: linear-gradient(135deg, #6b1669, #92278f);
	border: none;
	border-radius: 10px;
	cursor: pointer;
	padding: 13px 14px 13px 15px;
	font-size: 12px;
	font-weight: 700;
	color: #fff;
	font-family: inherit;
	letter-spacing: 0.3px;
	box-shadow: 0 3px 12px rgba(107, 22, 105, 0.30);
	transition: box-shadow 0.22s ease, transform 0.22s cubic-bezier(0.34, 1.15, 0.64, 1),
				filter 0.22s ease;
}

.read-more-btn:hover {
	box-shadow: 0 6px 22px rgba(107, 22, 105, 0.45);
	transform: translateY(-2px);
	filter: brightness(1.1);
}

.read-more-chevron {
	transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	flex-shrink: 0;
}

.read-more-chevron.open {
	transform: rotate(180deg);
}

.additional-content {
	margin-top: 14px;
}

.additional-sub {
	font-size: 11px;
	color: #b0b0b8;
	margin-bottom: 12px;
	letter-spacing: 0.3px;
}

/* ── Troika Feature (row 2) ────────────────────────────────── */
.troika-feature {
	padding: 20px 28px;
	background: #f2f2f4;
}

.troika-feature-label {
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 9.5px;
	font-weight: 700;
	letter-spacing: 1.2px;
	text-transform: uppercase;
	color: #92278f;
	margin-bottom: 7px;
}

.troika-feature-text {
	font-size: 13px;
	line-height: 1.6;
	color: #4a4a4a;
	font-style: italic;
	margin: 0 0 6px;
}

.troika-feature-note {
	font-size: 12px;
	line-height: 1.5;
	color: #7c7c8a;
	margin: 0;
}
</style>
