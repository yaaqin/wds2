import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NormalCard() {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
          <img
            src="https://i.pinimg.com/originals/51/3b/78/513b78c1771ef5afaf91224cb07a260a.jpg" // Replace with your image
            alt="IMACO Award"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 onClick={()=>navigate('/news/slug')} className="mt-2 text-lg font-bold text-gray-900 hover:underline cursor-pointer">
              MyRepublic Mendapatkan Penghargaan IMACO 2024 dari Warta Ekonomi
            </h3>
            <p className="mt-2 text-gray-700 line-clamp-2">
              Penghargaan ini diberikan oleh Warta Ekonomi kepada perusahaan yang terus melakukan inovasi pertumbuhan bisnis di setiap sektor Industri.
            </p>
          </div>
          <div className="flex items-center space-x-3 p-4">
            {/* Gambar Profil */}
            <img
              src="https://i.pinimg.com/736x/b6/a1/43/b6a1430f34b8581bf4c02aea3d227104.jpg" // Ganti dengan URL gambar profil yang sesuai
              alt="Author"
              className="rounded-full w-10 h-10"
            />
            <div>
              {/* Nama Penulis */}
              <h3 className="text-gray-700 font-semibold">Paolo Lacche</h3>
              {/* Tanggal dan Estimasi Waktu Baca */}
              <p className="text-gray-500 text-sm">
                Sep 14 &bull; 8 min read
              </p>
            </div>
          </div>
        </div>
  )
}
