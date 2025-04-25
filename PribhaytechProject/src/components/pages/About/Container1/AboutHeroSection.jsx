import aboutHeroSection from "../../../../assets/about/aboutHeroSection.png";

const AboutHeroSection = () => {
  return (
    <section
      className="relative py-24 px-4 text-white bg-black/80"
      style={{
        backgroundImage: `url(${aboutHeroSection})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-semibold mb-8">
            <span className="border-b-2 border-[#b42638] pb-2">About IIDI</span>
          </h2>

          <p className="md:text-lg leading-relaxed">
            One of Australia's original tertiary institutions, RMIT University
            enjoys an international reputation for excellence in education,
            research, and engagement with industry and community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
