'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { MdOutlineAccountCircle } from 'react-icons/md';

export default function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const isMainPage = pathname === '/';

    useEffect(() => {
        if (!isMainPage) {
            setIsScrolled(true);
            return;
        }

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname, isMainPage]);

    const isTransparent = isMainPage && !isScrolled;

    const headerClasses = `
        w-full fixed top-0 left-0 z-50 transition-all duration-300
        ${isTransparent
            ? 'bg-transparent'
            : 'bg-white border-b border-gray-200 shadow-sm'
        }
    `;

    const navLinkClasses = `
        font-medium transition-colors duration-300 hover:text-brand-orange
        ${isTransparent ? 'text-black' : 'text-gray-700'}
    `;

    const searchIconClasses = `
        h-5 w-5 transition-colors duration-300
        ${isTransparent ? 'text-black' : 'text-gray-500'}
    `;

    const searchInputClasses = `
        w-40 bg-transparent border-b py-1 pl-7 text-sm focus:outline-none focus:ring-0
        ${isTransparent
            ? 'text-black placeholder-gray-300 border-black'
            : 'text-gray-800 placeholder-gray-500 border-gray-400'
        }
    `;
    
    const profileIconClasses = `
        h-8 w-8 cursor-pointer transition-colors duration-300 hover:text-brand-orange
        ${isTransparent ? 'text-black' : 'text-gray-600'}
    `;

    return (
        <header className={headerClasses}>
            <div className="container mx-auto flex items-center justify-between px-4 h-20">

                <nav className="flex-1">
                    <ul className="flex items-center gap-x-6">
                        <li><Link href="/about" className={navLinkClasses}>about</Link></li>
                        <li><Link href="/people" className={navLinkClasses}>people</Link></li>
                        <li><Link href="/contents" className={navLinkClasses}>contents</Link></li>
                        <li><Link href="/participate" className={navLinkClasses}>participate</Link></li>
                    </ul>
                </nav>

                <div className="flex-1 flex justify-center">
                    <Link href="/">
                        <Image
                            src="/logos/mainLogo.png" 
                            alt="메인 로고"
                            width={70}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                <div className="flex-1 flex justify-end items-center gap-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center">
                            <HiMagnifyingGlass className={searchIconClasses} />
                        </span>
                        <input
                            type="search"
                            placeholder=""
                            className={searchInputClasses}
                        />
                    </div>
                    <Link href="/profile">
                        <MdOutlineAccountCircle className={profileIconClasses} />
                    </Link>
                </div>

            </div>
        </header>
    );
}