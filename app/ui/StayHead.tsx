"use client"

import { motion, useInView } from "framer-motion";
import { BoltOutlined } from '@mui/icons-material';
import { useRef } from "react";
import WorkSlider from "./WorkSlider";

export default function StayHead() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full flex flex-col items-center justify-center gap-4">
            {isInView && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="text-3xl md:text-6xl font-extrabold font-raleway"
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
                        <span className="relative mx-1 font-bold">
                            fast, powerful
                            <BoltOutlined className="absolute -top-2 left-0 text-green-400 opacity-80 -z-10" style={{fontSize:40}}/>
                        </span> 
                        websites and apps that give you a competitive edge. 
                        <br></br>
                        Let’s create a digital experience that sets you apart.
                    </motion.p>
                    <div className="w-full h-full py-6">
                        <WorkSlider />
                    </div>
                </>
            )}
        </section>
    )
}