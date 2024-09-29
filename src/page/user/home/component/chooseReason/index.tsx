import React, { useEffect, useRef } from 'react';
import useGsapScrollTrigger from '../../../../../component/gsapHook';

const ChooseReason: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Gunakan hook untuk bagian kiri (geser dari kiri)
  useGsapScrollTrigger(leftRef, 'left');

  // Gunakan hook untuk bagian kanan (geser dari kanan)
  useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="container mx-auto py-16 flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {/* Bagian Kiri - Gambar */}
        <div 
        ref={leftRef}
        className="flex justify-center items-center">
          <img 
            src="https://www.wds.co.id/wp-content/uploads/2023/02/about-img.png" 
            alt="Phone Display" 
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Bagian Kanan - Teks */}
        <div 
        ref={rightRef}
        className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <h3 className="text-xl font-medium">Internet Cepat, Terbaik Setiap Saat</h3>
          <p className="text-gray-500 leading-relaxed">
            WDS menyediakan solusi yang terbaik, dan dirancang untuk keperluan kebutuhan internet Anda. Memberikan kualitas layanan terbaik, dengan berbagai solusi dan inovasi jaringan telekomunikasi. Dibantu dengan Customer Support yang ramah, cepat, dan handal dalam merespon penanganan yang tepat.
          </p>

          {/* List Keunggulan */}
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span> Think Different
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span> Reliable
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">•</span> Quick Response
            </li>
          </ul>

          {/* Tombol */}
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
              Request A Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseReason;
