import React from 'react';
import artGalery from '../../../../public/ArtGalery/CAFE LOGO-05.jpg';
import artGalery1 from '../../../../public/ArtGalery/PIZZA HUT 1.jpg';
import artGalery2 from '../../../../public/ArtGalery/PIZZA HUT 2.jpg';
import artGalery3 from '../../../../public/ArtGalery/pizza hut 3.jpg';
import artGalery4 from '../../../../public/ArtGalery/social media cafe-01.jpg';
import artGalery5 from '../../../../public/ArtGalery/social media cafe-02.jpg';
import artGalery6 from '../../../../public/ArtGalery/Untitled-2.jpg';

const images = [
    artGalery, artGalery1, artGalery2, artGalery3, artGalery4, artGalery5, artGalery6
];

const ArtGallery = () => {
    return (

    

       <div>
        <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pt-10">
        ART GALERY
      </h1>
         <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-11/12 mx-auto">
            {images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:rotate-3 hover:scale-105">
                    <img src={img} alt={`Art ${index + 1}`} className="w-96 h-72 rounded-lg" />
                </div>
            ))}
        </div>
       </div>
    );
};

export default ArtGallery;