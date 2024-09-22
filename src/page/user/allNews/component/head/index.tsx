import React from 'react'

export default function Head() {
    return (
        <div className="relative w-full h-56">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage: `url('https://www.wds.co.id/wp-content/uploads/2024/06/handsome-man-using-laptop-travel-nature-scaled.jpg')`,
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                {/* Title */}
                <h1 className="text-[48px] font-bold capitalize">Berita Terbaru</h1>

                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 mt-2 text-sm">
                    <p className="hover:underline">
                        Dapatkan informasi terbaru dari HanaPlay di sini!
                    </p>

                </div>
            </div>
        </div>
    )
}
