"use client"

import Image from "next/image";
import { useEffect, useState } from "react"
// import { motion } from "framer-motion";

const reviews = [
    { 
        review: "Krishnasankar delivered a top-notch website that exceeded our expectations. His attention to detail and commitment to performance optimization truly set him apart!", 
        client: "Client 1" ,
        designation: "CEO, Company 1",
    },
    { 
        review: "Working with Krishnasankar was a game-changer for our business. His ability to craft user-friendly and scalable web solutions is unmatched!", 
        client: "Client 2" ,
        designation: "CEO, Company 1",
    },
    { 
        review: "From concept to deployment, Krishnasankar demonstrated exceptional expertise and professionalism. Our platform runs smoothly, thanks to his innovative approach!", 
        client: "Client 3" ,
        designation: "CEO, Company 1",
    },
];

export default function Clients() {
    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handlePreviousClick = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const handleNextClick = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    return (
        <section className="w-full h-full flex flex-col lg:flex-row items-start justify-between gap-4 p-6 xl:my-24 lg:my-12">
            <div className="xl:w-full h-full xl:text-start text-center flex flex-col items-center justify-center">
                <span className="lg:text-6xl md:text-5xl text-3xl font-extrabold font-limelight  bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent py-4">
                    What my clients say about me?
                </span>
            </div>
            <div className="w-full lg:h-96 h-64 overflow-hidden flex flex-col items-end justify-between gap-2 lg:gap-4">
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={`w-full h-full ${currentReview === index ? 'flex' : 'hidden'} flex-col gap-2 lg:gap-6 bg-gradient-to-t 
                        from-black to-gray-900 rounded-3xl mt-4 p-4 lg:p-6 px-6 lg:px-8 bg-opacity-80 transition-opacity duration-1000 animate-slideUp`}
                    >
                        <div className="flex items-center justify-start gap-4">
                            <Image 
                                src={'/images/man.png'}
                                width={50}
                                height={50}
                                alt="Man Icon"
                            />
                            <div className="flex flex-col items-start justify-start">
                                <span className="font-bold text-2xl font-raleway">{review.client}</span>
                                <span className="text-gray-400">{review.designation}</span>
                            </div>
                        </div>
                        <span className="text-sm md:text-lg text-pretty break-words hyphens-auto">{review.review}</span>
                    </div>
                ))}
                <div className="w-full flex items-center justify-end -translate-y-6 lg:translate-y-0 gap-2 lg:gap-4">
                    <button
                        onClick={handlePreviousClick}
                        className="rotate-[200deg] bg-gradient-to-tr from-cyan-400 to-green-400 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-75"
                    >
                        <Image 
                            src={'/images/black-arrow-up.png'}
                            width={25}
                            height={25}
                            alt="Arrow up"
                        />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="rotate-[20deg] bg-gradient-to-tr from-cyan-400 to-green-400 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-75"
                    >
                        <Image 
                            src={'/images/black-arrow-up.png'}
                            width={25}
                            height={25}
                            alt="Arrow up"
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}