"use client"

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function FAQ() {
    const FAQRef = useRef(null);
    const faqInView = useInView(FAQRef, { once: true });
    const [faqs, setFAQS] = useState([
        { 
            question: 'What technologies do you specialize in?', 
            answer: 'I primarily work with Next.js, Django, PostgreSQL. I also have experience with Docker, AWS, and Framer Motion for animations.' ,
            active: true,
        },
        { 
            question: 'Do you build custom websites or use templates?', 
            answer: 'I build fully custom websites tailored to your needs, but I also create reusable website templates to accelerate development.' ,
            active: false,
        },
        { 
            question: 'Can you help with website performance optimization?', 
            answer: 'Yes! I focus on speed, SEO, and user experience to ensure your website is optimized and runs efficiently.' ,
            active: false,
        },
        { 
            question: 'Do you take freelance projects?', 
            answer: "Yes, I'm available for freelance work. Whether you need a simple landing page or a complex SaaS application, I can help.",
            active: false,
        },
        { 
            question: 'Do you provide support and maintenance after the launch?', 
            answer: "Yes! I offer ongoing maintenance, bug fixes, and feature updates for all projects I develop.",
            active: false,
        },
    ]);

    const handleFAQClick = (index: number) => () => {
        setFAQS((prev) => prev.map((faq, i) => ({
            ...faq,
            active: i === index ? !faq.active : false,
        })));
    };

    return (
        <section ref={FAQRef} className="w-full flex flex-col items-center justify-center gap-2 lg:gap-4 lg:py-6">
            {faqInView && (
                <>
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        className="lg:mb-6 text-3xl md:text-5xl lg:text-6xl text-center font-extrabold font-limelight bg-gradient-to-r from-cyan-500 
                        to-green-500 bg-clip-text text-transparent py-4"
                        >
                        Frequently Asked Questions
                    </motion.h2>
                    {faqs.map((faq, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.2 }} 
                            key={index} 
                            className="relative w-full lg:w-4/5 flex flex-col items-start justify-between gap-2 md:gap-4 
                            xl:py-10 xl:px-12 py-4 px-6 overflow-hidden
                            bg-gradient-to-t from-slate-900 to-slate-800 rounded-3xl cursor-pointer duration-300"
                            onMouseDownCapture={handleFAQClick(index)}
                            >
                            <Image 
                                src={'/images/down.png'}
                                width={45}
                                height={45}
                                alt="Arrow up"
                                className={`absolute -top-[1px] -right-[1px] transform ${faq.active ? 'rotate-90' : '-rotate-90'} duration-300 
                                bg-gradient-to-tr from-cyan-400 to-green-400 rounded-full p-2`}
                            />
                            <div className="flex flex-col items-start gap-4">
                                <p className="text-lg md:text-xl font-bold font-raleway leading-tight pr-6">{faq.question}</p>
                            </div>
                            {faq.active && (
                                <div className="text-sm md:text-lg flex flex-col items-start gap-4 animate-dropDown">
                                    <p className="text-slate-300">{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </>
            )}
        </section>
    );
}