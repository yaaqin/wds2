import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Upcoming from '../upcomingFeature';

interface MenuItemProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, children, onClick }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(to);
        if (onClick) onClick();
    };

    return (
        <menu 
            onClick={handleClick}
            className={`cursor-pointer text-[16px] ${location.pathname === to ? 'text-blue-500' : 'hover:text-blue-500'}`}
        >
            {children}
        </menu>
    );
};

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [upcomingModals, setUpcomingModals] = useState<boolean>(false);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    return (
        <div className='bg-[#fff]'>
            <Upcoming showModal={upcomingModals} CloseModal={setUpcomingModals} />

            {/* Top Section - Hidden on mobile */}
            <section className='hidden md:flex justify-between px-[24px] py-[8px] items-center text-[12px]'>
                <p>Internet Super Cepat, Terbaik Setiap Saat</p>
                <div className='flex gap-[18px] items-center'>
                    <p onClick={() => navigate('/mgm')} className='text-blue-900 cursor-pointer text-[16px] font-semibold'>Member get Member</p>
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

            <hr className="hidden md:block" />

            {/* Sticky Navbar Section */}
            <section className="sticky top-0 z-50 bg-white px-[24px] flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img onClick={() => navigate('/')} src="/assets/img/logo.png" alt="WDS Logo" className="h-12 cursor-pointer" />
                </div>

                {/* Hamburger Menu for Mobile */}
                {isMobile && (
                    <button onClick={toggleMenu} className="text-2xl">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                )}

                {/* Navigation for Desktop */}
                {!isMobile && (
                    <nav className="flex gap-[48px] text-lg font-semibold">
                        <MenuItem to="/">HOME</MenuItem>
                        <MenuItem to="/about">ABOUT</MenuItem>
                        <div 
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <menu className={`truncate cursor-pointer text-[16px] ${location.pathname.includes('/hanaplay') ? 'text-blue-500' : 'hover:text-blue-500'}`}>
                                OUR PRODUCT
                            </menu>
                            {showDropdown && (
                                <div className="absolute left-0 w-48 bg-gray-700 text-white shadow-lg rounded-lg py-2 px-4">
                                    <MenuItem to="/hanaplay/broadband">Broadband Residential</MenuItem>
                                    <MenuItem to="/hanaplay/enterprise">Enterprise Business Internet</MenuItem>
                                    <MenuItem to="/hanaplay/business">Broadband Business</MenuItem>
                                </div>
                            )}
                        </div>
                        <MenuItem to="/news">NEWS</MenuItem>
                        <MenuItem to="/contact">CONTACTS</MenuItem>
                    </nav>
                )}
            </section>

            {/* Mobile Sidebar */}
            {isMobile && (
                <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                    <div className="p-5">
                        <button onClick={toggleMenu} className="absolute top-5 right-5 text-2xl">
                            <FaTimes />
                        </button>
                        <nav className="flex flex-col gap-4 mt-10">
                            <MenuItem to="/" onClick={closeMenu}>HOME</MenuItem>
                            <MenuItem to="/about" onClick={closeMenu}>ABOUT</MenuItem>
                            <div className="relative">
                                <menu 
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    className={`cursor-pointer text-[16px] ${location.pathname.includes('/hanaplay') ? 'text-blue-500' : 'hover:text-blue-500'}`}
                                >
                                    OUR PRODUCT
                                </menu>
                                {showDropdown && (
                                    <div className="ml-4 mt-2">
                                        <MenuItem to="/hanaplay/broadband" onClick={closeMenu}>Broadband Residential</MenuItem>
                                        <MenuItem to="/hanaplay/enterprise" onClick={closeMenu}>Enterprise Business Internet</MenuItem>
                                        <MenuItem to="/hanaplay/business" onClick={closeMenu}>Broadband Business</MenuItem>
                                    </div>
                                )}
                            </div>
                            <MenuItem to="/news" onClick={closeMenu}>NEWS</MenuItem>
                            <MenuItem to="/contact" onClick={closeMenu}>CONTACTS</MenuItem>
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;