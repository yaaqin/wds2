import React from 'react';

const ArticleSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-12 flex flex-col md:flex-row">
      {/* Bagian Kiri - Gambar */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img
          src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2268x1276/640x427/filters:focal(1107x378:1108x379):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/25646942/matt_mullenweg_wordcamp_eu.png" // Ganti dengan URL gambar yang sesuai
          alt="Article Image"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Bagian Kanan - Teks */}
      <div className="md:w-1/2 md:pl-8 py-auto">
        <h1 className="text-3xl font-bold mb-4">The messy WordPress drama, explained</h1>
        <p className="text-gray-600 mb-4">
          / WordPress cofounder Matt Mullenweg is going after a rival hosting firm he says is ‘strip-mining the WordPress ecosystem.’
        </p>
        <p className="text-gray-600 mb-6">
          Sep 28, 2024, 6:04 AM GMT+7
        </p>
        <p className="text-gray-700">
          By <span className="font-semibold text-blue-500">Emma Roth</span>, a news writer who covers the streaming wars, consumer tech, crypto, social media, and much more. Previously, she was a writer and editor at MUO.
        </p>

        {/* Icon Media Sosial dan Komentar */}
        <div className="flex items-center mt-4">
          <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0a10 10 0 00-10 10c0 4.418 2.5 8.22 6.174 9.727-.074-.558-.14-1.414.029-2.018C5.538 17.08 5 15.54 5 15.54s-.675-1.184.034-1.751c.689-.537 1.673-.062 2.076.387.328.344.716.858.924 1.124.554 1.062 1.537 1.427 2.467 1.04.06-.52.215-1.035.44-1.5-.867-.1-2.005-.492-2.573-1.086-.577-.594-.434-1.422-.434-1.422s.208-.45.614-.714c.289-.204.67-.303.999-.33-.33-.76-.214-1.785.327-2.13.568-.363 1.693-.134 2.467 1.118.056.089.106.178.154.266C15.488 6.84 17 8.41 17 10.779 17 13.142 14.993 15 12 15c-3.032 0-5-1.955-5-1.955s-.117.12-.362.365c-.178.176-.374.323-.547.436-.008-.007-.014-.016-.022-.023A10.007 10.007 0 0010 20a10 10 0 100-20z" />
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 0a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-6h2v6zm0-8h-2V5h2v2z" />
            </svg>
          </a>
          <span className="text-gray-700">75</span>
          <span className="mx-2">Comments</span>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;
