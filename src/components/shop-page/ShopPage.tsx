'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ShopPage() {
  const [activeNav, setActiveNav] = useState('Latest Finds');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const navLinks = [
    'Latest Finds',
    'Most Popular',
    'Shelves',
    'Posts',
    'Closet',
    'Tiktok',
    'Instagram',
    'New Home',
    'Youtube',
    'Zoho',
    'New Old',
    'Tyt',
    'Nee',
    'Archive',
  ];

  const categories = [
    { name: 'APPAREL', count: 8 },
    { name: 'MAKEUP', count: 4 },
    { name: 'SKINCARE', count: 3 },
    { name: 'FOOTWEAR', count: 3 },
    { name: 'SWEETS & SNACKS', count: 3 },
    { name: 'HAIRCARE', count: 2 },
    { name: 'EYEWEAR', count: 2 },
    { name: 'JEWELRY', count: 2 },
    { name: 'BAGS & PURSES', count: 1 },
    { name: 'LUGGAGE & TRAVEL', count: 1 },
    { name: 'HEALTH & WELLNESS', count: 1 },
    { name: 'DRESSES', count: 4 },
    { name: 'CANDY &', count: 0 },
  ];

  // Mock product data
  const products = [
    {
      id: 1,
      image: '/api/placeholder/400/500',
      title: 'Teal Sweater',
      visible: true,
    },
    {
      id: 2,
      image: '/api/placeholder/400/500',
      title: 'Magenta Floral Top',
      visible: true,
    },
    {
      id: 3,
      image: '/api/placeholder/400/500',
      title: 'White Halter Top',
      visible: true,
    },
    {
      id: 4,
      image: '/api/placeholder/400/500',
      title: 'Perfume Bottle',
      visible: false,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Profile Section */}
      <div className="pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center relative">
            {/* Top Right Icons */}
            <div className="absolute top-0 right-0 flex gap-4 text-gray-400">
              <button className="hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
              <button className="hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>
              <button className="hover:text-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </button>
            </div>

            {/* Profile Picture */}
            <div className="w-24 h-24 rounded-full bg-gray-800 mb-4 overflow-hidden">
              <div className="w-full h-full bg-gray-700"></div>
            </div>

            {/* Curator Name */}
            <h1 className="text-4xl font-serif mb-2 text-gray-900">
              Curated by Heba Badawy
            </h1>

            {/* Trust Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-600">Trusted by 0 shoppers</span>
              <button className="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </button>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <span className="text-gray-700 text-sm font-semibold">f</span>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0v1.5a3 3 0 01-3 3h-3a3 3 0 01-3-3v-1.5m9 0h-4.5"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-4">
            <button className="text-gray-600 hover:text-gray-900 flex-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveNav(link)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex-shrink-0 transition-colors ${activeNav === link
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Navigation Bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`text-sm whitespace-nowrap flex-shrink-0 transition-colors ${selectedCategory === category.name
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {category.name} {category.count}
              </button>
            ))}
            <button className="text-sm text-gray-600 hover:text-gray-900 whitespace-nowrap flex-shrink-0">
              Show All
            </button>
          </div>
        </div>
      </div>

      {/* Processing Notification */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              A product you added this week is being processed. We're building
              full product pages for them now — they'll appear in your shop once
              they're ready.
            </p>
            <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 ml-4">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative group">
              {product.visible ? (
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      {product.title}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 m-4 text-center">
                      <h3 className="font-semibold mb-2 text-gray-900">
                        Currently Hidden
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        This product is in a hidden collection or section.
                      </p>
                      <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 transition-colors">
                        Make Visible
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

