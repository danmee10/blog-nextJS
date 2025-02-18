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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full flex justify-between items-center">
        <button onClick={handlePrev} className="p-2 bg-gray-700 text-white">
          Prev
        </button>
        <div className="w-3/4 overflow-x-scroll whitespace-nowrap">
          {items.map((item, index) => (
            <div
              key={index}
              className={`inline-block w-full transition-transform duration-300 ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="p-2 bg-gray-700 text-white">
          Next
        </button>
      </div>
    </div>
  );
}
