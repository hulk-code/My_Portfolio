import React, { useState } from "react";
import { FaLink } from "react-icons/fa6";
import img1 from "../../../../public/Photo/gym.png";
import img2 from "../../../../public/Photo/freelancer.png";
import img3 from "../../../../public/Photo/phoneShop.png";

const Projects = () => {
  const projects = [
    {
      img: img1,
      name: "Gym Management App",
      description:
        "This site is based on a gym center. Where customer, trainer, and admin get info individually. On this website, an admin can change the role based on user registration. Random customers can subscribe for the latest updates. Customers can book a trainer by the trainer's available time slot. Admin can pay the trainer's monthly payment.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Material UI",
      ],
      links: {
        client: "https://github.com/hulk-code/Fitness-House",
        server: "https://github.com/hulk-code/Fitness-house-server",
        live: "https://fittnesshouse-67e54.web.app",
      },
    },
    {
      img: img2,
      name: "Freelancer Portfolio",
      description:
        "Firebase authentication with Google, email, and password. This is a site where users can post a job and bid for a job another user posted. Job owners can manage the states of the users who bid for the job. Users can see the total posted jobs and bids job.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Daisy UI",
      ],
      links: {
        client: "https://github.com/hulk-code/Find-Your-job",
        server: "https://github.com/hulk-code/Find-your-Job-server",
        live: "https://clever-marzipan-2ca7b3.netlify.app",
      },
    },
    {
      img: img3,
      name: "Phone Shop E-Commerce",
      description:
        "An e-commerce site for purchasing smartphones with features like cart, reviews, and secure checkout. Filter the products by their brand name. A section where new arrivals are added and appear at the home of their category. Add product information that can be updated and deleted. Only logged-in users can add, delete, and update product information.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Daisy UI",
      ],
      links: {
        client: "https://github.com/hulk-code/Phone-Shop-server",
        server: "https://github.com/hulk-code/Phone-Shop",
        live: "https://incandescent-kheer-0aa31b.netlify.app",
      },
    },
  ];

  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen bg-blue-gray-500 p-10">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pb-10">
        COMPLETE PROJECTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden 
            hover:shadow-xl transition-transform hover:scale-105 "
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-screen h-64 object-cover "
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <p className="text-gray-300 mb-3">
                {expanded[index]
                  ? project.description
                  : project.description.split(" ").slice(0, 30).join(" ") +
                    "..."}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-blue-500 hover:text-blue-300 ml-2"
                >
                  {expanded[index] ? "Read Less" : "Read More"}
                </button>
              </p>
              <div className="mb-3">
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="grid grid-cols-3 gap-2">
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
                  className="flex items-center text-blue-500 hover:text-blue-300"
                >
                  <FaLink className="mr-2" /> Client Site
                </a>
                <a
                  href={project.links.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-purple-500 hover:text-purple-300"
                >
                  <FaLink className="mr-2" /> Server Site
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-500 hover:text-green-300"
                >
                  <FaLink className="mr-2" /> Live Link
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
