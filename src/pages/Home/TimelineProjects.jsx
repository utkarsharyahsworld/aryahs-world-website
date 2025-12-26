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

  // Transform scroll progress to timeline line height (0 to 1)
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
    <section
      ref={containerRef}
      className="relative py-10 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 via-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_25%,rgba(68,68,68,.2)_50%,transparent_50%,transparent_75%,rgba(68,68,68,.2)_75%,rgba(68,68,68,.2))] bg-[length:60px_60px]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight text-gray-900">
            Our Journey: Project Timeline
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our evolution through landmark projects and innovations.
          </p>
        </motion.div>

        {/* Desktop Timeline with center line */}
        <div className="hidden md:block relative">
          {/* Animated center vertical line */}
          <motion.div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 transform -translate-x-1/2 origin-top" style={{ height: lineHeight }}></motion.div>

          <div className="space-y-0">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: false, margin: '-100px' }}
                className={`flex py-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Left/Right content area (50% width) */}
                <div className="w-1/2">
                  <div className={`${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 block hover:bg-blue-50"
                    >
                      {/* Accent line on hover */}
                      <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-600 rounded-t-lg transition-all duration-300"></div>

                      <div className="flex items-center justify-between mb-3">
                        <motion.span className="text-xs font-bold text-blue-600 uppercase tracking-widest drop-shadow-sm" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                          {project.domain}
                        </motion.span>
                      </div>

                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <motion.div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded group-hover:bg-blue-600 group-hover:text-white transition duration-300" whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                        View Project →
                      </motion.div>
                    </Link>
                  </div>
                </div>

                {/* Center timeline dot and date - animated together */}
                <div className="w-0 flex justify-center relative">
                  {/* Timeline dot */}
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={dotVariants}
                    viewport={{ once: false, margin: '-100px' }}
                  >
                    <motion.div
                      className="w-5 h-5 bg-blue-600 border-4 border-white rounded-full shadow-lg ring-2 ring-blue-100 relative z-20"
                      whileHover={{ scale: 1.3, boxShadow: '0 0 0 8px rgba(37, 99, 235, 0.1)' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Date badge */}
                  <motion.div
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={dateVariants}
                    viewport={{ once: false, margin: '-100px' }}
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? 'left-16' : 'right-16'
                    }`}
                  >
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-xs font-medium shadow-sm whitespace-nowrap">
                      {formatDate(project)}
                    </span>
                  </motion.div>
                </div>

                {/* Empty right/left area (50% width) */}
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Single column stacked */}
        <div className="md:hidden relative">
          {/* Mobile vertical line on the left */}
          <motion.div className="absolute left-1.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 origin-top" style={{ height: lineHeight }}></motion.div>

          <div className="space-y-0 pl-8">
            {sortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={itemVariants}
                viewport={{ once: false, margin: '-80px' }}
                className="relative py-8"
              >
                {/* Mobile date badge - positioned above card */}
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={dateVariants}
                  viewport={{ once: false, margin: '-80px' }}
                  className="mb-2"
                >
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-xs font-medium shadow-sm">
                    {formatDate(project)}
                  </span>
                </motion.div>

                {/* Mobile timeline dot */}
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={dotVariants}
                  viewport={{ once: false, margin: '-80px' }}
                  className="absolute -left-5 top-12 w-4 h-4 bg-blue-600 border-4 border-white rounded-full shadow-lg ring-2 ring-blue-100 z-20"
                  whileHover={{ scale: 1.25 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Mobile content card */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-5 block hover:bg-blue-50"
                >
                  {/* Accent line on hover */}
                  <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-full bg-blue-600 rounded-t-lg transition-all duration-300"></div>

                  <div className="flex items-start justify-between mb-2 gap-2">
                    <motion.span className="text-xs font-bold text-blue-600 uppercase tracking-widest drop-shadow-sm" initial={{ opacity: 0.6 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                      {project.domain}
                    </motion.span>
                  </div>

                  <h3 className="text-base font-bold mb-2 group-hover:text-blue-600 transition duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <motion.div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded group-hover:bg-blue-600 group-hover:text-white transition duration-300" whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                    View Project →
                  </motion.div>
                </Link>
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
