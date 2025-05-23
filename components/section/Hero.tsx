"use client";

import { motion, useInView } from "framer-motion";
import Greeting from '@/components/ui/Greeting'
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null)
  const heroInView = useInView(ref, { once: true })
  
  
  return (
    <section ref={ref} className="relative w-full h-screen flex flex-col items-center justify-center text-center animate-white-to-black z-0">
      {heroInView && (
        <>
          <Greeting />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-limelight bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent"
          >
            It&apos;s me, Krishnasankar
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-4xl font-bold  max-w-2xl mt-2"
          >
            Your Trusted Digital Partner
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl xl:mt-6 mt-4"
          >
            Still thinking about it? Your competitors aren&apos;t. <br />
            Let&apos;s turn your vision into a powerful online presence.
          </motion.span>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            className="xl:mt-12 mt-6 flex gap-4"
          >
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              >
              <Link
                href="/contact"
                className="px-6 py-3 bg-transparent border border-black rounded-full hover:bg-gradient-to-t hover:from-slate-900
                hover:to-slate-800 hover:text-white hover:scale-110 shadow-xl duration-300 xl:text-xl text-base"
              >
                Contact Me
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              >
              <Link
                href="/portfolio"
                className="px-6 py-3 bg-gradient-to-t from-cyan-400 to-green-400  text-dark rounded-full 
                hover:scale-110 duration-300 shadow-xl xl:text-xl text-base"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
            className="flex flex-col gap-2 items-center justify-center xl:mt-24 mt-12 animate-bounce">
            <span className='text-xl'>Scroll down</span>
            <Image 
              src={'/images/arrow-down.png'} 
              width={100} 
              height={100} 
              alt="Arrow down" 
              className='rotate-45'
              />
          </motion.div>
        </>
      )}
    </section>
  );
}
