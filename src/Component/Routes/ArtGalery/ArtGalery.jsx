import React, { useEffect, useState } from "react";

import artGalery7 from "../../../../public/ArtGalery/banner design.jpg";
import artGalery8 from "../../../../public/ArtGalery/city light.jpg";



const ArtGallery = () => {
    const [images ,setImages]=useState([])

    useEffect(() => {
      fetch("/public/images.json")
        .then((response) => response.json())
        .then((data) => setImages(data))
        .catch((error) => console.error("Error fetching images:", error));
    }, []);

  return (
    <div>
      <h1 className="text-5xl md:text-7xl font-bold text-blue-500 text-center pt-10">
        ART GALERY FOR RESTURENT
      </h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {images.map((img) => (
        <div key={img.id} className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={img.url} alt={img.title} className="w-full h-48 object-cover rounded-t-lg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{img.title}</h2>
            <p>{img.description}</p>
           
          </div>
        </div>
        
      ))}
    </div>
     
      

<div>

  <div className="lg:p-10">
    <div className="card bg-base-100 shadow-xl flex flex-col lg:flex-row">
      <figure className="w-full lg:w-1/2">
        <img src={artGalery7} alt="Album" className="w-full object-cover" />
      </figure>
      <div className="card-body w-full lg:w-1/2 p-5">
        <h2 className="card-title">Ecommerce Life Circle Banner</h2>
        <p>
          Visual Style: Flat, modern, or minimalistic illustrations. Circular Flow Design – 
          Show stages like Product Listing → Customer Browsing → Order Placement → Payment → 
          Shipping → Delivery → Feedback. Illustrated Icons – Shopping cart, credit card, 
          delivery truck, customer giving a review. Character Illustrations – A shopper browsing 
          on a laptop or mobile, a delivery person, or a store owner managing inventory. 
          Vibrant Colors – Use blue, green, orange, and white to keep it clean and attractive.
        </p>
        <h1 className="text-xl font-semibold">Technology: Adobe Illustrator CC</h1>
      </div>
    </div>
  </div>

  <div className="card bg-base-100 shadow-xl m-5 flex flex-col lg:flex-row">
    <figure className="w-full lg:w-1/2 ">
      <img src={artGalery8} alt="City Sound" className="w-full lg:w-[300px] object-cover" />
    </figure>
    <div className="card-body w-full lg:w-1/2 p-5">
      <h2 className="card-title">"City Sound: The Rhythm of Urban Life" Poster Concept</h2>
      <p>
        Big City Buildings with Lighting: Tall skyscrapers with glowing windows to represent a lively city. 
        Billboard signs & LED lights for an urban feel. Reflections on wet streets for a night-time energy. 
        <br />
        Busy City Vibes: Fast-moving traffic (light streaks of cars & buses for motion), Crowds of people walking 
        (blurred to suggest movement), Street musicians, honking cars, subway noise—illustrated or represented 
        with soundwaves. 
        <br />
      </p>
      <h1 className="text-xl font-semibold">Technology: Adobe Illustrator CC</h1>
    </div>
  </div>
</div>

    </div>
  );
};

export default ArtGallery;
