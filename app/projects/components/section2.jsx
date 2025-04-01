'use client';

import Image from 'next/image';

const Section2 = () => {
  return (
    <section className="py-10 relative">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center flex-col gap-5 mb-14">
          <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center uppercase">
            Construction Mastery
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
            Transforming concepts into reality with exceptional craftsmanship and attention to detail in every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
          
          {/* Card 1 */}
          <div className="relative sm:col-span-2 bg-cover bg-center max-md:h-80 rounded-lg flex justify-end flex-col px-7 py-6" 
            style={{ backgroundImage: "url(/pro6.jpg)" }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10">
              <h6 className="font-medium text-xl leading-8 text-white mb-4 uppercase italic">Residential Building</h6>
              <p className="text-base font-normal text-white/70">
                Creating dream homes with modern designs and robust construction practices that last.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <Image 
            src="/pro8.png" 
            alt="Residential construction project" 
            width={500} 
            height={500} 
            className="w-full rounded-lg object-cover" 
          />

          {/* Card 3 */}
          <Image 
            src="/pro9.png" 
            alt="Commercial construction project" 
            width={500} 
            height={500} 
            className="w-full rounded-lg object-cover" 
          />

          {/* Card 4 */}
          <Image 
            src="/pro10.png" 
            alt="Industrial construction project" 
            width={500} 
            height={500} 
            className="w-full rounded-lg object-cover" 
          />
          
          {/* Card 5 */}
          <div className="relative bg-cover rounded-lg max-sm:h-80 flex justify-start flex-col px-7 py-6" 
            style={{ backgroundImage: "url(/pro1.jpg)" }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10">
              <h6 className="font-medium text-xl leading-8 text-white mb-4 uppercase italic">Commercial Building</h6>
              <p className="text-base font-normal text-white/70">
                Delivering high-performance structures that enhance productivity, safety, and sustainability.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <Image 
            src="/pro7.png" 
            alt="Mixed-use construction project" 
            width={500} 
            height={500} 
            className="w-full rounded-lg object-cover" 
          />
          
          {/* Card 7 */}
          <div className="relative bg-cover rounded-lg max-sm:h-80 flex justify-end flex-col px-7 py-6" 
            style={{ backgroundImage: "url(/pro2.jpg)" }}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            {/* Content */}
            <div className="relative z-10">
              <h6 className="font-medium text-xl leading-8 text-white mb-4 uppercase italic">Infrastructure Development</h6>
              <p className="text-base font-normal text-white/70">
                Building resilient infrastructures that support the backbone of urban growth and innovation.
              </p>
            </div>
          </div>

        </div>

        {/* <button className="w-full rounded-lg py-4 px-6 text-center bg-indigo-100 text-lg font-medium text-indigo-600 transition-all duration-300 hover:text-white hover:bg-indigo-600">
          Load More
        </button> */}
      </div>
    </section>
  );
};

export default Section2;
