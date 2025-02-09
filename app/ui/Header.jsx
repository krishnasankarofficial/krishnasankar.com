"use client";


import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 w-full flex items-center justify-center p-10 z-50 text-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                className="w-1/2 p-4 flex items-center justify-between rounded-full bg-white bg-opacity-15 shadow-lg"
            >
                <span className="font-sofia text-xl ml-4">Krishnasankar</span>
                <Link
                    href="#"
                    className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black transition"
                >
                    Hire me
                </Link>
            </motion.div>
        </header>
    )
}