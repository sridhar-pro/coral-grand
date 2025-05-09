"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNavbar = () => {
    setOpenNavbar((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-20 flex items-center transition-all duration-300 ${
        scrolling ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-10 lg:px-2 h-full items-center mt-1">
        <nav className="flex justify-between items-center h-full">
          <div className="flex min-w-max items-center">
            <img src="/Logo2.webp" alt="Logo" className="h-14 w-14" />
            <Link
              href="/"
              className="flex items-center gap-x-4 text-2xl font-semibold uppercase text-gray-950 flex-col ml-1"
            >
              <span className="text-center">Coral Grand</span>
              <span className="text-center text-sm">Property Developers</span>
            </Link>
          </div>

          <div
            className={`flex flex-col space-y-10 inset-0 fixed top-0 h-[100dvh] bg-white lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
                transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-0 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
                ${
                  openNavbar
                    ? "visible opacity-100 translate-y-0"
                    : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
                }
              `}
          >
            <ul className="flex flex-col gap-y-5 text-gray-800 lg:items-center lg:flex-row lg:gap-x-10 lg:h-full lg:justify-center lg:flex-1 uppercase">
            <li>
                <Link
                  href="/"
                  className="transition ease-linear hover:text-gray-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition ease-linear hover:text-gray-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="transition ease-linear hover:text-gray-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition ease-linear hover:text-gray-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/joint-ventures"
                  className="transition ease-linear hover:text-gray-200"
                >
                  Joint Ventures
                </Link>
              </li>
            </ul>
            <div className="w-full flex sm:w-max lg:min-w-max lg:items-center">
              <Link
                href="/contact"
                className="flex justify-center gap-x-3 items-center uppercase italic text-gray-300 hover:text-gray-900 border-b bg-gray-700 hover:border-b-gray-900 bg-transparent"
              >
                Contact Us
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end relative z-60 lg:hidden">
            <button
              onClick={toggleNavbar}
              className="p-3 rounded-full bg-blue-700 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={`w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear ${
                  openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""
                }`}
              />
              <span
                className={`w-6 origin-center mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                  openNavbar ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear ${
                  openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
