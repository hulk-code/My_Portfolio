
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../SharedItems/Navber/Navber';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
           <Navber></Navber>
           <Banner></Banner>
           <AboutMe></AboutMe>
         <Education></Education>
         <Service></Service>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;