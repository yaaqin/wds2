import React from 'react';
import PricingCard from './card';
import { pricingData } from './data';

const PackList: React.FC = () => {
  return (
    <section className="container mx-auto py-16  px-[24px]">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold">NEW INTERNET PACKAGES ARE HERE!</h2>
        <p className="text-gray-500">Better-than-ever Offers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingData.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            downloadSpeed={plan.downloadSpeed}
            uploadSpeed={plan.uploadSpeed}
            price={plan.price}
            features={plan.features}
            color={plan.color}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white">
          View All Offers
        </button>
      </div>
    </section>
  );
};

export default PackList;
