import "../styles/style.css";
import tree from "../img/trees.png";
import deforestation from "../img/Deforestation.png"
import { Button } from "bootstrap";
import { FaArrowRight } from "react-icons/fa";

function Home() {
  return (
    <div>
      {/* Seccion del hero */}
      <div className="header-imagen d-flex w-100">
        <div className="container-left">
          <div className="banner">
            <p className="outfit-semibold">Conservación de <span className="outfit-bold">RÍO LAGARTO</span></p>
          </div>
        </div>
        <div className="container-right">
          <p  className="w-75 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac justo
            nisi. Nullam metus eros, dignissim in rutrum nec, egestas ac
          </p>
          <div className="buttonToDonate">
            <a href="/donate">
              <button
                type="button"
                className="btn btn-light w-100 d-flex justify-content-center"
              >
                <div className="w-100 roboto-medium textArrowButton">
                  Donar
                </div>
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Fin seccion del hero */}
      {/* Sección 2 */}
      <div className="whoWeAre-banner">
        <div className="container-whoWeAre">
          <div className="title-container title poppins-regular">Quiénes somos?</div>
          <div className="text-container subtitle poppins-light">
            Conoce nuestro propósito.
          </div>
          <div className="arbolitos-forms">
            <img src={tree} />
          </div>
        </div>
        <div className="container-text_button text-black">
          <p className="w-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            justo nisi. Nullam metus eros, dignissim in rutrum nec, egestas ac
            tellus. Fusce feugiat, dui in pulvinar pretium, orci nisi mollis
            dolor, sed pharetra odio lacus a tellus. Maecenas vel hendrerit
            lorem, nec tempus neque. Curabitur ligula magna, rutrum id maximus
            ut, sagittis a tortor. Aliquam erat.
          </p>
          <div className="container-button-whoWeAre">
            <a href="/donate">
              <button
                type="button"
                className="btn w-100 d-flex justify-content-center"
              >
                <div className="w-100 roboto-medium textArrowButton">
                  Ver más
                </div>
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* Fin Sección 2 */}
      {/*Inicio sección 3*/ }
      <div className="container-principal problematica">
        <div className="container-left">
        <h2 className="title poppins-regular">Problemática</h2>
          <h4 className="subtitle poppins-light">
          ¿Por qué debe importarnos?
          </h4>
          <p className="problematica-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed ac justo nisi. Nullam metus eros, dignissim in rutrum.</p>
            <div className="container-button-whoWeAre problematica-button">
            <a href="/donate">
              <button
                type="button"
                className="btn w-100 d-flex justify-content-center"
              >
                <div className="w-100 roboto-medium textArrowButton">
                  Ver más
                </div>
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="container-right">
          <img src={deforestation}/>
        </div>
      </div>
    </div>
  );
}
export default Home;
