import { useState } from 'react';

export default function Megamenu() {
    const [activeItem, setActiveItem] = useState(null);

    const handleMouseEnter = (item) => {
        setActiveItem(item);
    };

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="w-full h-96 flex justify-center items-center gap-4 rounded-3xl border border-[#ffffff2a] shadow-xl backdrop-blur-sm z-50">
            <div className="w-1/3 h-full p-8 flex flex-col items-start justify-between gap-4">
                <div
                    className={`w-full h-full flex-col p-4 bg-white bg-opacity-20 rounded-xl shadow-sm ${activeItem === 'Services' ? 'bg-opacity-40' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Services')}
                    onClick={() => handleClick('Services')}
                >
                    <span className="font-semibold text-xl font-raleway">Services</span>
                </div>
                <div
                    className={`w-full h-full flex-col p-4 bg-white bg-opacity-20 rounded-xl shadow-sm ${activeItem === 'Portfolio' ? 'bg-opacity-40' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Portfolio')}
                    onClick={() => handleClick('Portfolio')}
                >
                    <span className="font-semibold text-xl font-raleway">Portfolio</span>
                </div>
                <div
                    className={`w-full h-full flex-col p-4 bg-white bg-opacity-20 rounded-xl shadow-sm ${activeItem === 'Resources' ? 'bg-opacity-40' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Resources')}
                    onClick={() => handleClick('Resources')}
                >
                    <span className="font-semibold text-xl font-raleway">Resources</span>
                </div>
                <div
                    className={`w-full h-full flex-col p-4 bg-white bg-opacity-20 rounded-xl shadow-sm ${activeItem === 'Connect' ? 'bg-opacity-40' : ''}`}
                    onMouseEnter={() => handleMouseEnter('Connect')}
                    onClick={() => handleClick('Connect')}
                >
                    <span className="font-semibold text-xl font-raleway">Connect</span>
                </div>
            </div>
            <div className="w-full h-full p-8 flex-1 flex flex-col items-start justify-between"></div>
        </div>
    );
}