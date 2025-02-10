"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-10 w-full flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                className="relative w-1/2 p-4 flex items-center justify-between rounded-full bg-white text-black bg-opacity-30 shadow-lg z-50"
            >
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-full blur-sm z-50"></div> */}
                <div className="w-1/2 flex items-center justify-start pl-2 gap-4">
                    <Image className="cursor-pointer" src={'/images/app.png'} width={35} height={35} alt="Menu" />
                    {/* <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Portfolio</Link>
                    <Link href={'/'}>Blog</Link>
                    <Link href={'/'}>Contact</Link> */}
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Link href={'/'} className="text-4xl ml-6 font-anthony translate-y-1">Krishnasankar</Link>
                </div>
                <div className="w-1/2 flex items-center justify-end z-50">
                    <Link
                        href={'/hire-me'} 
                        className="w-1/2 text-center bg-gradient-to-t from-black to-gray-700 text-white cursor-pointer rounded-full font-semibold px-4 py-2 shadow-sm">
                        Hire Me
                    </Link>
                </div>
            </motion.div>
        </header>
    )
}