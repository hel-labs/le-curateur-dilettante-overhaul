import Image from "next/image";
import ThreeDimensionalSlider from '@/components/presentation/ThreeDimensionalSlider';
import ThumbCarousel          from '@/components/presentation/ThumbCarousel';
import CircularSlider         from '@/components/presentation/CircularSlider';
import Snowfall from "@/components/presentation/SnowFall";

import { bookRingImages, featuredSlides, mythSlides } from '@/data/sliderData';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ThumbCarousel
        slides={featuredSlides}
        autoPlayMs={6000}
        accentColor="var(--color-accent)"
      />
      <ThreeDimensionalSlider
        images={bookRingImages}
        gap={40}
      />
      <Snowfall>
      <CircularSlider slides={mythSlides} />
      </Snowfall>
    </div>
  );
}
