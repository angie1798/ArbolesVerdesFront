import '../styles/style.css'
import plantitaReal from "../img/plantita_real.png";
import peces from "../img/pececitos.png"

function History (){
return (
    <div className="home">
      {/**Inicio sección 1 */}
      <div className="container-seccion1-donar d-flex">
        <div className="container-left d-flex">
          <div className="background-abstract" />
          <div className="container-section1-texts">
            <h2 className="outfit-bold text-green max-title">RÍO LAGARTO</h2>
            <h3 className="outfit-semibold text-green bigger-title">
              Salvemos el río!
            </h3>
            <p>
              El río Lagarto es un arroyo ubicado en la provincia de Puntarenas, Costa Rica, cercano a la comunidad de Punta Morales. Su nacimiento se encuentra en las zonas altas de Santa Elena de Monteverde, y recorre aproximadamente 46 kilómetros antes de desembocar en la playa Bajo Piñuelas, cerca de Punta Cocorocas.
            </p>
            <p>
              A lo largo de su recorrido, el río drena una cuenca de 16,864 hectáreas y recibe el aporte de 17 quebradas identificadas por nombre, además de numerosos cursos de agua intermitentes.
            </p>
          </div>
        </div>
        <div className="container-right">
          <div className="circle-gradient">
            <img src={peces} />
          </div>
        </div>
      </div>
      {/**Final sección 1 */}
      
      {/**Inicio sección 2 */}
      <div className="d-flex">
        <div className="justify-content-md-center centrar">
          <div className="alineacion-texto-center">
            <h3 className="outfit-semibold text-green bigger-title text-center">
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
export default History;