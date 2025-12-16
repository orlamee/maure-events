'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed w-full bg-[#f5f2eb] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.JPG" 
              alt="Maure Events" 
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-wider transition-all duration-300 relative group ${
                  isActive(link.href)
                    ? 'text-[#556B2F] font-semibold'
                    : 'text-gray-700 hover:text-[#556B2F]'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#556B2F]"></span>
                )}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/maure_events"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#556B2F] transition-colors duration-300"
            >
              <FaInstagram size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-[#556B2F] transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base rounded-md transition-colors ${
                  isActive(link.href)
                    ? 'text-[#556B2F] bg-[#F5F5DC] font-semibold'
                    : 'text-gray-700 hover:text-[#556B2F] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/maure_events"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-3 py-2 text-base text-gray-700 hover:text-[#556B2F] hover:bg-gray-50 rounded-md transition-colors"
            >
              <FaInstagram size={20} className="mr-2" />
              Follow Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
