import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState({});

  const handleMouseEnter = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: false }));
  };

  const menuItems = [
    { name: 'Catalog', link: '#' },
    { name: 'How it works', dropdown: ['Step 1', 'Step 2', 'Step 3'] },
    { name: 'Pricing', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Services', dropdown: ['Service 1', 'Service 2', 'Service 3'] },
    { name: 'Use-cases', dropdown: ['Use-case 1', 'Use-case 2', 'Use-case 3'] },
    { name: 'Need help?', dropdown: ['Contact Us', 'FAQ', 'Support'] },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 }
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-blue-600"
          >
            PrintCraft
          </motion.div>
          <nav className="hidden lg:flex space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <motion.div
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={() => handleMouseLeave(item.name)}
                    className="flex items-center text-gray-700 hover:text-blue-600 cursor-pointer py-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                    <ChevronDownIcon className="h-5 w-5 ml-1" />
                    <AnimatePresence>
                      {dropdown[item.name] && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 top-full mt-2 w-56 rounded-xl overflow-hidden shadow-2xl bg-white bg-opacity-90 backdrop-blur-sm z-10"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.a
                              key={subIndex}
                              variants={itemVariants}
                              href="#"
                              className="block py-3 px-4 text-gray-800 hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.a
                    href={item.link}
                    className="text-gray-600 hover:text-blue-600 py-4 inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                )}
              </div>
            ))}
          </nav>
          <div className="hidden lg:flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Log in
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Get started
            </motion.button>
          </div>
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-blue-600" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-blue-600" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg"
          >
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                {item.dropdown ? (
                  <div
                    className="flex flex-col"
                    onClick={() => handleMouseEnter(item.name)}
                  >
                    <button className="flex items-center justify-between py-3 px-4 w-full text-left text-gray-800 hover:bg-blue-50">
                      {item.name}
                      <ChevronDownIcon className="h-5 w-5 ml-1" />
                    </button>
                    <AnimatePresence>
                      {dropdown[item.name] && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="bg-gray-50"
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <motion.a
                              key={subIndex}
                              variants={itemVariants}
                              href="#"
                              className="block py-2 px-8 text-gray-600 hover:bg-blue-500 hover:text-white transition duration-200"
                            >
                              {subItem}
                            </motion.a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block py-3 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="p-4 space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              >
                Log in
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
              >
                Get started
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
