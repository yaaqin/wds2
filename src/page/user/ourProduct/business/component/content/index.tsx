import React from 'react';

function Content() {
    return (
        <div className='flex-col '>
            <div className="p-8 text-center md:text-left flex justify-center gap-[32px]">
               
                <div>
                <h2 className="text-[32px] font-bold text-gray-800 mb-4">Effortlessly Fast Internet</h2>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">Exclusive Download Speed</h3>
                <p className="text-gray-500 mb-4  max-w-[500px]">
                    Instead of offering a confusing range of download speeds, Spectrum keeps things fast and simple.
                    With the well-priced 100 Mbps Spectrum Internet, you can stream HD movies, play online games,
                    and have multiple devices on the same internet connection without lag.
                </p>
                <ul className="list-disc list-inside text-gray-500">
                    <li>Lorem ipsum dolor sit amet consectetur.</li>
                    <li>Adipisicing elit, sed do eiusmod tempor incid.</li>
                    <li>Idunt ut labore et dolore magna aliqua.</li>
                </ul>
                </div>
                <div className="relative mb-8">
                    <img className='rounded-lg' src='https://www.wds.co.id/wp-content/uploads/elementor/thumbs/internet-img2-300x300-1-qqbkm8qljjrk8sx8y6uxf08cwj0rtnmree9fbz4trs.jpg' alt=''></img>
                </div>

            </div>
            <div className="p-8 text-center md:text-right flex justify-center gap-[32px]">
                <div className="relative mb-8">
                    <img className='rounded-lg' src='https://www.wds.co.id/wp-content/uploads/elementor/thumbs/internet-img2-300x300-1-qqbkm8qljjrk8sx8y6uxf08cwj0rtnmree9fbz4trs.jpg' alt=''></img>
                </div>
                <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Live Contract Free</h2>
                <h3 className="text-lg font-semibold text-gray-600 mb-4">Don't Pay More For Internet</h3>
                <p className="text-gray-500 mb-4 max-w-[500px]">
                    There are so many modems on the market, and some of them won’t work with Spectrum Internet.
                    However, you don’t need to worry about finding the right modem—Spectrum has one ready for you.
                    Plus, your modem rental fee is included in the listed price, so you won’t have to pay any extra fees for it.
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Request A Quote</button>
                </div>

            </div>
        </div>
    );
}

export default Content;
