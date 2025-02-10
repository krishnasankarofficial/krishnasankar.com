import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const works = [
  { id: 1, title: "Work 1" },
  { id: 2, title: "Work 2" },
  { id: 3, title: "Work 3" },
  { id: 4, title: "Work 4" },
  { id: 5, title: "Work 5" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % works.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + works.length) % works.length);
  };

  // Auto-scroll every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(handleNext, 5000);
//     return () => clearInterval(interval);
//   }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-4/5 h-64 perspective">
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
                className={`absolute w-96 h-72 bg-white rounded-xl shadow-lg flex items-center justify-center text-xl cursor-pointer object-cover`}
                initial={{ scale: 0.8, x: adjustedPosition * 200, opacity: 1 }}
                animate={{
                  scale: scale,
                  x: adjustedPosition * 100,
                  opacity: isCenter ? 1 : 0.8,
                  zIndex: zIndex,
                }}
                transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              >
                <Image 
                    src={'/images/image.png'}
                    width={500}
                    height={500}
                    alt="Work"
                    className="w-full h-full rounded-xl"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-8 space-x-2">
        <button
          onClick={handlePrev}
          className="w-8 h-8 bg-gradient-to-t from-black to-gray-700 text-white rounded-full hover:bg-[#7978783b]"
        >
          <ArrowLeft style={{fontSize:20}}/>
        </button>
        <button
          onClick={handleNext}
          className="w-8 h-8 bg-gradient-to-t from-black to-gray-700 text-white rounded-full hover:bg-[#7978783b]"
        >
          <ArrowRight style={{fontSize:20}}/>
        </button>
      </div>
    </div>
  );
}