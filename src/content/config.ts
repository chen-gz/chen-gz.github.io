import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Example: postDate must be a Date object
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    chapter: z.number().optional(), // Making it optional to not break old posts if any
  }),
});

const riemannianGeometry = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

const codeforces = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    math: z.boolean().optional(),
  }),
});

const docs = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

const landau2 = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

const leetcode = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

const rudin2 = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    type: z.string().optional(),
  }),
});

export const collections = { blog, 'riemannian-geometry': riemannianGeometry, codeforces, docs, landau2, leetcode, rudin2 };

