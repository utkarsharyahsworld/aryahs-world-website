import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { company } from '../../data/company';

export function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [dept, setDept] = useState('All');
  const [loc, setLoc] = useState('All');
  const [type, setType] = useState('All');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setError('');
    const file = e.target.files?.[0] || null;
    if (!file) {
      setResume(null);
      return;
    }
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    const maxSizeBytes = 5 * 1024 * 1024;
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a PDF, DOC, or DOCX file.');
      e.target.value = '';
      setResume(null);
      return;
    }
    if (file.size > maxSizeBytes) {
      setError('File size must be 5MB or less.');
      e.target.value = '';
      setResume(null);
      return;
    }
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!resume) {
      setError('Please attach your resume.');
      return;
    }
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
    });
    setResume(null);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const departments = useMemo(() => ['All', ...Array.from(new Set(company.jobs.map((j) => j.department)))], []);
  const locations = useMemo(() => ['All', ...Array.from(new Set(company.jobs.map((j) => j.location)))], []);
  const types = useMemo(() => ['All', ...Array.from(new Set(company.jobs.map((j) => j.type)))], []);
  const filteredJobs = useMemo(() => {
    return company.jobs.filter((j) => {
      const s = search.trim().toLowerCase();
      const matchesSearch =
        s === '' ||
        j.title.toLowerCase().includes(s) ||
        j.tags.some((t) => t.toLowerCase().includes(s)) ||
        j.department.toLowerCase().includes(s) ||
        j.location.toLowerCase().includes(s);
      const matchesDept = dept === 'All' || j.department === dept;
      const matchesLoc = loc === 'All' || j.location === loc;
      const matchesType = type === 'All' || j.type === type;
      return matchesSearch && matchesDept && matchesLoc && matchesType;
    });
  }, [search, dept, loc, type]);

  const handleApply = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById('application-form');
    if (el) el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <main>
      <section className="bg-blue-600 text-white py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Careers
          </motion.h1>
          <motion.p
            className="text-blue-100 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            Join us and build impactful products. Apply below and attach your resume.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Find Jobs</h2>
            <p className="text-gray-600 text-sm md:text-base">Browse open roles and apply directly.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4 md:p-6 mb-6 md:mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search by role, skill, location"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                />
              </div>
              <select
                value={dept}
                onChange={(e) => setDept(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
              >
                {departments.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                value={loc}
                onChange={(e) => setLoc(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
              >
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base md:col-span-1"
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: idx * 0.02 }}
                viewport={{ once: true, margin: '-60px' }}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{job.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">{job.type}</span>
                </div>
                <p className="text-blue-600 font-semibold text-sm md:text-base">{job.department}</p>
                <p className="text-gray-700 text-sm md:text-base mb-3">{job.location}</p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <span key={tag} className="text-xs md:text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleApply(job.title)}
                  className="w-full px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
                >
                  Apply
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Why Work With Us</h3>
              <ul className="space-y-4 md:space-y-5">
                <li className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Growth-focused environment with hands-on ownership.
                </li>
                <li className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Modern stack and thoughtful design practices.
                </li>
                <li className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Flexible work and collaborative culture.
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              {submitted && (
                <div className="mb-6 p-4 md:p-5 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm md:text-base">
                    ✓ Application submitted! We’ll review and get back shortly.
                  </p>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 md:p-5 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-semibold text-sm md:text-base">
                    {error}
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" id="application-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Position Applying For *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                      placeholder="e.g., Frontend Engineer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                    Resume (PDF, DOC, DOCX, ≤5MB) *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    required
                    className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-lg file:bg-blue-600 file:text-white file:hover:bg-blue-700 file:transition"
                  />
                  {resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {resume.name} ({(resume.size / 1024).toFixed(0)} KB)
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base resize-none"
                    placeholder="Briefly share why you’re a great fit..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

