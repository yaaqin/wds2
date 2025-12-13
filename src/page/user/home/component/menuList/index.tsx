import React, { useRef } from 'react'
import useGsapScrollTrigger from '../../../../../hook/gsapHook';
import { WhatsappBusinessIcon } from 'hugeicons-react';

export default function MenuList() {

    const gridRef = useRef<HTMLDivElement>(null); // Reference ke grid yang berisi card

    // Gunakan hook untuk animasi stagger pada card
    useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
    return (
        <div ref={gridRef} className="px-4 mt-8 max-w-[1480px] mx-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6">
                {/* Internet Icon */}
                <div className="text-center">
                    <div className="bg-blue-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Internet</p>
                </div>

                {/* Internet + TV Icon */}
                <div className="text-center">
                    <div className="bg-blue-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Internet + TV</p>
                </div>

                {/* Gamer Icon */}
                <div className="text-center">
                    <div className="bg-blue-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Gamer</p>
                </div>

                {/* Promo Icon */}
                <div className="text-center">
                    <div className="bg-blue-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Promo</p>
                </div>

                {/* Speed Test Icon */}
                <div className="text-center">
                    <div className="bg-blue-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Speed Test</p>
                </div>

                {/* Pengaduan 24/7 Icon */}
                <div className="text-center">
                    <div className="bg-yellow-500 rounded-full p-3 sm:p-4 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
                        <WhatsappBusinessIcon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <p className="mt-2 text-xs sm:text-sm max-w-[80px] mx-auto text-center leading-tight">Pengaduan 24/7</p>
                </div>
            </div>
        </div>

    )
}
