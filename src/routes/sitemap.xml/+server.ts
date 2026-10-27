import { PAGES, SITE_URL } from '$lib/seo';
import { withLang } from '$lib/localize';

export const prerender = true;

export const GET = () => {
	const alt = (path: string) =>
		(['EN', 'FR'] as const).map((l) => `<xhtml:link rel="alternate" hreflang="${l === 'FR' ? 'fr-CA' : 'en-CA'}" href="${SITE_URL}${withLang(path, l)}"/>`).join('');
	const urls = PAGES.flatMap((p) => (['EN', 'FR'] as const).map((l) => `<url><loc>${SITE_URL}${withLang(p, l)}</loc>${alt(p)}</url>`)).join('');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`, { headers: { 'content-type': 'application/xml' } });
};
