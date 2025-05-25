import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// En Astro, output: 'server' en astro.config.mjs hace que las páginas se generen dinámicamente en el servidor (SSR)
	// en cada solicitud, en lugar de crear HTML estático (SSG). 
	// Sirve para contenido que cambia según el usuario o datos en tiempo real.
	output: 'server',
	vite: {
		plugins: [tailwindcss()]
	},
	env: {
		schema: {
			SHOW_BUY_BUTTON: envField.boolean({ context: 'server', access: 'public' }), //? nos permite leer la variable de entorne y además tiparla, ya que siempre son cadenas de texto
			SCORE_API_ENDPOINT: envField.string({ context: 'client', access: 'public' }),
		}
	}
});