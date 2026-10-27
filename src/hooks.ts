import type { Reroute } from '@sveltejs/kit';
import { FR_PREFIX, langFromPath, stripLang } from '$lib/localize';

/** /fr/* serves the same routes as /*; the language comes from the URL. */
export const reroute: Reroute = ({ url }) => (langFromPath(url.pathname) === 'FR' ? stripLang(url.pathname) : undefined);
