import { writable } from 'svelte/store';
export let uploadStore = writable('')
export const selectedTagsStore = writable([])