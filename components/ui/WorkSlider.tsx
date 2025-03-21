import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const works = [
  { id: 1, title: "Work 1" },
  { id: 2, title: "Work 2" },
  { id: 3, title: "Work 3" },
  { id: 4, title: "Work 4" },
  { id: 5, title: "Work 5" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-full h-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 lg:left-16 -bottom-28 lg:top-1/2 -translate-y-1/2 z-40"
        >
          <Image 
            src={'/images/right.png'}
            width={80}
            height={80}
            alt="Right"
            className="rotate-180 hover:scale-110 duration-300  hover:-translate-x-2"
          />
        </button>
        <AnimatePresence>
          {works.map((work, index) => {
            const position = index - currentIndex;
            const isCenter = position === 0;

            let adjustedPosition = position;
            if (position > 2) adjustedPosition = position - works.length;
            if (position < -2) adjustedPosition = position + works.length;

            const distanceFromCenter = Math.abs(adjustedPosition);
            const scale = 1 - distanceFromCenter * 0.1;
            const zIndex = 10 - distanceFromCenter;

            return (
              <motion.div
                key={work.id}
                className={`absolute w-[250px] lg:w-[500px] h-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-xl cursor-pointer object-cover`}
                initial={{ scale: 0.8, x: adjustedPosition * 200, opacity: 1 }}
                animate={{
                  scale: scale,
                  x: isMobile ? adjustedPosition * 40 : adjustedPosition * 80,
                  opacity: isCenter ? 1 : 0.8,
                  zIndex: zIndex,
                }}
                transition={{ type: "spring", duration: 0.8, delay: 0.5 }}
              >
                <Image 
                    src={'/images/image.png'}
                    width={1000}
                    height={1000}
                    alt="Work"
                    className="w-full h-full rounded-3xl"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <button
          onClick={handleNext}
          className="absolute right-0 lg:right-16 -bottom-28 lg:top-1/2 -translate-y-1/2 z-40"
        >
          <Image 
            src={'/images/right.png'}
            width={80}
            height={80}
            alt="Right"
            className="hover:scale-110 duration-300 hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
}