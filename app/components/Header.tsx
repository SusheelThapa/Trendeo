"use client";

import { useState } from "react";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 px-6 sm:px-14 lg:px-28 mt-3">
      <nav className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-black mr-6 px-2">
          <Link href="/">
            <h1 className="text-2xl font-bold">Trendeo</h1>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
          >
            <motion.svg
              className="fill-current h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <motion.path
                d="M3 6h18M3 12h18m-18 6h18"
                initial={{ opacity: 1 }}
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M6 18L18 6M6 6l12 12"
                initial={{ opacity: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </button>
        </div>
        <div className="w-full  flex-grow sm:hidden md:hidden hidden lg:flex lg:items-center lg:w-auto border-t-2 md:border-none mt-4 md:mt-none">
          <ul className="text-md lg:flex-grow flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 gap-4 lg:gap-0 justify-center font-[500] mt-6 px-4 md:mt-0 md:px-0">
            <li className="border-b-2 border-transparent hover:border-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-500">
              <Link href="/about">About</Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-500">
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mt-4 lg:mt-0 w-full lg:w-auto">
            <div className="flex flex-row bg-gray-100 pl-4 w-full lg:w-auto">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="px-4 py-2 rounded-md border focus:outline-none border-none bg-gray-100 w-full lg:w-auto"
              />
              <div className="relative">
                <button className="px-4 py-2 rounded-md">
                  <FiSearch className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-row items-center mt-4 lg:mt-0">
              <button className="px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaRegHeart className="w-6 h-6 text-gray-600" />
              </button>
              <button className="px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4">
                <GrCart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="w-full block lg:hidden flex-grow lg:items-center lg:w-auto border-t-2 md:border-none mt-4 md:mt-none"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="text-md flex flex-col space-y-4 justify-center font-[500] mt-6 px-4 ">
                <li className="border-b-2 border-transparent hover:border-gray-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-gray-500">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-gray-500">
                  <Link href="/about">About</Link>
                </li>
                <li className="border-b-2 border-transparent hover:border-gray-500">
                  <Link href="/signup">Sign Up</Link>
                </li>
              </ul>
              <div className="flex flex-col items-center mt-4 w-full">
                <div className="flex flex-row bg-gray-100 pl-4 w-full">
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="px-4 py-2 rounded-md border focus:outline-none border-none bg-gray-100 w-full"
                  />
                  <div className="relative">
                    <button className="px-4 py-2 rounded-md">
                      <FiSearch className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-4 w-full">
                  <button className="px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <FaRegHeart className="w-6 h-6 text-gray-600" />
                  </button>
                  <button className="px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-4">
                    <GrCart className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
