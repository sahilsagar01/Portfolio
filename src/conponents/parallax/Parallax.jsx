import { useRef } from "react"
import "./Parallax.css"
import { motion,useScroll, useTransform } from "framer-motion"
import moon from "../../assets/parallax/moonParallax.png"
import sun from "../../assets/parallax/sunparallax.png"
import redSun from "../../assets/parallax2/sunanimay-removebg-preview.png"
import redTemple from "../../assets/parallax2/redTemple-removebg-preview.png"
import tree from "../../assets/parallax2/treeAndLand.png"
import landandMountain from "../../assets/parallax2/landandMount.png"

function Parallax({type}) {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })
    const palnets = useTransform(scrollYProgress, [0,1],["0%", "100%"])
    const yBg = useTransform(scrollYProgress, [0,1],["0%", "100%"])
    const textBg = useTransform(scrollYProgress, [0,1],["0%", "200%"])
    const landMountain = useTransform(scrollYProgress, [0,1],["0%", "20%"])
  return (
    <div className="parallax"
    ref={ref}
     style={{background: type==="services"? "red": "linear-gradient(180deg, rgb(243, 113, 113),#505064)"}}>
    <motion.h1 style={{y:textBg}} >{type === "services" ? "Scroll to see my Projects.": "Technology i have familiar with."}</motion.h1>
    {/* <motion.div  className="mountains"></motion.div>
    <motion.div style={{y:palnets,backgroundImage: `url(${type === "services" ? moon: sun})` }} className="planets"></motion.div>
    <motion.div style={{x:yBg}} className="stars"></motion.div> */}
    <motion.img  style={{x:yBg, y:yBg}} className="redSun" src={redSun} alt="" />
    <motion.img style={{y:palnets}} className="redTemple" src={redTemple} alt="" />
    <motion.img style={{y:landMountain}} className="landMount" src={landandMountain} alt="" />
    <img className="tree" src={tree} alt="" />
    </div>
  )
}

export default Parallax