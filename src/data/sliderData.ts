import type { ThreeDSliderImage } from '@/components/presentation/ThreeDimensionalSlider';
import type { Slide }             from '@/components/presentation/ThumbCarousel';
import type { HeroSlide }         from '@/components/presentation/CircularSlider';

// ── ThreeDimensionalSlider ─────────────────────────────────────────────────

export const bookRingImages: ThreeDSliderImage[] = [
  { src: '/img/image1.jpg', alt: ''},
  { src: '/img/image2.jpg', alt: ''},
  { src: '/img/image3.jpg', alt: '' },
  { src: '/img/image1.jpg', alt: '' },
];

// ── ThumbCarousel ──────────────────────────────────────────────────────────

export const featuredSlides: Slide[] = [
  {
    img: '/img/image1.jpg',
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
    img: '/img/image2.jpg',
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
    image: '/img/image3.jpg',
  },
  {
    title: 'Hydra',
    desc: 'Cut one head, face two more.',
    image: '/img/image1.jpg',
  },
];