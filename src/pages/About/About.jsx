import { company } from '../../data/company';
import { leadership } from '../../data/leadership';
import { awards } from '../../data/awards';
import { motion } from 'framer-motion';

function CompanyOverview() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-6 leading-tight">About {company.name}</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 md:mb-6">
            {company.description}
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Founded in {company.founded}, we have been at the forefront of digital transformation,
            helping organizations across industries leverage technology to achieve their business goals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="bg-gray-50 p-6 md:p-8 lg:p-10 rounded-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">Our Vision</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{company.vision}</p>
          </div>
          <div className="bg-gray-50 p-6 md:p-8 lg:p-10 rounded-lg border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-5">Our Mission</h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">{company.mission}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">Leadership Team</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Meet the visionary leaders driving innovation at Aryahs World Infotech.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {leadership.map((leader) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-200"
              >
                <div className="bg-gray-100 flex items-center justify-center p-6 md:p-8">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-auto object-contain max-h-96"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 lg:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-5">{leader.education}</p>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 md:mb-7">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs md:text-sm bg-blue-50 text-blue-700 px-3 py-1.5 md:py-2 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsAndRecognition() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">Awards & Recognition</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Industry recognition for our commitment to excellence and innovation.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {awards.map((award) => (
              <div
                key={award.id}
                className="rounded-xl p-6 md:p-8 lg:p-10 bg-white/90 border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-full md:w-[420px] rounded-xl overflow-hidden shadow-md ring-1 ring-black/5 bg-white">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-yellow-500 text-xl">🏅</span>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 break-words text-left">
                        {award.title}
                      </h3>
                    </div>
                    <p className="text-blue-600 font-semibold text-base md:text-lg mb-3 md:mb-4">
                      {award.organization}
                    </p>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-5 break-words">
                      {award.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5">
                      {award.categories.map((category) => (
                        <span
                          key={category}
                          className="text-xs md:text-sm bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 md:py-2 rounded-full font-semibold shadow-sm whitespace-nowrap"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500 text-sm font-medium">{award.date}</p>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-semibold shadow-sm">
                        Excellence in AI & Innovation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and creative solutions to solve complex problems.",
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in quality, delivery, and customer satisfaction.",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and ethical principles.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in partnering closely with clients to achieve shared success.",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">Core Values</h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The principles that guide our decisions and shape our culture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-7 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPresenceSection() {
  const meta = {
    title: "Global Presence",
    subtitle: "Trusted across regions with local expertise and enterprise delivery."
  };
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 leading-tight">
            {meta.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            {meta.subtitle}
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
        >
          {company.offices.map((office, idx) => (
            <motion.div
              key={`${office.city}-${idx}`}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-7 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {office.city}
                </h3>
                <span className="text-lg" aria-label={office.country}>
                  {office.indicator}
                </span>
              </div>
              <p className="text-blue-600 font-semibold text-sm md:text-base mb-2">
                {office.country}
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                {office.address}
              </p>
              <a
                href={`tel:${office.phone}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 text-sm font-medium hover:bg-blue-50 hover:border-blue-200 transition"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                {office.phone}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <main>
      <section className="bg-blue-600 text-white py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight">About Us</h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Discover the story behind Aryahs World Infotech and our commitment to excellence.
          </p>
        </div>
      </section>

      <CompanyOverview />
      <CoreValues />
      <LeadershipTeam />
      <AwardsAndRecognition />
      <GlobalPresenceSection />
    </main>
  );
}
