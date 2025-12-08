'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Journal', href: '/journal' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif text-[#556B2F]">Maure Events</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-gray-700 hover:text-[#556B2F] transition-colors duration-300"
              >
                {link.name}
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
                className="block px-3 py-2 text-base text-gray-700 hover:text-[#556B2F] hover:bg-gray-50 rounded-md transition-colors"
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
