import { defineCollection, defineConfig, s } from 'velite'

const chapters = defineCollection({
  name: 'Chapter',
  pattern: 'aquamarine/**/*.mdx',
  schema: s.object({
    title: s.string(),
    chapter: s.number(),
    desc: s.string(),
    date: s.isodate(),
    slug: s.path(),
    body: s.mdx(),
  }),
})

const entries = defineCollection({
  name: 'Entry',
  pattern: 'je-suis-le-chaos/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    excerpt: s.string(),
    slug: s.path(),
    body: s.mdx(),
  }),
})

const pieces = defineCollection({
  name: 'Piece',
  pattern: 'marginalia/**/*.mdx',
  schema: s.object({
    title: s.string(),
    date: s.isodate(),
    tags: s.array(s.enum(['essays', 'articles', 'poems', 'reviews', 'shorts'])),
    desc: s.string(),
    thumbnail: s.string(),
    slug: s.path(),
    body: s.mdx(),
  }),
})

export default defineConfig({
  root: 'src/content',
  output: {
    data: 'src/.velite',
    assets: 'public/static',
  },
  collections: { chapters, entries, pieces },
})