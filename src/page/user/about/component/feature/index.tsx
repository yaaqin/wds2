import React from 'react';
import { GearIcon, SignalIcon, SpeeedIcon, SupportIcon } from './icon';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="shadow-lg rounded-lg p-6 text-center transition-all duration-300 group hover:bg-purple-500 hover:text-white">
      <div className="mb-4">
        <div className="h-12 flex justify-center">
          {/* Icon with hover color change */}
          <div className="text-purple-500 group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="bg-gradient-to-r w-full from-purple-400 via-purple-500 to-purple-600 py-16">
      <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<SupportIcon />}
          title="24/7 Support"
          description="Chat with Our Support"
        />
        <FeatureCard
          icon={<GearIcon />}
          title="Free Installation"
          description="Bebas Biaya Pasang"
        />
        <FeatureCard
          icon={<SignalIcon />}
          title="Internet Stabil"
          description="Internet stabil tanpa tambahan biaya setiap bulannya"
        />
        <FeatureCard
          icon={<SpeeedIcon />}
          title="Super Cepat"
          description="Internet unlimited tanpa batasan kuota / FUP"
        />
      </div>
    </div>
  );
};

export default Features;
