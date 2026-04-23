# Navbar Components

Two components that work together: `Navbar` (the full nav) and `NavbarHamburger` (the toggle button). Links live in a central config file.

---

## Files

| File | Purpose |
|---|---|
| `Navbar.tsx` | Main nav component |
| `NavbarHamburger.tsx` | Hamburger toggle button |
| `navbar.css` | All styles + theme tokens |
| `navLinksRoot.ts` | Central link config |

---

## `Navbar`

Fullscreen-aware floating pill nav. Starts expanded with text links, shrinks to icons on scroll, collapses fully past a second threshold.

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `theme` | `'glass' \| 'paper' \| 'dark' \| 'light'` | `'glass'` | Visual theme |

**Scroll behaviour (internal)**

| Threshold | State | Nav shows |
|---|---|---|
| `0 – 150px` | `full` | Text links (desktop) |
| `150 – 600px` | `shrunk` | Icon links with tooltips |
| `600px+` | `hidden` | Collapses — user toggle still works |

**Notes**
- On mobile (`< 768px`) it goes straight to `shrunk`, never `full`
- Manual toggle (hamburger click) overrides scroll state until the next scroll-triggered transition
- Links are pulled from `navLinksRoot.ts` — not configurable via props

---

## `NavbarHamburger`

Standalone animated hamburger button. Intended for use inside `Navbar` but works anywhere.

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | `boolean` | required | Controls the X / lines state |
| `onClick` | `() => void` | required | Toggle handler |
| `className` | `string` | `''` | Extra classes if needed |

**Notes**
- Line colour inherits `--nav-text` from the parent theme — no manual colour prop needed
- Includes `aria-label` and `aria-expanded` automatically

---

## Theme System

Each theme is a CSS class that sets a block of custom properties. The component applies `nav--{theme}` to the root element — all colours, blur, shadow, and tooltip styles cascade from there.

**Tokens set per theme**

| Token | Controls |
|---|---|
| `--nav-bg` | Pill background |
| `--nav-border` | Pill border |
| `--nav-blur` | `backdrop-filter` (none for solid themes) |
| `--nav-shadow` | Drop shadow |
| `--nav-text` | Active link + hamburger lines |
| `--nav-text-muted` | Inactive links |
| `--nav-accent` | Active indicator dot |
| `--nav-hover-bg` | Icon hover background |
| `--nav-tooltip-bg/border/text` | Tooltip colours |

**Adding a new theme** — add one CSS block to `navbar.css`, no JSX changes:

```css
.nav--forest {
  --nav-bg:         rgba(20, 40, 20, 0.85);
  --nav-border:     rgba(100, 160, 80, 0.30);
  --nav-blur:       blur(12px);
  --nav-shadow:     0 8px 32px rgba(0, 0, 0, 0.40);
  --nav-text:       #d4f0c0;
  --nav-text-muted: rgba(212, 240, 192, 0.50);
  --nav-accent:     #7dcc50;
  --nav-hover-bg:   rgba(100, 160, 80, 0.12);
  --nav-tooltip-bg: #0f1f0f;
  --nav-tooltip-border: rgba(100, 160, 80, 0.25);
  --nav-tooltip-text:   #d4f0c0;
}
```

---

## Nav Links Config

```ts
// src/data/navLinks.ts
export const navLinksRoot: NavLink[] = [
  { label: 'home',             href: '/',              icon: PiCommand        },
  { label: 'aquamarine',       href: '/aquamarine',    icon: PiBook           },
  { label: 'je suis le chaos', href: '/jeSuisLeChaos', icon: PiNotePencil     },
  { label: 'marginalia',       href: '/marginalia',    icon: PiArchive        },
  { label: 'about',            href: '/about',         icon: PiUser           },
  { label: 'contact',          href: '/contact',       icon: PiPaperPlaneTilt },
];
```

To add or remove links, edit this file only.

---

## Usage

```tsx
// Default glass nav
<Navbar />

<Navbar theme="paper" />
```