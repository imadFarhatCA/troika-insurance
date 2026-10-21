<script lang="ts">
	import type { Step } from '$lib/data/quoteFlow';
	import type { Answers } from '$lib/data/quoteEmail';
	import { language } from '$lib/languageStore';

	/** Renders one questionnaire step and writes the visitor's answer into `answers`. */
	export let step: Step;
	export let answers: Answers;

	$: fr = $language === 'FR';
	$: text = (t: { en: string; fr: string }) => (fr ? t.fr : t.en);
	$: selected = Array.isArray(answers[step.id]) ? (answers[step.id] as string[]) : [];

	function toggle(value: string) {
		answers[step.id] = selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value];
	}
	const methods = [['phone', 'Phone', 'Téléphone'], ['email', 'Email', 'Courriel']];
</script>

<h2 class="modal-title">{text(step.title)}</h2>

{#if step.kind === 'choice' || step.kind === 'multi'}
	<div class="choices" role={step.kind === 'multi' ? 'group' : 'radiogroup'}>
		{#each step.options ?? [] as opt}
			{@const on = step.kind === 'multi' ? selected.includes(opt.value) : answers[step.id] === opt.value}
			<button type="button" class="choice" class:on role={step.kind === 'multi' ? 'checkbox' : 'radio'} aria-checked={on}
				on:click={() => (step.kind === 'multi' ? toggle(opt.value) : (answers[step.id] = opt.value))}>{text(opt.label)}</button>
		{/each}
	</div>
{:else if step.kind === 'text'}
	<div class="form-group"><textarea rows="5" bind:value={answers[step.id]} placeholder={step.placeholder ? text(step.placeholder) : ''}></textarea></div>
{:else}
	<div class="form-group"><input type="text" autocomplete="name" bind:value={answers['contact.name']} placeholder={fr ? 'Nom complet' : 'Full name'} /></div>
	<div class="form-group"><input type="tel" autocomplete="tel" bind:value={answers['contact.phone']} placeholder={fr ? 'Téléphone' : 'Phone number'} /></div>
	<div class="form-group"><input type="email" autocomplete="email" bind:value={answers['contact.email']} placeholder={fr ? 'Courriel' : 'Email address'} /></div>
	<div class="choices" role="radiogroup" aria-label={fr ? 'Méthode préférée' : 'Preferred contact'}>
		{#each methods as [v, en, frl]}
			<button type="button" class="choice" class:on={answers['contact.method'] === v} role="radio" aria-checked={answers['contact.method'] === v}
				on:click={() => (answers['contact.method'] = v)}>{fr ? frl : en}</button>
		{/each}
	</div>
{/if}

<style>
	.choices { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 1.25rem; }
	.choice { flex: 1 1 40%; padding: 0.85rem 1rem; border: 2px solid #e5e0ea; border-radius: 12px; background: #fff; font: inherit; cursor: pointer; text-align: left; transition: border-color 0.15s, background 0.15s; }
	.choice:hover { border-color: #92278f; }
	.choice.on { border-color: #92278f; background: rgba(146, 39, 143, 0.08); font-weight: 600; }
</style>
