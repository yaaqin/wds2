import React, { useState } from 'react';
import CoverageList from './modals';

const CityCoverageSection: React.FC = () => {
    const [showModals, setShowModals] = useState(false);

    return (
        <div className="bg-gradient-to-r from-red-50 to-blue-100 py-8 w-full px-4 md:px-6 lg:px-8">
            <CoverageList showModal={showModals} CloseModal={setShowModals} />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Left Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                        Temukan HanaPlay di Kota Kamu
                    </h2>
                    <p className="text-sm md:text-base">
                        Nikmati internet terbaik dengan HanaPlay di Kota Kamu. Cek sekarang apakah kotamu sudah tercakup oleh jaringan HanaPlay.
                    </p>
                </div>

                {/* Right Button */}
                <div className="w-full md:w-auto">
                    <button 
                        onClick={() => setShowModals(true)} 
                        className="w-full md:w-auto bg-white text-blue-900 font-medium py-3 px-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center md:justify-start"
                    >
                        <span className="mr-0 md:mr-2 mb-2 md:mb-0">Cek kota mu di sini</span>
                        <span className="text-xs text-gray-600">40+ Kota / Kabupaten Tercakup</span>
                        <svg className="mt-2 md:mt-0 md:ml-2 w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CityCoverageSection;