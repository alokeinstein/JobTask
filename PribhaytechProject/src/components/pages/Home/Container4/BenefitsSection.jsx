import React from 'react';
import { FiBookOpen, FiBriefcase, FiUsers, FiFile } from 'react-icons/fi'; // Icons

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FiBookOpen className="text-[#b42638] text-4xl" />,
      title: "25+ Assignments with 24/7 Support",
      description: "Work on 25+ Assignments with 24/7 Support.",
    },
    {
      icon: <FiFile className="text-[#b42638] text-4xl" />,
      title: "18+ Industry Relevant Real-life Data Projects",
      description: "Get Industrial experience by working on real-life data projects.",
    },
    {
      icon: <FiBriefcase className="text-[#b42638] text-4xl" />,
      title: "Tied-up with 5000+ Companies",
      description: "ExcelR has Tied up with 5000+ Companies to Provide Jobs to Many Students.",
    },
    {
      icon: <FiUsers className="text-[#b42638] text-4xl" />,
      title: "Job Readiness Program",
      description: "A dedicated placement cell for the participants who completed the course.",
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center"
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">{benefit.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-center mb-2">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;