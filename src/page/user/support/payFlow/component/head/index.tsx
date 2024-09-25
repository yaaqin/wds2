import React from 'react';

const Head: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-purple-600 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
      <div className="absolute top-0 right-0 w-16 h-16 bg-purple-600 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-600 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-purple-600 transform translate-x-1/2 translate-y-1/2 rotate-45"></div>
      
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Pusat Bantuan</h2>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Jangan khawatir, kami selalu siap memberikan solusi yang tepat di pusat bantuan kami.
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Pilih topik bantuan yang kamu butuhkan
        </p>
        {/* Anda bisa menambahkan tombol atau link ke topik bantuan di sini */}
      </div>
    </div>
  );
};

export default Head;