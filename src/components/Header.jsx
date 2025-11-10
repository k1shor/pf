'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
    FaMoon,
    FaSun,
    FaHome,
    FaUser,
    FaBriefcase,
    FaEnvelope,
    FaProjectDiagram,
    FaFileAlt,
    FaHeart,
    FaBars
} from 'react-icons/fa';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark') {
            setDarkMode(true);
        } else if (!stored) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const navItems = [
        { href: '/about', label: 'About', icon: <FaUser /> },
        { href: '/resume', label: 'Resume', icon: <FaFileAlt /> },
        { href: '/experience', label: 'Career', icon: <FaBriefcase /> },
        { href: '/blogs', label: 'Blogs', icon: <FaFileAlt /> },
        { href: '/passion', label: 'Passion', icon: <FaHeart /> },
        { href: '/contact', label: 'Contact', icon: <FaEnvelope /> },
    ];

    return (
        <header className="w-full px-6 py-4 flex justify-between items-center bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                    <FaHome /> Home
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-gray-600 dark:text-gray-300 text-2xl focus:outline-none"
                >
                    <FaBars />
                </button>
            </div>

            <nav className="hidden md:flex gap-6 items-center">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-2 px-3 py-2 rounded-md transition font-medium ${pathname === item.href
                            ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200'
                            : 'text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400'
                            }`}
                    >
                        {item.icon}
                        <span className="hidden sm:inline">{item.label}</span>
                    </Link>
                ))}
            </nav>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition ml-4"
                aria-label="Toggle Dark Mode"
            >
                <span
                    className="inline-block transition-transform duration-500 ease-in-out hover:rotate-180 transform origin-center"
                >
                    {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                </span>
            </button>


            {/* Slide-in Mobile Menu */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xl text-gray-700 dark:text-gray-200"
                    >
                        ✕
                    </button>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md text-lg font-medium transition ${pathname === item.href
                                ? 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200'
                                : 'text-gray-700 dark:text-gray-200 hover:text-pink-600 dark:hover:text-pink-400'
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
