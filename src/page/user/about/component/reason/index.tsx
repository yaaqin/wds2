import React, { useRef } from 'react';
import useGsapScrollTrigger from '../../../../../component/gsapHook';

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-purple-500 transition-all duration-300 hover:bg-purple-600 hover:text-white">
      <div className="mb-4">
        {/* Icon for the card */}
        <img src={icon} alt={title} className="h-12 w-12 mx-auto text-red-600" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {

  const gridRef = useRef<HTMLDivElement>(null); // Reference ke grid yang berisi card

  // Gunakan hook untuk animasi stagger pada card
  useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
  return (
    <section className="bg-gray-100 w-full py-16">
      <div className="mx-auto text-center max-w-[1480px]">
        <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-8">
          WDS menyediakan solusi yang terbaik, dirancang untuk keperluan internet Anda. Dibantu dengan Customer Support yang ramah, cepat, dan handal dalam merespon penanganan yang tepat.
        </p>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Think Different"
            description="WDS menyediakan solusi yang terbaik dan dirancang khusus untuk keperluan internet Anda. Apapun kebutuhan internet Anda, WDS adalah solusi bagi semua kebutuhan Customer dengan biaya yang efisien, efektif, dan berbeda."
            icon="https://www.wds.co.id/wp-content/uploads/2024/06/PAGE-5-04.png"
          />
          <Card
            title="Reliable"
            description="WDS memberikan kualitas layanan terbaik yang didukung dengan berbagai solusi dan inovasi jaringan telekomunikasi. Layanan ini lebih stabil berkat teknologi Wireless & Fiber Optic."
            icon="https://www.wds.co.id/wp-content/uploads/2024/06/PAGE-5-06.png"
          />
          <Card
            title="Quick Respon"
            description="Customer Support WDS yang ramah, cepat, dan handal dalam merespon penanganan yang tepat, membuat banyak pelanggan kami merasa puas."
            icon="https://www.wds.co.id/wp-content/uploads/2024/06/PAGE-5-05.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
