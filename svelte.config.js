import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path'

/** @type {import ('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte",...mdsvexConfig.extensions],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: {
    adapter: adapter()
  }
};

export default config;

