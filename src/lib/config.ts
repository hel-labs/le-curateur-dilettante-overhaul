export const siteUrl = (process.env.SITE_URL ?? "https://le-curateur-dilettante.vercel.app").replace(/\/$/, "")
export const siteName = "Le Curateur Dilettante"
export const siteDescription =
  "A journal of deliberate curiosity. On literature, philosophy, and the quiet pleasure of following a thought wherever it leads."

export const socialLinks = [
  { label: "X (Twitter)", short: "𝕏", href: "#" },
  { label: "Instagram", short: "Ig", href: "#" },
  { label: "RSS", short: "RSS", href: "/rss.xml" },
]