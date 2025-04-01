import Image from "next/image";

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="flex flex-col gap-5">
          <div className="space-y-4 max-w-4xl">
            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-700">Our Services</span>
            <h1 className="text-3xl font-semibold text-blue-950 md:text-4xl xl:text-5xl leading-tight uppercase">Building Strong Foundations for Your Future</h1>
          </div>
          <p className="text-gray-700">We specialize in transforming your construction vision into reality with top-notch services and expert craftsmanship.</p>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-8 xl:gap-10">
          <div className="md:w-96 lg:w-[26rem] space-y-5 flex flex-col md:py-6">
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all before:ease-linear before:scale-x-105 before:scale-y-110 before:inset-0 before:bg-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 relative">
                Residential Construction
              </h2>
              <p className="relative text-gray-700 text-sm">
                We bring your residential projects to life with attention to detail and quality.
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 relative">
                Commercial Construction
              </h2>
              <p className="relative text-gray-700 text-sm">
                We provide high-quality commercial construction services, from office spaces to retail stores.
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 relative">
                Renovation & Remodeling
              </h2>
              <p className="relative text-gray-700 text-sm">
                Whether it’s a kitchen remodel or a full home renovation, our team works closely with you.
              </p>
            </div>
            <div className="cursor-pointer relative p-3 before:rounded-md space-y-3 before:absolute before:transition-all hover:before:ease-linear hover:before:scale-x-105 before:scale-y-110 before:inset-0 hover:before:bg-gray-100">
              <h2 className="text-xl font-semibold text-gray-900 relative">
                Construction Management
              </h2>
              <p className="relative text-gray-700 text-sm">
                Our expert project managers ensure your project is completed on time and standards of quality.
              </p>
            </div>
          </div>
          <div className="flex-1 md:h-auto">
            <div className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 p-6 rounded-lg aspect-[4/2.4] md:aspect-auto md:h-full overflow-hidden">
              <Image src="/ser2.jpg" alt="construction illustration" width={1800} height={1200} className="w-full h-[30rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
