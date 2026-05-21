import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    status: z.enum(["进行中", "已交付", "探索中", "已变现"]).default("进行中"),
    highlight: z.string().optional(),
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .default([]),
    date: z.coerce.date(),
    order: z.number().default(100),
  }),
});

const methods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/methods" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.enum(["广告增长", "AI 工作流", "知识管理", "个人发展"]),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    order: z.number().default(100),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, methods, blog };
