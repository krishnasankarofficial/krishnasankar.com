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
        <section className="w-full h-96 flex items-start justify-between p-6 py-12">
            <div className="w-2/5 h-full flex flex-col items-start justify-between">
                <span className="text-3xl md:text-6xl font-extrabold font-raleway bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent py-4">
                    What my clients say about me?
                </span>
                <div className="flex items-center justify-start gap-4">
                    <button
                        onClick={handlePreviousClick}
                        className="rotate-[200deg] bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-75"
                    >
                        <Image 
                            src={'/images/arrow-up.png'}
                            width={30}
                            height={30}
                            alt="Arrow up"
                        />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="rotate-[20deg] bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-75"
                    >
                        <Image 
                            src={'/images/arrow-up.png'}
                            width={30}
                            height={30}
                            alt="Arrow up"
                        />
                    </button>
                </div>
            </div>
            <div className="w-full h-full overflow-hidden flex flex-col items-end justify-between gap-4">
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className={`w-2/3 h-full ${currentReview === index ? 'flex' : 'hidden'} flex-col gap-6 bg-white rounded-3xl p-6 px-8 bg-opacity-80 transition-opacity duration-1000 animate-slideUp`}
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
                                <span className="text-gray-700">{review.designation}</span>
                            </div>
                        </div>
                        <span className="">{review.review}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}