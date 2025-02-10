"use client"

import { motion } from "framer-motion";
import { BoltOutlined } from '@mui/icons-material';

export default function StayHead() {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-4">
            <h2
                // initial={{ opacity: 0, y: -50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl md:text-6xl font-extrabold font-raleway"
            >
                Stay Ahead, Stand Out
            </h2>
            <p className="text-center text-lg">
                I build
                <span className="relative mx-1 font-bold">
                    fast, powerful
                    <BoltOutlined className="absolute -top-2 left-0 text-green-400 opacity-50 -z-10" style={{fontSize:40}}/>
                </span> 
                websites and apps that give you a competitive edge. 
                <br></br>
                Let’s create a digital experience that sets you apart.
            </p>
        </section>
    )
}