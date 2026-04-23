'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import '@/styles/presentation/thumbCarousel.css';

export type ButtonVariant = 'primary' | 'outline';

export interface SlideButton {
  label: string;
  href: string;
  variant: ButtonVariant;
}

export interface Slide {
  img: string;
  author: string;
  title: string;
  topic: string;
  desc: string;
  buttons: SlideButton[];
}

interface ThumbCarouselProps {
  slides: Slide[];
  autoPlayMs?: number;
  accentColor?: string;
}

const ANIM_MS = 900;

export default function ThumbCarousel({
  slides,
  autoPlayMs = 7000,
  accentColor = '#f1683a',
}: ThumbCarouselProps) {
  const [items, setItems]       = useState<Slide[]>(slides);
  const [displayed, setDisplayed] = useState<Slide>(slides[0]);
  const [incoming, setIncoming]   = useState<Slide | null>(null);

  const animatingRef  = useRef(false);
  const autoPlayRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goRef = useRef<(direction: 'next' | 'prev') => void>(() => {});

  const go = useCallback((direction: 'next' | 'prev') => {
    if (animatingRef.current) return;
    animatingRef.current = true;

    setItems((prev) => {
      const next =
        direction === 'next'
          ? [...prev.slice(1), prev[0]]
          : [prev[prev.length - 1], ...prev.slice(0, -1)];

      setIncoming(next[0]);

      setTimeout(() => {
        setDisplayed(next[0]);
        setIncoming(null);
        animatingRef.current = false;
      }, ANIM_MS);

      return next;
    });
  }, []);

  useEffect(() => { goRef.current = go; }, [go]);

  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    autoPlayRef.current = setTimeout(() => goRef.current('next'), autoPlayMs);
  }, [autoPlayMs]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current);
    };
  }, [displayed, resetAutoPlay]);

  const goToIndex = useCallback((index: number) => {
    if (animatingRef.current || index === 0) return;
    animatingRef.current = true;

    setItems((prev) => {
      const next = [...prev.slice(index), ...prev.slice(0, index)];
      setIncoming(next[0]);
      setTimeout(() => {
        setDisplayed(next[0]);
        setIncoming(null);
        animatingRef.current = false;
      }, ANIM_MS);
      return next;
    });
  }, []);

  const handleNext = () => { resetAutoPlay(); go('next'); };
  const handlePrev = () => { resetAutoPlay(); go('prev'); };

  const isAnimating = !!incoming;

  return (
    <div
      className={`carousel${isAnimating ? ' carousel--animating' : ''}`}
      style={{ '--accent': accentColor } as React.CSSProperties}
    >
      {/* Background */}
      <div className="carousel__bg">
        {incoming && (
          <img
            key={`prev-${displayed.title}`}
            src={displayed.img}
            alt=""
            className="carousel__bg-img carousel__bg-img--active"
            style={{ opacity: 0, transition: 'opacity 0.3s' }}
          />
        )}
        <img
          key={`curr-${displayed.title}`}
          src={displayed.img}
          alt={displayed.title}
          className="carousel__bg-img carousel__bg-img--active"
        />
      </div>

      {/* Expand animation overlay */}
      {incoming && (
        <div className="carousel__expand" key={`expand-${incoming.title}`}>
          <img src={incoming.img} alt={incoming.title} />
        </div>
      )}

      {/* Slide content */}
      {!isAnimating && (
        <div className="carousel__content" key={`content-${displayed.title}`}>
          <div className="carousel__author">{displayed.author}</div>
          <div className="carousel__title">{displayed.title}</div>
          <div className="carousel__topic">{displayed.topic}</div>
          <div className="carousel__desc">{displayed.desc}</div>
          <div className="carousel__buttons">
            {displayed.buttons.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={`btn btn--${btn.variant}`}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Thumbnails */}
      <div className="thumbnails">
        {items.map((slide, i) => (
          <div
            key={slide.title}
            className={`thumbnails__item${i === 0 ? ' thumbnails__item--active' : ''}`}
            onClick={() => { resetAutoPlay(); goToIndex(i); }}
          >
            <img src={slide.img} alt={slide.title} />
            <div className="thumbnails__label">{slide.title}</div>
          </div>
        ))}
      </div>

      {/* Arrow controls */}
      <div className="carousel__arrows">
        <button
          className="carousel__arrow"
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous"
        >
          &#8249;
        </button>
        <button
          className="carousel__arrow"
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next"
        >
          &#8250;
        </button>
      </div>

      {/* Progress bar */}
      <div className={`carousel__progress${isAnimating ? ' carousel__progress--run' : ''}`} />
    </div>
  );
}