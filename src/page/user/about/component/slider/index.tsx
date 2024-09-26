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
          <div className="item" style={{ '--position': index + 1 } as React.CSSProperties} key={index}>
            <img src={src} alt={`Slider image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
    const slider1Images = [
      'https://i.pinimg.com/236x/cd/c2/16/cdc216e053adde83bb415addf97a5f51.jpg',
      'https://i.pinimg.com/236x/6b/e7/f6/6be7f61436c54362e836616071d8f3c9.jpg',
      'https://i.pinimg.com/236x/fe/91/2c/fe912c3eae603bd00eb8633cc7558f55.jpg',
      'https://i.pinimg.com/236x/e9/c2/24/e9c2245a1ef37e08fd5380738e30a6de.jpg',
      'https://i.pinimg.com/236x/d6/e3/1e/d6e31e17a5ca3ff53c8c98c2215ba92e.jpg',
      'https://i.pinimg.com/236x/34/6d/29/346d2991af01c2f762ab08df58ee2d86.jpg',
      'https://i.pinimg.com/236x/34/2e/2b/342e2b65f9cc8247353f2475a34cc3e5.jpg',
      'https://i.pinimg.com/236x/8c/b6/e2/8cb6e2d17e9d10f7d79f83e31ff3721a.jpg',
      'https://i.pinimg.com/236x/dd/6b/8c/dd6b8c259253159e2140a84967c35c60.jpg',
      'https://i.pinimg.com/236x/71/8c/a9/718ca9634ef19e7a007c91659e006466.jpg',
    ];
  
    const slider2Images = [
      'https://i.pinimg.com/236x/e0/ed/d1/e0edd1f31e3050e234b430a2ae3baf18.jpg',
      'https://i.pinimg.com/236x/2e/06/a0/2e06a08eaab12bbad93b38197fa45e9f.jpg',
      'https://i.pinimg.com/236x/ca/1b/64/ca1b64142512c0eb7ffb6302205b2787.jpg',
      'https://i.pinimg.com/236x/3e/d2/b1/3ed2b14c8d9bf89720dcaefac0b3b541.jpg',
      'https://i.pinimg.com/236x/16/c5/a8/16c5a80027f56e48cdc97f1614348139.jpg',
      'https://i.pinimg.com/736x/6b/a8/61/6ba861c41233ee7bc9c65c3e5cbfe75a.jpg',
      'https://i.pinimg.com/236x/cb/76/73/cb767338a3efa80fd7dad40427837644.jpg',
      'https://i.pinimg.com/236x/59/e0/1d/59e01d572b412a4c54e94af1df596191.jpg',
      'https://i.pinimg.com/236x/5b/74/b7/5b74b7c56a8015f1fd4e13b7ea266a55.jpg',
    ];

  return (
    <main className='my-8 flex flex-col gap-4 max-w-[1480px] mx-auto'>
      <Slider width="100px" height="50px" quantity={10} images={slider1Images} />
      <Slider width="200px" height="200px" quantity={9} images={slider2Images} reverse={true} />
    </main>
  );
};

export default App;
