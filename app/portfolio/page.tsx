'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from '../components/Lightbox';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const categories = ['all', 'weddings', 'social', 'intimate'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Elegant Garden Wedding',
      category: 'weddings',
      image: '/images/Portfolio/Elegant Garden Wedding/IMG_0874.JPG',
      description: 'A romantic outdoor celebration with lush florals and natural elegance',
      gallery: [
        '/images/Portfolio/Elegant Garden Wedding/IMG_0874.JPG',
        '/images/Portfolio/Elegant Garden Wedding/IMG_0883.JPG',
        '/images/Portfolio/Elegant Garden Wedding/IMG_0884.JPG',
        '/images/Portfolio/Elegant Garden Wedding/IMG_0888.JPG',
      ]
    },
    {
      id: 2,
      title: 'Milestone Birthday',
      category: 'social',
      image: '/images/Milestone.JPG',
      description: 'Vibrant celebration honoring a special milestone',
      gallery: [
        '/images/Portfolio/Milestone Birthday/IMG_1321.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1323.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1325.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1363.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1365.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1368.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1371.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1373.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1374.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1379.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1380.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1382.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1392.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1433.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_1436.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_3575.JPG',
        '/images/Portfolio/Milestone Birthday/IMG_3598.JPG',
      ]
    },
    {
      id: 3,
      title: 'Intimate Dinner Party',
      category: 'intimate',
      image: '/images/Portfolio/Intimate Dinner Party/IMG_9608.JPG',
      description: 'Elegant 30th birthday celebration with refined table settings',
      gallery: [
        '/images/Portfolio/Intimate Dinner Party/IMG_9608.JPG',
        '/images/Portfolio/Intimate Dinner Party/IMG_9612.JPG',
        '/images/Portfolio/Intimate Dinner Party/IMG_9613.JPG',
        '/images/Portfolio/Intimate Dinner Party/IMG_9615.JPG',
        '/images/Portfolio/Intimate Dinner Party/IMG_9626.JPG',
      ]
    },
    {
      id: 4,
      title: 'Anniversary Celebration',
      category: 'social',
      image: '/images/Portfolio/Anniversary Celebration/IMG_4874.JPG',
      description: 'Romantic celebration of enduring love',
      gallery: [
        '/images/Portfolio/Anniversary Celebration/IMG_4874.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4880.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4881.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4894.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4898.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4900.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4902.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4925.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4927.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4930.JPG',
        '/images/Portfolio/Anniversary Celebration/IMG_4935.JPG',
      ]
    },
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
         <img
            src="/images/Portfolio/Milestone Birthday/IMG_1321.JPG"
            alt="Our Services"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 20%' }}
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            A collection of beautifully curated celebrations
          </motion.p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 uppercase tracking-wider text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#556B2F] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedPortfolio({
                    title: item.title,
                    images: item.gallery,
                  });
                  setLightboxOpen(true);
                }}
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view gallery
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPortfolio && (
        <Lightbox
          images={selectedPortfolio.images}
          isOpen={lightboxOpen}
          onClose={() => {
            setLightboxOpen(false);
            setSelectedPortfolio(null);
          }}
          title={selectedPortfolio.title}
        />
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-[#2C2416] mb-6">
              Let&apos;s Create Your Story
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Ready to add your celebration to our collection of memorable moments?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-[#556B2F] text-white uppercase tracking-wider text-sm hover:bg-[#6B8E3D] transition-colors duration-300"
            >
              Start Planning
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
