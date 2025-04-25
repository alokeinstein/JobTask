import container2Pic1 from '../../../../assets/about/container2Pic1.jpg';
import container2Pic2 from '../../../../assets/about/container2Pic2.jpg';
import container2Pic3 from '../../../../assets/about/container2Pic3.jpg';

const AboutIIDI = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          IIDI is a global university of technology, design and enterprise
        </h1>
        
        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          IIDI is a world leader in Art and Design; Architecture; Education; Engineering; 
          Development; Computer Science and Information Systems; Business and Management; 
          and Communication and Media Studies.
        </p>

        {/* Why IIDI Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">
            <span className="border-b-3 border-[#b42638] pb-2">Why IIDI</span>
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Learn more about what makes IIDI a renowned global university of technology, design and enterprise.
          </p>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={container2Pic1} alt="Schools and colleges" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">Schools and colleges</h3>
                <p className="text-gray-700">
                  Our courses of study are offered across 4 academic colleges and 16 academic schools.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={container2Pic2} alt="Facts and figures" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">Facts, Figures & Rankings</h3>
                <p className="text-gray-700">
                  At IIDI, teaching, research, and engagement are central to making an impact and creating life-changing experiences.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={container2Pic3} alt="Locations and facilities" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">Locations and facilities</h3>
                <p className="text-gray-700">
                  Our local and international campuses feature award-winning buildings and some of the most technologically advanced facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIIDI;