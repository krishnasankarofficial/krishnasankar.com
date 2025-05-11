import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function SimpleMenu({ setShowMenu }) {
    const [activeItem, setActiveItem] = useState('Services');

    const handleClick = (item) => {
        setActiveItem(item);
    };

    const menuItems = [
        { name: 'Services', url: '/services' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: 'Blogs', url: '/blogs' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
    ];

    return (
        <nav className="w-full h-screen bg-slate-900 flex flex-col items-center justify-center">
            <ul className="flex flex-col justify-center items-center gap-8 w-full px-4">
                {menuItems.map((item, i) => (
                    <li key={i} className="w-auto">
                        <motion.span
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-limelight 
                            text-white bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text 
                            hover:text-transparent flex items-center justify-center duration-300"
                        >
                            <Link 
                                href={item.url} 
                                onClick={() => setShowMenu(false)}
                                className='tracking-wide'
                                >
                                {item.name}
                            </Link>
                        </motion.span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}