import { useState } from 'react';
import { company } from '../../data/company';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <section className="bg-blue-600 text-white py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 md:mb-4 leading-tight">Get In Touch</h1>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Information</h3>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">Email</h4>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-blue-600 hover:text-blue-800 transition text-sm md:text-base"
                  >
                    {company.contact.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">Phone</h4>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-blue-600 hover:text-blue-800 transition text-sm md:text-base"
                  >
                    {company.contact.phone}
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">Address</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">{company.contact.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href={company.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition font-semibold text-sm md:text-base"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={company.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition font-semibold text-sm md:text-base"
                    >
                      Twitter
                    </a>
                    <a
                      href={company.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition font-semibold text-sm md:text-base"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted && (
                <div className="mb-6 p-4 md:p-5 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold text-sm md:text-base">
                    ✓ Thank you! Your message has been received. We'll be in touch soon.
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Your Name *
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
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2 md:mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm md:text-base resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-sm md:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-10 md:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">What to Expect</h2>
            <ul className="space-y-4 md:space-y-5">
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-blue-600 font-bold mt-0.5 md:mt-1 flex-shrink-0 text-lg">1.</span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <strong className="block mb-1">Quick Response:</strong> We typically respond within 24 business hours.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-blue-600 font-bold mt-0.5 md:mt-1 flex-shrink-0 text-lg">2.</span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <strong className="block mb-1">Initial Consultation:</strong> We'll schedule a call to understand your needs and goals.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-blue-600 font-bold mt-0.5 md:mt-1 flex-shrink-0 text-lg">3.</span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <strong className="block mb-1">Proposal:</strong> We'll provide a detailed proposal with timelines and investment.
                </span>
              </li>
              <li className="flex items-start gap-3 md:gap-4">
                <span className="text-blue-600 font-bold mt-0.5 md:mt-1 flex-shrink-0 text-lg">4.</span>
                <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                  <strong className="block mb-1">Partnership:</strong> Once you're on board, we'll assign a dedicated project team.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
