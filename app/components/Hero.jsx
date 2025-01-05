"use client";
import { motion } from 'framer-motion';
// import Link from 'next/link';
import Navbar from './Navbar';
import { useState, useEffect } from 'react';
import Anibutton from "@/app/components/anibutton";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading process (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 3 seconds
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
       {/* Loader Animation */}
       {isLoading ? (
        <div className="w-full h-full fixed flex justify-center items-center bg-white z-50">
          <div className="spinner-border animate-spin w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
        </div>
      ) : (
      <motion.section
        className="bg-cover bg-center bg-no-repeat py-32 lg:py-10 overflow-hidden h-[100dvh] min-h-max flex items-center relative"
        style={{ backgroundImage: "url('/8.jpg')" }}
        initial={{ opacity: 0, y: '-100%' }}  // Background starts offscreen and invisible
        animate={{ opacity: 1, y: 0 }}        // Fade in and slide to natural position
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        {/* Glassy overlay */}
        {/* <div className="absolute inset-0 bg-black opacity-10 backdrop-blur-lg"></div> */}
  
        {/* Content wrapper */}
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
          <div className="flex flex-col items-start space-y-10">
           
            {/* Hero Heading */}
            <motion.h1
              className="text-7xl text-white font-extrabold  uppercase max-w-[52rem] mt-5"
              style={{
                textShadow: '1px 1px 0px gray, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black',
                letterSpacing: '1.5px',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              Crafting Quality, Building the Future
            </motion.h1>
  
            {/* Description */}
            <motion.p
              className="text-base text-gray-800 text-justify max-w-xl mt-6 leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              We specialize in delivering the top-quality construction services, ensuring durability, precision, and innovative design. From residential to commercial projects, we bring your vision to life with expertise and dedication.
            </motion.p>
  
            {/* Button */}
            <motion.div
              className="flex justify-center mt-8 ml-48 z-10" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              
              <Anibutton/>
            </motion.div>
          </div>
        </div>
      </motion.section>
       )}
    </>
  );
  
}


 {/* Tagline */}
            {/* <motion.span
              className="border border-gray-500 px-6 py-2 rounded-full uppercase italic bg-gray-50 bg-opacity-60 text-gray-900 font-semibold tracking-wide shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Building Realities
            </motion.span> */}

{/* <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-blue-600/70 backdrop-filter blur-3xl opacity-50" />
<div className="absolute bottom-0 right-0 translate-x-[54%] translate-y-[70%] w-2/5 rounded-full aspect-square bg-blue-600/70 backdrop-filter blur-3xl opacity-50" />
<div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-blue-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
  <div className="inset-[10%] rounded-full bg-gradient-to-l from-blue-400/20">
    <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-blue-400/30" />
  </div>
</div>
<div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-blue-400/5 left-0 translate-y-[40%] -translate-x-[40%] bottom-0">
  <div className="inset-[10%] rounded-full bg-gradient-to-r from-blue-400/40">
    <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-blue-400/50" />
  </div>
</div> */}

{/* <Link
                href="#"
                className="px-10 py-3 rounded-full flex items-center gap-x-3 bg-blue-700 text-white hover:bg-blue-100 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
              >
                Let’s Connect
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link> */}