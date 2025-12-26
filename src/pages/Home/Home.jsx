import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import { TimelineProjects } from './TimelineProjects';

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-16 lg:py-20 min-h-[45vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Innovative IT Solutions for Modern Businesses
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-blue-100 leading-relaxed">
            Empowering enterprises through cutting-edge software development, cloud solutions, and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to="/projects"
              className="px-6 sm:px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition text-center"
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featuredServices = services;

  // Animation variants for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight">Our Services</h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to drive your business growth and digital transformation.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {featuredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="relative p-5 sm:p-6 md:p-8 h-full border border-gray-200 rounded-lg bg-white transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-white">
                {/* Subtle accent background on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/0 via-transparent to-blue-400/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-blue-400/3 transition-all duration-300 pointer-events-none"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon - animated on hover */}
                  <motion.div
                    className="text-4xl sm:text-5xl mb-4 origin-left"
                    initial={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -3, scale: 1.08 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title - enhanced on hover */}
                  <motion.h3
                    className="text-lg md:text-xl font-semibold mb-3 text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
                    initial={{ color: 'rgb(17, 24, 39)' }}
                    whileHover={{ color: 'rgb(37, 99, 235)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.name}
                  </motion.h3>

                  {/* Description - improved clarity on hover */}
                  <motion.p
                    className="text-gray-600 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-800"
                    initial={{ opacity: 0.75 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                </div>

                {/* Smooth upward lift effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  initial={{ y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ pointerEvents: 'none', zIndex: -1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Motion-safe fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}

function FeaturedProjectsSection() {
  return <TimelineProjects />;
}

function StatsSection() {
  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Happy Clients", value: "80+" },
    { label: "Team Members", value: "120+" },
    { label: "Years of Experience", value: "8+" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center py-3 md:py-4">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3">{stat.value}</div>
              <p className="text-blue-100 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <StatsSection />
    </main>
  );
}
