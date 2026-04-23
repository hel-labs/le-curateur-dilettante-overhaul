'use client';

import React, { useEffect, useState } from 'react';
import '@/styles/presentation/threeDSlider.css';

export interface ThreeDSliderImage {
  src: string;
  alt: string;
  href?: string;
}

interface ThreeDSliderProps {
  images: ThreeDSliderImage[];
  gap?: number;
}

type Breakpoint = 'phone' | 'tablet' | 'desktop';

function getBreakpoint(width: number): Breakpoint {
  if (width < 640) return 'phone';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

const BASE_RADIUS: Record<Breakpoint, number> = {
  phone: 180,
  tablet: 320,
  desktop: 500,
};

function useWindowSize() {
  // Initialize with a default that matches the server's expected "initial" state
  const [width, setWidth] = useState<number>(1280);

  useEffect(() => {
    // Set the actual width immediately on mount
    setWidth(window.innerWidth);

    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return width;
}

function ThreeDSlider({ images, gap = 0 }: ThreeDSliderProps) {
  const width = useWindowSize();
  const [hasMounted, setHasMounted] = useState(false);

  // This effect runs only on the client after the first render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const total = images.length;
  const angleStep = 360 / total;
  const countScale = Math.max(1, total / 9);

  /**
   * FIX: 
   * On the server and during the first client render, we use a fixed 
   * breakpoint ('desktop') so the HTML matches perfectly.
   * After mounting, we use the actual measured breakpoint.
   */
  const currentBreakpoint = hasMounted ? getBreakpoint(width) : 'desktop';
  const radius = BASE_RADIUS[currentBreakpoint] * countScale + gap;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-ring">
        {images.map((image, index) => {
          const rotateY = index * angleStep;
          const card = (
            <img
              src={image.src}
              alt={image.alt}
              draggable={false}
            />
          );

          return (
            <div
              key={index}
              className="carousel-card"
              style={{
                // The radius now remains stable until the component has mounted
                transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
                // Optional: hide cards until radius is correctly calculated to avoid "flicker"
                opacity: hasMounted ? 1 : 0,
                transition: 'opacity 0.3s ease-in-out, transform 0.5s ease-out'
              }}
            >
              {image.href ? (
                <a
                  href={image.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel-card__link"
                >
                  {card}
                </a>
              ) : (
                card
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThreeDSlider;