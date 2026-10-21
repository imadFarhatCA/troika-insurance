import { writable } from 'svelte/store';
import type { CategoryId } from '$lib/data/quoteFlow';

export const quoteModal = writable<{ open: boolean; category: CategoryId | null }>({ open: false, category: null });

/** Open the questionnaire. Pass a category to skip the "what do you want to insure" question. */
export const openQuote = (category: CategoryId | null = null) => quoteModal.set({ open: true, category });
export const closeQuote = () => quoteModal.set({ open: false, category: null });
