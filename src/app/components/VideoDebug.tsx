"use client";

import { useState } from "react";

export default function VideoDebug({ videoUrl, thumbnail }: { videoUrl: string; thumbnail: string }) {
  const [videoError, setVideoError] = useState<string | null>(null);
  const [thumbnailError, setThumbnailError] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">Video Debug Information</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium mb-1">Video Status:</h3>
          <div className="mb-3">
            <p className="text-sm"><strong>Path:</strong> {videoUrl}</p>
            <p className="text-sm">
              <strong>Status:</strong> {
                videoLoaded 
                  ? <span className="text-green-600">Loaded successfully ✓</span> 
                  : videoError 
                    ? <span className="text-red-600">Error: {videoError}</span>
                    : <span className="text-yellow-600">Loading...</span>
              }
            </p>
          </div>
          
          <video 
            src={videoUrl} 
            controls 
            width="300"
            className="border border-gray-300 rounded"
            onError={(e) => setVideoError("Could not load video")}
            onLoadedData={() => setVideoLoaded(true)}
          />
        </div>
        
        <div>
          <h3 className="font-medium mb-1">Thumbnail Status:</h3>
          <div className="mb-3">
            <p className="text-sm"><strong>Path:</strong> {thumbnail}</p>
            <p className="text-sm">
              <strong>Status:</strong> {
                thumbnailLoaded 
                  ? <span className="text-green-600">Loaded successfully ✓</span> 
                  : thumbnailError 
                    ? <span className="text-red-600">Error: {thumbnailError}</span>
                    : <span className="text-yellow-600">Loading...</span>
              }
            </p>
          </div>
          
          <div className="relative w-300 h-169 border border-gray-300 rounded overflow-hidden">
            <img
              src={thumbnail}
              alt="Thumbnail"
              className="w-full h-full object-cover"
              onError={(e) => setThumbnailError("Could not load thumbnail")}
              onLoad={() => setThumbnailLoaded(true)}
            />
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-gray-50 p-3 rounded text-sm">
        <h3 className="font-medium mb-1">Troubleshooting Tips:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ensure the file paths are correct and files exist</li>
          <li>Check that video is in a supported format (MP4 with H.264 codec recommended)</li>
          <li>Make sure the thumbnail is a valid image file</li>
          <li>Verify that the files have proper permissions</li>
          <li>Try clearing browser cache or using a different browser</li>
        </ul>
      </div>
    </div>
  );
} 