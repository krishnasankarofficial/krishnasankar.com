"use client"

import { motion, useInView } from "framer-motion";
import { BoltOutlined } from '@mui/icons-material';
import { useRef } from "react";
import WorkSlider from "@/components/ui/WorkSlider";

export default function StayHead() {
    const stayAheadIRef = useRef(null);
    const stayAheadIsInView = useInView(stayAheadIRef, { once: true });

    return (
        <section ref={stayAheadIRef} className="w-full flex flex-col items-center justify-center gap-4">
            {stayAheadIsInView && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="text-5xl text-center md:text-6xl font-extrabold font-raleway bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent"
                        >
                        Stay Ahead, Stand Out
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="text-center text-lg"
                        >
                        I build 
                        <span className="relative mx-1">
                            fast, powerful
                            <BoltOutlined className="absolute -top-2 left-0 text-green-400 opacity-80 -z-10" style={{fontSize:40}}/>
                        </span> 
                        websites and apps that help you stay ahead of the game.
                        <br></br>
                        Let’s create something unique that makes you stand out!
                    </motion.p>
                    <div className="w-full h-52 mb-12 lg:h-96 py-2 lg:py-6">
                        <WorkSlider />
                    </div>
                </>
            )}
        </section>
    )
}