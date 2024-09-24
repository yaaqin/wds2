import React from 'react';
import { ArrowRight, LogIn, DownloadCloud, CreditCard, LucideIcon } from 'lucide-react';

interface SubscriptionStepProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
  buttonText: string;
}

const SubscriptionStep: React.FC<SubscriptionStepProps> = ({ icon, title, description, buttonText }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-blue-200 rounded-full rounded-lb-none rounded-rt-xl p-3 mb-4">
      {icon}
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm mb-4">{description}</p>
    <button className="bg-white text-black py-2 px-4 rounded-full text-sm flex items-center">
      {buttonText} <ArrowRight size={16} className="ml-2" />
    </button>
  </div>
);

const HanaPlaySubscription: React.FC = () => {
  const steps: SubscriptionStepProps[] = [
    {
      icon: <LogIn size={24} />,
      title: "1. Registrasi",
      description: "Cek area lokasi pemasangan, pilih paket, dan pilih jadwal pemasangan.",
      buttonText: "Registrasi Sekarang"
    },
    {
      icon: <DownloadCloud size={24} />,
      title: "2. Instalasi",
      description: "Lacak proses instalasi kemudian nikmati layanan MyRepublic!",
      buttonText: "Lacak Proses Pesananmu"
    },
    {
      icon: <CreditCard size={24} />,
      title: "3. Bayar",
      description: "Bayar tagihan dan nikmati kecepatan layanan MyRepublic.",
      buttonText: "Lihat Cara Bayar"
    }
  ];

  return (
    <div className="bg-blue-300 p-8 rounded-3xl max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">Cara Berlangganan di MyRepublic</h2>
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