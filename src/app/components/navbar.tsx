'use client';

import { Logo } from '@/components/COHILogo';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';



interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Excos', href: '/excos' },
    { name: 'Affiliates', href: '/affiliates' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Donate', href: '/donate' },
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
        <nav className='flex justify-between mt-6 gap-20 mx-10'>
            <div className=''>
                <Link href="/" aria-label="Home">
                    <Logo
                        className="h-16 "
                        invert={false}
                    />
                </Link>
            </div>
            <div className="lg:bg-[#004617] bg-[#004617] lg:w-full w-20 text-white rounded-full flex justify-center items-center">
                <ul className="hidden md:flex space-x-8 justify-center">
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className={`cursor-pointer ${active === item.name ? 'underline underline-offset-4' : ''
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
                    <div className="md:hidden absolute top-16 left-0 w-full bg-[#004617] p-6 rounded-lg">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li
                                    key={item.name}
                                    className={`cursor-pointer ${active === item.name ? 'underline underline-offset-4' : ''
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
                        {/* <div className=' px-8 py-4'> */}
                        <Link className='text-center items-center justify-center mt-4 cursor-pointer hover:underline underline-offset-4' href={'/magazines'}>Our Magazine</Link>
                        {/* </div> */}
                    </div>
                )}
            </div>
            {/* <div className='hidden md:flex'>
                <button className='border-2 border-[#004617] rounded-2xl text-nowrap'>Join Us</button>
            </div> */}
            <button className="hidden md:flex border-2 border-[#004617] text-[#004617] rounded-full px-12 text-nowrap font-extrabold text-center justify-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Link className='text-center items-center justify-center mt-4 cursor-pointer hover:underline underline-offset-4' href={'/magazines'}>Our Magazine</Link>
                </button>
        </nav>
    );
};

export default Navbar;
