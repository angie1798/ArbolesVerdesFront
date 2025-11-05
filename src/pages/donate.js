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
              Tu ayuda puede marcar la diferencia: doná para preservar el cauce del Río Lagarto y asegurar agua limpia y vida para las futuras generaciones. 
Cada aporte suma en la protección de este vital ecosistema que nos conecta con la naturaleza y beneficia a muchas comunidades.
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
              <p>Dólares:</p>
            </div>
            <div className="w-50">
              <p>Teléfono: (+506) 6183-7133</p>
            </div>
          </div>
          <div className="d-flex iconos-donacion-container">
            <div className="w-50">
              <p>Cuenta IBAN: CR92016111004120978788</p>
            </div>
            <div className="w-50">
              <p>Eduardo Morales Meza</p>
            </div>
          </div>
          <div className="d-flex iconos-donacion-container">
            <div className="w-50">
              <p>Banco de Costa Rica</p>
            </div>
            <div className="w-50">
              {/* <p>Eduardo Morales Meza</p> */}
            </div>
          </div>
          <div className="d-flex iconos-donacion-container">
            <div className="w-50">
              <p>Celso Arguedas Sanchez</p>
            </div>
            <div className="w-50">
              {/* <p>Eduardo Morales Meza</p> */}
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
