import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../../data/projects';

export function TimelineProjects() {
  // Sort projects by year in descending order
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Subtle item variants with staggered timing
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: custom * 0.05,
      },
    }),
  };

  const dotVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: (custom) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: custom * 0.05 + 0.1,
      },
    }),
  };

  const dateVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        delay: custom * 0.05 + 0.15,
      },
    }),
  };

  const formatDate = (project) => {
    return project.month ? `${project.month} ${project.year}` : `${project.year}`;
  };

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight text-gray-900">
            Our Journey: Project Timeline
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our evolution through landmark projects and innovations.
          </p>
        </motion.div>

        {/* Desktop Timeline - Grid with 3 columns */}
        <div className="hidden md:block">
          <div ref={containerRef} className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
            <motion.div
              className="absolute left-1/2 top-0 w-1 bg-blue-600 -translate-x-1/2 origin-top"
              style={{ height: lineHeight }}
            />
            {sortedProjects.map((project, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  viewport={{ once: false, margin: '-120px' }}
                  className="grid grid-cols-[1fr_5rem_1fr] items-start py-12"
                >
                  {/* Left column */}
                  <div className={isLeft ? 'pr-6' : ''}>
                    {isLeft ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 block hover:bg-blue-50"
                      >
                        <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-600 rounded-t-lg transition-all duration-300"></div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.domain}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                          View Project →
                        </div>
                      </Link>
                    ) : null}
                  </div>

                  {/* Center spine column */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300" />
                    <motion.div
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      variants={dotVariants}
                      viewport={{ once: false, margin: '-120px' }}
                      className="relative"
                    >
                      <div className="w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow ring-2 ring-blue-100" />
                    </motion.div>
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'left-0 -translate-x-full mr-2' : 'right-0 translate-x-full ml-2'}`}
                    >
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-xs font-medium shadow-sm whitespace-nowrap">
                        {formatDate(project)}
                      </span>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className={isLeft ? '' : 'pl-6'}>
                    {!isLeft ? (
                      <Link
                        to={`/projects/${project.slug}`}
                        className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 block hover:bg-blue-50"
                      >
                        <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-600 rounded-t-lg transition-all duration-300"></div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{project.domain}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                          View Project →
                        </div>
                      </Link>
                    ) : null}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Single column stacked */}
        <div className="md:hidden">
          <div ref={containerRef} className="relative space-y-8">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
            <motion.div
              className="absolute left-3 top-0 w-1 bg-blue-600 origin-top"
              style={{ height: lineHeight }}
            />
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: false, margin: '-80px' }}
                className="grid grid-cols-[2rem_1fr] gap-4"
              >
                {/* Left spine */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gray-300" />
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={dotVariants}
                    viewport={{ once: false, margin: '-80px' }}
                    className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 border-2 border-white rounded-full shadow"
                  />
                </div>
                {/* Right content with date above */}
                <div>
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-xs font-medium shadow-sm">
                      {formatDate(project)}
                    </span>
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 block hover:bg-blue-50"
                  >
                    <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-600 rounded-t-lg transition-all duration-300"></div>
                    <div className="flex items-start justify-between mb-2 gap-2">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        {project.domain}
                      </span>
                    </div>
                    <h3 className="text-base font-bold mb-2 group-hover:text-blue-600 transition duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      View Project →
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Motion-safe styles */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
