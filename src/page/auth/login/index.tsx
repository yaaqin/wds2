import React, { useState } from 'react';
import Upcoming from '../../../component/upcomingFeature';

const LoginForm: React.FC = () => {
    const [loginInput, setLoginInput] = useState('');
    const [upcoming, setUpcoming] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginInput(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', loginInput);
        setUpcoming(true)
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-blue-100 to-blue-100 text-center">
            <Upcoming showModal={upcoming} CloseModal={setUpcoming} />
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <img src="https://www.wds.co.id/wp-content/uploads/2024/06/cropped-logo-wds-hp-15.png" alt="HanaPlay Logo" className="h-8" />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-2">Masuk</h2>
                <p className="text-gray-600 mb-6">
                    Gunakan ID Pelanggan, Email atau Nomor HP yang terdaftar dalam akun HanaPlay.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Masukkan Email, No HP, atau ID Pelanggan"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
                        value={loginInput}
                        onChange={handleInputChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Masuk
                    </button>
                </form>

                <div className="text-center my-4 text-gray-500">atau</div>

                <button
                    onClick={() => setUpcoming(true)}
                    className="w-full bg-white text-gray-800 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300"
                >
                    Langganan Sekarang
                </button>

                <div className="text-center mt-6">
                    <p onClick={() => setUpcoming(true)}
                        className="text-blue-600 hover:underline cursor-pointer">
                        Mau cek status pesanan? Cek di sini
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;