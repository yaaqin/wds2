import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:h-screen bg-white">
      <div className='flex flex-col md:flex-row items-center justify-center max-w-1480px'>

        {/* Left Section: Text and buttons */}
        <div className="flex-1 text-left p-8">
          <h4 className="text-xl font-semibold text-blue-700 mb-2">404 Not Found</h4>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, the page you are looking for doesn't exist. Here are some helpful links:
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
            onClick={()=>navigate('/')} 
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition">
              Go Back to Home
            </button>
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
              Explore Product
            </button>
          </div>

        </div>

        {/* Right Section: Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://i.pinimg.com/236x/3a/67/19/3a67194f5897030237d83289372cf684.jpg" // Replace with the correct image path
            alt="Page Not Found Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};