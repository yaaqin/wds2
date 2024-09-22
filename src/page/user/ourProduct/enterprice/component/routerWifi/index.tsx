import React from 'react';

const SmartWifiSection: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Smart Internet WiFi</h2>
          <p className="text-gray-700">
            Lengkapi koleksi Internet WiFi Biznet Home kamu dengan Smart Internet WiFi, perangkat tambahan yang dilengkapi dengan teknologi Mesh WiFi AC1200 Whole-Home Mesh. 
            Dengan Smart Internet WiFi, jangkauan Internet WiFi di rumah menjadi lebih luas dan lebih cepat sampai dengan 800 Mbps.
          </p>
          <button className="text-orange-500 border border-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
            Beli Sekarang
          </button>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/236x/42/5e/31/425e3114afee42ae7663105c9638f88d.jpg" // Replace with the actual image
            alt="Smart Internet WiFi"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartWifiSection;
