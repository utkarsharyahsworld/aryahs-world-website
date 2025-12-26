import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { company } from '../data/company';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from '../pages/Home/Home';
import { Projects } from '../pages/Projects/Projects';
import { ProjectDetail } from '../pages/ProjectDetail/ProjectDetail';
import { About } from '../pages/About/About';
import { Contact } from '../pages/Contact/Contact';
import { Careers } from '../pages/Careers/Careers';

export function App() {
  function ScrollToTop() {
    const location = useLocation();
    useEffect(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, left: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    }, [location.pathname]);
    return null;
  }
  function QuickActions() {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return (
      <div
        className={`fixed right-3 md:right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2 ${
          prefersReduced ? '' : 'transition-opacity duration-500 ease-out opacity-100'
        }`}
        aria-label="Quick actions"
      >
        {company.quickLinks.map((link) => {
          const isExternal = link.kind === 'external';
          const commonProps = isExternal
            ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
            : { href: link.href };
          const icon =
            link.id === 'linkedin' ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3V9zm7 0h3.6v1.7h.05c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.4V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V21h-4V9z" />
              </svg>
            ) : link.id === 'email' ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v0.5l-10 6-10-6V6zm0 3.5l9.4 5.6a1.5 1.5 0 0 0 1.6 0L22 9.5V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M14 6h5a1 1 0 0 1 1 1v11H4V7a1 1 0 0 1 1-1h5V4h4v2zm-8 3v8h12V9H6zm2 2h2v4H8v-4zm4 0h2v4h-2v-4z" />
              </svg>
            );
          return (
            <div key={link.id} className="group relative">
              <a
                {...commonProps}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 shadow-sm transition"
                aria-label={link.label}
              >
                {icon}
              </a>
              <span className="pointer-events-none absolute right-full mr-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                {link.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] bg-blue-600 text-white px-3 py-2 rounded">
          Skip to main content
        </a>
        <Header />
        <ScrollToTop />
        <QuickActions />
        <div className="flex-grow" id="main-content" tabIndex="-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center min-h-96">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                      404 - Page Not Found
                    </h1>
                    <p className="text-gray-600 mb-6">
                      Sorry, the page you're looking for doesn't exist.
                    </p>
                    <Link
                      to="/"
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                      Go to Home
                    </Link>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
