"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
    {
        review: "Krishnasankar delivered a top-notch website that exceeded our expectations. His attention to detail and commitment to performance optimization truly set him apart!",
        client: "Client 1",
        designation: "CEO, Company 1",
    },
    {
        review: "Working with Krishnasankar was a game-changer for our business. His ability to craft user-friendly and scalable web solutions is unmatched!",
        client: "Client 2",
        designation: "CEO, Company 2",
    },
    {
        review: "From concept to deployment, Krishnasankar demonstrated exceptional expertise and professionalism. Our platform runs smoothly, thanks to his innovative approach!",
        client: "Client 3",
        designation: "CEO, Company 3",
    },
];

export default function Clients() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const handlePreviousClick = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleNextClick = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const reviewVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <section className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 p-6 xl:my-24 lg:my-12">
            <div className="xl:w-full h-full xl:text-start text-center flex flex-col items-center justify-center">
                <span className="lg:text-6xl md:text-5xl text-3xl font-extrabold font-limelight bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent py-4">
                    What my clients say about me?
                </span>
            </div>

            <div className="w-full lg:h-96 h-72 relative overflow-hidden flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentReview}
                        variants={reviewVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full max-w-[800px] mx-auto flex flex-col gap-4 bg-gradient-to-t from-slate-900 to-slate-800 rounded-[2rem] p-6 lg:p-8 text-left items-start justify-start"
                    >
                        <div className="flex items-center gap-4">
                            <Image
                                src="/images/man.png"
                                width={50}
                                height={50}
                                alt="Man Icon"
                            />
                            <div className="flex flex-col">
                                <span className="font-bold text-2xl font-raleway">{reviews[currentReview].client}</span>
                                <span className="text-slate-400">{reviews[currentReview].designation}</span>
                            </div>
                        </div>
                        <p className="text-sm md:text-lg leading-relaxed break-words">
                            {reviews[currentReview].review}
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 right-4 flex items-center gap-4">
                    <button
                        onClick={handlePreviousClick}
                        className="rotate-[200deg] bg-gradient-to-tr from-cyan-400 to-green-400 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 hover:scale-110 active:scale-75"
                    >
                        <Image
                            src="/images/black-arrow-up.png"
                            width={25}
                            height={25}
                            alt="Previous"
                        />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="rotate-[20deg] bg-gradient-to-tr from-cyan-400 to-green-400 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 hover:scale-110 active:scale-75"
                    >
                        <Image
                            src="/images/black-arrow-up.png"
                            width={25}
                            height={25}
                            alt="Next"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
