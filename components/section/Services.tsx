"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CardWithButton from "@/components/ui/CardWithButton";

export default function Services() {
    const ref = useRef(null);
    const servicesInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full flex flex-col items-center justify-center gap-4 lg:mt-12 h-full">
            {servicesInView && (
                <>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                        className="text-5xl text-center md:text-5xl lg:text-6xl font-extrabold font-raleway bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent"
                        >
                        What I Do Best
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                        className="text-center text-lg flex items-center justify-end relative"
                        >
                        Building high-performance web solutions using cutting-edge technologies for seamless user experiences.
                    </motion.p>
                    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center lg:py-6 lg:px-32 gap-4">
                        <motion.div 
                            className="flex-1 h-full flex flex-col items-center justify-center"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                            >
                            <CardWithButton 
                                title="Custom Websites" 
                                description="Building fully responsive and fast websites using Next.js, React, or other modern frameworks tailored to your needs." 
                                img="/images/web.png"
                                height={500}
                                main
                            />
                        </motion.div>
                        <div className="flex-1 h-full flex flex-col items-center justify-center gap-4">
                            <motion.div 
                                className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                                >
                                <CardWithButton
                                    title="E-commerce Stores" 
                                    description="Create your online store easily with me." 
                                />
                                <CardWithButton 
                                    title="Optimization & SEO" 
                                    description="Boost site speed and rise to the top of search results." 
                                />
                            </motion.div>
                            <motion.div 
                                className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-4"
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