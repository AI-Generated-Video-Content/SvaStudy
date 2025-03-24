"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaGraduationCap, FaVideo, FaRobot, FaArrowRight } from "react-icons/fa";
import AIChatbot from "./components/AIChatbot";
import PlaceholderImage from './components/PlaceholderImage';
import { useState } from 'react';

export default function Home() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  const featuredVideos = [
    {
      id: 1,
      title: "Introduction to Mathematics",
      description: "Learn the fundamentals of mathematics in an engaging way.",
      thumbnail: "/images/thumbnails/math-intro.jpg",
      subject: "Mathematics",
      grade: "1-3"
    },
    {
      id: 2,
      title: "Basic Science Concepts",
      description: "Explore the wonders of science through interactive lessons.",
      thumbnail: "/images/thumbnails/science-basics.jpg",
      subject: "Science",
      grade: "4-6"
    },
    {
      id: 3,
      title: "English Grammar",
      description: "Master English grammar with our comprehensive video series.",
      thumbnail: "/images/thumbnails/english-grammar.jpg",
      subject: "English",
      grade: "7-9"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-purple-900 opacity-10"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full" 
          style={{ filter: 'blur(60px)' }}
          animate={{ 
            x: [50, -30, 50], 
            y: [20, 60, 20],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 opacity-10 rounded-full" 
          style={{ filter: 'blur(70px)' }}
          animate={{ 
            x: [-20, 40, -20], 
            y: [50, 10, 50],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform Your Learning Journey
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover engaging educational videos powered by AI, designed to make learning fun and effective for students of all ages.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/pages/videos">
                <motion.button 
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlay className="w-5 h-5" />
                  Start Learning
                </motion.button>
              </Link>
              <Link href="/pages/about">
                <motion.button 
                  className="bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 hover:text-purple-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the future of education with our innovative learning platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaVideo className="w-8 h-8" />,
                title: "AI-Generated Content",
                description: "High-quality educational videos created using advanced AI technology."
              },
              {
                icon: <FaGraduationCap className="w-8 h-8" />,
                title: "Grade-Appropriate",
                description: "Content tailored for different grade levels and learning abilities."
              },
              {
                icon: <FaRobot className="w-8 h-8" />,
                title: "AI Assistant",
                description: "Get instant help and clarification from our AI chatbot."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 8px 10px -6px rgba(0, 0, 0, 0.6)"
                }}
                className="bg-gray-800 rounded-xl shadow-md p-6 text-center"
              >
                <motion.div 
                  className="text-purple-400 mb-4 flex justify-center"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured Videos
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore some of our most popular educational content.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.8), 0 8px 10px -6px rgba(0, 0, 0, 0.6)"
                }}
                className="bg-gray-800 rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                <div className="relative h-48">
                  {!imageErrors[video.id] ? (
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                      onError={() => setImageErrors(prev => ({ ...prev, [video.id]: true }))}
                    />
                  ) : (
                    <PlaceholderImage 
                      text={video.title}
                      className="h-full"
                      subject={video.subject}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Link href={`/pages/video/${video.id}`}>
                      <button className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors">
                        <FaPlay className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-purple-900 text-purple-100 text-xs font-medium rounded-full">
                      {video.subject}
                    </span>
                    <span className="px-2 py-1 bg-indigo-900 text-indigo-100 text-xs font-medium rounded-full">
                      Grades {video.grade}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{video.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{video.description}</p>
                  <Link href={`/pages/video/${video.id}`}>
                    <button className="text-purple-400 font-medium text-sm hover:text-purple-300 flex items-center gap-1">
                      Watch Now <FaArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }} />
        </div>

        {/* Animated elements */}
        <motion.div 
          className="absolute -right-24 -top-24 w-96 h-96 bg-purple-800 opacity-20 rounded-full" 
          style={{ filter: 'blur(80px)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 25,
            ease: "easeInOut" 
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Start Your Learning Journey?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Join thousands of students who are already benefiting from our educational platform.
            </motion.p>
            <Link href="/pages/videos">
              <motion.button 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Videos
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
}
