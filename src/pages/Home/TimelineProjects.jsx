import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { projects } from '../../data/projects';

export function TimelineProjects() {
  const [visibleItems, setVisibleItems] = useState({});
  const containerRef = useRef(null);

  // Sort projects by year in descending order
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  const formatDate = (project) => {
    return project.month ? `${project.month} ${project.year}` : `${project.year}`;
  };

  // Intersection Observer for scroll-based animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const elements = containerRef.current?.querySelectorAll('[data-timeline-item]');
      elements?.forEach((el) => {
        observer.observe(el);
        // Trigger check immediately for items already in view
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleItems((prev) => ({
            ...prev,
            [el.id]: true,
          }));
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 overflow-hidden">
      {/* Multi-layer background for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary subtle gradient accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDuration: '8s' }} />
        {/* Secondary accent */}
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-8" />
        {/* Tertiary accent for balance */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-5" />
      </div>

      {/* Grid pattern overlay for subtle texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            Our Journey: Project Timeline
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our evolution through landmark projects and innovations.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative" ref={containerRef}>
          {/* Enhanced Timeline Line with gradient */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 opacity-40" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 opacity-30" />

          {sortedProjects.map((project, index) => {
            const isLeft = index % 2 === 0;
            const itemId = `timeline-item-${project.id}`;
            const isVisible = visibleItems[itemId];

            return (
              <div
                key={project.id}
                id={itemId}
                data-timeline-item
                className="grid grid-cols-[1fr_6rem_1fr] gap-6 items-start py-12 first:pt-0 relative"
              >
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={isLeft ? 'flex justify-end pr-4' : 'invisible'}
                >
                  {isLeft && (
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group w-full max-w-xs block bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 p-6 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
                          {project.domain}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                      </div>
                    </Link>
                  )}
                </motion.div>

                {/* Center Timeline */}
                <div className="flex flex-col items-center justify-start relative z-20">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                  >
                    <div className="w-4 h-4 bg-blue-600 border-3 border-white rounded-full shadow-lg ring-2 ring-blue-200" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                    className="mt-8"
                  >
                    <div className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap backdrop-blur-sm">
                      {formatDate(project)}
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className={!isLeft ? 'flex justify-start pl-4' : 'invisible'}
                >
                  {!isLeft && (
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group w-full max-w-xs block bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 p-6 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-full">
                          {project.domain}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more →
                      </div>
                    </Link>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Tablet Timeline - Centered single column */}
        <div className="hidden md:block lg:hidden relative" ref={containerRef}>
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 opacity-40" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 opacity-30" />

          <div className="max-w-2xl mx-auto">
            {sortedProjects.map((project, index) => {
              const itemId = `timeline-item-tablet-${project.id}`;
              const isVisible = visibleItems[itemId];

              return (
                <div
                  key={project.id}
                  id={itemId}
                  data-timeline-item
                  className="grid grid-cols-[1fr_4rem_1fr] gap-4 items-start py-12 first:pt-0 relative"
                >
                  {/* Left */}
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="flex justify-end pr-3"
                    >
                      <Link
                        to={`/projects/${project.slug}`}
                        className="group w-full block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 p-5 transition-all duration-300 backdrop-blur-sm"
                      >
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-full inline-block mb-3">
                          {project.domain}
                        </span>
                        <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {project.description}
                        </p>
                      </Link>
                    </motion.div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - True single column */}
        <div className="md:hidden relative" ref={containerRef}>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-400 opacity-40" />
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 opacity-30" />

          {sortedProjects.map((project) => {
            const itemId = `timeline-item-mobile-${project.id}`;
            const isVisible = visibleItems[itemId];

            return (
              <div
                key={project.id}
                id={itemId}
                data-timeline-item
                className="grid grid-cols-[2.5rem_1fr] gap-5 pb-12 first:pt-0 relative"
              >
                {/* Dot */}
                <div className="flex flex-col items-center pt-2 relative z-20">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                  >
                    <div className="w-3 h-3 bg-blue-600 border-2.5 border-white rounded-full shadow-md ring-2 ring-blue-200" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  >
                    <span className="inline-block bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {formatDate(project)}
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 p-4 transition-all duration-300 backdrop-blur-sm"
                    >
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-1 rounded-full inline-block mb-2">
                        {project.domain}
                      </span>
                      <h3 className="text-sm font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {project.description}
                      </p>
                    </Link>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
