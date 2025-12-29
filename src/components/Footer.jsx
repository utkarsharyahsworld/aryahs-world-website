import { company } from '../data/company';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">
              {company.name}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
              {company.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">Contact</h4>
            <address className="not-italic space-y-2.5 text-gray-400 text-sm md:text-base">
              <div className="break-words">
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</span>
                {company.contact.email}
              </div>
              <div>
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Phone</span>
                {company.contact.phone}
              </div>
              <div className="break-words">
                <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</span>
                {company.contact.address}
              </div>
            </address>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <ul className="space-y-2.5 text-gray-400">
              <li>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={company.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={company.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 md:pt-10">
          <p className="text-center text-gray-500 text-xs md:text-sm font-medium">
            © {currentYear} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
