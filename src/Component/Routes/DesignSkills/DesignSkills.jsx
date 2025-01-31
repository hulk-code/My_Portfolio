import React from "react";
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiFigma } from "react-icons/si";

const designSkills = [
  { name: "Photoshop", icon: SiAdobephotoshop, level: 80 },
  { name: "Illustrator", icon: SiAdobeillustrator, level: 78 },
  { name: "InDesign", icon: SiAdobeindesign, level: 76 },
  { name: "Figma", icon: SiFigma, level: 85 },
];

const DesignSkills = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-5 text-white">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pt-10">
        UI/UX DESIGN SKILLS
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {designSkills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:rotate-3 hover:scale-105 hover:shadow-xl"
          >
            <skill.icon className="text-6xl text-cyan-500 mb-3" />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            
            <div className="w-full bg-gray-700 h-2 mt-3 rounded-full">
              <div
                className="bg-cyan-500 h-2 rounded-full"
                style={{ width: `${skill.level}%`, transition: "width 0.3s ease-out" }}
              ></div>
            </div>
            <p className="text-xs text-white mt-1">{`${skill.level}%`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSkills;
