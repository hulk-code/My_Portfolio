import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNode,
  faVuejs,
  faGitAlt,
  faBootstrap,
  faDocker,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
   
    fetch("/tech.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

 
  const icons = {
    HTML: faHtml5,
    CSS: faCss3Alt,
    JavaScript: faJs,
    React: faReact,
    "Node.js": faNode,
    "Vue.js": faVuejs,
    "Tailwind CSS": faCss3Alt,
    Bootstrap: faBootstrap,
    Git: faGitAlt,
    Firebase: faNpm,
    MongoDB: faDocker,
  };

  return (
    <div className="bg-gray-900 min-h-screen p-5">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col 
            items-center transition-transform hover:rotate-3 hover:scale-105 hover:shadow-xl"
          >
            <FontAwesomeIcon
              icon={icons[skill.name] || faNpm}
              className="text-6xl text-cyan-500 mb-3"
            />
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
