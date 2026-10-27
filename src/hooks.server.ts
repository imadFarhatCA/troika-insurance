import type { Handle } from '@sveltejs/kit';
import { langFromPath } from '$lib/localize';

const SECURITY_HEADERS = {
	'X-Content-Type-Options': 'nosniff',
	'X-Frame-Options': 'SAMEORIGIN',
	'Referrer-Policy': 'strict-origin-when-cross-origin',
	'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

/** _headers only covers static assets; page responses come from the worker. */
export const handle: Handle = async ({ event, resolve }) => {
	const lang = langFromPath(event.url.pathname) === 'FR' ? 'fr' : 'en';
	const response = await resolve(event, { transformPageChunk: ({ html }) => html.replace('<html lang="en">', `<html lang="${lang}">`) });
	for (const [k, v] of Object.entries(SECURITY_HEADERS)) response.headers.set(k, v);
	return response;
};
