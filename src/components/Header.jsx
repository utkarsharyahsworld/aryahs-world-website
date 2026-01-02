import { Link, NavLink } from 'react-router-dom';
import { navigationItems } from '../data/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <img
            src="/assets/images/logo.jpg"
            alt="Aryahs World Ventures"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain"
          />
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 truncate">Aryahs World Ventures</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="responsive-menu"
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

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 md:gap-8 items-center">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={handleLinkClick}
                className={({ isActive }) => {
                  // Base classes
                  const baseClasses = "transition text-sm md:text-base";

                  // If it's a primary button (like 'Contact')
                  if (item.isPrimary) {
                    return `${baseClasses} px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold ${
                      isActive
                        ? "bg-white text-blue-600 border-2 border-blue-600 shadow-inner" // Active: White with Blue Border
                        : "bg-blue-600 text-white hover:bg-blue-700 border-2 border-transparent" // Normal: Solid Blue
                      }`;
                  }

                  // Standard Links 
                  return `${baseClasses} ${isActive
                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1" // Active state design
                      : "text-gray-700 hover:text-blue-600 font-medium pb-1 border-b-2 border-transparent"
                    }`;
                }}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tablet Menu - Horizontal Scroll */}
      <div
        id="responsive-menu"
        className={`hidden md:block lg:hidden border-t border-gray-200 bg-white transition-all duration-200 ease-out ${menuOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ul className="flex flex-row gap-2 overflow-x-auto items-center justify-start">
            {navigationItems.map((item) => (
              <li key={item.path} className="flex-shrink-0">
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    item.isPrimary
                      ? "inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold whitespace-nowrap"
                      : `inline-block px-4 py-2 transition text-sm font-medium rounded-lg whitespace-nowrap ${isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-200" // Active tablet pill
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu - Right Side Drawer */}
      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="responsive-menu"
        className={`fixed right-0 top-0 h-screen w-64 bg-white shadow-lg z-40 md:hidden transform rounded-l transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close button at top */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div className="px-4 pb-4">
          <ul className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    item.isPrimary
                      ? "block w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-semibold text-center"
                      : `block w-full px-4 py-3 transition text-sm font-medium rounded-lg text-center ${isActive
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600" // Active mobile item
                        : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                      }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}