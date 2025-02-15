"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
    const ref = useRef(null);
    const inView = useInView(ref, {once: false});
    return (
        <footer ref={ref} className="w-full mt-12 flex flex-col items-center justify-between px-12  py-4 bg-gradient-to-t from-black to-gray-800 rounded-t-3xl text-white pt-10 animate-slideUp">
            {inView && (
                <motion.div 
                    className="w-full flex flex-col items-center justify-between overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                    >
                    <div className="w-full flex items-start justify-between">
                        <div className="flex flex-col">
                            <div className="bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">
                                <Logo size="lg" />
                            </div>
                            <Link href={'mailto:krishnasankarofficial@gmail.com'}>
                                krishnasankarofficial@gmail.com
                            </Link>
                            <Link href={'tel:917306310132'}>
                                +(91) 730 631 0132
                            </Link>
                            <p className="mt-6 font-raleway font-semibold text-3xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">
                                With Great Power, <br></br> Comes Great Responsiblity.
                            </p>
                            <span>Stan Lee, 1962</span>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <div className="w-full flex items-start justify-between gap-24">
                                <div className="flex flex-col gap-2">
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Links</span>
                                    <Link href={''}>Home</Link>
                                    <Link href={''}>About</Link>
                                    <Link href={''}>Blogs</Link>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
                                    <Link href={''}>Website</Link>
                                    <Link href={''}>E-Commerce</Link>
                                    <Link href={''}>Maintenance</Link>
                                    <Link href={''}>UI/UX</Link>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Legal</span>
                                    <Link href={''}>Privacy</Link>
                                    <Link href={''}>Terms of use</Link>
                                    <Link href={''}>Cookies</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white opacity-20 rounded-full  my-4"></div>
                    <div className="w-full flex items-center justify-between">
                        <div className="flex-1 flex items-center justify-between gap-4">
                            &copy; 2025 Krishnasankar, All rights reserved.
                        </div>
                        <div className="flex items-center justify-evenly gap-2">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                            >
                                <Link 
                                    href={''}
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm duration-300 hover:scale-110 hover:-translate-y-1"
                                    >
                                    <Instagram style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                            >
                                <Link 
                                    href={''}
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm duration-300 hover:scale-110 hover:-translate-y-1"
                                    >
                                    <Facebook style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
                            >
                                <Link 
                                    href={''}
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm duration-300 hover:scale-110 hover:-translate-y-1"
                                    >
                                    <WhatsApp style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </footer>
    )
}