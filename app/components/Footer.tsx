'use client';

import Link from 'next/link';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2C2416] text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif text-[#C4A57B] mb-4">Maure Events</h3>
            <p className="text-sm text-gray-300 mb-4">
              Curating Maure Memorable Moments
            </p>
            <p className="text-xs text-gray-400">
              Elevating life&apos;s most meaningful moments through intentional design and seamless execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A57B]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-[#C4A57B] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#C4A57B]">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <FaPhone className="text-[#C4A57B]" />
                <a href="tel:2406367044" className="hover:text-[#C4A57B] transition-colors">
                  (240) 636-7044
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <FaEnvelope className="text-[#C4A57B]" />
                <a href="mailto:info@maureevents.com" className="hover:text-[#C4A57B] transition-colors">
                  info@maureevents.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-300">
                <FaInstagram className="text-[#C4A57B]" />
                <a
                  href="https://www.instagram.com/maure_events"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C4A57B] transition-colors"
                >
                  @maure_events
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-sm font-semibold mb-2 text-[#C4A57B]">Business Hours</h5>
              <p className="text-xs text-gray-400">Monday - Saturday: 12pm - 7pm</p>
              <p className="text-xs text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Maure Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
