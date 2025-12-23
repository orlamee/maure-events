'use client';

import Hero from './components/Hero';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaStar, FaCalendarAlt, FaPalette, FaUsers } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Mission Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Maure Events, our mission is to elevate life&apos;s most meaningful moments through 
              intentional design and seamless execution. We curate elegant, immersive experiences 
              rooted in grace and purpose, honoring your story while creating unforgettable memories 
              that touch every guest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-4">
              Why Choose Maure Events
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We bring excellence, creativity, and heart to every celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaStar size={40} />,
                title: 'Excellence',
                description: 'Meticulous attention to detail in every aspect of your event'
              },
              {
                icon: <FaCalendarAlt size={40} />,
                title: 'Experience',
                description: 'Years of expertise in creating memorable celebrations'
              },
              {
                icon: <FaPalette size={40} />,
                title: 'Creativity',
                description: 'Innovative designs that reflect your unique vision'
              },
              {
                icon: <FaUsers size={40} />,
                title: 'Personal Touch',
                description: 'Dedicated service that makes you feel valued and heard'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-[#556B2F] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-[#2C2416] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-[#2C2416] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring your vision to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                image: '/images/Homepage/SERVICES SECTION/Full Event Planning/IMG_1370.JPG',
                title: 'Full Event Planning',
                description: 'Complete support from vision to execution'
              },
              {
                image: '/images/Homepage/SERVICES SECTION/Event Design/IMG_4925.JPG',
                title: 'Event Design',
                description: 'Stunning visual concepts brought to life'
              },
              {
                image: '/images/Homepage/SERVICES SECTION/Day-Of Coordination/IMG_3546.JPG',
                title: 'Day-Of Coordination',
                description: 'Seamless execution on your special day'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-200">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 bg-[#556B2F] text-white uppercase tracking-wider text-sm hover:bg-[#6B8E3D] transition-colors duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Homepage/Footer - CTA banner/IMG_1379.JPG"
            alt="Elegant table setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Create Something Beautiful?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Let&apos;s start planning your unforgettable celebration
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#C4A57B] text-white uppercase tracking-wider text-sm hover:bg-[#B8985F] transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
