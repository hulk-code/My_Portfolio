import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="bg-brown-800">
      <div className="lg:flex justify-center items-center lg:h-screen lg:relative lg:w-[90%] mx-auto">
        {/* Left side div */}
        <div
          className="bg-brown-400 lg:w-[450px] lg:h-[450px] lg:relative lg:transform lg:translate-x-[5px]"
          data-aos="fade-right"
        >
          <h3 className="text-5xl font-bold pt-10 pl-10">03.</h3>
          <p className="text-4xl pl-10 pt-5 font-semibold text-cyan-700">
            UI/UX Design
          </p>
          <p className="text-xl text-white pl-10 pt-5 p-1 font-semibold">
            With a keen eye for aesthetics and functionality, I specialize in
            creating user-centric interfaces that are visually appealing and
            easy to navigate. I ensure seamless user experiences by focusing on
            intuitive designs.
          </p>
        </div>

        {/* Middle div */}
        <div
          className="bg-blue-500 text-white lg:w-1/3 h-[520px] lg:relative lg:z-20 lg:transform lg:translate-y-[-20px] pt-10"
          data-aos="zoom-in"
        >
          <h2 className="text-5xl font-bold pt-10 pl-10">01.</h2>
          <p className="text-4xl pl-10 pt-5 font-semibold text-blue-gray-900">
            Frontend Development
          </p>
          <p className="text-xl text-deep-purple-100 pl-10 pt-5 p-1 font-semibold">
            Proficient in React.js and other modern frameworks, I excel in
            building responsive and dynamic user interfaces. I transform ideas
            into interactive web applications with a focus on performance and
            usability.
          </p>
        </div>

        {/* Right side div */}
        <div
          className="bg-brown-400 lg:w-[450px] lg:h-[450px] lg:relative transform translate-x-[-5px]"
          data-aos="fade-left"
        >
          <h3 className="text-5xl font-bold pt-10 pl-10">02.</h3>
          <p className="text-4xl pl-10 pt-5 font-semibold text-cyan-700">
            Backend Development
          </p>
          <p className="text-xl text-white pl-10 pt-5 p-1 font-semibold">
            Leveraging Node.js and Express.js, I design scalable and secure
            server-side architectures. I specialize in integrating robust APIs
            and ensuring smooth data flow between the client and server.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
