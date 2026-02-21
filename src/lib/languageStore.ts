import { writable } from 'svelte/store';
export type Language = 'EN' | 'FR';
export const language = writable<Language>('EN');
