import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useState } from 'react';
import { SEO } from '../../components/SEO'; // <--- IMPORT THIS

export function Projects() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const domains = ['All', ...new Set(projects.map((p) => p.domain))];
  const filteredProjects =
    selectedDomain === 'All'
      ? projects
      : projects.filter((p) => p.domain === selectedDomain);

  return (
    <main>
      {/* ✅ ADD SEO TAG HERE */}
      <SEO 
        title="Our Projects & Case Studies"
        description="Explore Aryahs World Venture's portfolio of successful software implementations, cloud migrations, and enterprise solutions."
        url="/projects"
      />

      <section className="bg-blue-600 text-white py-8 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight">Our Projects</h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Explore our portfolio of successful projects and client solutions.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Filter by Domain</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    selectedDomain === domain
                      ? 'bg-blue-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:-translate-y-0.5'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-white/90 border border-gray-200 hover:border-blue-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all h-full flex flex-col backdrop-blur-[1px]"
              >
                <div className="h-48 md:h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col bg-white">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <span className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-wider">
                      {project.domain}
                    </span>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 transition">
                    <span className="break-words">{project.title}</span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="text-blue-600 font-semibold text-xs md:text-sm group-hover:gap-2 transition flex items-center gap-1 pt-3 md:pt-4 border-t border-gray-100">
                    Read Case Study →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}