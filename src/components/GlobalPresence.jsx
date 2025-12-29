import { company } from '../data/company';

export function GlobalPresence() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Global Presence
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Serving clients worldwide with local expertise and global capabilities. We maintain strategic offices across key markets to deliver exceptional service locally.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {company.offices && company.offices.map((office, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 md:p-7 hover:border-gray-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Flag + City Name */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-5xl leading-none flex-shrink-0">{office.indicator}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{office.city}</h3>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{office.country}</p>
                </div>
              </div>

              {/* Address */}
              <address className="not-italic text-gray-600 text-sm leading-relaxed mb-4 break-words">
                {office.address}
              </address>

              {/* Phone */}
              {office.phone && (
                <div className="text-sm">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Phone</span>
                  <a
                    href={`tel:${office.phone.replace(/\D/g, '')}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {office.phone}
                  </a>
                </div>
              )}

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/3 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
