"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CardWithButton from "./CardWithButton";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section ref={ref} className="w-full flex flex-col items-center justify-center gap-4 mt-12">
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
                    </motion.p>
                    <div className="w-full h-[450px] flex items-center justify-center py-6 px-32 gap-4">
                        <motion.div 
                            className="flex-1 h-full flex flex-col items-center justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                            >
                            <CardWithButton 
                                title="Custom Websites" 
                                description="Building fully responsive and fast websites using Next.js, React, or other modern frameworks tailored to your needs." 
                                img="/images/web.jpg"
                                main
                            />
                        </motion.div>
                        <div className="flex-1 h-full flex flex-col items-center justify-center gap-4">
                            <motion.div 
                                className="w-full h-full flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                                >
                                <CardWithButton
                                    title="E-commerce Stores" 
                                    description="Create your online store easily with me." 
                                />
                                <CardWithButton 
                                    title="Website Optimization & SEO" 
                                    description="Boost site speed and rise to the top of search results." 
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full h-full flex items-center justify-center gap-4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                                >
                                <CardWithButton 
                                    title="Maintenance & Support" 
                                    description="Keep sites up to date & secure." 
                                />
                                <CardWithButton 
                                    title="UI/UX Design & Prototyping" 
                                    description="Designing and prototyping engaging interfaces." 
                                />
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </section>
    )
}