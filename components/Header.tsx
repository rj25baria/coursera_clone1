import Link from 'next/link';
import { Search, ChevronDown, Bell } from 'lucide-react';
import StreakTracker from './StreakTracker';

const Header = () => {
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

          {/* Explore Button */}
          <button className="hidden md:flex items-center px-4 py-2 bg-blue-600 text-white rounded font-semibold text-sm hover:bg-blue-700 transition-colors">
            Explore
            <ChevronDown className="ml-1 w-4 h-4" />
          </button>

          {/* Search Bar */}
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

        {/* Right Navigation */}
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
        
        {/* Mobile Menu Icon (Placeholder) */}
        <div className="lg:hidden">
            <button className="text-gray-600">
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
