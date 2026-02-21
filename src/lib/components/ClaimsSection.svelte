<script lang="ts">
	import ClaimModal from './ClaimModal.svelte';
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';

	let isModalOpen = false;
	$: s = t[$language].claimsSection;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}
</script>

<section id="claims" class="claims">
	<div class="claims-hero">
		<h2>{s.title}</h2>
		<p class="claims-description">{s.p1}</p>
		<p class="claims-description">{s.p2}</p>
		<p class="claims-description">{s.p3}</p>
		<button class="btn-claims-cta" on:click={openModal}>{s.cta}</button>
	</div>
</section>

<ClaimModal isOpen={isModalOpen} on:close={closeModal} />
