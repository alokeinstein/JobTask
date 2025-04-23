import React from 'react';
import { FaGraduationCap, FaTasks, FaProjectDiagram, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { MdOutlineInterests } from 'react-icons/md';

const LearningPath = () => {
  const steps = [
    {
      icon: <FaGraduationCap className="text-2xl text-[#b42638]" />,
      title: "Get Trained",
      description: "Comprehensive training from industry experts"
    },
    {
      icon: <FaTasks className="text-2xl text-[#b42638]" />,
      title: "Submit Assignments",
      description: "Hands-on practice with graded assignments"
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-[#b42638]" />,
      title: "Real Life Projects",
      description: "Work on actual industry datasets and problems"
    },
    {
      icon: <FaUserTie className="text-2xl text-[#b42638]" />,
      title: "Placement Support",
      description: "Resume building and company connections"
    },
    {
      icon: <FaBriefcase className="text-2xl text-[#b42638]" />,
      title: "Job Readiness",
      description: "Soft skills and technical interview prep"
    }
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">
            <span className="text-[#b42638]">Learning</span> Path
          </h2>
          <div className="w-20 h-1 bg-[#b42638] mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* For mobile */}
                <div className="md:hidden flex items-start mb-4">
                  <div className="bg-gray-800 p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>
                
                {/* For desktop */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                  <div className={`bg-gray-800 p-4 rounded-lg max-w-xs ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-300 mt-2">{step.description}</p>
                  </div>
                </div>
                
                {/* Center icon (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-gray-800 p-3 rounded-full border-4 border-black z-10">
                  {step.icon}
                </div>
                
                {/* For mobile content */}
                <div className="md:hidden w-full bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-gray-300 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Intensive Interview Preparation */}
        <div className="mt-16 text-center bg-gray-800 rounded-xl p-8 max-w-2xl mx-auto border-l-4 border-[#b42638]">
          <div className="flex justify-center mb-4">
            <MdOutlineInterests className="text-3xl text-[#b42638]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Intensive Interview Preparation</h3>
          <p className="text-gray-300">
            Mock interviews, coding challenges, and whiteboard sessions to prepare you for technical interviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;