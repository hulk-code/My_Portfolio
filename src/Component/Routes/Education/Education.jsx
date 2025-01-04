import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGraduationCap } from "react-icons/fa"; // FontAwesome Icon
import { Typography } from "@material-tailwind/react";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-blue-gray-900 py-12">
      <h1
        className="text-5xl md:text-7xl font-bold text-blue-500 text-center mb-12"
        data-aos="fade-up"
      >
        EDUCATION
      </h1>
      <div className="relative container mx-auto">
        {/* Middle Line - Hidden for small devices */}
        <div
          className="absolute inset-0 w-1 bg-blue-500 left-1/2 transform -translate-x-1/2 hidden md:block"
          data-aos="fade-down"
        ></div>

        {/* Step 0: Education Types Icon */}
        <div className="relative flex items-center mb-16">
          <div className="flex justify-center w-full" data-aos="zoom-in">
            <div className="w-16 h-16 bg-blue-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-white text-4xl" />
            </div>
          </div>
        </div>

        {/* Step 1: High School */}
        <div className="relative flex flex-col md:flex-row items-center mb-20">
          <div
            className="flex justify-end md:w-1/2 md:pr-6 w-full text-center md:text-right"
            data-aos="fade-right"
          >
            <div className="p-4 rounded-lg text-white shadow-md">
              <h3 className="text-2xl md:text-4xl text-blue-500 font-semibold p-2">
                High School
              </h3>
              <p className="text-base md:text-2xl">
                Completed high school at Safiuddin Sarker Academy and College.
              </p>
            </div>
          </div>
          <div
            className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white mx-auto z-10 my-4 md:my-0"
            data-aos="zoom-in"
          ></div>
          <div className="md:w-1/2 md:pl-6"></div>
        </div>

        {/* Step 2: Bachelor's Degree */}
        <div className="relative flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-6"></div>
          <div
            className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white mx-auto z-10 my-4 md:my-0"
            data-aos="zoom-in"
          ></div>
          <div
            className="flex justify-start md:w-1/2 md:pl-6 w-full text-center md:text-left"
            data-aos="fade-left"
          >
            <div className="p-4 rounded-lg text-white shadow-md">
              <h3 className="text-2xl md:text-4xl text-blue-500 font-semibold p-2">
                Bachelor's Degree
              </h3>
              <p className="text-base md:text-2xl">
                Earned a Bachelor's in Computer Science from Tejgaon College.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Web Development Course */}
        <div className="relative flex flex-col md:flex-row items-center mb-16">
          <div
            className="flex justify-end md:w-1/2 md:pr-6 w-full text-center md:text-right"
            data-aos="fade-right"
          >
            <div className="p-4 rounded-lg text-white shadow-md">
              <h3 className="text-2xl md:text-4xl text-blue-500 font-semibold p-2">
                PH Hero Web Development Course
              </h3>
              <p className="text-base md:text-2xl">
                Successfully completed an intensive full-stack web development
                course, specializing in MERN stack development.
              </p>
            </div>
          </div>
          <div
            className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white mx-auto z-10 my-4 md:my-0"
            data-aos="zoom-in"
          ></div>
          <div className="md:w-1/2 md:pl-6"></div>
        </div>

        {/* Step 4: MSC Candidate */}
        <div className="relative flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 md:pr-6"></div>
          <div
            className="w-10 h-10 bg-blue-500 rounded-full border-4 border-white mx-auto z-10 my-4 md:my-0"
            data-aos="zoom-in"
          ></div>
          <div
            className="flex justify-start md:w-1/2 md:pl-6 w-full text-center md:text-left"
            data-aos="fade-left"
          >
            <div className="p-4 rounded-lg text-white shadow-md">
              <h3 className="text-2xl md:text-4xl text-blue-500 font-semibold p-2">
                MSC Candidate
              </h3>
              <p className="text-base md:text-lg">
                <div className="flex animate-pulse flex-wrap items-center gap-8">
                  <div className="w-max">
                    <Typography
                      as="div"
                      variant="paragraph"
                      className="mb-2 h-2 lg:w-96 rounded-full bg-gray-300"
                    >
                      &nbsp;
                    </Typography>
                    <Typography
                      as="div"
                      variant="paragraph"
                      className="mb-2 h-2 lg:w-80 rounded-full bg-gray-300"
                    >
                      &nbsp;
                    </Typography>
                    <Typography
                      as="div"
                      variant="paragraph"
                      className="mb-2 h-2 w-52 lg:w-72 rounded-full bg-gray-300"
                    >
                      &nbsp;
                    </Typography>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
