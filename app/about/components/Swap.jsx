"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContentSection = () => {
 

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1, // Delays each child animation
      },
    },
  };

  // Animation variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, delay: 0.2 }, // Delayed start
    },
  };

  return (
    <motion.section
    className="py-0"
  >
    <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row-reverse gap-16 py-14 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50"
      // style={{
      //   backgroundImage: 'url(/comp-1.webp)',  
      // }}
    >
      {/* Image Section */}
      <motion.div
        variants={imageVariants} // Use the image-specific variants
        className="flex md:flex-1"
      >
        <Image
          src="/about.jpg"
          alt="support services"
          width={1300}
          height={900}
          className="w-full md:h-full object-cover rounded-lg"
        />
      </motion.div>
  
      {/* Content Section */}
      <motion.div
        variants={contentVariants} // Use the content-specific variants
        className="md:w-1/2 space-y-6 text-gray-700"
      >
        <motion.h1
          variants={itemVariants} // Fade-in effect for each item
          className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-700 to-blue-600 uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
        >
          About US
        </motion.h1>
        <motion.p variants={itemVariants} className="text-justify">
  Welcome to CORAL GRAND, a trusted name in the field of construction and infrastructure development. We started as a local firm with a simple yet powerful goal: to deliver high-quality construction solutions that stand the test of time.
</motion.p>
<motion.p variants={itemVariants} className="text-justify">
  Every day, we strive to enhance the experience for our clients, ensuring that their projects are executed with precision, efficiency, and excellence. From residential and commercial buildings to large-scale infrastructure, we are committed to building a strong foundation for the future.
</motion.p>
<motion.p variants={itemVariants} className="text-justify">
  With a commitment to innovation and quality craftsmanship, we transform visions into reality, creating structures that inspire and endure.
</motion.p>


        {/* <motion.ul variants={contentVariants} className="space-y-4">
          {[
            "Comprehensive Work Visa Solutions",
            "Family Sponsorship and Reunification Services",
            "Assistance with Citizenship and Residency Applications",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center gap-x-4"
            >
              <span className="w-5 h-5 text-sm flex items-center justify-center rounded-full bg-orange-500 text-white">
                ✓
              </span>
              {item}
            </motion.li>
          ))}
        </motion.ul> */}
        <motion.div variants={itemVariants} className="flex">
          <Link
            href="#"
            className="px-6 h-11 flex items-center bg-blue-600 rounded-lg text-white"
          >
            Book Free Counsultation
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </motion.section>
  
  );
};

export default ContentSection;
