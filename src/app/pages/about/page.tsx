"use client";  // Ensure it's a client component for animations
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaVideo, FaRobot, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  const features = [
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "AI-Generated Content",
      description: "Our platform leverages cutting-edge AI technology to create engaging educational videos tailored to different subjects and grade levels."
    },
    {
      icon: <FaGraduationCap className="w-8 h-8" />,
      title: "Grade-Appropriate Learning",
      description: "Content is carefully curated and aligned with educational standards for grades 1-12, ensuring age-appropriate learning experiences."
    },
    {
      icon: <FaRobot className="w-8 h-8" />,
      title: "Interactive AI Assistant",
      description: "Students can interact with our AI chatbot to get instant help, clarification, and additional learning resources."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community Learning",
      description: "Join a community of learners and educators, sharing knowledge and experiences to enhance the learning journey."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Engaging Content",
      description: "Our videos are designed to be engaging and interactive, making learning fun and effective for students of all ages."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Monitor learning progress and track achievements as students explore different subjects and topics."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Educational Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering education through AI-driven video content and interactive learning experiences.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're dedicated to revolutionizing education by making high-quality learning content accessible to students worldwide. 
            Our platform combines the power of artificial intelligence with educational expertise to create engaging, 
            personalized learning experiences that help students achieve their full potential.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <div className="text-indigo-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center bg-indigo-600 rounded-xl shadow-md p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-6">
            Join thousands of students who are already benefiting from our educational platform.
          </p>
          <Link href="/pages/videos">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Videos
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
