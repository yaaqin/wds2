import React, { useState } from 'react';

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    customerID: '',
    friendName: '',
    friendPhone: '',
    friendEmail: '',
    agreement: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md border-[1px]">
      <h1 className="text-2xl font-bold mb-4">Ajak semua temanmu yuk!</h1>
      <p className="text-gray-500 mb-6">Lengkapi data di bawah ini ya</p>
      
      <form onSubmit={handleSubmit}>
        {/* Customer ID */}
        <div className="mb-4">
          <label htmlFor="customerID" className="block text-gray-700 font-medium">
            ID Pelanggan HanaPlay*
          </label>
          <input
            type="text"
            id="customerID"
            name="customerID"
            placeholder="Contoh 123456"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.customerID}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Friend's Name */}
        <div className="mb-4">
          <label htmlFor="friendName" className="block text-gray-700 font-medium">
            Nama Temanmu*
          </label>
          <input
            type="text"
            id="friendName"
            name="friendName"
            placeholder="Nama Temanmu"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.friendName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Friend's Phone Number */}
        <div className="mb-4">
          <label htmlFor="friendPhone" className="block text-gray-700 font-medium">
            Nomor Handphone Temanmu*
          </label>
          <input
            type="text"
            id="friendPhone"
            name="friendPhone"
            placeholder="62 432 3423423"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.friendPhone}
            onChange={handleInputChange}
            required
          />
          <p className="text-sm text-gray-500 mt-1">Pastikan nomor terhubung dengan WhatsApp</p>
        </div>

        {/* Friend's Email */}
        <div className="mb-4">
          <label htmlFor="friendEmail" className="block text-gray-700 font-medium">
            Email Temanmu*
          </label>
          <input
            type="email"
            id="friendEmail"
            name="friendEmail"
            placeholder="emailtemanmu@domain.com"
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            value={formData.friendEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Agreement Checkbox */}
        <div className="mb-6">
          <label className="inline-flex items-start">
            <input
              type="checkbox"
              name="agreement"
              className="form-checkbox h-5 w-5 text-purple-600 border-gray-300 rounded"
              checked={formData.agreement}
              onChange={handleInputChange}
              required
            />
            <span className="ml-2 text-gray-700">
              Saya setuju bahwa data tersebut sudah disetujui oleh pemiliknya dan akan digunakan untuk registrasi di HanaPlay
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Kirim
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
