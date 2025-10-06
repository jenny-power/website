import { useEffect, useState } from "react";

export default function CarouselClient({ slides }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute bottom-4 w-full text-center text-base-content p-2 font-patua bg-white/70">
            {slide.caption}
          </div>
        </div>
      ))}
    </div>
  );
}
