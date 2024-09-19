import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center space-y-4">
      <div className="text-5xl text-blue-400">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
