import React, { useState } from 'react';

const OrderCheck: React.FC = () => {
  const [orderNumber, setOrderNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement order checking logic here
    console.log('Checking order:', orderNumber);
  };

  return (
    <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-2">Cek Pesanan</h2>
        <p className="text-gray-600 mb-6">Lihat status pesanan Kamu bisa lebih mudah.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Masukkan nomor pesanan, email atau no hp"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Lanjut
          </button>
        </form>

        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">Daftar dengan data diri? Registrasi di sini</a>
          <p className="mt-2">
            Sudah punya akun? <a href="#" className="text-blue-600 hover:underline">Masuk</a>
          </p>
        </div>
      </div>

      <div className="md:w-1/2">
        <img
          src="https://www.myrepublic.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration.73521bc8.jpg&w=860&q=75"
          alt="Ilustrasi Cek Pesanan"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default OrderCheck;