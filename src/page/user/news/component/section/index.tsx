import React from 'react';

const BlogSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column - Blog Entries */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* First Blog Post */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Hanaplay Hadir Di BSD City</h2>
            <p className="text-sm text-gray-500 mb-4">
              June 29, 2024 / by <span className="text-blue-500">denny</span>
            </p>
            <p className="text-gray-700 mb-4">
              Hanaplay Broadband Internet Provider, telah hadir di BSD City. Internet BSD Super Cepat dan Terbaik Setiap Saat Hanaplay untuk anda yang mau menikmati kecepatan WiFi dengan harga langganan yang murah...
            </p>
            <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all">
              Continue Reading
            </button>
          </div>
          
          {/* Second Blog Post */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Internet Suradita, Cisauk Oleh Hanaplay</h2>
            <p className="text-sm text-gray-500 mb-4">
              June 28, 2024 / by <span className="text-blue-500">denny</span>
            </p>
            <p className="text-gray-700 mb-4">
              BSD City, 29 Juni 2024 – WDS telah hadir di Suradita, Cisauk, terpilih menjadi penyelenggara internet untuk desa Suradita, khususnya Suradita RW01. Hanaplay Broadband Internet...
            </p>
            <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all">
              Continue Reading
            </button>
          </div>

        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-8">
          
          {/* Search Box */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-white text-xl font-semibold mb-4">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 rounded-full text-gray-700"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a8 8 0 111.42-1.42l4.39 4.39a1 1 0 01-1.42 1.42l-4.39-4.39zM10 16A6 6 0 1010 4a6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li className="text-blue-500 hover:underline">Uncategorized</li>
            </ul>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default BlogSection;
