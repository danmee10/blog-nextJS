"use client";

import { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-500">
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-700"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}
