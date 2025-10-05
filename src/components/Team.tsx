import React from 'react';
import ayaSaadaoui from '../assets/aya saadaoui.png';
import myAvatar from '../assets/my avatar.jpg';
import yassineAyadi from '../assets/yassine ayadi.jpg';
import yassineMaalej from '../assets/yassine maalej.png';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Eya Saadaou",
      role: "Electrical Engineering",
      skills: "Conception robotique, ROS2",
      image: ayaSaadaoui
    },
    {
      name: "Mohamed Rayen Gharbi",
      role: "Computer Systems Engineering",
      skills: "Software Development, Machine Learning, Python, CNN",
      image: myAvatar
    },
    {
      name: "MED YASSINE AYADI",
      role: "Engineering",
      skills: "Mathematics, Problem Solving",
      image: yassineAyadi
    },
    {
      name: "Mohamed Yassine Maalej",
      role: "Software Engineering",
      skills: "Python, C++, AI Integration",
      image: yassineMaalej
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-900">
          The Team Behind the Innovation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center border-l-4 border-orange-500">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-300"
              />
              <h3 className="text-xl font-semibold mb-2 text-red-800">{member.name}</h3>
              <p className="text-orange-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.skills}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-red-800 max-w-3xl mx-auto">
            Our multidisciplinary team combines expertise in robotics, artificial intelligence,
            electronics, and space engineering. United by the passion for space exploration,
            we work together to create innovative solutions for humanity's future on Mars.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;