import "../styles/style.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CustomButton({color, text, textColor, linkTo}){
return(
    <div className={`custom-button`}>
         <Link
        to={linkTo}
        className={`text-decoration-none ${textColor}`}
      >
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
            </Link>
    </div>
);
}
export default CustomButton;