import Link from "next/link"
 
const FooterItem = ({ text, link }) => {
    return (
        <li>
            <Link href={link} className="duration-200 hover:text-blue-500 ">
                {text}
            </Link>
        </li>
    )
}
 
const FooterBlockItem = ({ title, items }) => {
    return (
        <div className="space-y-5">
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {title}
            </h1>
            <ul className="space-y-3">
                {items.map(item => (
                    <FooterItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    )
}
 
const footerBlocks = [
    {
        id: 1,
        title: "Company",
        items: [
            { id: 1, text: "About Us", link: "/about" },
            { id: 2, text: "Our Projects", link: "/projects" },
            { id: 3, text: "Careers", link: "/careers" },
        ]
    },
    {
        id: 2,
        title: "Services",
        items: [
            { id: 1, text: "General Contracting", link: "/services/general-contracting" },
            { id: 2, text: "Architectural Design", link: "/services/architectural-design" },
            { id: 3, text: "Renovation", link: "/services/renovation" },
        ]
    },
    {
        id: 3,
        title: "Resources",
        items: [
            { id: 1, text: "Blog", link: "/blog" },
            { id: 2, text: "FAQs", link: "/faqs" },
            { id: 3, text: "Contact Support", link: "/contact" },
        ]
    },
]
 
const FooterBlock = () => {
    return (
        <footer className="pt-16 md:pt-10 bg-gray-900">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
                <nav className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-8 py-10 text-gray-300">
                    {footerBlocks.map(footerBlock => (
                        <FooterBlockItem key={footerBlock.id} {...footerBlock} />
                    ))}
                    <div className="space-y-5 col-span-2 md:col-span-3 lg:col-span-1">
                        <h1 className="text-lg font-semibold text-gray-100">
                            Get Project Updates
                        </h1>
                        <p className="max-w-xl">
                            Stay updated with our latest construction projects, news, and offers.
                        </p>
                        <form className="grid w-full relative max-w-xl">
                            <div className="flex flex-col gap-3 w-full relative">
                                <input
                                    type="email"
                                    className="w-full outline-none px-3 py-3 rounded-md bg-gray-800 border border-gray-700"
                                    placeholder="Enter your email"
                                />
                                <button className="w-full py-3 sm:py-0 sm:w-max sm:absolute sm:right-1 sm:inset-y-1 px-4 text-sm flex sm:items-center justify-center outline-none bg-blue-700 text-white rounded-md">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </nav>
                <div className="w-full flex flex-col items-center justify-center py-3 border-t border-t-gray-800 text-gray-300">
    <div className="text-center">
        <p> © 2025 BuildRight Construction. All rights reserved. </p>
    </div>
</div>

            </div>
        </footer>
    )
}

export default FooterBlock
