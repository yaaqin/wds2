import React from 'react';
import PricingCard from './card';
import { pricingData } from '../../../../home/component/packList/data';


const Pricing: React.FC = () => {

  return (
    <section className='max-w-[1480px] mx-auto my-10'>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {pricingData.map((plan, index) => (
        <PricingCard key={index}
        title={plan.title}
        downloadSpeed={plan.downloadSpeed}
        uploadSpeed={plan.uploadSpeed}
        price={plan.price}
        features={plan.features}
        color={plan.color}  />
      ))}
    </div>
    </section>
  );
};

export default Pricing;
