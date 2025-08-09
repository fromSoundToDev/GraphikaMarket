import React, { useState, useEffect, useRef } from "react";
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({
  items = [],
  baseWidth = 320,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  renderItem, // fonction pour afficher un item
}) => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const isHoveredRef = useRef(false);

  const maxIndex = items.length - 1;

  const next = () => {
    setCurrent(prev => (prev === maxIndex ? (loop ? 0 : maxIndex) : prev + 1));
  };
  const prev = () => {
    setCurrent(prev => (prev === 0 ? (loop ? maxIndex : 0) : prev - 1));
  };

  useEffect(() => {
    if (!autoplay) return;

    autoplayRef.current = setInterval(() => {
      if (pauseOnHover && isHoveredRef.current) return;
      next();
    }, autoplayDelay);

    return () => clearInterval(autoplayRef.current);
  }, [autoplay, autoplayDelay, pauseOnHover]);

  const onMouseEnter = () => {
    if (pauseOnHover) isHoveredRef.current = true;
  };
  const onMouseLeave = () => {
    if (pauseOnHover) isHoveredRef.current = false;
  };

  return (
    <div
      className="relative w-full max-w-[100%] select-none"
      style={{ maxWidth: baseWidth * 3 + 32 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * baseWidth}px)`,
          width: `${items.length * baseWidth}px`,
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 mx-2"
            style={{ width: baseWidth }}
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        className="absolute top-1/2 left-1 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50"
        onClick={prev}
        aria-label="Précédent"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="absolute top-1/2 right-1 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50"
        onClick={next}
        aria-label="Suivant"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </Button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Aller à la diapositive ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              current === i ? "bg-yellow-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
