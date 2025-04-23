import React from 'react';
import heroImage from '../../../../assets/heroImage.png'; // Replace with your actual image path

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white min-h-[86vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b42638] rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#b42638] rounded-full mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content - left side */}
          <div className="lg:w-1/2 lg:pr-10 lg:text-left text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Unlock Insights with</span>
              <span className="text-[#b42638]">Human-Centric Data Science</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 lg:mx-0 mx-auto">
              Turn data into decisions, drive growth, and power smarter business strategies today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-[#b42638] text-white font-semibold rounded hover:bg-[#8a1a2a] transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image - right side */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative w-full h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Data Science Visualization"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-200">Transforming raw data into actionable intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;