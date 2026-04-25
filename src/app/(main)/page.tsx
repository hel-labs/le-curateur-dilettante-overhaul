'use client';
import ThumbCarousel          from '@/components/presentation/ThumbCarousel';
import CircularSlider         from '@/components/presentation/CircularSlider';
import Snowfall from "@/components/presentation/SnowFall";
import { OrnamentalRule } from "@/components/ui/OrnamentalRule";

import { featuredSlides, skySlides } from '@/data/sliderData';
import { ManifestoHero } from "@/components/landing/ManifestoTop";
import { ManifestoClose } from "@/components/landing/ManifestoBottom";
import { AboutTeaser } from "@/components/landing/About";
import { ContactTeaser } from "@/components/landing/Contact";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Snowfall>
        <ManifestoHero/>
      <OrnamentalRule/>
      <div style={{ height: "500", width: "100%" }}>
        <CircularSlider slides={skySlides} />
      </div>
      <OrnamentalRule/>
      <div>
        <ThumbCarousel
        slides={featuredSlides}
        autoPlayMs={6000}
        accentColor="var(--color-accent)"
      />
      </div>
        <ManifestoClose/>
        <AboutTeaser/>
        <ContactTeaser/>
      </Snowfall>
      
    </div>
  );
}
