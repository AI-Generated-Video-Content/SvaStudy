"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGraduationCap, FaRobot, FaVideo } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              <span className="block text-indigo-600">Revolutionizing</span>
              <span className="block">Student Education</span>
              <span className="block">with AI Videos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Interactive AI-generated educational content customized for students from grades 1-12.
              Engage, learn, and explore with cutting-edge technology designed to make learning fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg flex items-center justify-center"
              >
                <FaVideo className="mr-2" /> Explore Videos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium flex items-center justify-center"
              >
                <FaGraduationCap className="mr-2" /> Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Image/Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 sm:h-96 md:h-[500px] w-full"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 rounded-full p-8 shadow-xl">
                  <motion.div
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <FaRobot className="text-indigo-600 h-20 w-20 md:h-24 md:w-24" />
                  </motion.div>
                </div>
                <div className="absolute w-full h-full">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 rounded-xl shadow-2xl image-fallback"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Transform Learning with AI</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with engaging educational content
              to create a personalized learning experience for students of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaVideo className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Generated Videos</h3>
              <p className="text-gray-600">
                Customized educational videos that adapt to each student's learning style and pace.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaRobot className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive AI Chatbot</h3>
              <p className="text-gray-600">
                24/7 AI tutor that answers questions and provides personalized guidance.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FaGraduationCap className="text-indigo-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curriculum Aligned</h3>
              <p className="text-gray-600">
                Content designed to support classroom learning for grades 1-12.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 