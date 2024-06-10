import "./MovingText.css";
import { logos } from "../../data/data";

function MovingText() {
  return (
    <div className="movingImg_wrapper">
      <div className="movingImgCont">
        {logos.map((item, index) => (
          <div key={index} className="movingImg">
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
      <div className="movingImgCont">
        {logos.map((item, index) => (
          <div key={index} className="movingImg">
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovingText;
