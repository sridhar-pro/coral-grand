"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Anibutton from "@/app/components/anibutton";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader Animation */}
      {isLoading ? (
        <div className="w-full h-full fixed flex justify-center items-center bg-white z-50">
          <div className="spinner-border animate-spin w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
        </div>
      ) : (
        <motion.section
          className="relative h-[100dvh] min-h-max flex items-center overflow-hidden"
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          {/* Background Image */}
          <Image
            src="/hero.webp"
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          

          {/* Content Wrapper */}
          <div className="relative mx-auto lg:max-w-7xl w-full px-0 md:px-12 lg:px-5">
            <div className="flex flex-col items-start space-y-10">
              {/* Hero Heading */}
              <motion.h1
                className="text-7xl text-white font-extrabold uppercase max-w-[52rem] mt-5"
                style={{
                  textShadow: "1px 1px 0px gray, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black",
                  letterSpacing: "1.5px",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              >
                Crafting Quality, Building the Future
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-base text-gray-800 text-justify max-w-xl mt-6 leading-relaxed font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.8 }}
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
                <Anibutton />
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
}
