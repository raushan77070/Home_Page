import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTiktok, FaSnapchat } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Testimonial = ({ quote, author, rating }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 w-[320px] h-[220px] flex flex-col justify-between"
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: -20 }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.2)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div>
      <div className="flex items-center mb-4">
        {Array.from({ length: rating }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaStar className="text-yellow-400 mr-1" />
          </motion.div>
        ))}
      </div>
      <p className="text-gray-700 italic mb-4 line-clamp-3">{quote}</p>
    </div>
    <p className="font-semibold text-gray-900">{author}</p>
  </motion.div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "PrintCraft has revolutionized my online business. Their quality and service are unmatched!",
      author: "Sarah J., Fashion Designer",
      rating: 5,
    },
    {
      quote: "I love how easy it is to create and sell my designs. PrintCraft handles everything seamlessly.",
      author: "Mike T., Graphic Artist",
      rating: 4,
    },
    {
      quote: "The customer support team at PrintCraft is amazing. They're always there when I need help.",
      author: "Emily R., Entrepreneur",
      rating: 5,
    },
    {
      quote: "I've never had such an easy experience launching my brand. Highly recommended!",
      author: "David L., Store Owner",
      rating: 5,
    },
    {
      quote: "The PrintCraft platform is super intuitive. I could scale my business easily.",
      author: "Rachel B., Marketer",
      rating: 4,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (testimonials.length - 1)) % (testimonials.length - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by over 8M sellers around the world
          </h1>
          <p className="text-lg text-white mb-8">
            Whether you are just getting started or run an enterprise-level e-commerce business,
            we do everything we can to ensure a positive merchant experience.
          </p>
        </div>
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center">
            <button onClick={handlePrevious} className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition mr-4">
              <FaArrowLeft />
            </button>

            <div className="flex overflow-hidden space-x-6 mx-4 relative">
              <AnimatePresence initial={false}>
                {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    rating={testimonial.rating}
                  />
                ))}
              </AnimatePresence>
            </div>

            <button onClick={handleNext} className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition ml-4">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">PrintCraft</h3>
        <div className="flex justify-center space-x-6">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest, FaTiktok, FaSnapchat].map((Icon, index) => (
            <a key={index} href="#" target="_blank" rel="noopener noreferrer">
              <Icon className="text-white hover:text-gray-300 text-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
