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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 2000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="relative flex items-center justify-center w-full h-full">
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
                className={`absolute xl:w-[800px] lg:w-[500px] w-[250px]  h-auto bg-white rounded-3xl shadow-lg flex items-center justify-center text-xl cursor-pointer object-cover`}
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
      </div>
    </div>
  );
}