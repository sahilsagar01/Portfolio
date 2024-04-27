import React, { useRef } from 'react'
import "./Portfolio.css"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"
import mg from "../../assets/projectImgs/Screenshot 2024-04-14 191640.png"
import livehr from "../../assets/projectImgs/livehr1.png"
import nwl1 from "../../assets/projectImgs/nwl1.png"
import nwl2 from "../../assets/projectImgs/nwl2.png"
import nwl3 from "../../assets/projectImgs/nwl3.png"
import emr1 from "../../assets/projectImgs/physioEmr1.png"
import emr2 from "../../assets/projectImgs/physioEmr2.png"
import emr3 from "../../assets/projectImgs/physioemr3.png"
import landing1 from "../../assets/projectImgs/landingpage1.png"
import landing2 from "../../assets/projectImgs/landingpage2 copy.png"
import landing3 from "../../assets/projectImgs/landingpage3.png"



const circleHealth = [
    {
        id: 1,
        tech: "ReactJs, Material-UI, Framer-motion",
        name: "HR Dashboard V3",
        img1: mg,
        img2: mg,
        img3: mg,
        des: "Collaborated in the creation of a new HR dashboard for the company, contributing tothe enhancement of data visualization and decision-making processes. Played a key role in Developing and implementing user-friendly features in rRactJS."
    },
    {
        id: 3,
        tech: "ReactJs, Swiper slider, Material-UI",
        name: "HR Dashboard V2 ",
        img1: livehr,
        img2: livehr,
        img3: livehr,
        des: "In my role, I led the creation of an engaging feedback carousel at the heart of our HR dashboard. Powered by ReactJS and styled with Material-UI, it seamlessly showcases employee feedback. With Swiper Slider, users can effortlessly navigate through testimonials and survey results, fostering transparency and collaboration. It's not just a feature; it's an immersive experience driving our company culture forward."
    },
    {
        id: 2,
        tech: "ReactJs, Material-UI, Framer-motion",
        name: "Physio EMR",
        img1: emr1,
        img2: emr2,
        img3: emr3,
        des: "Implemented draggable and exercise search feature to physiotherapist EMR in ReactJs to help care managers rearrange and search the exercises according to them and made UI/UX clean and easy to use."
    },
   
    {
        id: 4,
        tech: "HTML, CSS 3, JAVASCRIPT",
        name: "Newsletter App",
        img1: nwl1,
        img2: nwl2,
        img3: nwl3,
        des: "In my role, I led the creation of an engaging feedback carousel at the heart of our HR dashboard. Powered by ReactJS and styled with Material-UI, it seamlessly showcases employee feedback. With Swiper Slider, users can effortlessly navigate through testimonials and survey results, fostering transparency and collaboration. It's not just a feature; it's an immersive experience driving our company culture forward."
    },
    {
        id: 5,
        tech: "HTML, CSS 3, JAVASCRIPT",
        name: "Landing pages",
        img1: landing1,
        img2: landing2,
        img3: landing3,
        des: "Created dynamic and visually appealing landing pages by seamlessly integrating HTML, CSS, and JavaScript, enhancing user engagement and interaction."
    },
]

const SingleSection = ({item}) => {

    const ref = useRef()

    
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end center"]
    })
    const image1 = useTransform(scrollYProgress, [0,1],["0%", "250%"])
    // const sunX = useTransform(scrollYProgress, [0,1],["0%", "-100%"])
    const image2 = useTransform(scrollYProgress, [0,1],["0%", "100%"])
    const image3 = useTransform(scrollYProgress, [0,1],["0%", "100%"])
    const textBox = useTransform(scrollYProgress, [0,1],["0", "200%"])
    return <section className='expSection' ref={ref}>
    <div className='expWrapper'>
        <div className='expimgCont'>
            <motion.img style={{y:image1}} className='expimg1' src={item.img1} alt={item.name} />
            <motion.img style={{y:image2}} className='expimg2' src={item.img2} alt={item.name} />
            <motion.img style={{y:image3}} className='expimg3' src={item.img3} alt={item.name} />
        </div>
        <motion.div style={{x:textBox}} className='textCont'>
            <h1>{item.name}</h1>
            <h2>{item.tech}</h2>
            <p>{item.des}</p>
        </motion.div>
    </div>
    </section>
}




function Portfolio() {

    
    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className='portfolio' ref={ref}>
    <div className='ExperiencreProgress'>
        <h1>Work Experience</h1>
        <motion.div style={{scaleX}} className='ExperiencreProgressbar'></motion.div>
    </div>
        {
            circleHealth.map((item, index) => {
                return <SingleSection key={index} item={item} />
            })
        }
    </div>
  )
}

export default Portfolio