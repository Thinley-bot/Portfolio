import React from 'react';
import './Intro.css';
import '../FloatingDiv/FloatingDiv'

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.gif'
import thumpup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesemoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from "react";

import {motion} from 'framer-motion';

const Intro = () => {
  const transition={duration:2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode =theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name" data-aos="zoom-in">
          <span style={{color:darkMode? 'white': ""}}>Hello!👋 I Am</span>
          <span>Thinley Norbu</span>
          <span>I am an AI specialist, Red Hat, backend development, 
            and frontend development, 
            <br/>offering a comprehensive skill 
            set for tackling diverse and 
            complex projects.</span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href='https://github.com/Thinley-bot'><img src={Github} alt="Github" /></a>
            <a href='https://www.linkedin.com/in/thinley-norbu-abb565248/'><img src={LinkedIn} alt="LinkedIn" /></a>
            <a href='https://www.facebook.com/'><img src={Instagram} alt="Instagram" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt=''/>
        <motion.img 
        initial={{left:"-36%"}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesemoji} alt="" />

        <motion.div 
        initial={{top:'10%',left:'64%'}}
        whileInView={{left:'58%'}}
        transition={transition}
        style={{top:'10%', left:'50%'}} 
        className='floating-div'>
          <FloatingDiv image={crown} txt1='Web Developer' txt2='& Redhat'/>
        </motion.div>
        <motion.div 
        initial={{left:'-3rem', top:'20rem'}}
        whileInView={{left: '0rem'}}
        transition={transition}
        style={{top:'18rem',left:'-15%'}} 
        className='floating-div'>
          <FloatingDiv image={thumpup} txt1='Artificial Intelligence' txt2='& NLP'/>
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
          left:'-9rem',
        }}> 
        </div>      
      </div>
    </div>
  );
}

export default Intro;
