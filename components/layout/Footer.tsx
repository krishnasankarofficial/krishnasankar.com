"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Footer() {
    const footerRef = useRef(null);
    const footerInView = useInView(footerRef, {once: true });
    return (
        <footer ref={footerRef} className="w-full flex flex-col items-center justify-between bg-transparent pt-12">
            {footerInView && (
                <div
                    className="w-full flex flex-col items-center justify-between  bg-gradient-to-t from-black to-gray-800 rounded-t-[3rem] text-white px-12 pr-28 py-6 pt-14"
                    >
                    <div className="w-full flex flex-col text-center md:text-start lg:flex-row items-start justify-between">
                        <div 
                            className="flex flex-col"
                            >
                            <motion.div 
                                className="bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                >
                                <Logo size="lg" />
                            </motion.div>
                            <motion.div 
                                className="flex flex-col gap-2"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                >
                                <Link 
                                    className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" 
                                    href={'mailto:krishnasankarofficial@gmail.com'}
                                    target="_blank"
                                    >
                                    krishnasankarofficial@gmail.com
                                </Link>
                                <Link 
                                    className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" 
                                    href={'tel:917306310132'}
                                    target="_blank"
                                    >
                                    +(91) 730 631 0132
                                </Link>
                            </motion.div>
                            <motion.p 
                                className="mt-6 font-raleway font-semibold text-3xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent"
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                >
                                With Great Power, <br></br> Comes Great Responsiblity.
                            </motion.p>
                            <motion.span 
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                                >Stan Lee, 1962</motion.span>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
                            <div className="w-full flex items-start justify-between gap-4 md:gap-12 lg:gap-24">
                                <motion.div 
                                    className="w-full flex flex-col gap-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                    >
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Links</span>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Home</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>About</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Blogs</Link>
                                </motion.div>
                                <motion.div 
                                    className="w-full flex flex-col gap-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
                                    >
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Services</span>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Website</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>E-Commerce</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Maintenance</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>UI/UX</Link>
                                </motion.div>
                                <motion.div 
                                    className="w-full flex flex-col gap-2"
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                                    >
                                    <span className="font-bold font-raleway text-xl bg-gradient-to-tr from-green-500 to-cyan-500 bg-clip-text text-transparent">Legal</span>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Privacy</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Terms of use</Link>
                                    <Link className="hover:translate-x-1 hover:bg-gradient-to-tr from-green-500 to-cyan-500 hover:bg-clip-text hover:text-transparent duration-300" href={'#'}>Cookies</Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white opacity-20 rounded-full my-4"></div>
                    <div className="w-full flex flex-col md:flex-row text-center items-center justify-between">
                        <motion.div 
                            className="flex-1 flex items-center justify-between gap-4"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                            >
                            &copy; 2025 Krishnasankar, All rights reserved.
                        </motion.div>
                        <div className="flex items-center justify-evenly gap-2">
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut"}}
                                whileTap={{ scale: 0.6 }}
                                whileHover={{ scale: 1.2 }}

                            >
                                <Link 
                                    href={'https://www.instagram.com/ki.chu____'}
                                    target="_blank"
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm"
                                    >
                                    <Instagram style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut"}}
                                whileTap={{ scale: 0.6 }}
                                whileHover={{ scale: 1.2 }}

                            >
                                <Link 
                                    href={'https://www.facebook.com/krishna.sankar.587/'}
                                    target="_blank"
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm"
                                    >
                                    <Facebook style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut"}}
                                whileTap={{ scale: 0.6 }}
                                whileHover={{ scale: 1.2 }}

                            >
                                <Link 
                                    href={'https://wa.me/+917306310132'}
                                    target="_blank"
                                    className="bg-gradient-to-tr from-green-500 to-cyan-500 p-2 rounded-xl text-black flex items-center justify-center text-sm"
                                    >
                                    <WhatsApp style={{fontSize:20}}/>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    )
}