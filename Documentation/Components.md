# Slider Components

Three reusable hero/display slider components for Next.js. All are TypeScript, `'use client'`, and data-driven via props.

---

## Components

### `ThreeDimensionalSlider`

A 3D rotating carousel ring of images.

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `images` | `ThreeDSliderImage[]` | required | Array of image objects |
| `gap` | `number` | `0` | Extra spacing added on top of the auto-calculated radius |

**Types**

```ts
interface ThreeDSliderImage {
  src: string;
  alt: string;
  href?: string; // wraps card in <a> if provided
}
```

**Notes**
- Radius is auto-calculated from item count and viewport breakpoint (`phone / tablet / desktop`)
- `gap` nudges cards further apart without touching the component
- Card dimensions and tilt angle live in `threeDSlider.css` as CSS custom properties

---

### `ThumbCarousel`

A fullscreen hero carousel with thumbnail strip, background expand animation, per-slide content, and autoplay.

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `slides` | `Slide[]` | required | Array of slide objects |
| `autoPlayMs` | `number` | `7000` | Milliseconds between auto-advances |
| `accentColor` | `string` | `#f1683a` | Any CSS color — applied to topic text, thumbnail ring, arrows, progress bar |

**Types**

```ts
interface Slide {
  img: string;
  author: string;
  title: string;
  topic: string;
  desc: string;
  buttons: SlideButton[];
}

interface SlideButton {
  label: string;
  href: string;
  variant: 'primary' | 'outline';
}
```

**Notes**
- `accentColor` is injected as `--accent` on the root element, so the CSS cascade handles everything
- Buttons render as `<a>` tags — no JS click handlers needed
- Autoplay resets on any manual interaction (arrows or thumbnails)

---

### `CircularSlider`

A fullscreen circular image slider with rotation and blur transitions.

**Props**

| Prop | Type | Default | Description |
|---|---|---|---|
| `slides` | `HeroSlide[]` | required | Array of slide objects |

**Types**

```ts
interface HeroSlide {
  title: string;
  desc: string;
  image: string;
}
```

**Notes**
- `--diameter` is calculated at runtime as the viewport diagonal so the circular image always fills edge-to-edge
- Recalculates on window resize
- Navigation wraps around in both directions

---

## Data File

Store all slide data in a single file and import named arrays per component.

```ts
// src/data/sliderData.ts

import type { ThreeDSliderImage } from '@/components/ThreeDimensionalSlider';
import type { Slide }             from '@/components/ThumbCarousel';
import type { HeroSlide }         from '@/components/CircularSlider';

// ── ThreeDimensionalSlider ─────────────────────────────────────────────────

export const bookRingImages: ThreeDSliderImage[] = [
  { src: '/img/image1.jpg', alt: ''},
  { src: '/img/image1.jpg', alt: ''},
  { src: '/img/image1.jpg', alt: '' },
  { src: '/img/image1.jpg', alt: '' },
];

// ── ThumbCarousel ──────────────────────────────────────────────────────────

export const featuredSlides: Slide[] = [
  {
    img: '/img/phoenix.jpg',
    author: 'hel',
    title: 'Phoenix',
    topic: 'about the legendary bird',
    desc: 'A story of ash and renewal, told at the edge of the known world.',
    buttons: [
      { label: 'Read', href: '/stories/phoenix', variant: 'primary' },
      { label: 'Collection', href: '/collections/mythica', variant: 'outline' },
    ],
  },
  {
    img: '/img/minotaur.jpg',
    author: 'hel',
    title: 'Minotaur',
    topic: 'about the labyrinth beast',
    desc: 'Half man, half myth; wholly misunderstood.',
    buttons: [
      { label: 'Read', href: '/stories/minotaur', variant: 'primary' },
    ],
  },
];

// ── CircularSlider ─────────────────────────────────────────────────────────

export const mythSlides: HeroSlide[] = [
  {
    title: 'Chimera',
    desc: 'The anomaly that defied every category.',
    image: '/img/chimera.jpg',
  },
  {
    title: 'Hydra',
    desc: 'Cut one head, face two more.',
    image: '/img/hydra.jpg',
  },
];
```

---

## Usage

```tsx
// src/app/page.tsx

import ThreeDimensionalSlider from '@/components/ThreeDimensionalSlider';
import ThumbCarousel          from '@/components/ThumbCarousel';
import CircularSlider         from '@/components/CircularSlider';

import { bookRingImages, featuredSlides, mythSlides } from '@/data/sliderData';

export default function HomePage() {
  return (
    <>
      <ThumbCarousel
        slides={featuredSlides}
        autoPlayMs={6000}
        accentColor="var(--color-accent)"
      />

      <ThreeDimensionalSlider
        images={bookRingImages}
        gap={40}
      />

      <CircularSlider slides={mythSlides} />
    </>
  );
}
```