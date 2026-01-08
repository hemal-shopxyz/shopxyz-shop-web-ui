import Link from 'next/link';

export default function Footer() {
  const footerSections = [
    {
      title: 'FOR CREATORS',
      links: [
        { text: 'ShopXyz For Creators', href: '/creators' },
        { text: 'Digital Shops', href: '/creators/digital-shops' },
        { text: 'Affiliate Links', href: '/creators/affiliate-links' },
        { text: 'Brand Partnerships', href: '/creators/partnerships' },
        { text: 'Apply to be a Creator', href: '/creators/apply' },
      ],
    },
    {
      title: 'FOR BRANDS',
      links: [
        { text: 'ShopXyz For Brands', href: '/brands' },
        { text: 'Discover', href: '/brands/discover' },
        { text: 'Engage', href: '/brands/engage' },
        { text: 'Track', href: '/brands/track' },
        { text: 'Amplify', href: '/brands/amplify' },
      ],
    },
    {
      title: 'FOR SHOPPERS',
      links: [
        { text: 'Shop By Curator', href: '/shop/curator' },
        { text: 'Shop By Circle', href: '/shop/circle' },
        { text: 'Shop By Brand', href: '/shop/brand' },
        { text: 'Shop By Category', href: '/shop/category' },
        { text: 'My Circles', href: '/shoppers/circles' },
        { text: 'My Taste Profile', href: '/shoppers/profile' },
      ],
    },
    {
      title: 'EXPLORE',
      links: [
        { text: 'Blog', href: '/blog' },
        { text: 'About Us', href: '/about' },
        { text: 'Careers', href: '/careers' },
        { text: 'Shop All Categories', href: '/categories' },
      ],
    },
    {
      title: 'SUPPORT + LEGAL',
      links: [
        { text: 'Creator How-To Guide', href: '/support/creator-guide' },
        { text: 'Brand Guide', href: '/support/brand-guide' },
        { text: 'Contact Us', href: '/support/contact' },
        { text: 'Terms of Service', href: '/legal/terms' },
        { text: 'Privacy', href: '/legal/privacy' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold mb-4 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">shopxyz</h2>
            <p className="text-gray-400 text-sm">
              © Copyright 2025 ShopXyz Shelf, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <button
          className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors shadow-lg"
          aria-label="Help"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </button>
        <button
          className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg"
          aria-label="Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

