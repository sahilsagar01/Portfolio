import "./SkillsCircle.css"

function SkillsCircle(props) {

    // console.log(props.skills.percent)


    const circleProgress = {
        background: `conic-gradient(red calc(${props.skills.percent ? props.skills.percent * 3.6: 100*3.6}deg), #ffffff3c 0deg)`
    }


  return (
    <div className="skillCircle_box">
    <div className="circleCont">
        <div className="circleProgress" style={circleProgress}>
            <h1>{props.skills.percent}%</h1>
        </div>
    </div>
    <div className="SkillText">
        <h1>{props.skills.tech}</h1>
    </div>
    </div>
  )
}

export default SkillsCircle