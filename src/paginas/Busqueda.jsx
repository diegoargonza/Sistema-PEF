import { Link } from "react-router-dom"
import Card from "../components/Card"
import Buscador from "../components/Buscador"
import Wrapper from "../wrapper"
function Busqueda(){
    return(
        <>
        {/* Busador */}
        <Buscador></Buscador>
        {/* Contenido */}
    <Wrapper>

        <h1 className="text-2xl text-center">Todos los catálogos</h1>
        <div className="flex space-x-4   w-full  ">
           <div className="w-120 border ">
            <p className="text-center">Filtros</p>
            <hr></hr>
            <div>
                <h1 className="p-2">Tipo de producto</h1>
                <div className="p-2">
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Tesis</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Entrevista</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Capítulo</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Artículo</label>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="p-2">Entidad de desarrollo</h1>
                <div className="p-2">
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Facultad de Arquitectura</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Facultad de Contaduría y A.</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Facultad de Ingeniería</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Facultad de Artes y Diseño</label>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="p-2">Área de conocimiento</h1>
                <div className="p-2">
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Ciencias físico-matemática y de las ingenierías.</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Ciencias bilógicas, químicas y de la salud</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Ciencias Sociales</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Humadidaes y de las artes</label>
                    </div>
                </div>
            </div>

            {/* Etiquetas de la busqueda con filtro */}
            <div >
                <h1 className="p-2">Medio de Difusión</h1>
                <div className="p-2">
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Congreso</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Evento</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Informe Técnico</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>Libro</label>
                    </div>
                </div>
            </div>


            <div>
                <h1 className="p-2">Año de publicación</h1>
                <div className="p-2">
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>2024</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>2023</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>2022</label>
                    </div>
                    <div className="flex space-x-2">
                        <input type="checkbox"></input>
                        <label>2021</label>
                    </div>
                </div>
            </div>

           </div>

        <div className="w-full border  p-2 ">
                <div className="w-95 border mt-5">
                    <p>Búsqueda rápida con filtros aplicados</p>
                </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
                
                <Card
                    title='Tesis'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend='fasd'
                    anio='Año'
                />
                <Card
                    title='Riesgo climático en México'
                    content='Análisis de flujo de humedad y lluvias en el Valle de México.'
                    tipo='Ponencia'
                    autor='Víctor Orlando Magaña Rueda'
                    depend='Instituto de Geografía'
                    anio='2025'
                />
                <Card
                    title='Control de la artritis encefalitis caprina en México'
                    content='Muestra representativa de obra y sistemas gráficos en la casa de la Cultura Anáhuac del Parque Metropolitano de la Ciudad de Santiago'
                    tipo='Exposición'
                    autor='Arturo Rosales Ramírez'
                    depend='Facultad de Artes y Diseño'
                    anio='2025'
                />
                <Card
                    title='El nuevo malestar en la cultura'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='Conferencias filosofía de la psicología '
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='El nombre del Popocatépetl'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='Sistemas de impresión y gráfica artística'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='Un Indio en la cámara legislativa'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='Un Indio en la cámara legislativa'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />
                <Card
                    title='Un Indio en la cámara legislativa'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                />

            </div>

        </div>
            
    </div>
    </Wrapper>
        </>
 )
}

export default Busqueda