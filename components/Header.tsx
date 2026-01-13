'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, ChevronDown, Bell, Menu, X } from 'lucide-react';
import StreakTracker from './StreakTracker';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const exploreCategories = [
    { name: 'Data Science', href: '/courses?tag=Data Science' },
    { name: 'Programming', href: '/courses?tag=Programming' },
    { name: 'Business', href: '/courses?tag=Business' },
    { name: 'AI & Machine Learning', href: '/courses?tag=AI' },
    { name: 'Web Development', href: '/courses?tag=Web Development' },
    { name: 'Health & Wellness', href: '/courses?tag=Health' },
  ];

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/brand/coursera.svg"
              alt="Coursera"
              className="h-8 w-auto mr-2"
            />
            <span className="text-blue-600 text-2xl font-bold font-sans tracking-tight hidden sm:block">coursera</span>
          </Link>

          {/* Explore Button with Dropdown */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Explore
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isExploreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isExploreDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {exploreCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => setIsExploreDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 shadow-sm text-sm"
            />
            <button className="absolute right-1 top-1 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Right Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <StreakTracker />
          <Link href="/degrees" className="hover:text-blue-600">Degrees</Link>
          <Link href="/career" className="hover:text-blue-600">Find your New Career</Link>
          <Link href="/enterprise" className="hover:text-blue-600">For Enterprise</Link>
          <Link href="/universities" className="hover:text-blue-600">For Universities</Link>
          <Link href="/login" className="text-blue-600 hover:underline">Log In</Link>
          <Link href="/join" className="px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 transition-colors">
            Join for Free
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMobileSearchOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-4">
            {/* Mobile Explore Section */}
            <div>
              <button
                onClick={() => setIsExploreDropdownOpen(!isExploreDropdownOpen)}
                className="flex items-center justify-between w-full px-3 py-2 bg-blue-600 text-white rounded font-semibold text-sm"
              >
                Explore
                <ChevronDown className={`w-4 h-4 transition-transform ${isExploreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isExploreDropdownOpen && (
                <div className="mt-2 space-y-1">
                  {exploreCategories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsExploreDropdownOpen(false);
                      }}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <StreakTracker />
              <Link
                href="/degrees"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Degrees
              </Link>
              <Link
                href="/career"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find your New Career
              </Link>
              <Link
                href="/enterprise"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Enterprise
              </Link>
              <Link
                href="/universities"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Universities
              </Link>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded font-medium hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                href="/join"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join for Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
