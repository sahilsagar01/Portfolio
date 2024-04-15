import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LoginIcon from '@mui/icons-material/Login';
// import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';

import resume from "../../assets/resume/Sahil_Kumar_Frontend_Developer.pdf"

// yoda 
import fighter from "../../assets/yoda/mortalcombat.png"
import fighttext from "../../assets/yoda/hoverme-removebg-preview.png"
import yodaBackground from "../../assets/yoda/yodabg.jpg"



// icons 
import mongoIcon from "../../assets/icons/mongoimg-removebg-preview.png"
import expressIcon from "../../assets/icons/expressimg-removebg-preview.png"
import reactIcon from "../../assets/icons/reactimg-removebg-preview.png"
import nodeIcon from "../../assets/icons/nodeimg-removebg-preview.png"
import scroll from "../../assets/icons/scroll.png"

import { motion } from "framer-motion"


import "./Hero.css"
function Hero() {
  return (
    <div className='hero'>
    <div className='heroCont'>
        <div className='IntroSec'>
            <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5}} className='introText'>
                    <h1>Change your <span>thoughts</span> into reality.</h1>
                     <h2>Hi, I'm <span>Sahil Sagar</span></h2>
                     <p>A Full Stack web Developer</p>
                <div className='buttonCont'>
                <a href={resume} download={"Sahil_Kumar_Frontend_Developer.pdf"}> <button>Resume <FileDownloadIcon /></button></a>
                    <img className='seemore' src={scroll} alt='scrollImage' />
                </div>
                <div className='stack'>
            <div className='mongo'>
              <div className='mongoImgCont' ><img src={mongoIcon} alt='mongo' /></div>
              <p>M</p>
            </div>
            <div className='express'>
            <div className='expressImgCont'><img src={expressIcon} alt='express' /></div>
            <p>E</p>
            </div>
            <div className='react'>
            <div className='reactImgCont'><img src={reactIcon} alt='react' /></div>
            <p>R</p>
            </div>
            <div className='node'>
            <div className='nodeImgCont'><img src={nodeIcon} alt='node' /></div>
            <p>N</p>
            </div>
        </div>
        
            </motion.div>
            <motion.div initial={{opacity: 0, x: 40}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5}} className='profileSec'>
                <div className='yoda'>
                    {/* <img className='fighterText' src={fighttext} alt='fighterText' /> */}
                    <h1 className='fighterText'>Hi, I am here. </h1>
                    <motion.img initial={{opacity: 1, scale: 1.2}} animate={{opacity: 0, scale: 1}} transition={{duration: 1,delay: .5}} className='fighter' src={fighter} alt='fighter' />
                    <img className='bg-image' alt='' src={yodaBackground} />
                </div>
            </motion.div>
        </div>
        
    </div>
    </div>
  )
}

export default Hero