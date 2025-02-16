import Image from 'next/image';
import Background from '../../../../../public/about.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <div
        ref={container} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            {/* <div className='relative z-10 py-20 px-0 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[2.4vw] uppercase mix-blend-difference ml-[42rem] tablet:ml-[60rem] lg:ml-[40rem]'>Building dreams and achieving success requires patience, precision, and the right guidance.</p>
                <p className='text-[6vw] lg:text-[4vw] uppercase mix-blend-difference ml-4 lg:ml-8'>Laying the Foundation for a Stronger Tomorrow.</p>
            </div> */}

            {/* Fixed background image with scrolling effect */}
            <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
                <motion.div style={{y}} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{objectFit: "cover"}} />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </motion.div>
            </div>

            {/* Centered creative content */}
            <div className='absolute z-20 text-center'>
                

                {/* A creative CTA or content block */}
                <div className="relative bg-white bg-opacity-80 p-6 rounded-lg max-w-xl mx-auto mt-10">
                    {/* <p className="text-xl font-bold text-black italic mb-4 uppercase">Join us in your journey to success. We provide expert construction to guide you every step of the way.</p> */}
                    {/* <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg uppercase text-sm font-bold transition-all duration-300 hover:bg-blue-700">
                        Get Started
                    </a> */}
                </div>

            </div>

        </div>
    )
}
