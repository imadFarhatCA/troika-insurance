<script lang="ts">
	import { page } from '$app/state';
	import { language } from '$lib/languageStore';

	const fr = $derived($language === 'FR');
</script>

<svelte:head>
	<title>{page.status} | Troika Insurance</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="error-page">
	<p class="error-code">{page.status}</p>
	<h1>{page.status === 404 ? (fr ? 'Page introuvable' : 'Page not found') : fr ? 'Une erreur est survenue' : 'Something went wrong'}</h1>
	<p>{fr ? "La page que vous cherchez n'existe pas ou a été déplacée." : 'The page you are looking for does not exist or has moved.'}</p>
	<a href="/" class="btn-primary">{fr ? "Retour à l'accueil" : 'Back to home'}</a>
</section>

<style>
	.error-page { min-height: 70vh; display: grid; place-content: center; justify-items: center; gap: 16px; padding: 140px 20px 80px; text-align: center; }
	.error-code { font-size: 96px; font-weight: 800; color: #92278f; line-height: 1; margin: 0; }
	h1 { margin: 0; font-size: 32px; color: #4a4a4a; }
	p { margin: 0; color: #6b7280; }
</style>
