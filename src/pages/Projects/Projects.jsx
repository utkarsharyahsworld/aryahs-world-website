import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { useState } from 'react';

export function Projects() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const domains = ['All', ...new Set(projects.map((p) => p.domain))];
  const filteredProjects =
    selectedDomain === 'All'
      ? projects
      : projects.filter((p) => p.domain === selectedDomain);

  return (
    <main>
      <section className="bg-blue-600 text-white py-4 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight">Our Projects</h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Explore our portfolio of successful projects and client solutions.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Filter by Domain</h2>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {domains.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedDomain === domain
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition h-full flex flex-col"
              >
                <div className="h-48 md:h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2 md:mb-3">
                    <span className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-wider">
                      {project.domain}
                    </span>
                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-blue-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
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
