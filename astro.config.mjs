// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import mdx from "@astrojs/mdx";
import { rehypeGlossary } from "./src/plugins/rehype-glossary.mjs";

// https://astro.build/config
export default defineConfig({
  site: process.env.ASTRO_SITE,
  base: process.env.ASTRO_BASE,
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeGlossary, rehypeKatex],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  prefetch: true,
});
