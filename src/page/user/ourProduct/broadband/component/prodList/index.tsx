import React, { useState } from 'react';

const ProdList = () => {
  const [selectedOption, setSelectedOption] = useState('Internet Fiber');

  const internetFiberPlans = [
    { name: 'Business 50', speed: '50 Mbps', price: '634.000' },
    { name: 'Business 100', speed: '100 Mbps', price: '1.034.000' },
    { name: 'Business Pro 150', speed: '150 Mbps', price: '2.234.000' },
    { name: 'Business 300', speed: '300 Mbps', price: '2.234.000' },
  ];

  const comboPlans = [
    { name: 'Business 50 Combo', speed: '50 Mbps', price: '744.000' },
    { name: 'Business 100 Combo', speed: '100 Mbps', price: '1.144.000' },
    { name: 'Business Pro 150 Combo', speed: '150 Mbps', price: '2.344.000' },
    { name: 'Business 300 Combo', speed: '300 Mbps', price: '2.344.000' },
  ];

  const plans = selectedOption === 'Internet Fiber' ? internetFiberPlans : comboPlans;

  return (
    <div className="bg-gray-900 text-white p-8 text-center">
      <h2 className="text-2xl font-bold mb-2">Harga Paket</h2>
      <h1 className="text-4xl font-bold mb-4">Tentukan Bandwidth Sesuai Kebutuhanmu</h1>
      <p className="mb-6">
        Sekarang saatnya menikmati kecepatan baru internet fiber ultra cepat dan unlimited
        dari MyRepublic. Langganan Sekarang!
      </p>

      <div className="flex mb-6 mx-auto justify-center">
        <button
          className={`px-4 py-2 rounded-l-lg ${
            selectedOption === 'Internet Fiber' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onClick={() => setSelectedOption('Internet Fiber')}
        >
          Internet Fiber
        </button>
        <button
          className={`px-4 py-2 rounded-r-lg ${
            selectedOption === 'Combo Internet + TV' ? 'bg-blue-700' : 'bg-gray-700'
          }`}
          onClick={() => setSelectedOption('Combo Internet + TV')}
        >
          Combo Internet + TV
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="bg-blue-900 p-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p>{plan.speed}</p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold mb-2">Rp {plan.price} <span className="text-sm font-normal">/bulan</span></p>
              <button className="bg-blue-900 text-white px-4 py-2 rounded w-full mb-2">
                Langganan Sekarang
              </button>
              <button className="border border-blue-900 text-blue-900 px-4 py-2 rounded w-full">
                Chat Sales
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProdList;