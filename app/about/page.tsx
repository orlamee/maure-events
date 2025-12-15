'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaLightbulb, FaTrophy } from 'react-icons/fa';

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/our-story/IMG_3014.JPG"
            alt="About Maure Events"
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
            About Maure Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Creating meaningful experiences with grace and intention
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/our-story/IMG_3016.JPG"
                alt="Our Story"
                className="w-full h-[500px] object-cover shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-[#2C2416] mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Maure Events was founded from a lifelong passion for creating meaningful experiences. 
                Growing up with a mother who planned events and owned a catering company, I witnessed 
                both the joy and the immense responsibility that comes with orchestrating life&apos;s 
                important moments.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a natural eye for detail and what I believe is a God-given ability to design and 
                execute with intention, grace, and precision, I established Maure Events to bring 
                excellence and ease to the event-planning process.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to alleviate the stress, confusion, and overwhelm that many clients 
                encounter in the events industry by providing structured guidance, thoughtful design, 
                and seamless execution, allowing individuals, families, and organizations to truly 
                enjoy their moment while we manage the details.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="py-20 px-4 bg-[#F5F5DC]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-[#2C2416] mb-6">The Name Behind the Brand</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Maure Events (pronounced <em>More</em>) carries a deeply personal legacy. My name is 
              Maureen, and my mother, who inspired my love for events, also shares the same name.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The company name honors both of us, our shared passion, and the foundation she built 
              through her own catering and event work. It also serves as a play on words, symbolizing 
              &ldquo;more&rdquo; — more joy, more celebration, more memories, and many more events to come.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              For me, the name represents legacy, continuation, and the expansion of something 
              meaningful that began in my family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-[#2C2416] mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide every celebration we create
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHeart size={50} />,
                title: 'Intentionality',
                description: 'Every detail is chosen with purpose and meaning, reflecting your unique story and vision.'
              },
              {
                icon: <FaLightbulb size={50} />,
                title: 'Excellence',
                description: 'We maintain the highest standards in design, execution, and client service.'
              },
              {
                icon: <FaTrophy size={50} />,
                title: 'Grace',
                description: 'We approach every event with elegance, composure, and thoughtful care.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F5F5DC] p-8 text-center"
              >
                <div className="text-[#556B2F] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif text-[#2C2416] mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-6 text-[#C4A57B]">Our Vision</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Our long-term vision for Maure Events is to expand into larger-scale productions, 
              including weddings, corporate gatherings, and luxury brand events.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We aim to become a premier provider of curated experiences for life&apos;s most meaningful 
              milestones, from intimate celebrations to large formal events. Over time, we plan to build 
              a comprehensive event experience company that not only manages logistics and design, but 
              creates immersive environments that elevate moments into lasting memories.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
