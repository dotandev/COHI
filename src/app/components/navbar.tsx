'use client';

import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router'; // For navigation
import logo from '../../../public/logo.png';

interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Join TWS', href: '/' },
    { name: 'Tournaments', href: '/' },
    { name: 'Donate', href: '/' },
];

const Navbar: React.FC = () => {
    const [active, setActive] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 

    useEffect(() => {
        const currentPath = window.location.pathname; 
        const currentItem = navItems.find((item) => item.href === currentPath);
        if (currentItem) {
            setActive(currentItem.name);
        }
    }, []); 

    const handleNavClick = (href: string, name: string) => {
        setActive(name); 
        window.location.href = href; 
    };

    return (
        <nav className="bg-[#7B0000] w-full mt-6 text-white lg:px-32 py-4 px-6 rounded-full flex justify-between items-center">
            <div className="flex items-center lg:-mx-12">
                <img
                    src={logo.src}
                    alt="The Wordsmiths"
                    className="h-8 w-8 mr-4 cursor-pointer"
                    onClick={() => handleNavClick('/', 'Home')}
                />
            </div>

            <ul className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`cursor-pointer ${
                            active === item.name ? 'underline underline-offset-4' : ''
                        }`}
                        onClick={() => handleNavClick(item.href, item.name)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#7B0000] p-6 rounded-lg">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <li
                                key={item.name}
                                className={`cursor-pointer ${
                                    active === item.name ? 'underline underline-offset-4' : ''
                                }`}
                                onClick={() => {
                                    handleNavClick(item.href, item.name);
                                    setIsMenuOpen(false); 
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
