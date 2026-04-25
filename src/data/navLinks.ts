import {
  PiArchive,
  PiBook,
  PiUser,
  PiCommand,
  PiNotePencil,
  PiPaperPlaneTilt,
} from 'react-icons/pi';
import type { IconType } from 'react-icons';

export interface NavLink {
  label: string;
  href: string;
  icon: IconType;
}

export const navLinksRoot: NavLink[] = [
  { label: 'home',            href: '/',              icon: PiCommand        },
  { label: 'aquamarine',      href: '/aquamarine',    icon: PiBook           },
  { label: 'je suis le chaos',href: '/je-suis-le-chaos', icon: PiNotePencil     },
  { label: 'marginalia',      href: '/marginalia',    icon: PiArchive        },
  { label: 'about',           href: '/about',         icon: PiUser           },
  { label: 'contact',         href: '/contact',       icon: PiPaperPlaneTilt },
];

export const siblingNav = [
  { href: "/about/interests", label: "Interests" },
  { href: "/about/trivia", label: "Trivia" },
  { href: "/about/now", label: "Now" },
  { href: "/about/craft", label: "Craft" },
];
