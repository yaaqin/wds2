import React from 'react';

const QuoteForm: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/0e/60/77/0e607786630dc7401b77a7e441afe024.jpg')", // Replace with the correct image path
      }}
    >
      {/* Apply blur effect to the background, but not the content */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">Get In Touch To</h2>
        <h3 className="text-3xl font-bold mb-6">Order Connection Now</h3>
        
        {/* Description */}
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas tristique augue sit amet ullamcorper auctor.
        </p>

        {/* Form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="py-[8px] px-[16px] w-64 sm:w-80 rounded-full bg-white text-gray-700 placeholder-gray-500 shadow focus:outline-none"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
              <i className="fas fa-user"></i>
            </span>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder="Your E-mail"
              className="py-[8px] px-[16px] w-64 sm:w-80 rounded-full bg-white text-gray-700 placeholder-gray-500 shadow focus:outline-none"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 px-8 py-4 bg-transparent border-2 border-blue-500 text-white rounded-full hover:bg-blue-500 transition">
          Request A Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteForm;
