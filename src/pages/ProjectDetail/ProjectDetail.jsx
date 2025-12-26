import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main>
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Project Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link
              to="/projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.domain === project.domain && p.id !== project.id)
    .slice(0, 3);

  return (
    <main>
      <article className="bg-white">
        <div className="h-96 bg-gray-200 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <header className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-10 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 md:mb-6">
              <Link
                to="/projects"
                className="text-blue-100 hover:text-white transition inline-flex items-center gap-1 text-sm md:text-base"
              >
                ← Back to Projects
              </Link>
            </div>
            <span className="text-blue-100 text-xs md:text-sm font-semibold uppercase tracking-wide">
              {project.domain}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 leading-tight break-words">
              {project.title}
            </h1>
            <p className="text-blue-100 text-base md:text-lg">{project.year}</p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 break-words">Overview</h2>
            <p className="text-gray-700 text-base md:text-lg leading-loose whitespace-pre-wrap break-words">
              {project.longDescription}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 break-words">Key Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gray-50 p-5 md:p-7 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">Problem</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.problem}</p>
              </div>
              <div className="bg-gray-50 p-5 md:p-7 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">Solution</h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.solution}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-50 p-5 md:p-7 rounded-lg border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Outcomes</h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.outcomes}</p>
          </motion.div>
        </section>

        <section className="bg-gray-50 py-10 md:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-50px' }}
            >
              Tech Stack
            </motion.h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 md:px-5 py-2 md:py-3 bg-blue-100 text-blue-800 font-semibold rounded-lg text-sm md:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {relatedProjects.length > 0 && (
          <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
              >
                Related Projects
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
              >
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/projects/${relatedProject.slug}`}
                    className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition h-full flex flex-col"
                  >
                    <div className="h-48 md:h-56 bg-gray-200 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex-1 flex flex-col">
                      <span className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-wider">
                        {relatedProject.domain}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold mt-2 mb-2 group-hover:text-blue-600 transition">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        <section className="bg-blue-600 text-white py-10 md:py-12 lg:py-16">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Let's discuss how we can help achieve similar results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 sm:px-8 py-3 md:py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition text-sm md:text-base"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
