"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import VideoUploadForm from "../../components/VideoUploadForm";
import videoData from "../../data/videos.json";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<"library" | "upload">("library");

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Video Management
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Upload, edit, and manage your educational video content.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-4 px-6 font-medium ${
              selectedTab === "library" 
                ? "text-indigo-600 border-b-2 border-indigo-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setSelectedTab("library")}
          >
            Video Library
          </button>
          <button
            className={`py-4 px-6 font-medium ${
              selectedTab === "upload" 
                ? "text-indigo-600 border-b-2 border-indigo-600" 
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setSelectedTab("upload")}
          >
            Upload New Video
          </button>
        </div>

        {/* Content */}
        {selectedTab === "upload" ? (
          <VideoUploadForm />
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title & Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stats
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {videoData.map((video) => (
                    <tr key={video.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative h-16 w-28 bg-gray-100 rounded">
                          <div className="absolute inset-0">
                            <img 
                              src={video.thumbnail}
                              alt={video.title}
                              className="h-full w-full object-cover rounded"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900">{video.title}</div>
                        <div className="text-sm text-gray-500 line-clamp-2">{video.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                          {video.subject}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Grades {video.grade}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{video.views.toLocaleString()} views</div>
                        <div className="text-sm text-gray-500">{video.duration} duration</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button className="text-indigo-600 hover:text-indigo-900">
                            <FaEye />
                          </button>
                          <button className="text-blue-600 hover:text-blue-900">
                            <FaEdit />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 