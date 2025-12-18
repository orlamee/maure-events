'use client';

import { motion } from 'framer-motion';
import { FaClock, FaUser } from 'react-icons/fa';

export default function Journal() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Planning the Perfect Wedding',
      excerpt: 'Discover essential strategies to ensure your wedding day is everything you dreamed it would be. From timeline creation to vendor selection, we share our expert insights.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      author: 'Maureen',
      date: 'November 15, 2024',
      readTime: '5 min read',
      category: 'Weddings'
    },
    {
      id: 2,
      title: 'The Art of Thoughtful Event Design',
      excerpt: 'Learn how intentional design choices can transform your celebration from beautiful to unforgettable. We explore color theory, spatial planning, and guest experience.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80',
      author: 'Maureen',
      date: 'October 28, 2024',
      readTime: '7 min read',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Corporate Events That Leave a Lasting Impression',
      excerpt: 'Discover how to create professional events that strengthen brand identity and create meaningful connections with your team and clients.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
      author: 'Maureen',
      date: 'October 10, 2024',
      readTime: '6 min read',
      category: 'Corporate'
    },
    {
      id: 4,
      title: 'Creating Intimate Celebrations with Impact',
      excerpt: 'Small gatherings don&apos;t mean small impressions. Learn how to curate intimate events that feel personal, elevated, and deeply memorable.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      author: 'Maureen',
      date: 'September 22, 2024',
      readTime: '5 min read',
      category: 'Planning'
    },
    {
      id: 5,
      title: 'Seasonal Trends in Event Design',
      excerpt: 'Explore the latest trends in event design for each season, from spring florals to winter wonderlands, and how to incorporate them authentically.',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
      author: 'Maureen',
      date: 'September 5, 2024',
      readTime: '8 min read',
      category: 'Design'
    },
    {
      id: 6,
      title: 'The Importance of Day-Of Coordination',
      excerpt: 'Why having a professional coordinator on your event day is essential for a seamless, stress-free celebration you can truly enjoy.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      author: 'Maureen',
      date: 'August 18, 2024',
      readTime: '4 min read',
      category: 'Planning'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/journal.png"
            alt="Journal"
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
            The Journal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Insights, inspiration, and expertise from our team
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-[500px] overflow-hidden shadow-lg">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-sm uppercase tracking-wider text-[#556B2F] font-semibold">
                Featured Post
              </span>
              <h2 className="text-4xl font-serif text-[#2C2416] mt-4 mb-4">
                {blogPosts[0].title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <FaUser />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaClock />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <button className="px-6 py-3 bg-[#556B2F] text-white uppercase tracking-wider text-sm hover:bg-[#6B8E3D] transition-colors duration-300">
                Read More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-[#2C2416] mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-700">
              Explore our latest thoughts on event planning and design
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#556B2F] text-white px-3 py-1 text-xs uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <FaUser size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-[#2C2416] mb-3 group-hover:text-[#556B2F] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <button className="text-sm text-[#556B2F] font-semibold uppercase tracking-wider hover:text-[#6B8E3D] transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-[#2C2416] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif mb-6 text-[#C4A57B]">
              Stay Inspired
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to receive event planning tips, design inspiration, and exclusive insights
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C4A57B]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#C4A57B] text-white uppercase tracking-wider text-sm hover:bg-[#B8985F] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
