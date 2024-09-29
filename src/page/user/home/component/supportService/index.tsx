import React, { useRef } from 'react';
import { FaHeadset, FaComments, FaMapMarkedAlt } from 'react-icons/fa'; // Gunakan ikon dari react-icons
import useGsapScrollTrigger from '../../../../../component/gsapHook';
import { useNavigate } from 'react-router-dom';

const SupportService: React.FC = () => {
  const navigate = useNavigate()
  const sectionRef = useRef<HTMLDivElement>(null);
  useGsapScrollTrigger(sectionRef);
  return (
    <section 
    ref={sectionRef}
    className="bg-blue-900 w-full text-white py-16">
      <div className="container mx-auto text-center">
        {/* Pertanyaan */}
        <h2 className="text-xl font-light mb-2">Have you any questions</h2>
        <p className="text-lg font-light mb-12">Will you want know more?</p>

        {/* Kartu bantuan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Kartu 1 */}
          <div className="border border-blue-700 rounded-lg p-8 hover:shadow-lg transition">
            <FaHeadset className="text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Talk To An Agent</h3>
            <a href='https://wa.me/6285720063732?text=Saya%20ingin%20menanyakan%20paket%20internet%20Hanaplay' className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Get a Call</a>
          </div>

          {/* Kartu 2 */}
          <div className="border border-blue-700 rounded-lg p-8 hover:shadow-lg transition">
            <FaComments className="text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chat With An Agent</h3>
            <a href='https://wa.me/6285720063732?text=Saya%20ingin%20menanyakan%20paket%20internet%20Hanaplay' className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Chat Now</a>
          </div>

          {/* Kartu 3 */}
          <div className="border border-blue-700 rounded-lg p-8 hover:shadow-lg transition">
            <FaMapMarkedAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit WDS Office</h3>
            <a href='https://www.google.co.id/maps/place/PT.+Wahana+Data+Solusindo/@-6.2766411,106.6591576,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fbf3c6dd2ab9:0x17b956000888dac0!8m2!3d-6.2766411!4d106.6617325!16s%2Fg%2F11y6jcczc?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D' className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Find a Service Center</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportService;
