import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StoreIntegration = () => {
  const [cardsVisible, setCardsVisible] = useState(false);

  const shoppingSites = [
    { name: 'Shopify', icon: '🛍️' },
    { name: 'Etsy', icon: '🎨' },
    { name: 'eBay', icon: '🏷️' },
    { name: 'Amazon', icon: '📦' },
    { name: 'Wix', icon: '🌐' },
    { name: 'WooCommerce', icon: '🛒' },
    { name: 'Squarespace', icon: '🏗️' },
    { name: 'BigCommerce', icon: '🏪' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative p-8 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
          Connect Your Store
        </h1>
        <p className="text-2xl mb-8 max-w-2xl mx-auto text-blue-100">
          Printify seamlessly integrates with major e-commerce platforms and marketplaces.
        </p>
      </motion.div>

      <motion.div
        className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8 cursor-pointer shadow-2xl transform transition-all duration-300 hover:shadow-3xl hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCardsVisible(!cardsVisible)}
      >
        <h2 className="text-4xl font-semibold mb-6 text-center text-blue-100">E-Commerce Platforms</h2>
        <AnimatePresence>
          {cardsVisible && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {shoppingSites.map((site, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white bg-opacity-20 p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:bg-opacity-30 hover:shadow-xl"
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-4xl mb-2 block">{site.icon}</span>
                  <span className="text-xl font-bold">{site.name}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default StoreIntegration;