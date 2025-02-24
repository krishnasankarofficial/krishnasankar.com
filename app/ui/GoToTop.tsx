"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';


export default function GoToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {showButton && (
                <motion.button
                    whileHover={{ scale: 1.1, y: -10 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-2 bg-gradient-to-tr from-green-500 to-cyan-500 rounded-full shadow-lg"
                >
                    <Image
                        src={"/images/arrow-circle.png"}
                        width={35}
                        height={35}
                        alt="Go to top"
                    />
                </motion.button>
            )}
        </>
    );
}