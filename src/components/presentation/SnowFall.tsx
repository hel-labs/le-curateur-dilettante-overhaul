'use client';
import React, { useMemo, ReactNode } from 'react';
import '@/styles/presentation/snowfall.css';

interface Snowflake {
  id: number;
  left: string;
  top: string;
  size: string;
  duration: string;
  blur: string;
  delay: string;
}

interface SnowfallProps {
  count?: number;
  children?: ReactNode;
}

const Snowfall: React.FC<SnowfallProps> = ({ count = 50, children }) => {
  const snowflakes = useMemo<Snowflake[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.floor(Math.random() * 30 + 10)}px`,
      duration: `${Math.random() * 5 + 5}s`,
      blur: `${Math.random() * 10}px`,
      delay: `${Math.random() * 5}s`,
    }));
  }, [count]);

  return (
    <div className="snow-wrapper">
      <div className="content-layer">
        {children}
      </div>

      <div className="snow-container" aria-hidden="true">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snow-flake"
            style={{
              left: flake.left,
              top: flake.top,
              width: flake.size,
              height: flake.size,
              animationDuration: flake.duration,
              animationDelay: flake.delay,
              filter: `blur(${flake.blur})`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default Snowfall;