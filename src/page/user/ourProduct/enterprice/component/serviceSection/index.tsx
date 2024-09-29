import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Bagian Kiri - Teks */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-bold">
          We are here to make your <span className="text-green-500">website</span> look more <span className="text-green-500">elegant</span> and stylish!
        </h2>
        <button className="bg-green-500 text-white py-3 px-6 rounded-full w-max hover:bg-green-600 transition">
          View All
        </button>
      </div>

      {/* Bagian Kanan - Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-green-500 mb-4">
            {/* Ikon Speed Optimization */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M4 6h16M5 14h14m-5 4h-4m1-10l1 1-2 2 3 3-3 3" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Speed Optimization</h3>
          <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-green-500 mb-4">
            {/* Ikon Cloud Solutions */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 18c0-3.866-3.134-7-7-7-3.866 0-7 3.134-7 7" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
          <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-green-500 mb-4">
            {/* Ikon Website Design */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 00-2-2V7a2 2 0 00-2-2 2 2 0 00-2 2v3a2 2 0 00-2 2 2 2 0 002 2h6m2-2a2 2 0 00-2-2V7a2 2 0 00-2-2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Website Design</h3>
          <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
          <div className="text-green-500 mb-4">
            {/* Ikon Online Marketing */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16M4 10h16M4 16h16" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Online Marketing</h3>
          <p className="text-gray-500">Far far away, behind the word mountains, far from the countries Vokalia.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
