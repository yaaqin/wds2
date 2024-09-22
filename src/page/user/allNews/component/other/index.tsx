import React from 'react'

export default function Other() {
  return (
    <div className="bg-white py-12 px-[24px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
          <img
            src="https://i.pinimg.com/originals/51/3b/78/513b78c1771ef5afaf91224cb07a260a.jpg" // Replace with your image
            alt="IMACO Award"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="text-sm text-gray-500">13 Agt 2024</span>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              MyRepublic Mendapatkan Penghargaan IMACO 2024 dari Warta Ekonomi
            </h3>
            <p className="mt-2 text-gray-700">
              Penghargaan ini diberikan oleh Warta Ekonomi kepada perusahaan yang terus melakukan inovasi pertumbuhan bisnis di setiap sektor Industri.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
          <img
            src="https://i.pinimg.com/originals/51/3b/78/513b78c1771ef5afaf91224cb07a260a.jpg" // Replace with your image
            alt="Indonesia Digital Popular Brand Award"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="text-sm text-gray-500">22 Jul 2024</span>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              MyRepublic Mendapatkan Penghargaan Indonesia Digital Popular Brand Award 2024
            </h3>
            <p className="mt-2 text-gray-700">
              Penghargaan Indonesia Digital Popular Brand Award 2024 dari Infobrand untuk...
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 shadow-lg rounded-md overflow-hidden">
          <img
            src="https://i.pinimg.com/originals/51/3b/78/513b78c1771ef5afaf91224cb07a260a.jpg" // Replace with your image
            alt="Stevie Award APAC"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <span className="text-sm text-gray-500">7 Jun 2024</span>
            <h3 className="mt-2 text-lg font-bold text-gray-900">
              MyRepublic Raih Tiga Penghargaan Stevie Award APAC 2024
            </h3>
            <p className="mt-2 text-gray-700">
              MyRepublic mendapatkan dua Silver Award dan satu Bronze Award Stevie Award APA...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
