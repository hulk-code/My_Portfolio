
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../SharedItems/Navber/Navber';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
           <Navber></Navber>
           <Banner></Banner>
           <AboutMe></AboutMe>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;