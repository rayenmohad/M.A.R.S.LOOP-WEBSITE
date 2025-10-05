import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-900 via-orange-900 to-red-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          M.A.R.S.Loop
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-orange-200">
          Modular Autonomous Recycling System
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-orange-100">
          "Zero Trash Left Behind" - An autonomous robotic system for recycling inorganic waste on Mars,
          transforming waste into vital resources for human colonies.
        </p>
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="M.A.R.S.Loop robot on Mars"
            className="mx-auto rounded-lg shadow-2xl max-w-2xl w-full border-4 border-orange-500"
          />
        </div>
        <button
          onClick={() => scrollToSection('solution')}
          className="bg-orange-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Discover the Project
        </button>
      </div>
    </section>
  );
};

export default Hero;