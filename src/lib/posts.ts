import { chapters, entries, pieces } from '@/../src/.velite'
import type { PieceTag } from '@/types/post'

// Aquamarine
export function getAllChapters() {
  return chapters.sort((a, b) => a.chapter - b.chapter)
}

export function getChapterBySlug(slug: string) {
  return chapters.find((c) => c.slug === slug) ?? null
}

// Je Suis le Chaos
export function getAllEntries() {
  return entries.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getEntryBySlug(slug: string) {
  return entries.find((e) => e.slug === slug) ?? null
}

// Marginalia
export function getAllPieces() {
  return pieces.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPiecesByTag(tag: PieceTag) {
  return getAllPieces().filter((p) => p.tags.includes(tag))
}

export function getPieceBySlug(slug: string) {
  return pieces.find((p) => p.slug === slug) ?? null
}