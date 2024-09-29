import React, { useRef } from 'react'
import { FaWifi, FaTv, FaGamepad, FaHourglassHalf, FaTachometerAlt, FaHeadset } from 'react-icons/fa';
import useGsapScrollTrigger from '../../../../../component/gsapHook';

export default function MenuList() {
    
  const gridRef = useRef<HTMLDivElement>(null); // Reference ke grid yang berisi card

  // Gunakan hook untuk animasi stagger pada card
  useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
    return (
        <div ref={gridRef} className="flex justify-between space-x-8 mt-8 max-w-[1480px] mx-auto">
            {/* Internet Icon */}
            <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4">
                    <FaWifi className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Internet</p>
            </div>

            {/* Internet + TV Icon */}
            <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4">
                    <FaTv className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Internet + TV</p>
            </div>

            {/* Gamer Icon */}
            <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4">
                    <FaGamepad className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Gamer</p>
            </div>

            {/* Promo Icon */}
            <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4">
                    <FaHourglassHalf className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Promo</p>
            </div>

            {/* Speed Test Icon */}
            <div className="text-center">
                <div className="bg-blue-500 rounded-full p-4">
                    <FaTachometerAlt className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Speed Test</p>
            </div>

            {/* Pengaduan 24/7 Icon */}
            <div className="text-center">
                <div className="bg-yellow-500 rounded-full p-4">
                    <FaHeadset className="text-white text-2xl" />
                </div>
                <p className="mt-2 text-sm">Pengaduan 24/7</p>
            </div>
        </div>

    )
}
