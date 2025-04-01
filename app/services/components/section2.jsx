import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 uppercase leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
            Transforming Visions into Architectural Marvels
          </h2>
          <p className="text-base font-normal text-gray-500 lg:max-w-2xl lg:mx-auto mb-8">
            Delivering excellence in construction with cutting-edge technology and craftsmanship.
          </p>
          {/* <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            <Link href="/contact" className="cursor-pointer bg-blue-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-blue-700">
              Get a Quote
            </Link>
            <Link href="/about" className="cursor-pointer bg-gray-100 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-gray-900 transition-all duration-500 focus:outline-none hover:bg-gray-200">
              Learn More
            </Link>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
          {/* Project 1 */}
          <div className="relative w-full h-auto">
            <div className="bg-gray-800 rounded-2xl flex flex-col">
              <Image
                src="/about.jpg"
                alt="High-Rise Residential Project"
                width={500}
                height={300}
                className="rounded-t-2xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">High-Rise Residential Towers</h3>
                <p className="text-xs font-normal text-gray-300 mb-4">
                  A modern skyline-defining residential complex with luxurious amenities.
                </p>
                <Link href="/projects/high-rise" className="text-blue-400 text-sm font-semibold hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="relative w-full h-auto">
            <div className="bg-gray-700 rounded-2xl flex flex-col">
              <Image
                src="/abouthero.jpg"
                alt="Commercial Complex"
                width={500}
                height={300}
                className="rounded-t-2xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">Commercial Business Hub</h3>
                <p className="text-xs font-normal text-gray-300 mb-4">
                  A state-of-the-art commercial complex built for modern businesses.
                </p>
                <Link href="/projects/commercial" className="text-blue-400 text-sm font-semibold hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative w-full h-auto">
            <div className="bg-gray-900 rounded-2xl flex flex-col">
              <Image
                src="/about.jpg"
                alt="Industrial Park"
                width={500}
                height={300}
                className="rounded-t-2xl object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">Industrial Park & Warehousing</h3>
                <p className="text-xs font-normal text-gray-300 mb-4">
                  Large-scale industrial spaces designed for efficiency and growth.
                </p>
                <Link href="/projects/industrial" className="text-blue-400 text-sm font-semibold hover:underline">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;