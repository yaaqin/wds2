import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Icon library
import { useLocation, useNavigate } from 'react-router-dom';
import Upcoming from '../upcomingFeature';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [upcomingModals, setUpcomingModals] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // State untuk menampilkan dropdown

    return (
        <div className='bg-[#fff]'>
            <Upcoming showModal={upcomingModals} CloseModal={setUpcomingModals} />

            {/* Top Section */}
            <section className='hidden md:flex justify-between px-[24px] py-[8px] items-center text-[12px]'>
                <p>Internet Super Cepat, Terbaik Setiap Saat</p>
                <div className='flex gap-[18px] items-center'>
                    <p onClick={()=>navigate('/mgm')} className='text-blue-900 cursor-pointer text-[16px] font-semibold'>Member get Member</p>
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
                    <div className="relative"
                        onMouseEnter={() => setShowDropdown(true)}
                        onMouseLeave={() => setShowDropdown(false)}>
                        <menu className={`cursor-pointer text-[16px] ${location.pathname === '/hanaplay/broadband' || location.pathname === '/hanaplay/enterprise' || location.pathname === '/hanaplay/business' ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                            OUR PRODUCT
                        </menu>
                        {showDropdown && (
                            <div
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)} 
                                className="absolute left-0 w-48 bg-gray-700 text-white shadow-lg rounded-lg py-2">
                                <menu onClick={()=>navigate('hanaplay/broadband')} className="hover:text-blue-500 cursor-pointer block px-4 py-2">Broadband Residential</menu>
                                <menu onClick={()=>navigate('hanaplay/enterprise')} className="hover:text-blue-500 cursor-pointer block px-4 py-2">Enterprise Business Internet</menu>
                                <menu onClick={()=>navigate('hanaplay/business')} className="hover:text-blue-500 cursor-pointer block px-4 py-2">Broadband Business</menu>
                            </div>
                        )}
                    </div>
                    <menu onClick={() => navigate('news')} className={`cursor-pointer text-[16px] ${location.pathname === '/news' ? 'text-blue-500' : 'hover:text-blue-500'}`}>NEWS</menu>
                    <menu onClick={() => navigate('contact')} className={`cursor-pointer text-[16px] ${location.pathname === '/contact' ? 'text-blue-500' : 'hover:text-blue-500'}`}>CONTACTS</menu>
                </nav>
            </section>
        </div>
    );
}
