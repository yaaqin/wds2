import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="relative">
        {/* Gambar */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[90vh] object-cover rounded-lg"
        />
      </div>
      {/* Pagination Indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'} cursor-pointer`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
