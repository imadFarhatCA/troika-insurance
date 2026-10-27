import { derived } from 'svelte/store';
import { language, type Language } from './languageStore';

export const FR_PREFIX = '/fr';

export const langFromPath = (pathname: string): Language => (pathname === FR_PREFIX || pathname.startsWith(`${FR_PREFIX}/`) ? 'FR' : 'EN');

/** '/fr/car' -> '/car', '/fr' -> '/' */
export const stripLang = (pathname: string) => (langFromPath(pathname) === 'FR' ? pathname.slice(FR_PREFIX.length) || '/' : pathname);

export const withLang = (path: string, lang: Language) => {
	if (lang === 'EN') return path;
	if (path === '/') return FR_PREFIX;
	return path.startsWith('/#') ? FR_PREFIX + path.slice(1) : FR_PREFIX + path;
};

/** Use in templates: href={$localize('/car')} */
export const localize = derived(language, (lang) => (path: string) => withLang(path, lang));
