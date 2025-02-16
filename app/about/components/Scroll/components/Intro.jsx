import React, { useRef } from 'react';
import Image from 'next/image';
import Background from '../../../../../public/abouthero.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { PlayCircleIcon } from "@heroicons/react/24/solid";

export default function Hero() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

    return (
        <div className="relative h-screen overflow-hidden" ref={container}>
            {/* Background Image with Parallax Effect */}
            <motion.div style={{ y }} className="absolute inset-0">
                <Image src={Background} fill alt="background" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-transparent opacity-80"></div>
            </motion.div>

            {/* Hero Content */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">
            

            {/* Hero Content */}
            <div className="relative z-10 max-w-4xl">
                <motion.h1
                    className="text-[5vw] md:text-[3.5vw] font-extrabold text-white leading-tight uppercase"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Elevating Construction Excellence <br /> with Coral Grand
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    At Coral Grand, we transform architectural visions into enduring structures. With unmatched craftsmanship and cutting-edge solutions, we redefine the skyline and build legacies that stand the test of time.
                </motion.p>

                {/* CTA Buttons */}
                {/* <motion.div
                    className="mt-8 flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all text-lg">
                        Explore Services
                    </button>
                    <button className="bg-transparent border border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all text-lg">
                        Contact Our Experts
                    </button>
                </motion.div> */}
                 {/* Interactive Section */}
                 <motion.div
                    className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    {/* Statistic 1 */}
                    <div className="flex flex-col items-center">
                        <motion.h2
                            className="text-4xl font-bold text-white"
                            whileHover={{ scale: 1.1 }}
                        >
                            150+
                        </motion.h2>
                        <p className="text-gray-300">Completed Projects</p>
                    </div>

                    {/* Play Button for Video */}
                    <div className="flex flex-col items-center">
                        <motion.button
                            className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full hover:bg-white/30 transition-all"
                            whileHover={{ scale: 1.2 }}
                        >
                            <PlayCircleIcon className="w-12 h-12 text-white" />
                        </motion.button>
                        <p className="mt-2 text-gray-300">Watch Our Work</p>
                    </div>

                    {/* Statistic 2 */}
                    <div className="flex flex-col items-center">
                        <motion.h2
                            className="text-4xl font-bold text-white"
                            whileHover={{ scale: 1.1 }}
                        >
                            98%
                        </motion.h2>
                        <p className="text-gray-300">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
        </div>
    );
}
