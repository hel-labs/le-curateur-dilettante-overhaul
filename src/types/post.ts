export interface Chapter {
  slug: string
  title: string
  chapter: number
  desc: string
  date: string
  body: string
}

export interface Entry {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string
}

export interface Piece {
  slug: string
  title: string
  date: string
  tags: PieceTag[]
  desc: string
  thumbnail: string
  body: string
}

export type PieceTag = 'essays' | 'articles' | 'poems' | 'reviews' | 'shorts'