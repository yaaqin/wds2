import React from 'react';

const IpTv: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/2">
                    <img
                        src="https://i.pinimg.com/736x/51/3b/78/513b78c1771ef5afaf91224cb07a260a.jpg"
                        alt="Smart Internet WiFi"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </div>
                <div className="space-y-6 flex flex-col items-start md:items-end w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900">IP Tv</h2>
                    <p className="text-left md:text-end text-gray-700">
                        Lengkapi koleksi Internet WiFi Biznet Home kamu dengan Smart Internet WiFi, perangkat tambahan yang dilengkapi dengan teknologi Mesh WiFi AC1200 Whole-Home Mesh.
                        Dengan Smart Internet WiFi, jangkauan Internet WiFi di rumah menjadi lebih luas dan lebih cepat sampai dengan 800 Mbps.
                    </p>
                    <button className="text-orange-500 border border-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
                        Beli Sekarang
                    </button>
                </div>

            </div>
        </div>

    );
};

export default IpTv;
