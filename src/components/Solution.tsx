import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
          M.A.R.S.Loop: Autonomous Recycling for Sustainable Future
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-red-800">Our Innovative Solution</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              M.A.R.S.Loop is an autonomous robotic system designed to collect, sort, and recycle
              inorganic waste on Mars. By transforming waste into usable materials, our system creates
              a closed-loop recycling process that supports the sustainability of Martian colonies.
            </p>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-red-800 mb-2">Autonomous Collection</h4>
                <p className="text-gray-600">Intelligent navigation and waste collection without human intervention</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-red-800 mb-2">Smart Sorting</h4>
                <p className="text-gray-600">Precise material classification using AI and RFID technology</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-red-800 mb-2">Closed-Loop Recycling</h4>
                <p className="text-gray-600">Transformation of waste into reusable resources</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="M.A.R.S.Loop system diagram"
              className="rounded-lg shadow-lg border-4 border-orange-300"
            />
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-semibold mb-6 text-red-900">Mission Objective</h3>
          <p className="text-lg text-red-800 mb-4">
            Develop a robust autonomous robotic system capable of sorting and classifying inorganic waste materials on the surface of Mars.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">System Highlights:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Power Source: Solar PV with LiFePO₄ battery storage</li>
                <li>• Sensors: Industrial camera for vision, RFID for identification</li>
                <li>• AI: Jetson edge computing for onboard classification</li>
                <li>• Structure: Reinforced aluminum chassis, sealed electronics</li>
                <li>• Communication: UART/Wi-Fi/ROS2 interface</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Key Specifications:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Mission Duration: 2-week autonomous operation</li>
                <li>• Vision Accuracy: &gt;90% precision</li>
                <li>• RFID Reliability: &gt;98% success rate</li>
                <li>• Power: ~1,150 Wh/day consumption</li>
                <li>• PV Area: ~4 m² for energy requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;