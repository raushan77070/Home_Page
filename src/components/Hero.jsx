import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import videoSrc from '../assets/66ee942bf56c3589b6eea145.mp4'; // Adjust path accordingly

const Hero = () => {
  const features = [
    "100% Free to use",
    "900+ High-Quality Products",
    "Largest global print network",
    "Trusted by over 8M sellers around the world"
  ];

  return (
    <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text and Buttons Section */}
        <motion.div 
          className="max-w-xl text-left md:pr-10 pl-8 md:pl-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Create and Sell Custom Products Online
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Design, produce, and ship your own branded products with ease.
          </motion.p>

          {/* New Features with Icons */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              >
                <CheckIcon className="h-5 w-5 text-green-400 mr-2" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.button 
              className="px-8 py-3 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start for Free
            </motion.button>
            <motion.button 
              className="px-8 py-3 bg-transparent border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How it Works?
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div 
          className="mt-10 md:mt-0 flex justify-center md:ml-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video 
              src={videoSrc} 
              alt="T-shirt Printing Animation" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="mx-auto w-full max-w-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;