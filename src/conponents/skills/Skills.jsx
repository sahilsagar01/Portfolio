import "./Skills.css"
import SkillsCircle from "../skillsCircle/SkillsCircle"
import {skills , stacks} from "../../data/data"
import Progressbar from "../progressbar/Progressbar"
import MovingText from "../movingText/MovingText"

// console.log(stacks)

function Skills() {
  return (
    <div className="skills_wrapper">
    <div className="skillbackg">
        <h1>Web</h1>
    </div>
        <div className="skillText">
            <h1><span>S</span>kills</h1>
        </div>
        <h2>Technology used in my projects.</h2>
        <div className="mainSkils">
        {
            skills.map((item, index) => (
                <SkillsCircle key={index} skills={item} />
            ))
        }
        </div>
        <div className="stackExp">
        <h2>Experienced in!</h2>
        {
            stacks.map((item,index) =>(
                <Progressbar key={index} data={item} />
            ))
        }
        
        </div>
        <div className="allTools">
        <MovingText />
        </div>
    </div>
  )
}

export default Skills