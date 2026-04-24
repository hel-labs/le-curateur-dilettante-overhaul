'use client';
import Image from "next/image";
import ThreeDimensionalSlider from '@/components/presentation/ThreeDimensionalSlider';
import ThumbCarousel          from '@/components/presentation/ThumbCarousel';
import CircularSlider         from '@/components/presentation/CircularSlider';
import Snowfall from "@/components/presentation/SnowFall";

import { bookRingImages, featuredSlides, mythSlides } from '@/data/sliderData';
import { ManifestoHero } from "@/components/landing/ManifestoTop";
import { CurveSeparator } from "@/components/ui/CurveSeperator";
import { ManifestoClose } from "@/components/landing/ManifestoBottom";
import { AboutTeaser } from "@/components/landing/About";
import { ContactTeaser } from "@/components/landing/Contact";
import { Footer } from "@/components/layouts/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Snowfall>
        <ManifestoHero/>
      </Snowfall>
      <div style={{ height: "500", width: "100%" }}>
        <CircularSlider slides={mythSlides} />
      </div>
      <div>
        <ThumbCarousel
        slides={featuredSlides}
        autoPlayMs={6000}
        accentColor="var(--color-accent)"
      />
      </div>
      <div>
        <ManifestoClose/>
      </div>
      <div>
        <AboutTeaser/>
      </div>
      <div>
        <ContactTeaser/>
      </div>
      </div>
  );
}
