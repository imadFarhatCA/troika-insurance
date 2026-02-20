<script lang="ts">
	import ClaimModal from './ClaimModal.svelte';

	let isModalOpen = false;

	function openModal() {
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
	}
</script>

<section id="claims" class="claims">
	<div class="claims-hero">
		<h2>By Your Side When Life Takes a Turn</h2>
		<p class="claims-description">When a claim happens, it's more than paperwork — it's a moment of uncertainty that can impact your life, your business, and your peace of mind.</p>
		<p class="claims-description">At Troika, we understand that this is when insurance needs to work… and when we need to be right by your side.</p>
		<p class="claims-description">This is where our commitment becomes action.</p>
		<button class="btn-claims-cta" on:click={openModal}>File a Claim Now</button>
	</div>
</section>

<ClaimModal isOpen={isModalOpen} on:close={closeModal} />
