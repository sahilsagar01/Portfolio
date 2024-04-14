import { useRef } from "react"
import "./Parallax.css"
import { motion,useScroll, useTransform } from "framer-motion"
import land from "../../assets/parallax4/land.png"
import sun from "../../assets/parallax4/sunred2.png"
import samo from "../../assets/parallax4/samorai3.png"

function Parallax({type}) {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })
    const palnets = useTransform(scrollYProgress, [0,1],["0%", "100%"])
    const sunX = useTransform(scrollYProgress, [0,1],["0%", "-100%"])
    const sunY = useTransform(scrollYProgress, [0,1],["0%", "150%"])
    const textBg = useTransform(scrollYProgress, [0,1],["0%", "-800%"])
  return (
    <div className="parallax"
    ref={ref}
     style={{background: type==="services"? "linear-gradient(180deg, #505064,#fff)": "linear-gradient(180deg, #fff,#fff)"}}>
    <motion.h1 style={{y:textBg,color: type === "services"? "white": "rgb(213, 101, 101)"}} >{type === "services" ? "Scroll to see my Projects.": "Technology i have familiar with."}</motion.h1>
    <motion.img src={samo}  className="samorai"/>
    <motion.img src={land}  style={{y:palnets}} className="land" />
    <motion.img src={sun}  style={{x:sunX, y:sunY}} className="sun" />
    </div>
  )
}

export default Parallax