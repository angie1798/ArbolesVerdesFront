import "../styles/style.css";
import tree from "../img/trees.png";
import deforestation from "../img/Deforestation.png"
import ubicacion from "../img/Ubicacion.png"
import plantitas from "../img/plantitas.png"
import CustomButton from "../components/button"
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
          <CustomButton color="btn-light" textColor="text-green" text={"Donar"} linkTo={"/"}/>
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
           <CustomButton color="custom-button-green" textColor="text-white" text={"Ver más"} linkTo={"/about-us"}/>
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
            <CustomButton color="custom-button-green" textColor="text-white" text={"Ver más"} linkTo={"/about-us"}/>
          </div>
        </div>
        <div className="container-right">
          <img src={deforestation}/>
        </div>
      </div>
      {/*fin de la sección 3*/}
      {/**inicio de la seccion 4 */}
      <h3 className="poppins-regular title-ubicacion">¿Dónde se ubica el <b>&nbsp;Río Lagarto</b>?</h3>
      <div className="w-100 d-flex container-ubicacion">
        <div className="w-75 d-flex justify-content-center bbb ">
          <img src={ubicacion}/>
        </div>
        <div className="w-25">
          <img src={plantitas}/>
        </div>
      </div>
      {/**fin de la seccion 4 */}
      {/**inicio de la seccion 5 */}
      <div className="container-donar">
        <h4 className="poppins-medium text-white">Ayúdanos a detener 
        la continua deforestación</h4>
        <CustomButton color="btn-light problematica-button" textColor="text-green" text={"Donar"} linkTo={"/"}/>
      </div>
      {/**fin de la seccion 5 */}
      {/**inicio de la seccion 6 */}
      {/**fin de la seccion 6 */}
    </div>
  );
}
export default Home;
