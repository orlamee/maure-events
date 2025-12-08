'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

export default function ServiceCard({ icon, title, description, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-[#556B2F] mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-serif text-[#2C2416] mb-4 text-center">{title}</h3>
      <p className="text-gray-600 mb-6 text-center">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-gray-700 flex items-start">
            <span className="text-[#C4A57B] mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
