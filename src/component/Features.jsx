// components/Features.jsx
import React from 'react';
import { BoltIcon, CubeIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Feature = ({ icon, title, description, index }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <motion.div 
      className="bg-blue-100 p-4 rounded-full mb-6"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.3 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: <BoltIcon className="h-10 w-10 text-blue-600" />,
      title: "Fast Production",
      description: "Get your products made and shipped in record time with our efficient production process."
    },
    {
      icon: <CubeIcon className="h-10 w-10 text-blue-600" />,
      title: "High-Quality Products",
      description: "We use top-notch materials and cutting-edge printing techniques to ensure your designs look great."
    },
    {
      icon: <CurrencyDollarIcon className="h-10 w-10 text-blue-600" />,
      title: "Competitive Pricing",
      description: "Enjoy low production costs and high profit margins for your custom products."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose PrintCraft?
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-16 text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the perfect blend of speed, quality, and affordability with our cutting-edge print-on-demand services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;