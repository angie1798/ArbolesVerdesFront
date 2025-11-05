import ContactUs from "../components/contact-us";
import "../styles/style.css";
import pajaros from "../img/pajaros.png";
import plantitaReal from "../img/plantita_real.png";

function AboutUs (){
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
              Somos una empresa privada sin fines de lucro, conformada por vecinos de la ribera norte del río Lagarto. Hemos realizado inversiones propias en diversas labores de limpieza y en la recolección de semillas de árboles nativos. Actualmente, trabajamos en la producción de especies arbóreas que se encuentran en peligro de extinción o en riesgo de desaparecer de la región.
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
            <h3 className="outfit-semibold text-green bigger-title">
              NUESTRO TRABAJO
            </h3>
            <p className="roboto-regular">
              Nuestro proyecto de restauración del cauce del Río Lagarto, con una duración estimada de 15 años, requiere el apoyo urgente para adquirir maquinaria pesada fundamental para su ejecución. Actualmente contamos con una retroexcavadora y una vagoneta, pero necesitamos: 2 retroexcavadoras adicionales, 1 chapulín, 2 vagonetas adicionales y 1 vehículo doble tracción tipo pick-up.
            </p>
            <p className="roboto-regular">
             Además, disponemos de un equipo de 25 trabajadores durante las temporadas, y contamos con el valioso apoyo de voluntarios de las comunidades locales en tareas como la selección, producción y cuidado de viveros de árboles nativos. Agradecemos cualquier donación o apoyo que nos permita avanzar en esta causa ambiental.
            </p>
          </div>
        </div>
        <div className="container-right">
          <img className="pajaros-img" src={pajaros} />
        </div>
      </div>
      {/**Final sección 2 */}
      {/**Inicio sección 3 */}
      <div className="div-fundadores">
        <div className="row">
            <h3 className="poppins-regular text-white">
              Fundadores
            </h3>
            <h3 className="poppins-light text-white">
              Conócenos
            </h3>
            <div className="col-4">

            </div>
            <div className="col-4">
                <h3 className="poppins-regular text-white">
              Eduardo Morales Meza
            </h3>
            <h3 className="poppins-light text-white">
              Abogado
            </h3>
            </div>
            <div className="col-4">
                <h3 className="poppins-regular text-white">
              Celso Arguedas Sanchez
            </h3>
            <h3 className="poppins-light text-white">
              Agricultor, ganadero y comerciante
            </h3>
            </div>
        </div>
      </div>
      {/**Final sección 3 */}
    </div>
  );
}
export default AboutUs;