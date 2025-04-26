"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import WorkSlider from "@/components/ui/WorkSlider";

export default function StayHead() {
    const stayAheadIRef = useRef(null);
    const stayAheadIsInView = useInView(stayAheadIRef, { once: true });

    return (
        <section ref={stayAheadIRef} className="w-full flex flex-col items-center justify-center gap-4 xl:my-24 lg:my-12 h-full">
            {stayAheadIsInView && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="text-3xl md:text-5xl lg:text-6xl text-center font-extrabold font-limelight bg-gradient-to-r from-cyan-500 
                        to-green-500 bg-clip-text text-transparent"
                        >
                        Stay Ahead, Stand Out
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="text-sm md:text-lg text-center"
                        >
                        I build fast, powerful websites and apps that help you stay ahead of the game.
                        <br></br>
                        Let’s create something unique that makes you stand out!
                    </motion.p>
                    <div className="w-full h-52 mb-12 lg:h-96 py-2 xl:my-32 lg:my-12">
                        <WorkSlider />
                    </div>
                </>
            )}
        </section>
    )
}