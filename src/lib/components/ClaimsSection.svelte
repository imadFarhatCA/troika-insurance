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
		<h2>Lightning-fast claims</h2>
		<p class="claims-description">File a claim from your phone and get paid in minutes. Our AI handles the paperwork so you don't have to.</p>
		<button class="btn-claims-cta" on:click={openModal}>File a Claim Now</button>
	</div>
</section>

<ClaimModal isOpen={isModalOpen} on:close={closeModal} />
