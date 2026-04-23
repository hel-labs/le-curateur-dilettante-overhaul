'use client';

import { useState, useEffect, useRef } from 'react';
import '@/styles/presentation/circularSlider.css';

export interface HeroSlide {
  title: string;
  desc: string;
  image: string;
}

interface CircularSliderProps {
  slides: HeroSlide[];
}

export default function CircularSlider({ slides }: CircularSliderProps) {
  const [active, setActive] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleNext = () =>
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handlePrev = () =>
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const updateDiameter = () => {
      const el = sliderRef.current;
      if (!el) return;
      const { offsetWidth: w, offsetHeight: h } = el;
      el.style.setProperty('--diameter', `${Math.sqrt(w ** 2 + h ** 2)}px`);
    };

    updateDiameter();
    window.addEventListener('resize', updateDiameter);
    return () => window.removeEventListener('resize', updateDiameter);
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      <div className="list">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`item${active === index ? ' active' : ''}`}
            style={{ '--url': `url('${slide.image}')` } as React.CSSProperties}
          >
            <div className="image" />
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow">
        <button onClick={handlePrev} aria-label="Previous">◀</button>
        <button onClick={handleNext} aria-label="Next">▶</button>
      </div>
    </div>
  );
}