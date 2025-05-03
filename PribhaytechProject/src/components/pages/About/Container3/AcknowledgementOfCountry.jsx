import Container3Pic1 from '../../../../assets/about/Container3Pic1.jpg';
import Container3Pic2 from '../../../../assets/about/Container3Pic2.jpg';
import Container3Pic3 from '../../../../assets/about/Container3Pic3.jpg';

const AcknowledgementOfCountry = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">
              <span className="border-b-2 border-[#b42638] pb-2">Acknowledgement of Country</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
            At the International Institute of Data Intelligence, we recognize that meaningful data science begins with respect - for people, knowledge systems, and the lands from which data emerges. As a premier institution training the next generation of data professionals, we honor this legacy.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
            Our programs combine cutting-edge technical training with this foundational respect, because truly intelligent data practice must be both innovative and inclusive.
            </p>
            
            <p className="text-sm italic text-gray-600">
              Artwork: <span className="font-semibold">Sentient</span> by Hollie Johnson, Gunai/Kurnai and Monero Ngarigo.
            </p>
            
            <a href="#" className="inline-block mt-6 text-[#b42638] font-semibold hover:underline">
              More information &gt;
            </a>
          </div>
          
          {/* Right side - Images */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* Main artwork image */}
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img 
                src={Container3Pic1} 
                alt="Sentient artwork by Hollie Johnson" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <p className="text-sm">Sentient by Hollie Johnson</p>
              </div>
            </div>
            
            {/* Flags row */}
            <div className="flex gap-4">
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img 
                  src={Container3Pic2} 
                  alt="Australian flag" 
                  className="w-full h-32 object-cover"
                />
                <div className="bg-white p-3 text-center">
                  <p className="text-sm font-medium text-gray-700">Australian Traditional Lands</p>
                </div>
              </div>
              
              <div className="w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200">
                <img 
                  src={Container3Pic3} 
                  alt="Indian flag" 
                  className="w-full h-32 object-cover"
                />
                <div className="bg-white p-3 text-center">
                  <p className="text-sm font-medium text-gray-700">International Partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcknowledgementOfCountry;