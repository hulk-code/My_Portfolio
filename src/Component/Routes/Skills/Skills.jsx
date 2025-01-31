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
  const [progress, setProgress] = useState({});
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    fetch("/tech.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.error("Error loading JSON:", err));

    const fixedProgress = {
      HTML: 85,
      CSS: 90,
      JavaScript: 80,
      React: 88,
      "Node.js": 82,
      "Express.js": 85,
      MongoDB: 90,
      "Vue.js": 87,
      "Tailwind CSS": 84,
      Bootstrap: 86,
      Git: 89,
      Webpack: 80,
      TypeScript: 85,
      Firebase: 83,
      Figma: 75,
      "Material-UI": 80,
    };

    setProgress(fixedProgress);
  }, []);

  useEffect(() => {
    if (Object.keys(progress).length > 0 && !animationStarted) {
      setAnimationStarted(true);
      Object.keys(progress).forEach((skillName) => {
        let currentProgress = 0;
        const targetProgress = progress[skillName];
        const interval = setInterval(() => {
          if (currentProgress < targetProgress) {
            currentProgress++;
            setProgress((prev) => ({
              ...prev,
              [skillName]: currentProgress,
            }));
          } else {
            clearInterval(interval);
          }
        }, 30);
      });
    }
  }, [progress, animationStarted]);

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
        {skills.map((skill, index) => {
          const progressValue = progress[skill.name] || 0;

          return (
            <div
              key={index}
              className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:rotate-3 hover:scale-105 hover:shadow-xl"
            >
              {icons[skill.name] ? (
                typeof icons[skill.name] === "object" ? (
                  <FontAwesomeIcon
                    icon={icons[skill.name]}
                    className="text-6xl text-cyan-500 mb-3"
                  />
                ) : (
                  React.createElement(icons[skill.name], {
                    className: "text-6xl text-cyan-500 mb-3",
                  })
                )
              ) : (
                <FontAwesomeIcon
                  icon={faNpm}
                  className="text-6xl text-cyan-500 mb-3"
                />
              )}

              <h3 className="text-xl font-semibold">{skill.name}</h3>

              <div className="w-full bg-gray-700 h-2 mt-3 rounded-full">
                <div
                  className="bg-cyan-500 h-2 rounded-full"
                  style={{
                    width: `${progressValue}%`,
                    transition: "width 0.3s ease-out",
                  }}
                ></div>
              </div>
              <p className="text-xs text-white mt-1">{`${progressValue}%`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
