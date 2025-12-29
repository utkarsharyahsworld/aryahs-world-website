import { Link } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src="/assets/images/logo.jpg"
            alt="Aryahs World Ventures"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 truncate">Aryahs World Ventures</span>
        </Link>
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className={`h-6 w-6 ${menuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className={`h-6 w-6 ${menuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul className="hidden md:flex gap-6 md:gap-8 items-center">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={handleLinkClick}
                className={
                  item.isPrimary
                    ? "px-4 md:px-6 py-2 md:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm md:text-base font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition text-sm md:text-base font-medium"
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-gray-200 bg-white transition-all duration-200 ease-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ul className="flex flex-col gap-1">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleLinkClick}
                  className={
                    item.isPrimary
                      ? "block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold text-center"
                      : "block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition text-sm font-medium rounded-lg"
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
