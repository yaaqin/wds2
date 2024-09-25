import React, { useState } from 'react';
import { FaSearch, FaChevronDown, FaComments, FaUser, FaPhone, FaEnvelope, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Tab: React.FC<{ label: string; active: boolean; onClick: () => void }> = ({ label, active, onClick }) => (
  <button
    className={`px-4 py-2 font-medium ${active ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-500'}`}
    onClick={onClick}
  >
    {label}
  </button>
);

const SidebarItem: React.FC<{ label: string; active: boolean }> = ({ label, active }) => (
  <div className={`py-2 px-4 ${active ? 'bg-purple-100 text-purple-600' : 'text-gray-700'} hover:bg-purple-50 cursor-pointer`}>
    {label}
  </div>
);

const PaymentStep: React.FC<{ number: number; description: string }> = ({ number, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mb-2">
      {number}
    </div>
    <p className="text-sm">{description}</p>
  </div>
);

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; subText?: string }> = ({ icon, text, subText }) => (
  <div className="flex items-center space-x-2 py-2">
    {icon}
    <div>
      <div className="font-medium">{text}</div>
      {subText && <div className="text-sm text-gray-500">{subText}</div>}
    </div>
  </div>
);

const TutorialSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Metode Pembayaran');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Minimarket');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div className="space-x-4">
          <Tab label="FAQ" active={activeTab === 'FAQ'} onClick={() => setActiveTab('FAQ')} />
          <Tab label="Panduan" active={activeTab === 'Panduan'} onClick={() => setActiveTab('Panduan')} />
          <Tab label="Metode Pembayaran" active={activeTab === 'Metode Pembayaran'} onClick={() => setActiveTab('Metode Pembayaran')} />
          <Tab label="Troubleshoot" active={activeTab === 'Troubleshoot'} onClick={() => setActiveTab('Troubleshoot')} />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari Topik Bantuan"
            className="pl-10 pr-4 py-2 border rounded-full"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      <div className="flex">
        <div className="w-1/4 pr-4">
          <SidebarItem label="Channel Pembayaran" active={false} />
          <SidebarItem label="ATM" active={false} />
          <SidebarItem label="Internet Banking" active={false} />
          <SidebarItem label="Mobile Banking" active={false} />
          <SidebarItem label="Kartu Kredit" active={false} />
          <SidebarItem label="E-Commerce" active={false} />
          <SidebarItem label="Minimarket" active={true} />
          <SidebarItem label="Scan QRIS" active={false} />
        </div>

        <div className="w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Indomaret, Alfamart, Alfamidi, Lawson, Ceriamart</h2>
              <FaChevronDown className="text-gray-500" />
            </div>
            <img alt='' src='https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2FPAYMENT_MINIMARKET_min_1d04b474aa.jpg&w=1080&q=75'></img>
            <div className="mt-4">
              <ol className="list-decimal list-inside">
                <li>Pelanggan datang ke minimarket</li>
                <li>Pelanggan menyebutkan ID nya (tanpa huruf C) ke kasir</li>
                <li>Pelanggan melakukan pembayaran</li>
                <li>Pelanggan menerima struk pembayaran</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-purple-100 rounded-lg p-6 flex items-center space-x-4">
          <img src="https://www.myrepublic.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration.65aa6590.png&w=256&q=75" alt="Halo Rocketers" className="w-24 h-24" />
          <div>
            <h3 className="text-lg font-bold text-purple-600">Halo Rocketeers!</h3>
            <p>Belum menemukan jawaban yang dicari? Hubungi Kami dibawah ini</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <ContactItem icon={<FaComments className="text-purple-600" />} text="FAQ" subText="Pertanyaan seputar layanan MyRepublic" />
          <ContactItem icon={<FaUser className="text-purple-600" />} text="Self Service" subText="Layanan mandiri melalui dashboard" />
          <ContactItem icon={<FaPhone className="text-purple-600" />} text="Web Call" subText="Telepon customer service tanpa pulsa" />
          <ContactItem icon={<FaPhone className="text-purple-600" />} text="1500818" subText="Telepon customer service dengan pulsa" />
          <ContactItem icon={<FaEnvelope className="text-purple-600" />} text="cs@myrepublic.net.id" subText="Email pengaduan layanan" />
          <ContactItem icon={<FaWhatsapp className="text-purple-600" />} text="0899 8150 0818" subText="Virtual Assistant MIRA" />
          <ContactItem icon={<FaTelegram className="text-purple-600" />} text="@myrepublicidbot" subText="Virtual Assistant" />
        </div>
      </div>
    </div>
  );
};

export default TutorialSection;