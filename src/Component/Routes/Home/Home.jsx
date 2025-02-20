
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../../SharedItems/Navber/Navber';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Service from '../Service/Service';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import DesignSkills from '../DesignSkills/DesignSkills';
import Design from '../Design/Design';
import ArtGallery from '../ArtGalery/ArtGalery';


const Home = () => {
    return (
        <div className=''>
           <Navber></Navber>
           <Banner></Banner>
           <AboutMe></AboutMe>
         <Education></Education>
         <Service></Service>
         <Skills></Skills>
         <DesignSkills></DesignSkills>
         <Projects></Projects>
         <Design></Design>
         <ArtGallery></ArtGallery>
         <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;