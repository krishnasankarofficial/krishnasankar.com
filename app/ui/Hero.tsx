"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden animate-white-to-black">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-green-400 to-cyan-500 blur-[120px] opacity-30"></div> */}

      {/* Animated Intro */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-7xl md:text-7xl font-extrabold font-raleway  z-10"
      >
        Crafting Websites, One Bug at a Time!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="text-lg md:text-xl  max-w-2xl mt-4 z-10"
      >
        Flawless Code? That’s Just a Myth. But Hey, I Make It Look Good!
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        className="mt-6 flex gap-4 z-10"
      >
        <Link
          href="#contact"
          className="px-6 py-3 bg-transparent border border-black  font-medium rounded-xl hover:bg-black hover:text-white transition shadow-xl"
        >
          Contact Me
        </Link>
        <Link
          href="#portfolio"
          className="px-6 py-3 bg-black text-white font-medium rounded-xl hover:bg-black transition shadow-xl"
        >
          View Portfolio
        </Link>
      </motion.div>
    </section>
  );
}
