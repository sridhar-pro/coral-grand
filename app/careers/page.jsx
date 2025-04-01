'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Careers = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-blue-900 uppercase"
      >
        Exciting Careers Coming Soon!
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl"
      >
        We are growing! Career opportunities will be updated soon. Stay tuned for exciting roles where you can build your future with us.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6"
      >
        <button className="px-6 py-3 bg-blue-700 text-white text-lg rounded-full shadow-lg hover:bg-blue-800 transition-all">
          Stay Updated
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 text-gray-600 text-sm"
      >
        Follow us for updates!
      </motion.div>
    </section>
  );
};

export default Careers;
