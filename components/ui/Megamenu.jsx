import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Megamenu() {
    const [activeItem, setActiveItem] = useState('Services');

    const handleMouseEnter = (item) => {
        setActiveItem(item);
    };

    const handleClick = (item) => {
        setActiveItem(item);
    };

    const menuItems = [
        {
            'name': 'Services',
            'url': '/services',
            'items': [
                {
                    'name': 'Custom Website',
                    'url': '/services/custom-website',
                },
                {
                    'name': 'E-Commerce',
                    'url': '/services/e-commerce',
                },
                {
                    'name': 'Optimisation & SEO',
                    'url': '/services/seo',
                },
                {
                    'name': 'Maintenance & Support',
                    'url': '/services/maintenance',
                },
                {
                    'name': 'UI/UX Design',
                    'url': '/services/ui-ux',
                },
            ],
        },
        {
            'name': 'Portfolio',
            'url': 'portfolio',
            'items': [
                {
                    'name': 'Business Websites',
                    'url': '/portfolio/business',
                },
                {
                    'name': 'E-Commerce Stores',
                    'url': '/portfolio/e-commerce',
                },
                {
                    'name': 'Landing Pages',
                    'url': '/portfolio/landing',
                },
                {
                    'name': 'Web Applications',
                    'url': '/portfolio/web-app',
                },
                {
                    'name': 'Brand Identity Design',
                    'url': '/portfolio/branding',
                },
            ],
        },
        {
            'name': 'Resources',
            'url': '/resources',
            'items': [
                {
                    'name': 'Blog',
                    'url': '/blog',
                },
                {
                    'name': 'Case Studies',
                    'url': '/case-studies',
                },
                {
                    'name': 'Free Tools',
                    'url': '/tools',
                },
                {
                    'name': 'Documentation',
                    'url': '/docs',
                },
                {
                    'name': 'Guides & Tutorials',
                    'url': '/guides',
                },
            ],
        },
        {
            'name': 'About',
            'url': '/about',
            'items': [
                {
                    'name': 'My Story',
                    'url': '/my-story',
                },
                {
                    'name': 'Careers',
                    'url': '/careers',
                },
                {
                    'name': 'Contact Us',
                    'url': '/contact',
                },
            ],
        },
        {
            'name': 'Pricing',
            'url': '/pricing',
            'items': [
                {
                    'name': 'Basic Plan',
                    'url': '/services/',
                },
                {
                    'name': 'Standard Plan',
                    'url': '/services/',
                },
                {
                    'name': 'Premium Plan',
                    'url': '/services/',
                },
                {
                    'name': 'Custom Solutions',
                    'url': '/services/',
                },
                {
                    'name': 'Compare Features',
                    'url': '/services/',
                },
            ],
        },
    ];
    

    return (
        <div className="w-full h-[80vh] flex justify-center items-center gap-4 rounded-3xl border border-[#ffffff2a] bg-white bg-opacity-20 shadow-xl backdrop-blur-sm z-50">
            <div className="w-1/3 h-full p-8 flex flex-col items-start justify-between gap-4">
                {menuItems.map((item, i) => (
                    <Link
                        href={item.url}
                        key={i}
                        className={`cursor-pointer w-full h-full flex-col p-4 bg-white bg-opacity-80 rounded-2xl shadow-sm ${activeItem === item.name ? 'bg-opacity-100 bg-gradient-to-t from-black to-gray-800 text-white' : ''}`}
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onClick={() => handleClick(item.name)}
                    >
                        <span className="font-semibold text-xl font-raleway">{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className="w-full h-full p-8 flex-1">
                {menuItems.map((item, i) => (
                    activeItem === item.name &&
                    <div className="w-full h-full flex flex-col items-start justify-between gap-4" key={i}>
                        <div className="w-full h-1/2 flex items-center justify-between gap-4">
                            {
                                item.items.length > 0 && 
                                <Link 
                                    href={item.items[0].url} 
                                    className="flex-1 h-full bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                    <span className='font-bold font-raleway text-3xl'>{item.items[0].name}</span>
                                    <div
                                        className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                    >
                                        <Image 
                                        src={'/images/arrow-up.png'}
                                        width={25}
                                        height={25}
                                        alt="Arrow up"
                                        />
                                    </div>
                                </Link>
                            }
                            <div className="flex-1 h-full flex flex-col gap-4">
                                {
                                    item.items.length > 1 && 
                                    <Link href={item.items[1].url} className="w-full h-1/2 bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                        <span className='font-bold font-raleway text-xl'>{item.items[1].name}</span>
                                        <div
                                            className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                        >
                                            <Image 
                                            src={'/images/arrow-up.png'}
                                            width={25}
                                            height={25}
                                            alt="Arrow up"
                                            />
                                        </div>
                                    </Link>
                                }
                                {
                                    item.items.length > 2 && 
                                    <Link href={item.items[2].url} className="w-full h-1/2  bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                        <span className='font-bold font-raleway text-xl'>{item.items[2].name}</span>
                                        <div
                                                className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                            >
                                                <Image 
                                                src={'/images/arrow-up.png'}
                                                width={25}
                                                height={25}
                                                alt="Arrow up"
                                                />
                                            </div>
                                    </Link>
                                }
                            </div>
                        </div>
                        <div className="w-full h-1/2  flex items-center justify-between gap-4">
                            <div className="flex-1 h-full flex flex-col gap-4">
                                {
                                    item.items.length > 3 && 
                                    <Link href={item.items[3].url} className="w-full h-1/2  bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                        <span className='font-bold font-raleway text-xl'>{item.items[3].name}</span>
                                        <div
                                                className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                            >
                                                <Image 
                                                src={'/images/arrow-up.png'}
                                                width={25}
                                                height={25}
                                                alt="Arrow up"
                                                />
                                            </div>
                                    </Link>
                                }
                                {
                                    item.items.length > 4 && 
                                    <Link href={item.items[4].url} className="w-full h-1/2  bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                        <span className='font-bold font-raleway text-xl'>{item.items[4].name}</span>
                                        <div
                                                className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                            >
                                                <Image 
                                                src={'/images/arrow-up.png'}
                                                width={25}
                                                height={25}
                                                alt="Arrow up"
                                                />
                                            </div>
                                    </Link>
                                }
                            </div>
                            {item.items.length > 5 && 
                                <div className="flex-1 h-full flex flex-col gap-4">
                                    {
                                        item.items.length > 5 && 
                                        <Link href={item.items[5].url} className="w-full h-1/2  bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                            <span className='font-bold font-raleway text-xl'>{item.items[5].name}</span>
                                            <div
                                                className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                            >
                                                <Image 
                                                src={'/images/arrow-up.png'}
                                                width={25}
                                                height={25}
                                                alt="Arrow up"
                                                />
                                            </div>
                                        </Link>
                                    }
                                    {
                                        item.items.length > 6 && 
                                        <Link href={item.items[6].url} className="w-full h-1/2  bg-white rounded-3xl shadow-sm flex items-center justify-center relative overflow-hidden group hover:scale-105 duration-300 cursor-pointer">
                                            <span className='font-bold font-raleway text-xl'>{item.items[6].name}</span>
                                            <div
                                                className="absolute w-12 h-12 -bottom-2 -right-2 bg-gradient-to-tl from-black to-gray-700 text-white rounded-full p-2 shadow-lg hover:bg-slate-800 transition duration-300 flex items-center justify-center group-hover:-translate-y-2 group-hover:-translate-x-2"
                                            >
                                                <Image 
                                                src={'/images/arrow-up.png'}
                                                width={25}
                                                height={25}
                                                alt="Arrow up"
                                                />
                                            </div>
                                        </Link>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}