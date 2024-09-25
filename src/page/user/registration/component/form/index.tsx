import React, { useState } from 'react';
import { FaExclamationTriangle, FaHome, FaBuilding, FaBriefcase, FaChevronDown } from 'react-icons/fa';

interface SidebarItemProps {
    label: string;
    active: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, active }) => (
    <div className={`py-2 px-4 ${active ? 'bg-purple-100 text-purple-600 font-semibold' : 'text-gray-700'} hover:bg-purple-50 cursor-pointer`}>
        {label}
    </div>
);

const RegistrationForm: React.FC = () => {
    const [selectedNeed, setSelectedNeed] = useState<string | null>(null);

    return (
        <div className="flex w-full py-8 bg-gradient-to-r from-red-50 to-blue-100">
            <div className='max-w-[1480px] flex mx-auto'>

                {/* Sidebar */}
                <div className="w-1/4 bg-gray-100 p-4">
                    <SidebarItem label="Data Diri" active={true} />
                    <SidebarItem label="Lokasi Pemasangan" active={false} />
                    <SidebarItem label="Pilih Paket" active={false} />
                    <SidebarItem label="Promo" active={false} />
                </div>

                {/* Main Content */}
                <div className="w-3/4 p-8 bg-[#F5F5F1]">
                    <h2 className="text-2xl font-bold mb-6">Data Diri</h2>
                    <p className="text-gray-600 mb-4">Semua data ini wajib di isi untuk kebutuhan proses pemesanan Kamu.</p>

                    {/* Warning Message */}
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6">
                        <div className="flex">
                            <FaExclamationTriangle className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-2" />
                            <p>Wajib mengisi data diri terlebih dahulu kemudian kamu bisa memilih lokasi pemasangan dan paket yang kamu inginkan</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                Nama Lengkap*
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="fullName"
                                type="text"
                                placeholder="Nama lengkap kamu"
                            />
                        </div>

                        <div className="flex mb-4 space-x-4">
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                    Nomor Handphone*
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="tel"
                                    placeholder="62 812 345 678"
                                />
                                <p className="text-xs text-gray-500 mt-1">Pastikan nomor yang dimasukkan aktif Whatsapp</p>
                            </div>
                            <div className="w-1/2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email*
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="emailkamu@domain.com"
                                />
                                <p className="text-xs text-gray-500 mt-1">Pastikan email kamu aktif untuk cek pesanan</p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Pilih Kebutuhan Kamu*
                            </label>
                            <div className="flex space-x-4">
                                {[
                                    { icon: <FaHome />, label: 'Perumahan' },
                                    { icon: <FaBuilding />, label: 'Apartemen' },
                                    { icon: <FaBriefcase />, label: 'Bisnis' },
                                ].map((need) => (
                                    <button
                                        key={need.label}
                                        type="button"
                                        onClick={() => setSelectedNeed(need.label)}
                                        className={`flex items-center justify-center p-4 rounded-lg ${selectedNeed === need.label ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
                                            }`}
                                    >
                                        {need.icon}
                                        <span className="ml-2">{need.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox" />
                                <span className="ml-2">Kode Agen</span>
                            </label>
                        </div>

                        {/* Lokasi Pemasangan */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold">Lokasi Pemasangan</h3>
                                <FaChevronDown className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500">Cek apakah MyRepublic sudah mencakup lokasi Kamu</p>
                        </div>

                        {/* Pilih Paket */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold">Pilih Paket</h3>
                                <FaChevronDown className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500">Kami sediakan banyak paket sesuai dengan kebutuhan kamu</p>
                        </div>

                        {/* Promo */}
                        <div className="mb-4">
                            <div className="flex justify-between items-center">
                                <h3 className="font-bold">Makin Hemat Dengan Promo</h3>
                                <FaChevronDown className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500">Yuk masukkan kode promo untuk mendapatkan promo menarik dari kami</p>
                            <div className="flex mt-2">
                                <input
                                    className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Masukkan kode promo"
                                />
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-r">
                                    Terapkan
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;