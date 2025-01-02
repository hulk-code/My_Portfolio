
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../SharedItems/Navber/Navber';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Navber></Navber>
           <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;