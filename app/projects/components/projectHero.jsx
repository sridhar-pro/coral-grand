'use client';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-32 sm:py-36 lg:py-40 overflow-hidden h-[100dvh] min-h-max flex items-center relative">
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-blue-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-l from-blue-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-blue-400/30" />
        </div>
      </div>
      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-blue-400/5 left-0 translate-y-[40%] -translate-x-[40%] bottom-0">
        <div className="inset-[10%] rounded-full bg-gradient-to-r from-blue-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-blue-400/50" />
        </div>
      </div>
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center flex flex-col items-center space-y-10">
          <span className="border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 text-gray-700">
            Quality & Precision in Construction
          </span>
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 font-bold max-w-4xl uppercase">
            Building the Future, One Project at a Time
          </h1>
          <p className="text-base text-gray-700 text-center max-w-xl">
            From residential homes to large-scale commercial projects, we deliver exceptional construction services 
            with unmatched quality, safety, and precision. Let us bring your vision to life with expertise and professionalism.
          </p>
          <div className="flex justify-center">
            <Link href="#" className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-blue-700 text-white hover:bg-opacity-80">
              Get a Quote
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
