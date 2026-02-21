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
	import { language } from '$lib/languageStore';
	import { t } from '$lib/i18n';
	$: s = t[$language].claimModal;

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
					<button class="back-btn" on:click={prevStep}>{s.back}</button>
				{/if}

				<div class="form-container">
					{#if currentStep === 1}
						<h2 class="modal-title">{s.step1Title}</h2>
						<div class="form-group">
							<select bind:value={claimType} required>
								<option value="" disabled selected>{s.selectClaimType}</option>
								<option value="auto">{s.claimAuto}</option>
								<option value="fleet">{s.claimFleet}</option>
								<option value="home">{s.claimHome}</option>
								<option value="commercial">{s.claimCommercial}</option>
							</select>
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!claimType}>{s.next}</button>

					{:else if currentStep === 2}
						<h2 class="modal-title">{s.step2Title}</h2>
						<div class="form-group">
							<select bind:value={province} required>
								<option value="" disabled selected>{s.selectProvince}</option>
								<option value="quebec">{s.quebec}</option>
								<option value="ontario">{s.ontario}</option>
							</select>
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!province}>{s.next}</button>

					{:else if currentStep === 3}
						<h2 class="modal-title">{s.step3Title}</h2>
						<div class="form-group">
							<label for="claim-fullname" class="sr-only">Full Name</label>
							<input id="claim-fullname" type="text" bind:value={fullName} placeholder={s.fullName} required />
						</div>
						<div class="form-group">
							<label for="claim-phone" class="sr-only">Phone Number</label>
							<input id="claim-phone" type="tel" bind:value={phone} placeholder={s.phone} required />
						</div>
						<div class="form-group">
							<label for="claim-email" class="sr-only">Email Address</label>
							<input id="claim-email" type="email" bind:value={email} placeholder={s.email} required />
						</div>
						<button class="submit-button" on:click={nextStep} disabled={!fullName || !phone || !email}>{s.next}</button>

					{:else if currentStep === 4}
						<h2 class="modal-title">{s.step4Title}</h2>
						<div class="form-group">
							<textarea bind:value={additionalInfo} rows="6" placeholder={s.additionalInfo}></textarea>
						</div>
						<button class="submit-button" on:click={handleSubmit}>{s.fileClaim}</button>

					{:else if currentStep === 5}
						<div class="success-icon">✓</div>
						<h2 class="modal-title">{s.successTitle}</h2>
						<p class="success-message">{s.successMsg}</p>
						<div class="reference-box">
							<p class="reference-label">{s.referenceLabel}</p>
							<p class="reference-number">{referenceNumber}</p>
							<p class="reference-note">{s.referenceNote}</p>
						</div>
						<button class="submit-button" on:click={close}>{s.close}</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
