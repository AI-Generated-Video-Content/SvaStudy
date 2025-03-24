"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, thumbnail, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset error state when video source changes
  useEffect(() => {
    setError(null);
    setIsLoading(true);
    setIsPlaying(false);
  }, [videoUrl]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setError(null);
        })
        .catch(err => {
          console.error("Error playing video:", err);
          setError("Unable to play this video. It may be in an unsupported format.");
          setIsPlaying(false);
        });
    }
  };

  const handleError = () => {
    setError("Error loading video. Please check the file path and format.");
    setIsLoading(false);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-900">
      {!isPlaying && (
        <div className="relative aspect-video">
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10">
            {isLoading && !error ? (
              <div className="animate-pulse text-white">Loading video...</div>
            ) : error ? (
              <div className="text-red-400 bg-black bg-opacity-70 p-3 rounded text-center max-w-md">
                <div className="font-bold mb-1">Video Error</div>
                <div className="text-sm">{error}</div>
              </div>
            ) : (
              <button
                onClick={handlePlay}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
                aria-label="Play video"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>
          
          <div className="absolute inset-0">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              onError={() => console.warn("Thumbnail failed to load")}
            />
          </div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={videoUrl}
        className={`w-full aspect-video ${!isPlaying ? 'hidden' : ''}`}
        controls={isPlaying}
        controlsList="nodownload"
        onError={handleError}
        onLoadedData={handleLoadedData}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
} 