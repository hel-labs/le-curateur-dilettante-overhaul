interface WebSiteSchemaProps {
  url: string
  name: string
  description: string
}

interface ArticleSchemaProps {
  url: string
  title: string
  description: string
  datePublished: string
  authorName: string
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[]
}

interface PersonSchemaProps {
  url: string
  name: string
  description: string
}

export function WebSiteSchema({ url, name, description }: WebSiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name,
    description,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema({
  url,
  title,
  description,
  datePublished,
  authorName,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    url,
    headline: title,
    description,
    datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function PersonSchema({ url, name, description }: PersonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    url,
    name,
    description,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
