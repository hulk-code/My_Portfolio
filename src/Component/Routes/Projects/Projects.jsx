import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import img1 from "../../../../public/Photo/gym.png";
import img2 from "../../../../public/Photo/freelancer.png";
import img3 from "../../../../public/Photo/phoneShop.png";

const Projects = () => {
  const projects = [
    {
      img: img1,
      name: "Gym Management App",
      description:
        "A fitness-focused app for gym membership management, workout tracking, and booking sessions.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Material UI",
      ],
      links: {
        client: "https://github.com/example/gym-client",
        server: "https://github.com/example/gym-server",
        live: "https://example.com/gym-app",
      },
    },
    {
      img: img2,
      name: "Freelancer Portfolio",
      description:
        "A portfolio site showcasing freelance projects, client testimonials, and contact options.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Daisy UI",
      ],
      links: {
        client: "https://github.com/example/freelancer-client",
        server: "https://github.com/example/freelancer-server",
        live: "https://example.com/freelancer-portfolio",
      },
    },
    {
      img: img3,
      name: "Phone Shop E-Commerce",
      description:
        "An e-commerce site for purchasing smartphones with features like cart, reviews, and secure checkout.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Daisy UI",
      ],
      links: {
        client: "https://github.com/example/phone-shop-client",
        server: "https://github.com/example/phone-shop-server",
        live: "https://example.com/phone-shop",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-10">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pb-10">
        COMPLETE PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="mb-3">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500 text-white text-sm py-1 px-2 rounded-md text-center"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-5">
                <a
                  href={project.links.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-300"
                >
                  Client Site
                </a>
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:text-purple-300"
                >
                  Server Site
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-300"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
