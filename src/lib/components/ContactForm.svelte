<script lang="ts">
	import { language } from '$lib/languageStore';
	import { sendMail } from '$lib/sendMail';

	let name = '';
	let email = '';
	let message = '';
	let website = '';
	let status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

	$: fr = $language === 'FR';
	$: valid = name.trim() && /^\S+@\S+\.\S+$/.test(email) && message.trim();

	async function submit() {
		if (!valid || status === 'sending') return;
		status = 'sending';
		const ok = await sendMail({ type: 'contact', name, email, message, website });
		status = ok ? 'sent' : 'error';
		if (ok) name = email = message = '';
	}
</script>

<form class="cf" on:submit|preventDefault={submit}>
	<input type="text" bind:value={name} placeholder={fr ? 'Nom complet' : 'Full name'} autocomplete="name" required />
	<input type="email" bind:value={email} placeholder={fr ? 'Courriel' : 'Email'} autocomplete="email" required />
	<textarea bind:value={message} rows="4" placeholder={fr ? 'Votre message' : 'Your message'} required></textarea>
	<input class="cf-hp" type="text" bind:value={website} tabindex="-1" autocomplete="off" aria-hidden="true" />
	<button type="submit" disabled={!valid || status === 'sending'}>
		{status === 'sending' ? (fr ? 'Envoi…' : 'Sending…') : fr ? 'Envoyer le message' : 'Send message'}
	</button>
	{#if status === 'sent'}<p class="cf-note ok">{fr ? 'Message envoyé. Nous vous répondrons bientôt.' : 'Message sent. We will reply shortly.'}</p>{/if}
	{#if status === 'error'}<p class="cf-note err">{fr ? 'Envoi impossible. Écrivez-nous à info@troikaassurance.ca.' : 'Could not send. Email us at info@troikaassurance.ca.'}</p>{/if}
</form>

<style>
	.cf { display: grid; gap: 12px; }
	.cf input, .cf textarea { width: 100%; padding: 14px 16px; border: 1px solid #e2e8f0; border-radius: 10px; font: inherit; font-size: 15px; background: #fff; color: #1a1a1a; transition: border-color 0.2s, box-shadow 0.2s; }
	.cf input:focus, .cf textarea:focus { outline: none; border-color: #92278f; box-shadow: 0 0 0 3px rgba(146, 39, 143, 0.15); }
	.cf textarea { resize: vertical; }
	.cf-hp { position: absolute; left: -9999px; width: 1px; height: 1px; opacity: 0; }
	.cf button { justify-self: start; padding: 14px 28px; border: 0; border-radius: 10px; background: #92278f; color: #fff; font: inherit; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s; }
	.cf button:hover:not(:disabled) { background: #751e73; }
	.cf button:disabled { opacity: 0.5; cursor: not-allowed; }
	.cf-note { margin: 0; font-size: 14px; }
	.cf-note.ok { color: #2f855a; }
	.cf-note.err { color: #c53030; }
</style>
