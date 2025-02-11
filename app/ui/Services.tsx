"use client"

import { motion, useInView } from "framer-motion";
import { BoltOutlined } from '@mui/icons-material';
import { useRef } from "react";
import WorkSlider from "./WorkSlider";
import Image from "next/image";
import CardWithButton from "./CardWithButton";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full flex flex-col items-center justify-center gap-4 mt-40">
            {isInView && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="text-3xl md:text-6xl font-extrabold font-raleway"
                        >
                        What I Do Best
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="text-center text-lg flex items-center justify-end relative"
                        >
                        I ensure a seamless digital experience that keeps you <b className="ml-1">ahead of the competition</b>.
                        {/* <Image 
                            src={'/images/arrow-up.png'}
                            width={150}
                            height={150}
                            alt="Arrow up"
                            className="absolute -top-24 -right-36"
                        /> */}
                    </motion.p>
                    <div className="w-full h-96 flex items-center justify-center py-6 px-32 gap-4">
                        <div className="flex-1 h-full flex flex-col items-center justify-center gap-4">
                            <div className="w-full h-full flex items-center justify-center gap-4">
                                <CardWithButton />
                                <CardWithButton />
                            </div>
                            <div className="w-full h-full flex items-center justify-center gap-4">
                                <CardWithButton />
                                <CardWithButton />
                            </div>
                        </div>
                        <div className="flex-1 h-full flex flex-col items-center justify-center">
                            <CardWithButton />
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}