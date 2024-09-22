import React from 'react';

const packages = [
  {
    id: 1,
    speed: '250',
    name: 'MyGamer',
    benefit: 'Keuntungan yang didapatkan senilai',
    price: 'Rp 600.000',
    imageUrl: 'https://www.myrepublic.co.id/_next/image?url=https%3A%2F%2Fwww.myrepublic.co.id%2Fimg%2Fgothel%2Fuploads%2FDesign_Thumbnail_Produk_04_27524acf1c.webp&w=360&q=75', // Replace with actual image
  },
  {
    id: 2,
    speed: '100',
    name: 'Nova',
    benefit: 'Keuntungan yang didapatkan senilai',
    price: 'Rp 500.000',
    imageUrl: 'https://www.myrepublic.co.id/_next/image?url=https%3A%2F%2Fwww.myrepublic.co.id%2Fimg%2Fgothel%2Fuploads%2FDesign_Thumbnail_Produk_03_8675fb4207.webp&w=360&q=75', // Replace with actual image
  },
  {
    id: 3,
    speed: '50',
    name: 'Fast',
    benefit: 'Keuntungan yang didapatkan senilai',
    price: 'Rp 400.000',
    imageUrl: 'https://www.myrepublic.co.id/_next/image?url=https%3A%2F%2Fwww.myrepublic.co.id%2Fimg%2Fgothel%2Fuploads%2FDesign_Thumbnail_Produk_02_c4a886f673.webp&w=360&q=75', // Replace with actual image
  },
  {
    id: 4,
    speed: '30',
    name: 'Value',
    benefit: 'Keuntungan yang didapatkan senilai',
    price: 'Rp 300.000',
    imageUrl: 'https://www.myrepublic.co.id/_next/image?url=https%3A%2F%2Fwww.myrepublic.co.id%2Fimg%2Fgothel%2Fuploads%2FDesign_Thumbnail_Produk_01_b1381ab385.webp&w=360&q=75', // Replace with actual image
  },
];

const ReferralBenefitComponent: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-blue-100 py-12 w-full">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Keuntungan Memberikan Referensi Member Get Member
        </h2>
        <p className="text-gray-600">
          Makin tinggi paket yang kamu tawarkan ke temanmu, makin tinggi keuntungan bisa kamu dapatkan!
        </p>
      </div>

      {/* Card Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg shadow-lg pb-6 text-center">
            <img
              src={pkg.imageUrl}
              alt={pkg.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{pkg.benefit}</p>
            <p className="text-lg font-semibold text-blue-600">{pkg.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralBenefitComponent;
