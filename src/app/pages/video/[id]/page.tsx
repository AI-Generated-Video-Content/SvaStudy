"use client";

import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import VideoPlayer from "../../../components/VideoPlayer";
import VideoDebug from "../../../components/VideoDebug";
import videoData from "../../../data/videos.json";
import Link from "next/link";

export default function VideoPage() {
  const params = useParams();
  const [showDebug, setShowDebug] = useState(false);
  
  const videoId = typeof params.id === 'string' ? parseInt(params.id, 10) : null;
  const video = videoId ? videoData.find(v => v.id === videoId) : null;
  
  useEffect(() => {
    // Reset debug mode when video changes
    setShowDebug(false);
  }, [params.id]);

  if (!video) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-6">
          <Link 
            href="/pages/videos" 
            className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Back to videos
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">{video.title}</h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
            {video.subject}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            Grades {video.grade}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
            {video.duration}
          </span>
        </div>
        
        <div className="mb-8">
          <VideoPlayer 
            videoUrl={video.videoUrl}
            thumbnail={video.thumbnail}
            title={video.title}
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-3">About this video</h2>
          <p className="text-gray-700 mb-4">{video.description}</p>
          <div className="text-sm text-gray-500">{video.views.toLocaleString()} views</div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => setShowDebug(!showDebug)}
            className="text-gray-500 text-sm hover:text-indigo-600"
          >
            {showDebug ? "Hide debug info" : "Show debug info"}
          </button>
        </div>
        
        {showDebug && (
          <div className="mt-6">
            <VideoDebug 
              videoUrl={video.videoUrl}
              thumbnail={video.thumbnail}
            />
          </div>
        )}
      </div>
    </div>
  );
} 