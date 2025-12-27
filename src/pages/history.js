import '../styles/style.css'
import lineaPlantita from "../img/linea plantita.png";
import peces from "../img/pececitos.png"

function History (){
return (
    <div className="bg-beige">
      {/**Inicio sección 1 */}
      <div className="d-flex container-seccion1-donar primera-seccion">
        <div className="container-left d-flex">
          <div className="background-abstract" />
          <div className="container-section1-texts">
            <h2 className="outfit-bold text-green max-title">RÍO LAGARTO</h2>
            <h3 className="outfit-semibold text-green bigger-title">
              Salvemos el río!
            </h3>
            <p className='texto-principal'>
              El río Lagarto es un arroyo ubicado en la provincia de Puntarenas, Costa Rica, cercano a la comunidad de Punta Morales. Su nacimiento se encuentra en las zonas altas de Santa Elena de Monteverde, y recorre aproximadamente 46 kilómetros antes de desembocar en la playa Bajo Piñuelas, cerca de Punta Cocorocas.
            </p>
            <p className='texto-principal'>
              A lo largo de su recorrido, el río drena una cuenca de 16,864 hectáreas y recibe el aporte de 17 quebradas identificadas por nombre, además de numerosos cursos de agua intermitentes.
            </p>
          </div>
        </div>
        <div className="container-right">
          <div className="circle-gradient-no-border">
            <img className="peces-img" src={peces} />
          </div>
        </div>
      </div>
      {/**Final sección 1 */}
      
      {/**Inicio sección 2 */}
      <div className="d-flex flex-column segunda-seccion">
          {/* Inicio sub-sección 1 */}
          <div className="subseccion">
            <h3 className="poppins-medium text-green bigger-title text-center titulo-proble">
              Problemática
            </h3>
            <h3 className="outfit-semibold text-beige bigger-title agua-texto">
              FALTA DE AGUA
            </h3>
            <p className="roboto-regular">
              Casi todas las comunidades cercanas tienen sus pozos a las orillas de este río, por lo que se han visto afectadas por la falta de agua. La cual ha sido ocasionada por la tala de árboles, la contaminación de las aguas por los químicos y la extracción de material por parte de empresarios de la zona.
            </p>
          </div>
          {/* Inicio sub-sección 2 */}
          <div className="subseccion">
            <h3 className="poppins-medium text-green bigger-title text-center titulo-solu">
              Soluciones
            </h3>
            <h3 className="outfit-semibold text-beige bigger-title titulo-reforestacion">
              REFORESTACIÓN
            </h3>
            <p className="roboto-regular">
              Vamos a invertir en un proyecto de reforestación que, en su primera etapa, se desarrollará durante cinco años e incluirá la siembra de árboles nativos en ambas riberas. En esta fase inicial se plantarán 3,000 árboles autóctonos de la zona. La segunda etapa contemplará la siembra de 5,000 árboles adicionales, a razón de 1,000 árboles por año.
            </p>
            <div className="d-flex plantita-texto">  
              <img src={lineaPlantita} className="linea-con-arbusto" />
              <div className="especie-grupo">
                <h3 className="outfit-semibold text-beige bigger-title especie-titulo">
                  Especies nativas de árboles
                </h3>
                <p className="roboto-regular">
                  Hemos procurado cosechar en el vivero privado de la finca, árboles que son la base alimencia de algunas especies de pájaros nativos de la zona, entre ellos tenemos árboles de balsa, cedro, pochote, nispero, guayacan, guayaba, poró, entre muchos.
                </p>                
              </div>
            </div>
          </div>
          {/* Inicio sub-sección 3 */}
          <div className="subseccion">
            <h3 className="outfit-semibold text-beige bigger-title cause-texto">
              RESTAURACIÓN DEL CAUSE
            </h3>
            <p className="roboto-regular">
              Antes de iniciar la reforestación del río, se llevará a cabo una intervención con maquinaria pesada para restaurar, en la medida técnica posible, su profundidad original. Esta acción busca corregir la acumulación de sedimentos que ha provocado inundaciones recurrentes, erosión del terreno, pérdida de árboles nativos y cobertura vegetal. Además, se pretende mitigar el impacto del vandalismo asociado a la extracción ilegal de materiales del río, como piedras y arena, utilizados en la construcción de caminos vecinales.
            </p>
          </div>
      </div>
      {/**Final sección 2 */}

      {/**Inicio sección 3 */}
      <div className="tercera-seccion">
          <div className="seccion">
            <h3 className="poppins-medium text-green bigger-title text-center como-texto">
              ¿Cómo lo lograremos?
            </h3>
            <p className="roboto-regular">
              Para alcanzar nuestros objetivos ambientales y restaurar el hábitat de la ribera del río Lagarto a lo largo de sus 46 kilómetros, necesitamos del apoyo mediante donaciones, ya sea en colones costarricenses o dólares estadounidenses. También pueden comunicarse con nosotros por este medio para recibir más información sobre otras formas de contribuir a la recuperación de la flora y fauna de esta importante región.
            </p>
          </div>
      </div>
      {/**Final sección 3 */}
    </div>
  );
}
export default History;