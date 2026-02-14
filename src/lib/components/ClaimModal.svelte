<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let isOpen = false;

	const dispatch = createEventDispatcher();
	let currentStep = 1;
	let claimType = '';
	let province = '';
	let fullName = '';
	let phone = '';
	let email = '';
	let additionalInfo = '';
	let referenceNumber = '';

	function generateReferenceNumber() {
		const timestamp = Date.now().toString().slice(-6);
		const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
		return `TRK-${timestamp}-${random}`;
	}

	function close() {
		dispatch('close');
		// Reset form
		setTimeout(() => {
			currentStep = 1;
			claimType = '';
			province = '';
			fullName = '';
			phone = '';
			email = '';
			additionalInfo = '';
			referenceNumber = '';
		}, 300);
	}

	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}

	function nextStep() {
		currentStep++;
	}

	function prevStep() {
		currentStep--;
	}

	function handleSubmit() {
		referenceNumber = generateReferenceNumber();
		currentStep = 5;
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="modal-backdrop">
		<div class="modal-container">
			<button class="modal-close" on:click={close} aria-label="Close">×</button>

			<div class="modal-content">
				{#if currentStep > 1 && currentStep < 5}
					<button class="back-btn" on:click={prevStep}>← Back</button>
				{/if}

				<div class="form-container">
					{#if currentStep === 1}
						<h2 class="modal-title">What is your Claim about?</h2>
						<div class="form-group">
							<select bind:value={claimType} required>
								<option value="" disabled selected>Select claim type</option>
								<option value="auto">Auto</option>
								<option value="fleet">Fleet</option>
								<option value="home">Home</option>
								<option value="commercial">Commercial</option>
							</select>
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!claimType}>Next</button>

					{:else if currentStep === 2}
						<h2 class="modal-title">Which Province</h2>
						<div class="form-group">
							<select bind:value={province} required>
								<option value="" disabled selected>Select province</option>
								<option value="quebec">Quebec</option>
								<option value="ontario">Ontario</option>
							</select>
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!province}>Next</button>

					{:else if currentStep === 3}
						<h2 class="modal-title">Provide us with your details</h2>
						<div class="form-group">
							<input type="text" bind:value={fullName} placeholder="Full Name" required />
						</div>
						<div class="form-group">
							<input type="tel" bind:value={phone} placeholder="Phone Number" required />
						</div>
						<div class="form-group">
							<input type="email" bind:value={email} placeholder="Email address" required />
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!fullName || !phone || !email}>Next</button>

					{:else if currentStep === 4}
						<h2 class="modal-title">Do you want to tell us something more?</h2>
						<div class="form-group">
							<textarea bind:value={additionalInfo} rows="6" placeholder="Tell us more..."></textarea>
						</div>
						<button class="submit-button" on:click={handleSubmit}>File Claim</button>

					{:else if currentStep === 5}
						<div class="success-icon">✓</div>
						<h2 class="modal-title">thank you for your submission</h2>
						<p class="success-message">we will review your submission and get back to you the soonest</p>
						<div class="reference-box">
							<p class="reference-label">Reference Number</p>
							<p class="reference-number">{referenceNumber}</p>
							<p class="reference-note">Keep this reference number with you for future follow up</p>
						</div>
						<button class="submit-button" on:click={close}>Close</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
