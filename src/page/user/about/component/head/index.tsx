import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../../../../component/gsapHook';

const BenefitsSection: React.FC = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  // Gunakan hook untuk bagian kiri (geser dari kiri)
  useGsapScrollTrigger(leftRef, 'left');

  // Gunakan hook untuk bagian kanan (geser dari kanan)
  useGsapScrollTrigger(rightRef, 'right');
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">

        {/* Left Side - Image */}
        <div
          ref={leftRef}
          className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="https://www.wds.co.id/wp-content/uploads/2024/06/PAGE-1-02-1024x576.jpg"
            alt="High-Speed Internet"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - Text and Button */}
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
          <h2 className="text-xl font-semibold mb-2">HanaPlay benefits</h2>
          <h3 className="text-2xl font-bold mb-4">Want to Supercharge your Speed?</h3>
          <p className="text-blue-500 font-semibold mb-4">
            Internet Super Cepat, Terbaik Setiap Saat
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>100% Bebas Biaya Pasang</li>
            <li>Unlimited Internet</li>
            <li>Simetris Download dan Upload</li>
            <li>Ideal untuk seluruh device</li>
          </ul>

          {/* Call to Action Button */}
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all">
            Request A Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
