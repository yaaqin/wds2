import React from 'react';

function Content() {
    return (
        <div className='flex flex-col gap-12 max-w-7xl mx-auto px-4 py-8'>
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-[32px] font-bold text-gray-800 mb-4">
                    Effortlessly Fast Internet
                </h2>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    Exclusive Download Speed
                </h3>
                <p className="text-gray-500 mb-4">
                    Instead of offering a confusing range of download speeds, Spectrum keeps things fast and simple.
                    With the well-priced 100 Mbps Spectrum Internet, you can stream HD movies, play online games,
                    and have multiple devices on the same internet connection without lag.
                </p>
                <ul className="list-disc list-inside text-gray-500 space-y-2">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Adipisicing elit, sed do eiusmod tempor incid.</li>
                    <li>Idunt ut labore et dolore magna aliqua.</li>
                </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
                <img 
                    className='rounded-lg w-full max-w-[400px] object-cover' 
                    src='https://www.wds.co.id/wp-content/uploads/elementor/thumbs/internet-img2-300x300-1-qqbkm8qljjrk8sx8y6uxf08cwj0rtnmree9fbz4trs.jpg' 
                    alt='Internet Service'
                />
            </div>
        </div>
    
        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 flex justify-center md:justify-start">
                <img 
                    className='rounded-lg w-full max-w-[400px] object-cover' 
                    src='https://www.wds.co.id/wp-content/uploads/elementor/thumbs/internet-img2-300x300-1-qqbkm8qljjrk8sx8y6uxf08cwj0rtnmree9fbz4trs.jpg' 
                    alt='Contract Free Service'
                />
            </div>
            <div className="order-1 md:order-2 text-left md:text-right">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Live Contract Free
                </h2>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">
                    Don't Pay More For Internet
                </h3>
                <p className="text-gray-500 mb-4">
                    There are so many modems on the market, and some of them won't work with Spectrum Internet.
                    However, you don't need to worry about finding the right modem—Spectrum has one ready for you.
                    Plus, your modem rental fee is included in the listed price, so you won't have to pay any extra fees for it.
                </p>
                <button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white py-2 px-6 rounded-full">
                    Request A Quote
                </button>
            </div>
        </div>
    </div>
    );
}

export default Content;
