import React from 'react'

import "./Navbar.css"

import Tooltip from '@mui/material/Tooltip';


// framer motion 
import { motion } from "framer-motion"

// social icons 
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function Navbar() {

    const variants = {
        visible: {opacity: 1, y: 0, transition:{type: "spring",stiffness: 200}}
    }


  return (
    <div className='navbar '>
    <motion.div initial={{opacity: 0,  y: -20}} animate={"visible"} variants={variants} transition={{duration: 0.5}} className='wrapper '>
    <motion.span className=' ' initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Portfolio</motion.span>
    <div className='social_cont flex items-center justify-center'>
   <Tooltip  title='GitHub'>
   <motion.a whileHover={{
    scale: 1.1,
    color: "orange",
    transition: { duration: 0.2 },
  }} target="_blank" href='https://github.com/sahilsagar01'><GitHubIcon /></motion.a>
   </Tooltip>
   <Tooltip title="Fecebook">
   <motion.a whileHover={{
    scale: 1.1,
    color: "#325598",
    transition: { duration: 0.2 },
  }} target="_blank" href='https://www.facebook.com/profile.php?id=100008668992665'><FacebookIcon /></motion.a>
   </Tooltip>
    <Tooltip title="Instagram">
    <motion.a whileHover={{
    scale: 1.1,
    color: "#c00089",
    transition: { duration: 0.2 },
  }} target="_blank" href='https://www.instagram.com/sahilsagar.official/'><InstagramIcon/></motion.a>
    </Tooltip>
    <Tooltip title="X">
    <motion.a whileHover={{
    scale: 1.1,
    transition: { duration: 0.2 },
  }} target="_blank" href='https://twitter.com/sagar_sahil1603'><XIcon /></motion.a>
    </Tooltip>
    </div>
    </motion.div>
    </div>
  )
}

export default Navbar