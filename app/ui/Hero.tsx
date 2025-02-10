"use client";

import { motion } from "framer-motion";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Greeting from './Greeting'
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center animate-white-to-black z-0">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-cyan-500 blur-[120px] opacity-30"></div> */}

      {/* Animated Intro */}
      <Greeting />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-7xl md:text-7xl font-extrabold font-raleway"
      >
        It&apos;s me, Krishnasankar
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="text-lg md:text-2xl font-bold  max-w-2xl mt-4"
      >
        Your go-to Digital Partner
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        className="text-lg md:text-xl mt-4"
      >
        Still thinking about it? Let's be real, your website won't build itself.
      </motion.span>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
        className="mt-6 flex gap-4"
      >
        <Link
          href="#contact"
          className="px-6 py-3 bg-transparent border-2 border-black  font-medium rounded-xl hover:bg-gradient-to-t from-black to-gray-800 hover:text-white transition shadow-xl duration-300"
        >
          Contact Me
        </Link>
        <Link
          href="#portfolio"
          className="px-6 py-3 bg-gradient-to-t from-black to-gray-800 text-white font-medium rounded-xl hover:bg-black transition shadow-xl"
        >
          View Portfolio
        </Link>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.0, ease: "easeOut" }}
        className="flex flex-col gap-2 items-center justify-center mt-12">
        <span className='text-xl'>Scroll down</span>
        <Image 
          src={'/images/arrow-down.png'} 
          width={100} 
          height={100} 
          alt="Arrow down" 
          className='rotate-45'
          />
      </motion.div>
    </section>
  );
}
