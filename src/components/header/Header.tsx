'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('My Shop');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dynamic shop slug - can be replaced with actual user shop slug
  const shopSlug = 'my-shop'; // TODO: Replace with actual user shop slug from auth/context

  const navLinks = [
    { name: 'My Shop', href: `/shop/${shopSlug}` },
    { name: 'Links', href: '/links' },
    { name: 'Earnings', href: '/earnings' },
    { name: 'Latest', href: '/latest' },
  ];

  return (
    <header className="bg-primary text-white px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          shopxyz
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`hover:text-gray-300 font-medium transition-colors ${activeLink === link.name ? 'underline underline-offset-4' : ''
                } ${(link.name === 'Earnings' || link.name === 'Latest')
                  ? 'hidden lg:block'
                  : ''
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* User Status */}
          <div className="hidden md:flex items-center gap-2 ml-4">
            <div className="flex items-center gap-2 bg-gray-700 rounded-lg px-3 py-1.5">
              <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <span className="text-sm">Enthusiast</span>
            </div>
          </div>

          {/* Notification Icon / Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative ml-4 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              4
            </span>
          </button>
        </nav>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Heba Badawy</p>
                  <Link href="/account" className="text-sm text-gray-600 hover:text-gray-900">
                    View my account &gt;
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              {/* AFFILIATES & EARNINGS */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  AFFILIATES & EARNINGS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/links" className="block text-gray-900 hover:text-gray-600 py-2">
                      Links
                    </Link>
                  </li>
                  <li>
                    <Link href={`/shop/${shopSlug}`} className="flex items-center justify-between text-gray-900 hover:text-gray-600 py-2">
                      <span>My Shop</span>
                      <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-old" className="block text-gray-900 hover:text-gray-600 py-2">
                      My Shop (Old Version)
                    </Link>
                  </li>
                  <li>
                    <Link href="/earnings" className="block text-gray-900 hover:text-gray-600 py-2">
                      Earnings
                    </Link>
                  </li>
                </ul>
              </div>

              {/* WORKING WITH BRANDS */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  WORKING WITH BRANDS
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/chat" className="flex items-center justify-between text-gray-900 hover:text-gray-600 py-2">
                      <span>Chat</span>
                      <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gifting" className="block text-gray-900 hover:text-gray-600 py-2">
                      Gifting
                    </Link>
                  </li>
                  <li>
                    <Link href="/opportunities" className="block text-gray-900 hover:text-gray-600 py-2">
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link href="/discount-codes" className="block text-gray-900 hover:text-gray-600 py-2">
                      Discount Codes
                    </Link>
                  </li>
                </ul>
              </div>

              {/* SHOPPING */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  SHOPPING
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/shop-by-curator" className="block text-gray-900 hover:text-gray-600 py-2">
                      Shop By Curator
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-by-circle" className="block text-gray-900 hover:text-gray-600 py-2">
                      Shop By Circle
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-by-category" className="block text-gray-900 hover:text-gray-600 py-2">
                      Shop By Category
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop-by-brand" className="block text-gray-900 hover:text-gray-600 py-2">
                      Shop By Brand
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-circles" className="block text-gray-900 hover:text-gray-600 py-2">
                      My Circles
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-taste" className="block text-gray-900 hover:text-gray-600 py-2">
                      My Taste
                    </Link>
                  </li>
                </ul>
              </div>

              {/* GENERAL */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                  GENERAL
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/latest" className="block text-gray-900 hover:text-gray-600 py-2">
                      Latest on ShopMy
                    </Link>
                  </li>
                  <li>
                    <Link href="/account-settings" className="block text-gray-900 hover:text-gray-600 py-2">
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-guide" className="block text-gray-900 hover:text-gray-600 py-2">
                      How To Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/refer-earn" className="block text-gray-900 hover:text-gray-600 py-2">
                      Refer & Earn
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Sign Out Button */}
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full border-2 border-gray-900 text-gray-900 font-medium py-3 rounded hover:bg-gray-50 transition-colors">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

