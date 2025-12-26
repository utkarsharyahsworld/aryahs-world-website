import { company } from '../data/company';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Aryahs World Infotech</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">{company.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Quick Links</h4>
            <ul className="space-y-2 md:space-y-2.5 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition text-sm md:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition text-sm md:text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Contact</h4>
            <ul className="space-y-2 md:space-y-2.5 text-gray-400 text-sm md:text-base">
              <li className="break-words">Email: {company.contact.email}</li>
              <li>Phone: {company.contact.phone}</li>
              <li className="break-words">{company.contact.address}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4 text-base md:text-lg">Follow Us</h4>
            <ul className="space-y-2 md:space-y-2.5 text-gray-400">
              <li>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={company.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href={company.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-sm md:text-base"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 md:pt-10">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            © {currentYear} Aryahs World Infotech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
