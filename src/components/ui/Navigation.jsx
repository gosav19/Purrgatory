'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Mint', href: '/mint' },
    { name: 'Roadmap', href: '/roadmap' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Map', href: '/map' }, // ✅ Added Map here
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo2.jpg"
                alt="Purrgatory Logo"
                width={60}
                height={60}
                className="mr-3 rounded-sm object-contain"
                priority
              />
              <span className="text-2xl font-bold text-white">Purrgatory</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    isActive(item.href)
                      ? 'bg-purple-900 text-white'
                      : 'text-gray-300 hover:bg-purple-800 hover:text-white transition-colors'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <ConnectButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-purple-900 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-purple-800 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? 'bg-purple-900 text-white'
                    : 'text-gray-300 hover:bg-purple-800 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Connect Button */}
            <div className="mt-4 px-2">
              <ConnectButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
