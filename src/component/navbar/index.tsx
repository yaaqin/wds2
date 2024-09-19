import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Icon library
import { useLocation, useNavigate } from 'react-router-dom';
import Upcoming from '../upcomingFeature';


export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation();
    const [upcomingModals, setUpcomingModals] = useState(false)
    return (
        <div className='bg-[#fff]'>
            <Upcoming showModal={upcomingModals} CloseModal={setUpcomingModals} />

            {/* Top Section */}
            <section className='flex justify-between px-[24px] py-[8px] items-center text-[12px]'>
                <p>Internet Super Cepat, Terbaik Setiap Saat</p>
                <div className='flex gap-[18px]'>
                    {/* Location */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-500 rounded-full p-3">
                            <FaMapMarkerAlt className="text-white" />
                        </div>
                        <span className="text-gray-700 text-[12px]">WDS Tower, Golden Boulevard Q39, BSD City</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-500 rounded-full p-3">
                            <FaEnvelope className="text-white" />
                        </div>
                        <span className="text-gray-700 text-[12px]">support@wds.co.id</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-500 rounded-full p-3">
                            <FaPhone className="text-white" />
                        </div>
                        <span className="text-gray-700 text-[12px]">021 538 5577</span>
                    </div>
                </div>
            </section>

            <hr />

            {/* Sticky Navbar Section */}
            <section className="sticky top-0 z-50 bg-white px-[24px] flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img onClick={() => navigate('/')} src="/assets/img/logo.png" alt="WDS Logo" className="h-12 cursor-pointer" />
                </div>

                {/* Navigation */}
                <nav className="flex gap-[48px] text-lg font-semibold">
                    <menu onClick={() => navigate('/')} className={`cursor-pointer text-[16px] ${location.pathname === '/' ? 'text-blue-500' : 'hover:text-blue-500'}`}>HOME</menu>
                    <menu onClick={() => navigate('/about')} className={`cursor-pointer text-[16px] ${location.pathname === '/about' ? 'text-blue-500' : 'hover:text-blue-500'}`}>ABOUT</menu>
                    <menu onClick={() => setUpcomingModals(true)} className={`cursor-pointer text-[16px] ${location.pathname === '/product' ? 'text-blue-500' : 'hover:text-blue-500'}`}>OUR PRODUCT</menu>
                    <menu onClick={() => navigate('news')} className={`cursor-pointer text-[16px] ${location.pathname === '/news' ? 'text-blue-500' : 'hover:text-blue-500'}`}>NEWS</menu>
                    <menu onClick={() => navigate('contact')} className={`cursor-pointer text-[16px] ${location.pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>CONTACTS</menu>
                </nav>
            </section>
        </div>

    )
}
