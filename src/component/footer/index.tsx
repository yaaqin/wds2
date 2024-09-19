import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="flex flex-col items-center space-y-6">
        <div className='w-full max-w-[1480px] flex justify-between'>
          {/* Logo */}
            <img src="/assets/img/logo.png" alt="WDS Logo" className="h-16" />

          {/* Ikon Social Media */}
          <div className="flex justify-start gap-[24px] items-center">
            <a href="#" className="text-white hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400 flex items-center space-x-2">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © 2024 WDS. All Rights Reserved
        </div>

        {/* Nama pembuat */}
        {/* <div className="text-center text-gray-500 text-sm mt-2">
          Created by <span className="font-semibold text-white">Yaaqin</span>
        </div> */}
      </div>
    </footer>
  )
}
