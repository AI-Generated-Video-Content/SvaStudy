"use client";

import { useState } from "react";
import VideoDebug from "../../components/VideoDebug";
import videoData from "../../data/videos.json";

export default function VideoDebugPage() {
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
  const [customVideoUrl, setCustomVideoUrl] = useState("");
  const [customThumbnailUrl, setCustomThumbnailUrl] = useState("");
  const [debugMode, setDebugMode] = useState<"existing" | "custom">("existing");

  const selectedVideo = selectedVideoId 
    ? videoData.find(v => v.id === selectedVideoId)
    : null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Video Debug Tool</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex gap-4 mb-6">
            <button 
              className={`px-4 py-2 rounded-md ${debugMode === "existing" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setDebugMode("existing")}
            >
              Test Existing Video
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${debugMode === "custom" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => setDebugMode("custom")}
            >
              Test Custom Path
            </button>
          </div>

          {debugMode === "existing" ? (
            <div>
              <h2 className="text-lg font-medium mb-3">Select a video to debug:</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {videoData.map(video => (
                  <div 
                    key={video.id}
                    className={`border rounded-lg p-4 cursor-pointer hover:border-indigo-500 ${selectedVideoId === video.id ? "border-indigo-600 bg-indigo-50" : "border-gray-200"}`}
                    onClick={() => setSelectedVideoId(video.id)}
                  >
                    <div className="text-sm font-medium">{video.title}</div>
                    <div className="text-xs text-gray-500 mt-1">ID: {video.id}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Video URL (path relative to public folder)
                </label>
                <input
                  type="text"
                  id="videoUrl"
                  value={customVideoUrl}
                  onChange={(e) => setCustomVideoUrl(e.target.value)}
                  placeholder="/videos/your-video.mp4"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-700 mb-1">
                  Thumbnail URL (path relative to public folder)
                </label>
                <input
                  type="text"
                  id="thumbnailUrl"
                  value={customThumbnailUrl}
                  onChange={(e) => setCustomThumbnailUrl(e.target.value)}
                  placeholder="/videos/thumbnails/your-thumbnail.jpg"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
          )}
        </div>
        
        {debugMode === "existing" && selectedVideo ? (
          <VideoDebug 
            videoUrl={selectedVideo.videoUrl} 
            thumbnail={selectedVideo.thumbnail} 
          />
        ) : debugMode === "custom" && customVideoUrl ? (
          <VideoDebug 
            videoUrl={customVideoUrl} 
            thumbnail={customThumbnailUrl || "/placeholder.jpg"} 
          />
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center text-yellow-700">
            {debugMode === "existing" 
              ? "Please select a video from the list above to debug" 
              : "Please enter a custom video URL to debug"}
          </div>
        )}
      </div>
    </div>
  );
} 