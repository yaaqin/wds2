import React from 'react';
import { ArrowRight, LogIn, DownloadCloud, CreditCard, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SubscriptionStepProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  buttonText: string;
  path: string
}
const SubscriptionStep: React.FC<SubscriptionStepProps> = ({ icon, title, description, buttonText, path }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-blue-200 rounded-full rounded-bl-none rounded-tr-xl p-3 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <button
        onClick={() => navigate(path)}
        className="bg-white text-black py-2 px-4 rounded-full text-sm flex items-center"
      >
        {buttonText} <ArrowRight size={16} className="ml-2" />
      </button>
    </div>
  );
};

const HanaPlaySubscription: React.FC = () => {
  const steps: SubscriptionStepProps[] = [
    {
      icon: <LogIn size={24} />,
      title: "1. Registrasi",
      description: "Cek area lokasi pemasangan, pilih paket, dan pilih jadwal pemasangan.",
      buttonText: "Registrasi Sekarang",
      path: '/registration'
    },
    {
      icon: <DownloadCloud size={24} />,
      title: "2. Instalasi",
      description: "Lacak proses instalasi kemudian nikmati layanan HanaPlay!",
      buttonText: "Lacak Proses Pesananmu",
      path: '/order-check'
    },
    {
      icon: <CreditCard size={24} />,
      title: "3. Bayar",
      description: "Bayar tagihan dan nikmati kecepatan layanan HanaPlay.",
      buttonText: "Lihat Cara Bayar",
      path: '/support/how-to-pay'
    }
  ];

  return (
<div className="bg-gradient-to-r from-red-50 to-blue-100 p-8 rounded-tl-[48px] rounded-tr-0 rounded-bl-0 rounded-br-[48px] max-w-4xl mx-auto my-8">
        <h2 className="text-2xl font-bold text-center mb-2">Cara Berlangganan di HanaPlay</h2>
      <p className="text-center mb-8">Tiga langkah mudah untuk menggunakan layanan dari kami</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <SubscriptionStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default HanaPlaySubscription;