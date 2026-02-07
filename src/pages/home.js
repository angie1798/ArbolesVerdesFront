import { useState, useEffect } from "react";
import tree from "../img/trees.png";
import deforestation from "../img/Deforestation.png"
import ubicacion from "../img/Ubicacion.png"
import plantitas from "../img/plantitas.png"
import CustomButton from "../components/button"
import ContactUs from "../components/contact-us";
import "../styles/style.css";

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
          <p  className="w-75 text-white rio-text">
            El Río Lagarto es un arroyo ubicado en la provincia de Puntarenas, Costa Rica.
             La afectación de su cauce ha sido ocacionado por la tala de árboles, la contaminación de las aguas por 
             los químicos y la extracción de material del río, afectando así a las comunidades cercanas.
          </p>
          <div className="buttonToDonate">
          <CustomButton color="btn-white" textColor="text-green-button" text={"Donar"} linkTo={"/donate"}/>
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
            Nuestro objetivo es rescatar el cauce del Río Lagarto y revertir el daño ambiental causado por la tala, la contaminación y la extracción minera
            mediante una inversión sin fines de lucro dedicada a su restauración.
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
        <h2 className={`title poppins-regular problematica-title ${window.innerWidth<1200?'mt-4':''}`}>Problemática</h2>
          <h4 className="subtitle poppins-light">
          ¿Por qué debe importarnos?
          </h4>
          <p className="problematica-text">Rescatar el cauce del río y detener la tala indiscriminada es vital para proteger la biodiversidad, el equilibrio climático y el acceso al agua para las comunidades locales.</p>
            <div className="container-button-whoWeAre problematica-button">
            <CustomButton color="custom-button-green" textColor="text-white" text={"Ver más"} linkTo={"/history"}/>
          </div>
        </div>
        <div className="container-right">
          <img src={deforestation} className="w-100 mt-5 d-xl-none"/>
        </div>
      </div>
      {/*fin de la sección 3*/}
      {/**inicio de la seccion 4 */}
      <h3 className="poppins-regular title-ubicacion">¿Dónde&nbsp;se&nbsp;ubica&nbsp;el<b>&nbsp;Río&nbsp;Lagarto</b>?</h3>
      <div className="w-100 d-flex container-ubicacion">
        <div className="d-flex justify-content-center bbb ">
          <img src={ubicacion}  className="w-100 d-xl-none"/>
        </div>
        <div className="ccc">
          <div className="text-ubicacion">
            <h4 className="poppins-light">
            <span>País:</span> Costa Rica
            </h4>
            <h4 className="poppins-light">
            <span>Provincia:</span>  Puntarenas
            </h4>
            <h4 className="poppins-light">
            <span>Extensión:</span> 46km
            </h4>
          </div>
          <img src={plantitas} className="align-self-center"/>
        </div>
      </div>
      {/**fin de la seccion 4 */}
      {/**inicio de la seccion 5 */}
      <div className="container-donar">
        <h4 className="poppins-medium text-white">Ayúdanos a detener 
          <br/>
        la continua deforestación</h4>
        <CustomButton color="btn-white deforestacion-button" textColor="text-green-button" text={"Donar"} linkTo={"/donate"}/>
      </div>
      {/**fin de la seccion 5 */}
      {/**inicio de la seccion 6 */}
      <a id="contacto">
      <ContactUs/>
      </a>
      
      {/**fin de la seccion 6 */}
    </div>
  );
}
export default Home;
