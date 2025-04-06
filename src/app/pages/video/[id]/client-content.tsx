"use client";

import { useState } from 'react';
import VideoDebug from "../../../components/VideoDebug";

type VideoType = {
  id: number;
  title: string;
  subject: string;
  grade: string;
  duration: string;
  views: number;
  description: string;
  thumbnail: string;
  videoUrl: string;
};

export default function ClientVideoContent({ video }: { video: VideoType }) {
  const [showDebug, setShowDebug] = useState(false);

  return (
    <>
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
    </>
  );
} 