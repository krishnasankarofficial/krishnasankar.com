"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="fixed top-4 w-full flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="relative w-1/2 p-4 flex items-center justify-between rounded-full bg-transparent text-dark shadow-lg z-50 backdrop-blur-sm backdrop"
            >
                <div className="w-1/2 flex items-center justify-start pl-2 gap-4">
                    <Image className="cursor-pointer hover:scale-110 duration-300 " src={'/images/app.png'} width={35} height={35} alt="Menu" />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Logo />
                </div>
                <div className="w-1/2 flex items-center justify-end z-50">
                    <Link
                        href={'/hire-me'} 
                        className="w-1/2 text-center bg-gradient-to-t from-black to-gray-700 text-white cursor-pointer rounded-full font-semibold px-4 py-2 shadow-sm hover:scale-110 duration-300 hover:-translate-x-2">
                        Hire Me
                    </Link>
                </div>
            </motion.div>
        </header>
    )
}