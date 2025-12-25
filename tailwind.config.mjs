/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      typography: () => ({
        custom: {
          css: {
            "--tw-prose-body": "var(--theme-prose-body)",
            "--tw-prose-headings": "var(--theme-prose-headings)",
            "--tw-prose-lead": "var(--theme-prose-lead)",
            "--tw-prose-links": "var(--theme-prose-links)",
            "--tw-prose-bold": "var(--theme-prose-bold)",
            "--tw-prose-counters": "var(--theme-prose-counters)",
            "--tw-prose-bullets": "var(--theme-prose-bullets)",
            "--tw-prose-hr": "var(--theme-prose-hr)",
            "--tw-prose-quotes": "var(--theme-prose-quotes)",
            "--tw-prose-quote-borders": "var(--theme-prose-quote-borders)",
            "--tw-prose-captions": "var(--theme-prose-captions)",
            "--tw-prose-code": "var(--theme-prose-code)",
            "--tw-prose-pre-code": "var(--theme-prose-pre-code)",
            "--tw-prose-pre-bg": "var(--theme-prose-pre-bg)",
            "--tw-prose-th-borders": "var(--theme-prose-th-borders)",
            "--tw-prose-td-borders": "var(--theme-prose-td-borders)",
            "--tw-prose-invert-body": "var(--theme-prose-body)",
            "--tw-prose-invert-headings": "var(--theme-prose-headings)",
            "--tw-prose-invert-lead": "var(--theme-prose-lead)",
            "--tw-prose-invert-links": "var(--theme-prose-links)",
            "--tw-prose-invert-bold": "var(--theme-prose-bold)",
            "--tw-prose-invert-counters": "var(--theme-prose-counters)",
            "--tw-prose-invert-bullets": "var(--theme-prose-bullets)",
            "--tw-prose-invert-hr": "var(--theme-prose-hr)",
            "--tw-prose-invert-quotes": "var(--theme-prose-quotes)",
            "--tw-prose-invert-quote-borders":
              "var(--theme-prose-quote-borders)",
            "--tw-prose-invert-captions": "var(--theme-prose-captions)",
            "--tw-prose-invert-code": "var(--theme-prose-code)",
            "--tw-prose-invert-pre-code": "var(--theme-prose-pre-code)",
            "--tw-prose-invert-pre-bg": "var(--theme-prose-pre-bg)",
            "--tw-prose-invert-th-borders": "var(--theme-prose-th-borders)",
            "--tw-prose-invert-td-borders": "var(--theme-prose-td-borders)",
            h1: {
              fontWeight: "800",
            },
            h2: {
              fontWeight: "700",
            },
            a: {
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            p: {
              fontSize: "1.25rem",
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
