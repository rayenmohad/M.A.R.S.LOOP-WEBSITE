import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-900 bg-opacity-90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">M.A.R.S.Loop</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button onClick={() => scrollToSection('hero')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
              <button onClick={() => scrollToSection('problem')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Problem</button>
              <button onClick={() => scrollToSection('solution')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Solution</button>
              <button onClick={() => scrollToSection('design')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Technology</button>
              <button onClick={() => scrollToSection('impact')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Impact</button>
              <button onClick={() => scrollToSection('team')} className="text-orange-200 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Team</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;