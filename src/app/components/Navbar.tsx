"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaBook, FaVideo, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center justify-center">
              {/* LOGO SECTION - You can use logo.png file for your logo */}
              <div className="relative h-12 w-40 flex items-center justify-center">
                <Image 
                  src="/logo.png"
                  alt="SvaStudy" 
                  width={160} 
                  height={55}
                  className="rounded-md" 
                />
              </div>
              {/* END LOGO SECTION */}
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-150 flex items-center">
                <FaHome className="mr-1" /> Home
              </Link>
              <Link href="/pages/videos" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-150 flex items-center">
                <FaVideo className="mr-1" /> Video Library
              </Link>
              <Link href="/pages/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition duration-150 flex items-center">
                <FaBook className="mr-1" /> About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 