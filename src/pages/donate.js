import ContactUs from "../components/contact-us";
import "../styles/style.css";
import pajaros from "../img/pajaros.png";
import plantitaReal from "../img/plantita_real.png";
import { FaMobile } from "react-icons/fa6";
import { BsCreditCardFill } from "react-icons/bs";

function Donate() {
  return (
    <div className="home">
      {/**Inicio sección 1 */}
      <div className="container-seccion1-donar d-flex">
        <div className="container-left d-flex">
          <div className="background-abstract" />
          <div className="container-section1-texts">
            <h2 className="outfit-bold text-green max-title">DONÁ</h2>
            <h3 className="outfit-semibold text-green bigger-title">
              en pro de la conservación
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              justo nisi. Nullam metus eros, dignissim.
            </p>
          </div>
        </div>
        <div className="container-right">
          <div className="circle-gradient">
            <img src={plantitaReal} />
          </div>
        </div>
      </div>
      {/**Final sección 1 */}
      {/**Inicio sección 2 */}
      <div className="como-donar d-flex">
        <div className="container-left justify-content-start">
          <div className=" alineacion-texto-left">
            <h4 className="title poppins-regular">Formas de donar</h4>
            <h4 className="subtitle poppins-light">¿Cómo podés donar?</h4>
            <p className="roboto-regular">
              Podés donar a través de una transacción bancaria y también
              mediante sinpe móvil.
            </p>
          </div>
          <div className="d-flex iconos-donacion-container">
            <div className="w-50 d-flex">
              <BsCreditCardFill className="iconos-donacion text-beige" />
              <h4 className="poppins-regular fontSize-16 text-beige">
                TRANSFERENCIA <br />
                BANCARIA
              </h4>
            </div>
            <div className="w-50 d-flex">
              <FaMobile className="iconos-donacion text-beige" />
              <h4 className="poppins-regular fontSize-16 text-beige">
                SINPE <br /> MOVIL
              </h4>
            </div>
          </div>
          <div className="d-flex iconos-donacion-container">
            <div className="w-50">
              <p>Número</p>
            </div>
            <div className="w-50">
              <p>Número de teléfono: (+506) 88888</p>
            </div>
          </div>
        </div>
        <div className="container-right">
          <img className="pajaros-img" src={pajaros} />
        </div>
      </div>
      {/**Final sección 2 */}
      {/**Inicio sección 3 */}
      <a id="contacto">
        <ContactUs />
      </a>
      {/**Final sección 3 */}
    </div>
  );
}
export default Donate;
