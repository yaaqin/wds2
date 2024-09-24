import React from 'react';

const BisnisHero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/236x/96/c2/e8/96c2e8fda549ae99693e87ffeba899ef.jpg')",
          filter: "blur(8px)",
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base text-purple-300 font-semibold mb-2">SOLUSI BISNIS</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Wifi Bisnis Terbaik<br />untuk Anda
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-8">
          Kami menyediakan solusi layanan internet dan teknologi untuk transformasi bisnis.
          Bersama MyRepublic, dukung keberhasilan bisnis kamu!
        </p>
        
        {/* Features */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-gray-300">Fiber Optic</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">1:1</p>
            <p className="text-sm text-gray-300">Simetris Download : Upload</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
            <p className="text-sm text-gray-300">Internet UNLIMITED</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BisnisHero;