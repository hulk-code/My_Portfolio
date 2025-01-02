import React, { useEffect, useState } from 'react';
import './Banner.css'; // Custom CSS for the carousel

const images = [
  "https://i.ibb.co.com/3N2VgCJ/banner1.jpg",
  "https://i.ibb.co.com/HpzSJ2n/bannar2.jpg",
  "https://i.ibb.co.com/tZ2srWD/bannar3.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="carousel-container relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentIndex ? "active" : ""
            } absolute top-0 left-0 w-full h-full`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="carousel-image w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Background Overlay in Front of Carousel Images */}
      <div className="absolute top-0 left-0 w-full h-full
       bg-teal-900 bg-opacity-80"></div>

      {/* Right Section */}
      <div className="absolute top-0 right-0 h-full w-full sm:w-1/3  bg-opacity-70 flex flex-col justify-center items-start p-8">
        <h2 className="text-5xl font-bold mb-4 text-white">AKASH SARKER</h2>
        <p className="text-lg text-white">
          PASSONOID MERN STACK || WEB DEVELOPER.
        </p>
      </div>
    </div>
  );
};

export default Banner;
