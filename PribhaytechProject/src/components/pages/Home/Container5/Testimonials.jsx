// import React from "react";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "John Doe",
//     rating: 5,
//     text: "This service exceeded my expectations. Everything was top-notch!",
//   },
//   {
//     name: "Jane Smith",
//     rating: 4,
//     text: "Great experience overall. Just a few minor issues, but well handled!",
//   },
//   {
//     name: "Carlos Ruiz",
//     rating: 5,
//     text: "Absolutely fantastic. Will recommend to others without hesitation.",
//   },
// ];

// const StarRating = ({ rating }) => (
//   <div className="flex flex-col">
//     <div className="flex gap-1">
//       {Array.from({ length: 5 }, (_, i) => (
//         <Star
//           key={i}
//           size={18}
//           className={
//             i < rating ? "fill-[#b42638] text-[#b42638]" : "text-gray-300"
//           }
//         />
//       ))}
//     </div>
//     <span className="text-sm text-gray-500 mt-1">
//       {rating} out of 5 stars — based on client experience
//     </span>
//   </div>
// );

// const TestimonialsSection = () => {
//   return (
//     <section className="bg-black py-20 px-4 text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">
//           What Our Clients Say
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="bg-white text-black rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition-transform duration-300"
//             >
//               <StarRating rating={testimonial.rating} />
//               <p className="mt-4 text-lg leading-relaxed text-gray-700">
//                 “{testimonial.text}”
//               </p>
//               <p className="mt-6 font-semibold text-[#b42638]">
//                 — {testimonial.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;




























import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sanjana Singh",
    rating: 5,
    text: "What I loved most about the IIDI was the real projects. They taught me how to solve real-world problems.",
  },
  {
    id: 2,
    name: "Anmol Kumar",
    rating: 4,
    text: "Best Management and the faculty are so friendly to teach each topic with fabulous clarity. I secured my 1st job, thank you, IIDI team.",
  },
  {
    id: 3,
    name: "Dhiraj Kumar",
    rating: 5,
    text: "I enrolled in the course of Data Science, and I can confidently say it’s been an excellent learning experience. The instructors are highly knowledgeable and give the actual real industry project to solve",
  },
  {
    id: 4,
    name: "Aditi Raj",
    rating: 5,
    text: "The atmosphere at the institute is welcoming and professional, I enrolled for Data Analytics, which I didn’t learn in 4 years of my B.Tech-course. I have learned it in 6 months. Also, I got 2 job offers from good startup companies. Thank you to all faculty of IIDI, you are all making the teaching top-notch level",
  },
  {
    id: 5,
    name: "Alok Tiwari",
    rating: 4,
    text: "I have completed my web development course from here, and one thing i would like to adress that, they go in very detail in each and every topic, that's what i like about this institute.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex flex-col">
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating ? "fill-[#b42638] text-[#b42638]" : "text-gray-300"
          }
        />
      ))}
    </div>
    <span className="text-sm text-gray-500 mt-1">
      {rating} out of 5 stars — based on client experience
    </span>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Animation variants
  const cardVariants = {
    prev: {
      x: "-50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    active: {
      x: "0%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 2,
      transition: { duration: 0.5 }
    },
    next: {
      x: "50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="bg-black py-20 px-4 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div 
          className="relative h-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Testimonials container */}
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleTestimonials().map((index, position) => {
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute w-full max-w-md bg-white text-black rounded-2xl shadow-lg p-6 cursor-pointer"
                    variants={cardVariants}
                    initial={position === 0 ? "prev" : position === 2 ? "next" : "active"}
                    animate={position === 1 ? "active" : position === 0 ? "prev" : "next"}
                    exit={direction > 0 ? "prev" : "next"}
                  >
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                      "{testimonial.text}"
                    </p>
                    <p className="mt-6 font-semibold text-[#b42638]">
                      — {testimonial.name}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#b42638] scale-125" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;