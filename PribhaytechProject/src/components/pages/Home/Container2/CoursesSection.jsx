import React from 'react';
import {useNavigate} from 'react-router-dom';

const CoursesSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const courses = [
    {
      id: "dataScience",
      title: "Certification in Data Science & AI",
      description: "Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets.",
      originalPrice: "₹25,999",
      discountedPrice: "₹19,999",
      tag: ""
    },
    {
      id: "financialAnalytics",
      title: "Certification in Financial Analytics",
      description: "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
      originalPrice: "₹22,999",
      discountedPrice: "₹16,999",
      tag: ""
    },
    { 
      id: "marketingAnalytics",
      title: "Certification in Marketing Analytics",
      description: "Transform marketing strategies with data-driven insights and customer behavior analysis. Master tools like Google Analytics and social media metrics interpretation.",
      originalPrice: "₹20,999",
      discountedPrice: "₹14,999"
    },
    {
      id: "hrAnalytics",
      title: "Certification in HR Analytics",
      description: "Use data to optimize HR processes and improve organizational performance. Learn to measure employee engagement, retention, and workforce productivity metrics.",
      originalPrice: "₹18,999",
      discountedPrice: "₹12,999"
    },
    {
      id: "webDevelopment",
      title: "Certification in Web Development",
      description: "Build modern, responsive websites and web applications with cutting-edge technologies. Cover full-stack development including HTML/CSS, JavaScript, and popular frameworks.",
      originalPrice: "₹21,999",
      discountedPrice: "₹15,999",
      tag: ""
    },
    {
      id: "meanMern",
      title: "Certification in MEAN & MERN Stack",
      description: "Build modern, responsive websites and web applications with cutting-edge technologies. Cover full-stack development including HTML/CSS, JavaScript, and popular frameworks.",
      originalPrice: "₹21,999",
      discountedPrice: "₹15,999",
      tag: ""
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-[#b42638]/90 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-[#b42638]">Certification Programs</span>
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Industry-relevant courses designed to give you the competitive edge in today's data-driven world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="relative bg-gray-900 rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-800 hover:border-[#b42638]/30 group"
            >
              {course.tag && (
                <div className="absolute top-4 right-4 bg-[#b42638] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {course.tag}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>
                </div>

                

                <div className="flex flex-col space-y-3">
                  <button onClick={() => handleReadMore(course.id)} className="w-full py-3 bg-[#b42638] text-white font-medium rounded-lg hover:bg-[#8a1a2a] transition-colors duration-300 flex items-center justify-center">
                    <span>Read More</span>
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
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