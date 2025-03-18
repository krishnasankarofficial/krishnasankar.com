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
                        className="lg:mb-6 text-3xl md:text-5xl lg:text-6xl text-center font-extrabold font-raleway bg-gradient-to-b from-gray-700 to-black bg-clip-text text-transparent md:py-4"
                        >
                        Frequently Asked Questions
                    </motion.h2>
                    {faqs.map((faq, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 + index * 0.2 }} 
                            key={index} 
                            className="relative w-full lg:w-4/5 flex flex-col items-start justify-between gap-2 md:gap-4 py-4 px-6 bg-white bg-opacity-20 rounded-3xl cursor-pointer duration-300"
                            onMouseDownCapture={handleFAQClick(index)}
                            >
                            <Image 
                                src={'/images/down.png'}
                                width={35}
                                height={35}
                                alt="Arrow up"
                                className={`absolute top-4 right-4 transform ${faq.active ? 'rotate-180' : ''} duration-300`}
                            />
                            <div className="flex flex-col items-start gap-4">
                                <p className="text-lg md:text-xl font-bold font-raleway leading-tight pr-4">{faq.question}</p>
                            </div>
                            {faq.active && (
                                <div className="text-sm md:text-lg flex flex-col items-start gap-4 animate-dropDown">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </>
            )}
        </section>
    );
}