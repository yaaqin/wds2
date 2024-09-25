import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className="text-white hover:text-gray-400 transition-colors duration-300">
    {icon}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-[1480px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <img src="/assets/img/logo.png" alt="WDS Logo" className="h-12 md:h-16" />
          </div>

          {/* Ikon Social Media */}
          <div className="flex justify-center md:justify-end gap-6 items-center">
            <SocialIcon href="#" icon={<FaTwitter size={24} />} />
            <SocialIcon href="#" icon={<FaFacebookF size={24} />} />
            <SocialIcon href="#" icon={<FaInstagram size={24} />} />
            <SocialIcon href="#" icon={<FaYoutube size={24} />} />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-6">
          © {new Date().getFullYear()} WDS. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;