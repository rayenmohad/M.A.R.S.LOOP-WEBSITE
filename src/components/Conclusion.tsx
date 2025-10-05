import React from 'react';

const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Towards a Sustainable Future on Mars
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
          M.A.R.S.Loop represents a major advancement towards the autonomy of human colonies on Mars.
          By transforming the waste challenge into a resource opportunity, our system paves the way
          for environmentally respectful human presence on the Martian surface.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-red-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Vision</h3>
            <p className="text-orange-100">
              A Mars where human colonies live in harmony with their environment,
              recycling and reusing every resource.
            </p>
          </div>
          <div className="bg-red-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Mission</h3>
            <p className="text-orange-100">
              To develop autonomous recycling technologies that make possible
              long-duration manned missions on Mars.
            </p>
          </div>
          <div className="bg-red-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-orange-300">Impact</h3>
            <p className="text-orange-100">
              Reduce the environmental footprint of space colonies and open
              the way for sustainable interplanetary exploration.
            </p>
          </div>
        </div>
        <div className="border-t border-red-700 pt-12">
          <h3 className="text-2xl font-semibold mb-6">Stay Connected</h3>
          <p className="text-lg text-orange-100 mb-8">
            Follow our progress and join us in this space adventure!
          </p>
        </div>
        <div className="mt-16 text-center text-orange-200">
          <p>&copy; 2025 M.A.R.S.Loop Team - NASA Space Apps Challenge 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;