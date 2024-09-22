import React from 'react';

const Ilistrator: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto text-center py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">Bagaimana Cara Dapat Keuntungan</h1>
      <p className="text-gray-600 mb-12">
        Ajak teman menggunakan HanaPlay dan kamu akan mendapatkan keuntungannya
      </p>

      {/* Grid Layout for Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2Fethnic_friendship_b344a600c6.png&w=360&q=75" // Replace with actual image URL
            alt="Ajak Teman Kamu"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">1. Ajak Teman Kamu</h3>
          <p className="text-gray-500">
            Teman kamu mau berlangganan HanaPLay
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2Fnew_entries_49413361c6.png&w=360&q=75" // Replace with actual image URL
            alt="Isi Data"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">2. Isi Data</h3>
          <p className="text-gray-500">Cukup mengisi tiga data lalu kirim</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2Fspeed_test_b8582b1d71.png&w=360&q=75" // Replace with actual image URL
            alt="Teman Kamu Aktif"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">3. Teman Kamu Aktif</h3>
          <p className="text-gray-500">
            Pastikan teman kamu sudah aktif sebagai pelanggan HanaPLay
          </p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center">
          <img
            src="https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2Fcoins_pana_7c988ab66d.png&w=360&q=75" // Replace with actual image URL
            alt="Nikmati Hadiahnya"
            className="mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">4. Nikmati Hadiahnya</h3>
          <p className="text-gray-500">Kamu bisa menikmati hadiahnya</p>
        </div>
      </div>
    </div>
  );
};

export default Ilistrator;
