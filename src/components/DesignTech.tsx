import React from 'react';
import techComponentImage from '../assets/techcomponent.png';

const DesignTech: React.FC = () => {
  const technologies = [
    {
      title: "Mechanical System",
      items: [
        "Chassis: 6061-T6 Aluminum (0.8m L × 0.6m W × 0.7m H)",
        "Mobility: 4 rugged wheels with traction treads",
        "Conveyor: Belt-driven, aluminum rollers, 24V DC motor",
        "Actuators: Industrial servos for gates and sorting arms",
        "Protection: Plexiglass covers, sealed compartments"
      ]
    },
    {
      title: "Electronics & Control",
      items: [
        "Main Controller: STM32H7B3I-DK microcontroller",
        "AI Processor: NVIDIA Jetson Orin Nano",
        "Motor Driver: Cytron MD30C (30A, 24V)",
        "Sensors: RPLIDAR A1, UHF RFID, IP67 RGB Camera",
        "Communication: UART, ROS2 network, Wi-Fi"
      ]
    },
    {
      title: "Power System",
      items: [
        "Solar PV: 20% efficiency monocrystalline panels",
        "Battery: LiFePO₄ (48V, 419Ah, 20.1 kWh capacity)",
        "Charge Controller: MPPT type for 48V system",
        "Daily Consumption: ~1,150 Wh",
        "PV Area: ~4 m² (Mars irradiance: 589 W/m²)"
      ]
    },
    {
      title: "Sensor Systems",
      items: [
        "RFID: UHF reader (860-960 MHz, 1.5m range)",
        "Vision: CNN model for 3 waste categories (>90% precision)",
        "Processing: Edge computing on Jetson Nano",
        "Communication: UART between STM32 and sensors",
        "Fail-safe: Timeout recovery, duplicate filtering"
      ]
    },
    {
      title: "Software & Control",
      items: [
        "Languages: C++/Python via ROS2",
        "AI: Computer vision for waste classification",
        "Control Logic: STM32 drives actuators based on classification",
        "Safety: Watchdog timers, overcurrent protection",
        "Interface: Local ROS-based network communication"
      ]
    }
  ];

  return (
    <section id="design" className="py-20 bg-gradient-to-b from-red-900 to-red-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Advanced Engineering for Martian Environment
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-red-800 p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold mb-4 text-orange-300">{tech.title}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-orange-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur-xl opacity-30 transform scale-105"></div>
            <img
              src={techComponentImage}
              alt="Technical components of M.A.R.S.Loop system"
              className="relative mx-auto rounded-xl shadow-2xl max-w-5xl w-full border-4 border-orange-400 hover:border-orange-300 transition-all duration-500 hover:shadow-orange-500/25 hover:shadow-3xl transform hover:scale-105"
            />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
          </div>
          <p className="mt-8 text-orange-200 text-lg font-medium max-w-2xl mx-auto">
            Complete system integration showcasing the autonomous recycling technology
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignTech;