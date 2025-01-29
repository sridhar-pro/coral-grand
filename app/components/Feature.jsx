import Image from "next/image";
import { FaHammer, FaCog, FaTruckMoving } from 'react-icons/fa';
import FadeIn from "./Contact/FadeIn";

const features = [
  {
    id: 1,
    title: "Complete Site Preparation for Construction",
    icon: <FaHammer />,
    description: "Efficiently prepare your site for construction with excavation, grading, and foundation laying services.",
    advantages: [
      {
        id: 1,
        text: "Comprehensive site clearing and leveling"
      },
      {
        id: 2,
        text: "Precise excavation and foundation work"
      },
      {
        id: 3,
        text: "Adherence to local regulations and standards"
      },
    ],
    image: "/2.webp"
  },
  {
    id: 2,
    title: "Reliable Ground Stabilization Solutions",
    icon: <FaCog />,
    description: "We provide reliable and effective ground stabilization solutions to ensure a solid base for construction.",
    advantages: [
      {
        id: 1,
        text: "Soil stabilization for better foundation support"
      },
      {
        id: 2,
        text: "Prevents soil erosion and shifting"
      },
      {
        id: 3,
        text: "Cost-effective solutions with long-term benefits"
      },
    ],
    image: "/3.webp"
  },
  {
    id: 3,
    title: "Precision Earthmoving and Grading Services",
    icon: <FaTruckMoving />,
    description: "Our expert earthmoving and grading services ensure a stable and well-prepared construction site for any project size.",
    advantages: [
      {
        id: 1,
        text: "Accurate land grading for proper drainage"
      },
      {
        id: 2,
        text: "Heavy-duty machinery for efficient earthmoving"
      },
      {
        id: 3,
        text: "Optimized terrain for safe and stable foundations"
      },
    ],
    image: "/1.webp"
  },
];
  
const FeatureItem = ({ id, title, description, advantages, icon, image }) => {
return (
    <div className={`flex flex-col md:items-center gap-10 lg:gap-14 ${id%2===0? "md:flex-row" :"md:flex-row-reverse"}`}>
        <div className="md:w-[48%] xl:w-[45%] md:py-6 xl:py-12 space-y-8">
            <div className="space-y-6">
                <span className="p-2 rounded-md bg-purple-100 text-blue-700 flex w-max">
                    {icon}
                </span>
                <h2 className="text-xl font-semibold text-gray-900 uppercase">
                    {title}
                </h2>
                <p className="text-gray-700">
                    {description}
                </p>
            </div>
            <ul role="list" className="space-y-5 children:flex children:items-start children:gap-4 children:text-gray-600 ">
                {
                    advantages.map(advantage => (
                        <li key={advantage.id}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 fill-blue-700">
                                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            {advantage.text}
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className="flex-1 relative bg-gradient-to-tr from-sky-100 to-indigo-300 
                  p-6 rounded-lg aspect-[4/2.4] overflow-hidden">
            <Image src={image} alt="illustration" height={1800} width={1800} className="w-full h-auto" />
        </div>
    </div>
)
}


 
const Features = () => {
return (
  <FadeIn>
    <section className="py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="flex flex-col  space-y-16">
                <div className="flex flex-col justify-center text-center  mx-auto md:max-w-3xl space-y-5">
                    <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide text-blue-700 uppercase">Features</span>
                    <h1 className="text-2xl font-semibold text-blue-950 md:text-4xl xl:text-5xl leading-tight uppercase">
                    Streamlining Groundwork Processes for Faster, Efficient Results
                    </h1>
                    <p className="text-gray-700 max-w-lg mx-auto">
                    Our innovative solutions save you time and boost productivity in every phase of your groundworks projects. From excavation to site preparation, we ensure smooth, on-time deliveries with precision and efficiency.
                    </p>
                </div>
                <div className="grid divide-y divide-gray-300/60 gap-12 children:py-5 first:pt-0 last:pb-0">
                    {
                        features.map(feature=>(
                            <FeatureItem key={feature.id} {...feature}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
    </FadeIn>
)
}
 
export default Features