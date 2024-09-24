import React from 'react';
import { MapPin, PenLine, Mail, Wrench, LucideIcon } from 'lucide-react';

interface RegistrationStepProps {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const RegistrationStep: React.FC<RegistrationStepProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="bg-white rounded-full p-4 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

interface RegistrationStep {
  icon: React.ReactElement<LucideIcon>;
  title: string;
  description: string;
}

const RegistrationFlow: React.FC = () => {
  const steps: RegistrationStep[] = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Coverage Area",
      description: "Ensure the address and location of your house/apartment are within our coverage area"
    },
    {
      icon: <PenLine className="w-8 h-8 text-blue-600" />,
      title: "Registration",
      description: "Do online registration at Biznet Home website"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-600" />,
      title: "Email Notification",
      description: "We will send notification of the service availability for your home/apartment, along with the payment link"
    },
    {
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      title: "Installation",
      description: "After payment, we will arrange your installation schedule"
    }
  ];

  return (
    <div className="bg-blue-600 text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Registration Flow</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <RegistrationStep key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default RegistrationFlow;