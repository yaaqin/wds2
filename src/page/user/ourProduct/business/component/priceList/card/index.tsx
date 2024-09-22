import React from 'react';

interface PricingCardProps {
  title: string;
  downloadSpeed: string;
  uploadSpeed: string;
  price: string;
  features: string[];
  color: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, downloadSpeed, uploadSpeed, price, features, color }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className={`p-6 text-white ${color} font-bold text-center`}>
        {title}
      </div>
      <div className="p-6">
          <div>
            <div className="mb-4">
              <div className="text-center text-blue-500 font-semibold">DOWNLOAD</div>
              <div className="text-center text-4xl font-bold">{downloadSpeed}</div>
              <div className="text-center text-sm text-gray-500">Download Speeds</div>
            </div>
            <div className="mb-4">
              <div className="text-center text-blue-500 font-semibold">UPLOAD</div>
              <div className="text-center text-4xl font-bold">{uploadSpeed}</div>
              <div className="text-center text-sm text-gray-500">Upload Speeds</div>
            </div>
        </div>
        <div className="my-4">
          <ul className="space-y-2 text-sm text-gray-700">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center font-semibold text-lg mt-4">{price}</div>
        <div className="text-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
