import React from 'react';
import { FaHeadset, FaComments, FaMapMarkedAlt } from 'react-icons/fa'; // Gunakan ikon dari react-icons

const SupportService: React.FC = () => {
  return (
    <section className="bg-blue-900 w-full text-white py-16">
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
            <p className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Get a Call</p>
          </div>

          {/* Kartu 2 */}
          <div className="border border-blue-700 rounded-lg p-8 hover:shadow-lg transition">
            <FaComments className="text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Chat With An Agent</h3>
            <p className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Chat Now</p>
          </div>

          {/* Kartu 3 */}
          <div className="border border-blue-700 rounded-lg p-8 hover:shadow-lg transition">
            <FaMapMarkedAlt className="text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visit WDS Office</h3>
            <p className="text-blue-400 font-light cursor-pointer hover:text-blue-200">Find a Service Center</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportService;
