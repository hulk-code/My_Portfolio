import { useState } from "react";
import logo from "../../../../public/Photo/13.png";
import fullPhoto from "../../../../public/Photo/c13.png";
import logo1 from "../../../../public/Photo/14.png";
import fullPhoto1 from "../../../../public/Photo/15.png";
import logo2 from "../../../../public/Photo/17.png";
import fullPhoto2 from "../../../../public/Photo/18.png";

const designs = [
  { logo: logo, fullPhoto: fullPhoto },
  { logo: logo1, fullPhoto: fullPhoto1 },
  { logo: logo2, fullPhoto: fullPhoto2 },
];

const Design = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  return (
    <div className="lg:m-5">
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pt-10">
        WEB SITES DESIGN
      </h1>
      <div className="grid lg:grid-cols-3 gap-4 p-4">
        {designs.map((design, index) => (
          <div
            key={index}
            className="hero "
            style={{
              backgroundImage: `url(${design.logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">UI DESIGN</h1>
                
                <button
                  className="btn btn-primary"
                  onClick={() => openModal(design.fullPhoto)}
                >
                  View Full Design
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative">
            <img
              src={selectedPhoto}
              alt="Full Design"
              className="lg:w-[450px] lg:h-[600px] w-[300px] h-[500px] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-red-500 rounded-full px-3 py-1"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Design;
