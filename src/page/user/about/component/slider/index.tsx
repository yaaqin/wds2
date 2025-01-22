import React from 'react';
import './slider.css'

interface SliderProps {
  width: string;
  height: string;
  quantity: number;
  images: string[];
  reverse?: boolean;
}

const Slider: React.FC<SliderProps> = ({ width, height, quantity, images, reverse }) => {
  return (
    <div className="slider" style={{ '--width': width, '--height': height, '--quantity': quantity } as React.CSSProperties}>
      <div className="list">
        {images.map((src, index) => (
          <div className="item flex items-center" style={{ '--position': index + 1 } as React.CSSProperties} key={index}>
            <img src={src} alt={`Slider image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const sliderImages = [
    '/assets/img/partner/allium.jpg',
    '/assets/img/partner/apec.jpg',
    '/assets/img/partner/atria.jpg',
    '/assets/img/partner/cifor.jpg',
    '/assets/img/partner/forest.jpg',
    '/assets/img/partner/mandiri.jpg',
    '/assets/img/partner/pacificCross.jpg',
    '/assets/img/partner/parador.jpg',
    '/assets/img/partner/paramount.jpg',
    '/assets/img/partner/sahid.jpg',
    '/assets/img/partner/santika.jpg',
    '/assets/img/partner/totalBuah.jpg',
    '/assets/img/partner/tulip.jpg',
    '/assets/img/partner/united.jpg',
    '/assets/img/partner/vega.jpg'
  ];

  const slider2Images = [
    '/assets/img/partner2/angkasapura.jpg',
    '/assets/img/partner2/cimb.jpg',
    '/assets/img/partner2/indace.jpg',
    '/assets/img/partner2/japfa.jpg',
    '/assets/img/partner2/marina.jpg',
    '/assets/img/partner2/mimaki.jpg',
    '/assets/img/partner2/ninja.jpg',
    '/assets/img/partner2/pakons.jpg',
    '/assets/img/partner2/pmi.jpg',
    '/assets/img/partner2/starlet.jpg',
  ];

  return (
    <main className='my-8 flex flex-col gap-4 max-w-[1480px] mx-auto'>
      <Slider width="100px" height="50px" quantity={slider2Images.length} images={slider2Images} />
      <Slider width="200px" height="200px" quantity={sliderImages.length} images={sliderImages} reverse={true} />
    </main>
  );
};

export default App;
