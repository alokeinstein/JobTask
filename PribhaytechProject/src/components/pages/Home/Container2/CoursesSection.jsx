
import React from 'react';
import { FaGraduationCap, FaClock, FaChartLine, FaLaptopCode, FaUserTie, FaCertificate } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';

const CoursesSection = () => {
    const navigate = useNavigate();

  const handleReadMore = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleApplyNow =()=>{
    navigate('/contact')
  }

  const courses = [
    {
      id: "dataScience",
      title: "Data Science & AI Certification",
      description: "Master machine learning algorithms and data analysis techniques with Python and TensorFlow through real-world projects.",
      icon: <FaChartLine className="text-3xl text-[#b42638]" />,
      duration: "12 Weeks",
      highlights: ["Python Programming", "Machine Learning", "Neural Networks", "Industry Projects"]
    },
    {
      id: "financialAnalytics",
      title: "Financial Analytics Certification",
      description: "Learn risk assessment, portfolio optimization, and financial modeling techniques used by top financial institutions.",
      icon: <FaGraduationCap className="text-3xl text-[#b42638]" />,
      duration: "10 Weeks",
      highlights: ["Risk Analysis", "Investment Strategies", "Financial Modeling", "Excel & Python"]
    },
    {
      id: "marketingAnalytics",
      title: "Marketing Analytics Certification",
      description: "Transform marketing strategies with data-driven insights using Google Analytics and social media metrics interpretation.",
      icon: <FaUserTie className="text-3xl text-[#b42638]" />,
      duration: "8 Weeks",
      highlights: ["Customer Segmentation", "Campaign Analysis", "ROI Measurement", "Google Analytics"]
    },
    {
      id: "webDevelopment",
      title: "Web Development Certification",
      description: "Build modern, responsive websites and applications with HTML/CSS, JavaScript, and popular frameworks like React.",
      icon: <FaLaptopCode className="text-3xl text-[#b42638]" />,
      duration: "14 Weeks",
      highlights: ["Frontend Development", "React.js", "Node.js", "Full Stack Projects"]
    },
    {
      id: "hrAnalytics",
      title: "HR Analytics Certification",
      description: "Use data to optimize HR processes, measure employee engagement, and improve organizational performance.",
      icon: <FaUserTie className="text-3xl text-[#b42638]" />,
      duration: "6 Weeks",
      highlights: ["Employee Retention", "Workforce Analytics", "HR Metrics", "Data Visualization"]
    },
    {
      id: "meanMern",
      title: "Certification in MEAN & MERN Stack",
      description: "Build modern, responsive websites and web applications with cutting-edge technologies.",
      icon: <FaCertificate className="text-3xl text-[#b42638]" />,
      duration: "8 Weeks",
      highlights: ["Anglular", "Node.js", "MongoDB", "Express.js"]
    }
  ];

  return (
    <div className="bg-black/90 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our <span className="text-[#b42638]">Certification Programs</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Industry-relevant courses designed to give you the competitive edge in today's data-driven world.
          </p>
          <div className="w-20 h-1 bg-[#b42638] mx-auto mt-6"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800 hover:border-[#b42638]/30 group"
            >
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                    <div className="flex items-center mt-1 text-gray-400 text-sm">
                      <FaClock className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{course.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[#b42638] mb-2">KEY TOPICS COVERED:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.highlights.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-[#b42638] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 py-2 bg-[#b42638] text-white font-medium rounded-lg hover:bg-[#8a1a2a] transition-colors duration-300" onClick={() => handleReadMore(course.id)}>
                    Learn More
                  </button>
                  <button className="flex-1 py-2 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300" 
                  onClick={() => handleApplyNow()}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CoursesSection; 