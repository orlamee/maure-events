'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { FaCalendarCheck, FaPalette, FaHandHoldingHeart, FaUsers, FaBirthdayCake, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: <FaCalendarCheck size={50} />,
      title: 'Wedding Planning',
      description: 'Comprehensive wedding planning services to create the celebration of your dreams.',
      features: [
        'Wedding vision consultation and discovery',
        'Budget planning and management',
        'Venue selection and booking',
        'Vendor sourcing and contract negotiation',
        'Wedding design and styling',
        'Timeline creation and coordination',
        'Guest management and RSVPs',
        'Ceremony and reception planning',
        'Rehearsal coordination',
        'Full day-of coordination',
        'Setup and breakdown oversight',
        'Post-wedding coordination'
      ]
    },
    {
      icon: <FaCalendarCheck size={50} />,
      title: 'Full Event Planning & Management',
      description: 'Complete support from vision development to event execution for a stress-free experience.',
      features: [
        'Initial consultation and vision discovery',
        'Concept + theme development',
        'Budget development and allocation support',
        'Venue research, selection, and walkthroughs',
        'Comprehensive vendor sourcing and contract support',
        'Custom planning timeline and milestone tracking',
        'Mood boards, color palette, and design direction',
        'Catering & menu curation',
        'Rentals, décor, and floral coordination',
        'Guest experience and flow planning',
        'Floor plan and layout design',
        'Event timeline & run-of-show creation',
        'Full on-site event management',
        'Post-event coordination and wrap'
      ]
    },
    {
      icon: <FaPalette size={50} />,
      title: 'Event Design & Creative Direction',
      description: 'Elevate the visual experience of your event with refined design concepts.',
      features: [
        'Aesthetic discovery meeting',
        'Mood board development',
        'Theme, palette, and style direction',
        'Design concepts and recommendations',
        'Décor sourcing and selection',
        'Tablescape design',
        'Layout support',
        'Floral vision direction',
        'Rentals guidance',
        'Coordination with design vendors'
      ]
    },
    {
      icon: <FaCheckCircle size={50} />,
      title: 'Day-Of Coordination',
      description: 'Professional team to bring all details together and run the event smoothly.',
      features: [
        'Initial coordination onboarding meeting',
        'Venue walkthrough',
        'Review of all vendor contracts and proposals',
        'Final event timeline creation',
        'Vendor confirmation and communication',
        'Décor placement guidance',
        'Ceremony & reception coordination',
        'Full event day management',
        'Vendor oversight and scheduling',
        'On-site lead coordinator & support staff'
      ]
    },
    {
      icon: <FaUsers size={50} />,
      title: 'Vendor Sourcing & Management',
      description: 'Identify, secure, and manage trusted vendors aligned with your vision.',
      features: [
        'Vendor recommendations',
        'Quote collection',
        'Contract review support',
        'Communication & coordination',
        'Scheduling & call attendance',
        'Quality assurance throughout process'
      ]
    },
    {
      icon: <FaHandHoldingHeart size={50} />,
      title: 'Intimate Events + Private Celebrations',
      description: 'Curating meaningful micro-events designed to feel personal and intentional.',
      features: [
        'Private dinners',
        'Bridal & baby showers',
        'Graduations',
        'Proposals',
        'Anniversaries',
        'Intimate milestone celebrations',
        'Thoughtful guest experience planning',
        'Personalized design elements'
      ]
    },
    {
      icon: <FaBriefcase size={50} />,
      title: 'Corporate & Brand Events',
      description: 'Support companies and brands in producing exceptional professional events.',
      features: [
        'Networking experiences',
        'Appreciation events',
        'Corporate dinners',
        'Team building events',
        'Product launches',
        'Brand activations',
        'Celebratory functions',
        'Professional event representation'
      ]
    },
    {
      icon: <FaBirthdayCake size={50} />,
      title: 'Social Events & Milestones',
      description: 'Celebrate life, legacy, and achievement with beautifully executed events.',
      features: [
        'Birthday celebrations',
        'Graduation parties',
        'Retirement celebrations',
        'Engagement parties',
        'Community celebrations',
        'Life milestone events',
        'Cultural celebrations',
        'Family reunions'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Homepage/SERVICES SECTION/Full Event Planning/IMG_1370.JPG"
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            From intimate gatherings to grand celebrations, we craft experiences that reflect your vision
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-[#556B2F] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-6">Ready to Start Planning?</h2>
            <p className="text-lg mb-8 text-gray-200">
              Let&apos;s discuss how we can bring your vision to life with excellence and grace
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-[#556B2F] uppercase tracking-wider text-sm font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
