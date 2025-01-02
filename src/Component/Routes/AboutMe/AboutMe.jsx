import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";
// import './AboutMe.css';  // Link to the external CSS file

const AboutMe = () => {
  return (
    <div className="bg-blue-gray-700 lg:flex justify-between items-center ">
      <div className=" lg:w-1/3">
        <img
          className="mx-auto"
          src="https://i.ibb.co.com/W6HwbJc/Akash-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="text-white lg:w-1/2 ">
        <h1 className="text-7xl font-bold  text-blue-500  lg:ml-8">ABOUT ME</h1>
        <p className="p-10 text-lg text-blue-gray-100 font-semibold">I am the hardworking and mostly spearheaded person to secure a highly rewarding position as a Full Stack MERN(MongoDb,Express.js,React.js,Node.js) Developer , leveraging my profound expertise and passion for crafting robust and scalable web applications.
        </p>
        
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">Name:</h1><span>Akash Sarker</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">Date of birth:</h1><span>15 JUNE 1997</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">Nationality:</h1><span>Bangladeshi</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">Address:</h1><span>Gazipur, Dhaka</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">Phone:</h1><span>+8801984501095</span>
        </div>
        <div className="flex items-center text-3xl gap-1 font-sans lg:ml-8 ">
        <h1 className="text-4xl font-bold  text-blue-500">E-Mail:</h1><span> <a href="mailto:akash.sarker.coder@gmail.com">akash.sarker.coder@gmail.com</a></span>
        </div>
         
        
      </div>
    </div>
  );
};

export default AboutMe;
