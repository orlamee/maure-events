'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Let&apos;s start planning your unforgettable celebration
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-[#2C2416] mb-6">
                Let&apos;s Connect
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Thank you for your interest in Maure Events. We&apos;re thrilled you&apos;re here! 
                Every celebration we curate is intentional, elegant, and tailored to you. 
                Please reach out below to begin your journey with us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-[#556B2F] mt-1">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Phone</h3>
                    <a href="tel:2406367044" className="text-gray-700 hover:text-[#556B2F] transition-colors">
                      (240) 636-7044
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#556B2F] mt-1">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Email</h3>
                    <a href="mailto:info@maureevents.com" className="text-gray-700 hover:text-[#556B2F] transition-colors">
                      info@maureevents.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#556B2F] mt-1">
                    <FaInstagram size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Instagram</h3>
                    <a
                      href="https://www.instagram.com/maure_events"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#556B2F] transition-colors"
                    >
                      @maure_events
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#556B2F] mt-1">
                    <FaClock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Saturday: 12pm - 7pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-[#556B2F] mt-1">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2416] mb-1">Service Area</h3>
                    <p className="text-gray-700">Maryland, DC, Virginia & Beyond</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-[#F5F5DC] p-8 shadow-lg">
                <h3 className="text-2xl font-serif text-[#2C2416] mb-6">
                  Schedule a Consultation
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    >
                      <option value="">Select an event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="social">Social Event</option>
                      <option value="intimate">Intimate Celebration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-700 mb-2">
                      Estimated Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell Us About Your Event *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#556B2F] focus:outline-none focus:ring-1 focus:ring-[#556B2F] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#556B2F] text-white uppercase tracking-wider text-sm font-semibold hover:bg-[#6B8E3D] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info */}
      <section className="py-20 px-4 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-[#2C2416] mb-6">
              We Can&apos;t Wait to Hear From You
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether you&apos;re planning an intimate dinner party or a grand celebration, 
              we&apos;re here to guide you through every detail with care, creativity, and excellence.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
