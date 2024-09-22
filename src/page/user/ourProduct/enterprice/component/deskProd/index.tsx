import React from 'react';

const WifiExperience: React.FC = () => {
  return (
    <div className="relative flex items-center justify-start h-screen bg-cover bg-left"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/3c/a3/08/3ca3080cfe53890e9d1001c1fbe88909.jpg')", // Ensure the correct image path
      }}
    >
      {/* Apply blur effect on the right side */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/60 backdrop-blur"></div>

      {/* Content */}
      <div className="relative p-10 max-w-[1480px] text-left z-10">
      <h1
  className="text-4xl font-bold text-[#fff] mb-4"
  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
>
  Non Stop WiFi Experience
  <br /> in every room of your home.
</h1>
<p
  className="text-[#fff] mb-6"
  style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
>
  Hana Smart Internet Wifi built to eliminate dead zones and provide
  exceptional speed, coverage, and stability, taking you to experience
  reliable coverage, faster speeds, and effortless setup.
</p>
<p
  className="text-[#fff]"
  style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}
>
  Don’t need to worry about getting lost! The Smart Internet Wifi system
  has been designed with security in mind so that it covers every part of
  your home and helps keep you connected no matter where you are.
</p>


        {/* Links */}
        <div className="mt-6">
          <a href="#" className="text-blue-600 underline mr-4">Details</a>
          <a href="#" className="text-blue-600 underline">Specification</a>
        </div>
      </div>
    </div>
  );
};

export default WifiExperience;
