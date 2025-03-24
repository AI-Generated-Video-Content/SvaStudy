import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaBrain } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-10 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <FaBrain className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">SvaStudy</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Revolutionizing student education with interactive AI-generated video content for grades 1-12.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/videos" className="text-gray-300 hover:text-white transition-colors">
                  Video Library
                </Link>
              </li>
              <li>
                <Link href="/pages/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Educational Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Educational Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Primary School (Class 1-5)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Middle School (Class 6-8)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  High School (Class 9-12)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  AI Learning Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">123 Education Lane</p>
              <p className="mb-2">Learning City, LC 12345</p>
              <p className="mb-2">Email: info@svastudy.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SvaStudy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 