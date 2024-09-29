import React from 'react';
import { CommentIcon, LinkIcon, LoveIcon } from '../../../component/icon';
type BlogContent =
  | { type: 'header'; content: string }
  | { type: 'paragraph'; content: string }
  | { type: 'quote'; content: string; author: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[] };

const blogContent: BlogContent[] = [
  // {
  //   type: "header", // Tipe konten
  //   content: "The messy WordPress drama, explained",
  // },
  {
    type: "paragraph",
    content: "Saat ini, banyak perhatian tertuju pada Web3 karena siklus Bitcoin yang berulang, yang menunjukkan potensi signifikan dalam inovasi teknologi blockchain dan desentralisasi, memberikan harapan baru untuk masa depan ekonomi digital yang lebih transparan dan terjangkau.’",
  },
  {
    type: "quote",
    content: "This is a quote from an influential figure in the industry.",
    author: "Matt Mullenweg",
  },
  {
    type: "image",
    src: "https://i.pinimg.com/474x/24/0c/94/240c947eee5727a2d5864b8d03361734.jpg",
    alt: "Illustration of WordPress",
  },
  {
    type: "paragraph",
    content: "Cryptocurrency telah merevolusi dunia keuangan dengan menawarkan pendekatan baru yang terdesentralisasi dalam melakukan transaksi digital. Berbasis pada teknologi blockchain, cryptocurrency menghilangkan kebutuhan akan perantara seperti bank dan lembaga keuangan lainnya dalam setiap transaksi. Blockchain sendiri adalah sistem buku besar terdistribusi yang mencatat setiap transaksi secara transparan dan aman, serta tahan terhadap manipulasi. Bitcoin, mata uang kripto pertama yang diperkenalkan pada tahun 2009 oleh entitas anonim bernama Satoshi Nakamoto, menjadi pelopor dalam menciptakan ekosistem keuangan digital yang sepenuhnya independen dari sistem moneter tradisional. Dalam perkembangannya, ribuan cryptocurrency lainnya, seperti Ethereum, Ripple, dan Litecoin, telah muncul dengan berbagai tujuan dan aplikasi, memperkaya dunia digital finansial.",
  },
  {
    type: "paragraph",
    content: "Tidak hanya untuk transaksi, cryptocurrency juga telah membuka pintu untuk inovasi lainnya, seperti smart contracts dan Decentralized Finance (DeFi). Ethereum, misalnya, memperkenalkan konsep smart contracts, yaitu program otomatis yang dieksekusi sendiri saat syarat-syarat tertentu terpenuhi. Smart contracts memungkinkan terciptanya aplikasi terdesentralisasi (dApps), yang tidak hanya berjalan di atas blockchain tetapi juga dapat menggantikan berbagai aplikasi terpusat, seperti platform keuangan, game, hingga jaringan sosial. DeFi, di sisi lain, adalah ekosistem layanan keuangan yang juga tidak membutuhkan perantara tradisional, memungkinkan pengguna untuk meminjam, meminjamkan, atau melakukan perdagangan aset kripto dengan lebih cepat dan efisien. Popularitas DeFi mencerminkan meningkatnya minat terhadap inovasi keuangan berbasis blockchain, yang terus berkembang seiring waktu.",
  },
  {
    type: "paragraph",
    content: "Namun, seperti teknologi lainnya, cryptocurrency tidak tanpa tantangan. Salah satu tantangan terbesar adalah volatilitas harga yang ekstrem, di mana nilai mata uang kripto bisa melonjak tajam dalam hitungan hari, namun juga bisa terjun bebas dalam waktu singkat. Ketidakstabilan ini membuat banyak orang ragu untuk menggunakannya sebagai alat pembayaran atau investasi jangka panjang. Selain itu, regulasi pemerintah di banyak negara masih belum jelas atau terlalu ketat, menciptakan ketidakpastian bagi pengembang dan pengguna cryptocurrency. Meski demikian, dengan adopsi yang semakin meluas dan terus adanya inovasi dalam teknologi blockchain, banyak pihak yang optimis bahwa cryptocurrency akan menjadi elemen penting dalam ekonomi global di masa depan, terutama dalam menciptakan sistem keuangan yang lebih inklusif dan transparan.",
  },
  {
    type: "list",
    items: [
      "Feature 1: Speed Optimization",
      "Feature 2: Cloud Solutions",
      "Feature 3: Website Design",
    ],
  },
];

const ArticleSection: React.FC = () => {
  return (
    <main className='max-w-[1480px] mx-auto'>
      <section className="w-full mx-auto flex flex-col md:flex-row mb-6">
        {/* Bagian Kiri - Gambar */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="https://i.pinimg.com/236x/1f/68/48/1f68480bc56a4b7bd1f6ccb1f4d93f88.jpg"
            alt="Article Image"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Bagian Kanan - Teks */}
        <div className="md:w-1/2 md:pl-8 h-auto flex flex-col">
          <h1 className="text-3xl font-bold mb-4">Crypto dan Blockchain: Mengguncang Sistem Keuangan Tradisional</h1>
          <p className="text-gray-600 mb-4">
            / WordPress cofounder Matt Mullenweg is going after a rival hosting firm he says is ‘strip-mining the WordPress ecosystem.’
          </p>

          <section className="mt-auto">
            <div className="flex items-center space-x-3">
              {/* Gambar Profil */}
              <img
                src="https://i.pinimg.com/736x/b6/a1/43/b6a1430f34b8581bf4c02aea3d227104.jpg"
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

      <div className="flex flex-col md:flex-row">
        {/* Bagian Blog Content Mapping */}
        <div className="md:w-3/4">
          {blogContent.map((item, index) => {
            switch (item.type) {
              case "header":
                return <h1 key={index} className="text-3xl font-bold mb-4">{item.content}</h1>;
              case "paragraph":
                return <p key={index} className="text-gray-700 mb-4 text-justify">{item.content}</p>;
              case "quote":
                return (
                  <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic mb-4">
                    "{item.content}"
                    <footer className="mt-2 text-gray-600">— {item.author}</footer>
                  </blockquote>
                );
              case "image":
                return (
                  <img
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    className="max-w-[700px] mx-auto h-auto rounded-lg mb-4"
                  />
                );
              case "list":
                return (
                  <ul key={index} className="list-disc list-inside mb-4">
                    {item.items.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </div>

        {/* Bagian Topik yang Direkomendasikan */}
        <aside className="md:w-1/4 md:ml-8 mt-8 md:mt-0 px-4 md:px-0 sticky top-[150px] h-fit">
          <h2 className="text-xl font-bold mb-4">Recommended topics</h2>
          <div className="flex flex-wrap space-x-2">
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Machine Learning</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Health</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Software Development</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Design</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Science</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Culture</span>
            <span className="bg-gray-200 rounded-full px-3 py-1 text-sm">Entrepreneurship</span>
          </div>
          <a href="/news/all" className="text-blue-500 hover:underline cursor-pointer mt-4 inline-block">
            See more topics
          </a>
        </aside>

      </div>


    </main>
  );
};

export default ArticleSection;
