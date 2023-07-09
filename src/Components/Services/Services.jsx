import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import '../Card/Card'
import './Services.css'

import Idea from "../../img/idea.gif"
import Coffee from "../../img/coffee-cup.gif"
import Rocket from "../../img/rocket.gif"
import Card from '../Card/Card'
import resume from '../../img/cv.jpg'
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion';

const Services = () => {
  const transition={duration:1,type:'spring'}
  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="services" id="Services">
      {/* left side */}

      <div className="awesome" data-aos="zoom-in">
        <span style={{color: darkMode? "white":""}}>My Awesome Services</span>
        <span >Who Am I?</span>

        <span>
        Hello 👋! I am Thinley Norbu an Engineering student graduated from CST.
        <br/>
        I specialize in AI and System Administration. My goal is to bring the research studies
        <br/>
        as a real world application. I am also more interested in Frontend, learnt Backend and UI/UX.
        <br/>
        I am more interested in writing research papers and active on Fiverr and Upwork.
        </span>

        <a href={resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div 
          whileInView={{left:'14rem'}}
          initial={{left:'25rem'}}
          transition={transition}
        >
          <Card
          emoji={Idea}
          heading={"Design"}
          detail={"Figma, Adobe Illustrator"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
          emoji={Coffee}
          heading={"Developer"}
          detail={"HTML,CSS,JS,Python"}/>
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
          emoji={Rocket}
          heading={"UI/UX"}
          detail={"Figma, Adobe Illustrator"}/>
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple"}}></div>

      </div>
    </div>
    

  )
}

export default Services