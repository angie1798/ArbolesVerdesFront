import "../styles/style.css";
//import fondo from '../img/fondo_arbolesverdes.jpg'
import { Button } from "bootstrap";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      <div className="header-imagen">
        <div className="banner">
          <div className="outfit-semibold text-center"> Conservación de</div>
          <div className="outfit-bold text-center"> RÍO LAGARTO</div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
          nisi. Nullam metus eros, dignissim in rutrum nec, egestas ac
        </div>
        <div className="buttonToDonate position-relative">
          <button
            type="button"
            className="btn btn-light w-100 d-flex justify-content-center"
            href="/"
          >
            <div className="w-100 roboto-medium">Donar</div>
            <div className="arrow">
              <FaArrowRight />
            </div>
          </button>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
}
export default Home;
