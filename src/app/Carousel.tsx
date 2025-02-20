"use client";

import { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [localItems, setLocalItems] = useState(items);

  const handlePrev = () => {
    console.log("handlePrev");
    setCurrentIndex((prevIndex) => {
      console.log("setting index");
      const atStart = prevIndex === 0;

      if (atStart) {
        setLocalItems((oldItems) => {
          console.log("setting items", oldItems);
          const lastItem = oldItems[oldItems.length - 1];
          const newItems = [
            lastItem,
            ...oldItems.slice(0, oldItems.length - 1),
          ];
          console.log({ lastItem, newItems });

          return newItems;
        });

        return 0;
      }

      return localItems.length - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 1 ? prevIndex + 1 : 0
    );
  };

  console.log({ localItems, currentIndex });
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0 flex transition-all duration-500">
        {localItems.map((item, index) => (
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

      {localItems.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}
