import React from 'react'
import './Works.css'

import DCDD from '../../img/logo.png'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/cstlogo.png'
import { themeContext } from '../../Context';
import { useContext } from "react";
import {motion} from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode =theme.state.darkMode;
  return (
    <div className="works" id="">
        <div className="awesome">
            <span style={{color: darkMode? "white":""}}>Woks for All these</span>
            <span >Brands & Clients</span>

            <span>
            As a developer, I have worked with renowned organization such as DCDD, internship under 
            <br/> 
            Transformation team, and I do Freelancing works.
            </span>
            <button className="button s-button">Hire Me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        {/*right side*/}
        <div className="w-right">
            <motion.div 
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5,type:'spring'}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={DCDD} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" style={{height:"6rem"}}/>
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works