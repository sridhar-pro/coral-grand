import Image from "next/image"
import Link from "next/link"
 
const PortfolioSection = () => {
return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
            <div className="max-w-3xl space-y-3">
                <h1 className="text-3xl/tight sm:text-4xl/tight font-bold text-gray-900 uppercase">
                    Take a look to our amazing works
                </h1>
                <p className="text-gray-700 ">
                Explore our exceptional projects that showcase our commitment to quality and the innovation. 
                </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
                    <Image src="/4.webp" alt="project cover" width={1300} height={900} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 flex flex-col justify-end p-5 space-y-5 text-gray-300">
                    <h1 className="font-semibold text-white text-2xl">
                        Quality Construction Services 
                    </h1>
                    <p className="text-gray-300 line-clamp-2">
                        We specialize in delivering top-notch construction services, ensuring durability, precision, and innovative designs. Whether residential or commercial, our expert team brings your vision to life with quality craftsmanship and attention to detail.
                    </p>

                        <div className="w-max">
                            <Link href="#" className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800">
                                View details
                                <span className="duration-300 ease-linear group-hover:pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-[5/3.8] rounded-lg overflow-hidden">
                    <Image src="/4.webp" alt="project cover" width={1300} height={1000} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800  flex flex-col justify-end p-5 space-y-5 text-gray-300">
                    <h1 className="font-semibold text-white text-2xl">
    Building the Future, One Project at a Time
</h1>
<p className="text-gray-300 line-clamp-2">
    From residential homes to large-scale commercial developments, we provide reliable, high-quality construction services. Our team ensures every project is executed with excellence, precision, and the highest standards of safety.
</p>

                        <div className="w-max">
                            <Link href="#" className="group flex items-center gap-x-3 text-gray-100 font-medium border-b border-gray-800">
                                View details
                                <span className="duration-300 ease-linear group-hover:pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
export default PortfolioSection