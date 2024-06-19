import "../styles/style.css";
import { FaArrowRight } from "react-icons/fa";

function CustomButton({color, text, textColor, linkTo}){
return(
    <div className={`custom-button`}>
        <a href={linkTo} className={textColor}>
              <button
                type="button"
                className={`btn ${color} ${textColor} w-100 d-flex justify-content-center`}
              >
                <div className="w-100 roboto-medium textArrowButton">
                  {text}
                </div>
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </a>
    </div>
);
}
export default CustomButton;