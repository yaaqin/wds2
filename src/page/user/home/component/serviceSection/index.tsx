import React, { useEffect, useRef } from 'react';
import { FaCloud, FaGlobe, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import ServiceCard from './card';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useGsapScrollTrigger from '../../../../../component/gsapHook';

const ServiceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGsapScrollTrigger(sectionRef);
  return (
    <section 
      ref={sectionRef}
      className="container mx-auto py-16 text-center">
      {/* Judul utama */}
      <h2 className="text-2xl font-semibold mb-4">Hanaplay Broadband Internet</h2>
      <p className="text-gray-500 mb-12">Network Solutions from Hanaplay</p>

      {/* Grid layout untuk cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Layanan Cloud & Collocation */}
        <ServiceCard
          icon={<FaCloud />}
          title="Cloud & Collocation"
          description="Hosting & Domain, Virtual Private Server, Collocation, Direct Connect"
        />
        
        {/* Layanan Fiber Connection */}
        <ServiceCard
          icon={<FaGlobe />}
          title="Fiber Connection"
          description="Local Loop, IP TV, Fiber Core, Virtual Private Network"
        />

        {/* Layanan Internet Connectivity */}
        <ServiceCard
          icon={<FaNetworkWired />}
          title="Internet Connectivity"
          description="Dedicated, Hanaplay Broadband Internet"
        />

        {/* Layanan Managed Services */}
        <ServiceCard
          icon={<FaShieldAlt />}
          title="Managed Services"
          description="Assessment Consulting, System Integrators, Technical Expert on Demand"
        />
      </div>

      {/* Tombol Request A Quote */}
      <div className="mt-12">
        <button className="bg-transparent border border-blue-500 text-blue-500 font-semibold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition">
          Request a Quote
        </button>
      </div>

      {/* Informasi Kontak */}
      <div className="mt-6 text-gray-500 text-sm">
        For more information call us at <a href="tel:0215385577" className="text-blue-500">021 538 5577</a> or <a href="https://wa.me/yourwhatsapplink" className="text-blue-500">Whatsapp</a> with Hanaplay representative.
      </div>
    </section>
  );
};

export default ServiceSection;
