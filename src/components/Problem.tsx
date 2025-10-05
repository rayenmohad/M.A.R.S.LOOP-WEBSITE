import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
          The Waste Challenge on Mars
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Waste on Mars"
              className="rounded-lg shadow-lg border-4 border-orange-300"
            />
          </div>
          <div>
            <p className="text-lg text-red-800 mb-6 leading-relaxed">
              Human colonies on Mars will face a major challenge: waste management.
              Each space mission generates tons of inorganic waste that accumulates,
              pollutes the Martian environment, and consumes precious resources.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">•</span>
                </div>
                <span className="ml-3 text-red-800">Progressive accumulation of non-biodegradable waste</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">•</span>
                </div>
                <span className="ml-3 text-red-800">Limited resources for Earth resupply missions</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">•</span>
                </div>
                <span className="ml-3 text-red-800">Environmental impact on fragile Martian ecosystem</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm">•</span>
                </div>
                <span className="ml-3 text-red-800">Need for autonomy and sustainability in long missions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;