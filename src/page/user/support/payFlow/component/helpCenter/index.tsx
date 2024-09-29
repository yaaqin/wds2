import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800">{title}</span>
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen
            ? `${contentRef.current?.scrollHeight}px`
            : "0px",
        }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        <div className="px-6 pb-4">
          <p className="text-blue-600 hover:underline cursor-pointer">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const HelpCenter: React.FC = () => {
  const items = [
    {
      title: "Cara Ganti Password Wifi ONT & Setting SSID Dasan",
      content: "Cek disini selengkapnya",
    },
    {
      title: "Cara Ganti Password Wifi ONT & Setting SSID Fiberhome",
      content: "Cek disini untuk selengkapnya",
    },
    {
      title: "Cara Ganti Password Wifi ONT & Setting SSID Huawei",
      content: "Informasi lebih lanjut",
    },
    // Tambahkan item lainnya sesuai kebutuhan...
  ];

  return (
    <div className="max-w-[1480px] mx-auto mt-8">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default HelpCenter;
