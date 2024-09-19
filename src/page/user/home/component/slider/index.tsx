import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1",
    text: "Welcome to Slide 1",
  },
  {
    url: "https://via.placeholder.com/800x400/28A745/FFFFFF?text=Slide+2",
    text: "This is Slide 2",
  },
  {
    url: "https://via.placeholder.com/800x400/007BFF/FFFFFF?text=Slide+3",
    text: "Enjoy Slide 3",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full">
              <img src={image.url} alt={`Slide ${index + 1}`} className="w-full object-cover" />
              {/* Teks di tengah */}
              <div className="absolute inset-0 flex justify-center items-center">
                <h2 className="text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded animate-fade-in">
                  {image.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots navigasi */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
