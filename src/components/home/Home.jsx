import React from 'react';
import styles from "./Home.module.css";
import workingSample2 from '../../assets/workingSample2.mp4';
import poster from "../../assets/backimg.png";
import Hero from '../hero/Hero';
import About from '../About/About';
import Work from '../work/Work';
import Services from '../services/Services';
import Expertise from '../expertise/Expertise';

import TestCarousel from '../gallery/Gallery';
import Contact from '../contact/Contact';



const Home = () => {
  return (
    <>
    <Hero/>
    <Work/>
    <About/>
    <TestCarousel/>
    <Services/>
    <Expertise/>
    <Contact/>

    </>
  )
}

export default Home
