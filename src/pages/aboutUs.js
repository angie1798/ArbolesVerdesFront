import "../styles/style.css";
import personasDeColor from "../img/personas de color y blanca.png";
import bichitoIzq from "../img/bichito izq.png";
import bichitoDer from "../img/bichito der.png";
import tree from "../img/tree.png";
import fotoFundadores from "../img/foto-fundadores.png";
import { IoEye } from "react-icons/io5";
import PdfModal from "../components/pdfModal";
import { useState } from "react";

function AboutUs() {
const [open, setOpen] = useState(false);

  return (
    <div className="home">
      {/**Inicio sección 1 */}
      <div className="container-seccion1-donar d-flex">
        <div className="container-left d-flex">
          <div className="background-abstract" />
          <div className="container-section1-texts">
            <h2 className="outfit-bold text-green max-title">SOBRE NOSOTROS</h2>
            <h3 className="outfit-semibold text-green bigger-title">
              ¿Quiénes somos?
            </h3>
            <p>
              Somos una empresa privada sin fines de lucro, conformada por
              vecinos de la ribera norte del río Lagarto. Hemos realizado
              inversiones propias en diversas labores de limpieza y en la
              recolección de semillas de árboles nativos. Actualmente,
              trabajamos en la producción de especies arbóreas que se encuentran
              en peligro de extinción o en riesgo de desaparecer de la región.
            </p>
          </div>
        </div>
        <div className="container-right">
          <div className="circle-gradient">
            <img className="item-superior" src={personasDeColor} />
          </div>
        </div>
      </div>
      {/**Final sección 1 */}

      {/**Inicio sección 2 */}
      <div className="d-flex background-beige item-inferior">
        <div className="justify-content-md-center centrar">
          <div className="alineacion-texto-center">
            <h3 className="outfit-semibold text-green bigger-title text-center">
              NUESTRO TRABAJO
            </h3>
            <p className="roboto-regular trabajo-texto-top">
              Nuestro proyecto de restauración del cauce del Río Lagarto, con
              una duración estimada de 15 años, requiere el apoyo urgente para
              adquirir maquinaria pesada fundamental para su ejecución.
              Actualmente contamos con una retroexcavadora y una vagoneta, pero
              necesitamos: 2 retroexcavadoras adicionales, 1 chapulín, 2
              vagonetas adicionales y 1 vehículo doble tracción tipo pick-up.
            </p>
            <p className="roboto-regular trabajo-texto-bottom">
              Además, disponemos de un equipo de 25 trabajadores durante las
              temporadas, y contamos con el valioso apoyo de voluntarios de las
              comunidades locales en tareas como la selección, producción y
              cuidado de viveros de árboles nativos. Agradecemos cualquier
              donación o apoyo que nos permita avanzar en esta causa ambiental.
            </p>
          </div>
        </div>
      </div>
      {/**Final sección 2 */}

      {/**Inicio sección 3 */}
      <div className="div-fundadores d-flex flex-column">
        <div className="row titulos">
          <h3 className="poppins-regular text-white fontSize-26">Fundadores</h3>
          <h3 className="poppins-light text-white fontSize-22">Conócenos</h3>
        </div>

        <div className="row equipo">
          <div className="col-12 col-md-6">
            <img src={fotoFundadores} className="w-100"/>
          </div>

          <div className="col-12 col-md-3 equipo-integrante">
            <div className="row">
              <div className="tree-icon">
                <img src={tree} />
              </div>
              <div className="fundador">
                <h3 className="poppins-regular text-white fontSize-25">
                  Eduardo Morales Meza
                </h3>
                <h3 className="poppins-light text-white fontSize-22">Abogado</h3>
              </div>
            </div>
            <p className="text-white mt-3">
              Abogado de profesión.
            </p>
            <button className="btn btn-white text-green mt-3 " onClick={() => setOpen(true)}>
              <IoEye/>
              <span className="ms-2">Ver Currículum Vitae</span>
              </button>
          </div>

          <div className="col-12 col-md-3 equipo-integrante">
            <div className="row">
              <div className="tree-icon">
                <img src={tree} />
              </div>
              <div className="fundador long-desc">
                <h3 className="poppins-regular text-white fontSize-25">
                  <p>Celso</p> Arguedas Sanchez
                </h3>
                <h3 className="poppins-light text-white fontSize-22">
                  Agricultor, ganadero y comerciante
                </h3>
              </div>
            </div>
            <p className="text-white mt-3 long-desc">
              Propietario de la finca en la cual se está construyendo el vivero,
              en el cual se están seleccionando los árboles nativos que se
              sembrarán a las orillas del río.
            </p>
          </div>
        </div>
      </div>
      {/**Final sección 3 */}
      <PdfModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
export default AboutUs;
