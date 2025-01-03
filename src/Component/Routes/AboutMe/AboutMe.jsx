import React, { useEffect } from "react";
import { Avatar, Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Title from "../../SharedItems/Title/Title";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-blue-gray-700 lg:flex justify-between items-center">
      <div
        className="lg:w-1/3"
        data-aos="fade-right"
      >
        <img
          className="mx-auto lg:mt-20 lg:mb-5"
          src="https://i.ibb.co.com/W6HwbJc/Akash-removebg-preview.png"
          alt=""
        />
        <div className="text-center lg:mb-10 p-8">
          <a
            href="/src/assets/Mern stack resume of Akash Sarker.pdf"
            download="My_Resume.pdf"
            className="relative px-6 py-5 font-bold text-black group"
          >
            <span
              className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
            <span className="relative">Download Resume</span>
          </a>
        </div>
      </div>
      <div
        className="text-white lg:w-1/2"
        data-aos="fade-down"
      >
       <Title></Title>
        <p className="lg:p-10 text-lg text-blue-gray-100 font-semibold w-full">
          I am the hardworking and mostly spearheaded person to secure a highly
          rewarding position as a Full Stack MERN(MongoDb,Express.js,React.js,Node.js) 
          Developer, leveraging my
          profound expertise and passion for crafting robust and scalable web
          applications.
        </p>

        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">Name:</h1>
          <span>Akash Sarker</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">Date of birth:</h1>
          <span>15 JUNE 1997</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">Nationality:</h1>
          <span>Bangladeshi</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">Address:</h1>
          <span>Gazipur, Dhaka</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">Phone:</h1>
          <span>+8801984501095</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8">
          <h1 className="text-4xl font-bold text-blue-500">E-Mail:</h1>
          <span>
            <a href="mailto:akash.sarker.coder@gmail.com">
              akash.sarker.coder@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
