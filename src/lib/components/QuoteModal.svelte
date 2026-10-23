<script lang="ts">
	import { quoteModal, closeQuote } from '$lib/quoteStore';
	import { stepsFor, type CategoryId } from '$lib/data/quoteFlow';
	import { mailtoLink, summarize, type Answers } from '$lib/data/quoteEmail';
	import { language } from '$lib/languageStore';
	import { sendMail } from '$lib/sendMail';
	import QuoteStep from './QuoteStep.svelte';

	let answers: Answers = {};
	let index = 0;
	let ref = '';
	let lastOpen = false;
	let sent: boolean | null = null;

	$: preset = $quoteModal.category;
	$: category = (preset ?? answers.category ?? null) as CategoryId | null;
	$: steps = stepsFor(category, !!preset);
	$: step = steps[index];
	$: fr = $language === 'FR';
	$: done = ref !== '';
	$: if ($quoteModal.open !== lastOpen) { lastOpen = $quoteModal.open; answers = {}; index = 0; ref = ''; sent = null; }

	const filled = (v: unknown) => (Array.isArray(v) ? v.length > 0 : !!String(v ?? '').trim());
	$: valid = !step ? false : step.kind === 'contact'
		? filled(answers['contact.name']) && filled(answers['contact.phone']) && /^\S+@\S+\.\S+$/.test(String(answers['contact.email'] ?? '')) && filled(answers['contact.method'])
		: step.optional || filled(answers[step.id]);

	function next() {
		if (index < steps.length - 1) index++;
		else finish();
	}

	async function finish() {
		ref = `TRK-Q${Date.now().toString().slice(-6)}`;
		sent = null;
		sent = await sendMail('quote', ref, String(answers['contact.email']), summarize(steps, answers, ref));
	}
</script>

{#if $quoteModal.open}
	<div class="modal-backdrop" on:click={(e) => e.target === e.currentTarget && closeQuote()} role="presentation">
		<div class="modal-container" role="dialog" aria-modal="true">
			<button class="modal-close" on:click={closeQuote} aria-label="Close">×</button>
			<div class="modal-content">
				{#if index > 0 && !done}<button class="back-btn" on:click={() => index--}>{fr ? '← Retour' : '← Back'}</button>{/if}
				<div class="form-container">
					{#if done}
						<div class="success-icon">✓</div>
						{#if sent === null}
							<h2 class="modal-title">{fr ? 'Envoi en cours…' : 'Sending…'}</h2>
						{:else if sent}
							<h2 class="modal-title">{fr ? 'Demande envoyée' : 'Request sent'}</h2>
							<p class="success-message">{fr ? 'Notre équipe vous reviendra rapidement.' : 'Our team will get back to you shortly.'}</p>
						{:else}
							<h2 class="modal-title">{fr ? 'Envoi impossible' : 'Could not send'}</h2>
							<p class="success-message">{fr ? 'Envoyez votre demande par courriel à la place.' : 'Please send your request by email instead.'}</p>
							<a class="submit-button" href={mailtoLink(steps, answers, ref)} style="display:block;text-align:center;text-decoration:none">{fr ? 'Envoyer à Troika' : 'Send to Troika'}</a>
						{/if}
						<div class="reference-box"><p class="reference-label">{fr ? 'Numéro de référence' : 'Reference Number'}</p><p class="reference-number">{ref}</p></div>
					{:else if step}
						<p class="reference-note">{index + 1} / {steps.length}</p>
						{#key step.id}<QuoteStep {step} bind:answers />{/key}
						<button class="submit-button" on:click={next} disabled={!valid}>
							{index === steps.length - 1 ? (fr ? 'Terminer' : 'Finish') : fr ? 'Suivant' : 'Next'}
						</button>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
