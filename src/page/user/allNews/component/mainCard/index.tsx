import React, { useEffect } from 'react';
import { CommentIcon, LinkIcon, LoveIcon } from '../../../../../component/icon';
import { useNavigate } from 'react-router-dom';

const MainCard: React.FC = () => {
  const navigate = useNavigate()
  const text = 'WordPress is essentially internet infrastructure. It’s widely used, generally stable, and doesn’t tend to generate many splashy headlines as a result. But over the last week, the WordPress community has swept up into a battle over the ethos of the platform. Last week, WordPress cofounder Matt Mullenweg came out with a harsh attack on WP Engine, a major WordPress hosting provider, calling the company a “cancer” to the community.'
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <section className="max-w-[1480px] mx-auto py-16 flex flex-col md:flex-row">
      {/* Bagian Kiri - Gambar */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2268x1276/640x427/filters:focal(1107x378:1108x379):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25646942/matt_mullenweg_wordcamp_eu.png" // Ganti dengan URL gambar yang sesuai
          alt="Article Image"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Bagian Kanan - Teks */}
      <div className="md:w-1/2 md:pl-8 flex flex-col justify-between h-auto"> {/* Tambahkan flex-col dan h-full */}
        <h1 onClick={() => navigate('/news/slug')} className="text-5xl font-bold mb-4 cursor-pointer duration-300 hover:underline">The messy WordPress drama, explained</h1>
        <p className="text-gray-600 mb-4 text-xl line-clamp-4">
          {text}
        </p>

        {/* Section bawah */}
        <section className='mt-auto'>
          <p className="text-gray-700">
            By <span className="font-semibold text-blue-500">Emma Roth</span>, a news writer who covers the streaming wars, consumer tech, crypto, social media, and much more. Previously, she was a writer and editor at MUO.
          </p>
          <div className="flex items-center space-x-3 mt-6">
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

          <div className="flex items-center space-x-4 bg-white my-4 rounded-md">
            <LoveIcon />
            <CommentIcon />
            <LinkIcon />
          </div>
          <span className="text-gray-800 font-bold">835 likes</span>
        </section>
      </div>

    </section>
  );
};

export default MainCard;
