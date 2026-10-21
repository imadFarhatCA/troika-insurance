<script lang="ts">
	import { quoteModal, closeQuote } from '$lib/quoteStore';
	import { stepsFor, type CategoryId } from '$lib/data/quoteFlow';
	import { mailtoLink, type Answers } from '$lib/data/quoteEmail';
	import { language } from '$lib/languageStore';
	import QuoteStep from './QuoteStep.svelte';

	let answers: Answers = {};
	let index = 0;
	let ref = '';
	let lastOpen = false;

	$: preset = $quoteModal.category;
	$: category = (preset ?? answers.category ?? null) as CategoryId | null;
	$: steps = stepsFor(category, !!preset);
	$: step = steps[index];
	$: fr = $language === 'FR';
	$: done = ref !== '';
	$: if ($quoteModal.open !== lastOpen) { lastOpen = $quoteModal.open; answers = {}; index = 0; ref = ''; }

	const filled = (v: unknown) => (Array.isArray(v) ? v.length > 0 : !!String(v ?? '').trim());
	$: valid = !step ? false : step.kind === 'contact'
		? filled(answers['contact.name']) && filled(answers['contact.phone']) && /^\S+@\S+\.\S+$/.test(String(answers['contact.email'] ?? '')) && filled(answers['contact.method'])
		: step.optional || filled(answers[step.id]);

	function next() {
		if (index < steps.length - 1) index++;
		else ref = `TRK-Q${Date.now().toString().slice(-6)}`;
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
						<h2 class="modal-title">{fr ? 'Presque terminé' : 'Almost done'}</h2>
						<p class="success-message">{fr ? 'Envoyez votre demande à notre équipe, nous vous reviendrons rapidement.' : 'Send your request to our team and we will get back to you shortly.'}</p>
						<div class="reference-box"><p class="reference-label">{fr ? 'Numéro de référence' : 'Reference Number'}</p><p class="reference-number">{ref}</p></div>
						<a class="submit-button" href={mailtoLink(steps, answers, ref)} style="display:block;text-align:center;text-decoration:none">{fr ? 'Envoyer à Troika' : 'Send to Troika'}</a>
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
