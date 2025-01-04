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
  className="text-white w-full lg:w-1/2 px-4 lg:px-0"
  data-aos="fade-down"
>
  <Title />
  <p className="p-4 lg:p-10 text-base sm:text-lg text-blue-gray-100 font-semibold">
    I am a hardworking and spearheaded individual aiming to secure a highly
    rewarding position as a Full Stack MERN (MongoDB, Express.js, React.js,
    Node.js) Developer, leveraging my profound expertise and passion for
    crafting robust and scalable web applications.
  </p>

  <div className="space-y-4">
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">Name:</h1>
      <span>Akash Sarker</span>
    </div>
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">
        Date of Birth:
      </h1>
      <span>15 JUNE 1997</span>
    </div>
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">
        Nationality:
      </h1>
      <span>Bangladeshi</span>
    </div>
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">Address:</h1>
      <span>Gazipur, Dhaka</span>
    </div>
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">Phone:</h1>
      <span>+8801984501095</span>
    </div>
    <div className="flex flex-wrap items-center text-lg sm:text-2xl gap-1 font-sans">
      <h1 className="text-xl sm:text-3xl font-bold text-blue-500">E-Mail:</h1>
      <span>
        <a href="mailto:akash.sarker.coder@gmail.com" className="underline">
          akash.sarker.coder@gmail.com
        </a>
      </span>
    </div>
  </div>
</div>

    </div>
  );
};

export default AboutMe;
