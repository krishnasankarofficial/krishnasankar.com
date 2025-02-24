"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Megamenu from "./Megamenu";
import { useState } from "react";

export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="fixed top-4 left-0 w-full z-50">
            <header className="w-full flex items-center justify-center z-50">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    className="relative w-1/2 p-4 flex items-center justify-between rounded-full bg-transparent text-dark shadow-lg z-50 backdrop-blur-sm backdrop"
                >
                    <div className="w-1/2 flex items-center justify-start pl-2 gap-4">
                        <Image 
                            className="cursor-pointer hover:scale-110 duration-300 " 
                            src={'/images/app.png'} 
                            width={35} 
                            height={35} 
                            alt="Menu" 
                            onMouseEnter={() => setShowMenu(true)}
                            onMouseLeave={(e) => {
                                if (!e.relatedTarget || !(e.relatedTarget as Element).closest('.megamenu')) {
                                    setShowMenu(false);
                                }
                            }}
                            />
                    </div>
                    <motion.div 
                        whileTap={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-1/2 flex items-center justify-center">
                        <Logo />
                    </motion.div>
                    <div className="w-1/2 flex items-center justify-end z-50">
                        <motion.div
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            className="w-1/2 flex items-center justify-end"
                            >
                            <Link
                                href={'/hire-me'} 
                                className="w-full text-center bg-gradient-to-t from-black to-gray-700 text-white cursor-pointer rounded-full font-semibold px-4 py-2 shadow-sm">
                                Hire Me
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </header>
            {showMenu && (
                <motion.div 
                    className="absolute w-full h-full -bottom-10 z-50 left-0 px-32 pt-10 text-black megamenu"
                    initial = {{ y: -50, scale: 0.5 }}
                    animate = {{ y: 0, scale: 1 }}
                    transition = {{ duration: 0.3, ease: "easeOut" }}
                    onMouseEnter={() => setShowMenu(true)}
                    onMouseLeave={() => setShowMenu(false)}
                    >
                    <Megamenu />
                </motion.div>
            )}
        </div>
    )
}