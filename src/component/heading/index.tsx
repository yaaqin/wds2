import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Heading: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
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
        <h1 className="text-[48px] font-bold capitalize">{location.pathname.substring(1).replace(/\//g, ' / ')}</h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mt-2 text-sm">
          <p onClick={()=>navigate('/')} className="hover:underline">
            Home
          </p>
          <span>/</span>
          <span className='capitalize'>{location.pathname.substring(1).replace(/\//g, ' / ')}</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
