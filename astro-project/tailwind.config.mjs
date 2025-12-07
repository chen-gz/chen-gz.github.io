/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      typography: {
        custom: {
          css: {
            h1: {
              color: '#333',
              fontWeight: '800',
            },
            h2: {
              color: '#444',
              fontWeight: '700',
            },
            a: {
              color: '#007bff',
              '&:hover': {
                color: '#0056b3',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
