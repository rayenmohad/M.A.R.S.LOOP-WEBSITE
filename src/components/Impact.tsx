import React from 'react';

const Impact: React.FC = () => {
  const benefits = [
    {
      title: "Sustainability",
      description: "Drastic waste reduction, material reuse to minimize environmental impact",
      icon: "♻️"
    },
    {
      title: "Autonomy",
      description: "Less dependence on costly Earth resupply missions",
      icon: "🚀"
    },
    {
      title: "Versatility",
      description: "Production of materials for construction, tools, and colony repairs",
      icon: "🔧"
    },
    {
      title: "Efficiency",
      description: "Minimal energy and water consumption through optimized processes",
      icon: "⚡"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
          Transforming Waste into Resources for Martian Survival
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-orange-500">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-red-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
          <h3 className="text-2xl font-semibold mb-6 text-center text-red-900">Key Performance Metrics</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">&gt;90%</div>
              <p className="text-gray-600">Vision classification precision</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">&gt;98%</div>
              <p className="text-gray-600">RFID identification reliability</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">&lt;24h</div>
              <p className="text-gray-600">Recycling cycle time</p>
            </div>
          </div>
        </div>
        <div className="mt-12 bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-red-900">Test & Validation Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Environmental Qualification:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Thermal cycling: −40°C → +50°C</li>
                <li>• Dust exposure: Simulated regolith</li>
                <li>• Vibration: IEC 60068-2-6 compliance</li>
                <li>• EMI immunity within habitat levels</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-800 mb-2">Acceptance Criteria:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• PV delivers ≥90% of target energy</li>
                <li>• Vision ≥90% precision, RFID ≥98%</li>
                <li>• Mechanical stability under 10,000 cycles</li>
                <li>• Successful 14-day mission simulation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;