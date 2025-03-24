"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFilter, FaPlay, FaGraduationCap, FaClock } from "react-icons/fa";
import AIChatbot from "../../components/AIChatbot";
import videoData from "../../data/videos.json";
import Link from "next/link";

// Extract unique subjects and sort them
const allSubjects = ["All Subjects", ...Array.from(new Set(videoData.map(video => video.subject)))].sort((a, b) => {
  if (a === "All Subjects") return -1;
  if (b === "All Subjects") return 1;
  return a.localeCompare(b);
});

const grades = ["All Grades", "1-3", "4-6", "7-9", "10-12"];

export default function VideosPage() {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVideos = videoData.filter((video) => {
    // Filter by subject
    const subjectMatch = selectedSubject === "All Subjects" || video.subject === selectedSubject;
    
    // Filter by grade (simple overlap check)
    const gradeMatch = selectedGrade === "All Grades" || video.grade === selectedGrade;
    
    // Filter by search query
    const searchMatch = 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    return subjectMatch && gradeMatch && searchMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Educational Video Library
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our collection of AI-generated educational videos designed to make learning engaging and effective for students from grades 1-12.
          </p>
        </div>

        {/* Filters and Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="flex items-center">
              <FaFilter className="text-indigo-600 mr-2" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            {/* Subject Filter */}
            <div className="flex-1">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {allSubjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Grade Filter */}
            <div className="flex-1">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {grades.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade === "All Grades" ? grade : `Grades ${grade}`}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Search */}
            <div className="flex-1 lg:flex-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border-gray-300 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="relative">
                  <div className="relative h-48 w-full">
                    {video.thumbnail ? (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          // Fallback when image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.parentElement?.querySelector('.image-fallback');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 image-fallback bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No thumbnail</span>
                      </div>
                    )}
                    <div className="absolute inset-0 image-fallback bg-gray-200 flex items-center justify-center hidden">
                      <span className="text-gray-500">No thumbnail</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Link href={`/pages/video/${video.id}`}>
                        <button className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                          <FaPlay />
                        </button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.subject}
                  </div>
                </div>
                
                <div className="p-4">
                  <Link href={`/pages/video/${video.id}`}>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 hover:text-indigo-600">{video.title}</h3>
                  </Link>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <div className="flex items-center mr-4">
                      <FaGraduationCap className="mr-1" />
                      Grades {video.grade}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{video.views.toLocaleString()} views</span>
                    <Link href={`/pages/video/${video.id}`}>
                      <button className="text-indigo-600 font-medium text-sm hover:text-indigo-800">
                        Watch Now
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-gray-500 text-lg">No videos found matching your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Chatbot */}
      <AIChatbot />
    </div>
  );
} 