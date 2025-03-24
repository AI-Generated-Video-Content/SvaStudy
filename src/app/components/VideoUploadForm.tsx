"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FaUpload, FaSpinner } from "react-icons/fa";

const subjects = ["Mathematics", "Science", "Biology", "History", "English", "Computer Science"];
const grades = ["1-3", "4-6", "7-9", "10-12"];

type VideoFormData = {
  title: string;
  subject: string;
  grade: string;
  description: string;
  thumbnail: File | null;
  videoFile: File | null;
};

export default function VideoUploadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<VideoFormData>({
    title: "",
    subject: subjects[0],
    grade: grades[0],
    description: "",
    thumbnail: null,
    videoFile: null
  });
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      
      setFormData({
        ...formData,
        [name]: file
      });

      // Create preview for thumbnail
      if (name === "thumbnail") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setThumbnailPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    // Validate form data
    if (!formData.title || !formData.description || !formData.thumbnail || !formData.videoFile) {
      setMessage({ text: "Please fill in all required fields", type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, you would upload the files to a server or cloud storage
      // This is a mock implementation
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request

      // Mock successful upload
      setMessage({ text: "Video uploaded successfully!", type: "success" });
      
      // Reset form
      setFormData({
        title: "",
        subject: subjects[0],
        grade: grades[0],
        description: "",
        thumbnail: null,
        videoFile: null
      });
      setThumbnailPreview(null);
    } catch (error) {
      setMessage({ text: "Error uploading video. Please try again.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Video</h2>
      
      {message && (
        <div className={`mb-4 p-3 rounded ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Title */}
          <div className="col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Video Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject*
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          
          {/* Grade */}
          <div>
            <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
              Grade Level*
            </label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
              className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  Grades {grade}
                </option>
              ))}
            </select>
          </div>
          
          {/* Description */}
          <div className="col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description*
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full rounded-lg border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </div>
          
          {/* Thumbnail Upload */}
          <div>
            <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 mb-1">
              Thumbnail Image* (16:9 recommended)
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaUpload className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Click to upload thumbnail</p>
                </div>
                <input 
                  id="thumbnail" 
                  name="thumbnail" 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFileChange}
                />
              </label>
              
              {thumbnailPreview && (
                <div className="relative h-32 w-48">
                  <img 
                    src={thumbnailPreview} 
                    alt="Thumbnail preview" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Video Upload */}
          <div>
            <label htmlFor="videoFile" className="block text-sm font-medium text-gray-700 mb-1">
              Video File*
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <FaUpload className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Click to upload video</p>
                {formData.videoFile && (
                  <p className="text-xs text-gray-500 mt-1">{formData.videoFile.name}</p>
                )}
              </div>
              <input 
                id="videoFile" 
                name="videoFile" 
                type="file" 
                accept="video/*" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50 flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin mr-2" />
              Uploading...
            </>
          ) : (
            "Upload Video"
          )}
        </button>
      </form>
    </div>
  );
} 