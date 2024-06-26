import { useRef } from "react";
import "./Parallax.css";
import { motion, useScroll, useTransform } from "framer-motion";
import land from "../../assets/profileimage/copymoauntain.png";
import sun from "../../assets/parallax4/sunred2.png";
import samo from "../../assets/parallax4/cpemployee.png";

function Parallax({ type }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const palnets = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const sunX = useTransform(scrollYProgress, [0,1],["0%", "-100%"])
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textBg = useTransform(scrollYProgress, [0, 1], ["0%", "-800%"]);
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #eae5d8,#fff)"
            : "linear-gradient(180deg, #eae5d8,#eae5d8)",
      }}
    >
      <motion.h1
        style={{ y: textBg, color: type === "services" ? "white" : "white" }}
      >
        {type === "services"
          ? "Scroll to see my Projects."
          : "Technology i'm familiar with."}
      </motion.h1>
      <motion.img src={samo} className="samorai" />
      <motion.img src={land} style={{ y: palnets }} className="land" />
      <motion.img src={sun} style={{ y: sunY }} className="sun" />
    </div>
  );
}

export default Parallax;
