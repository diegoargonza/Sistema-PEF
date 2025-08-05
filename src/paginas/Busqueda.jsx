import { Link } from "react-router-dom"
function Busqueda(){
    return(
        <>
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
            <div className="grid grid-cols-4 grid-rows-2 gap-4 text-justify mt-2">
                {/* 1 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="mt-2">Tesis</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="border-b-1">Facultad o esculea</p>
                        <p className="border-b-1">Autor</p>
                        <p className="border-b-1">Año</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 "><Link to="producto">Ver más</Link> </button>
                    </div>
                </div>
                {/* 2 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="mt-2">Riesgo climático en México</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Análisis de flujo de humedad y lluvias en el Valle de México.</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="border-b-1">Ponencia</p>
                        <p className="border-b-1">Víctor Orlando Magaña Rueda</p>
                        <p className="border-b-1">Instituto de Geografía</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 3 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="mt-2">Control de la artritis encefalitis caprina en México</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Estudios moleculares y serológicos para la detección del virus de la artritis encefalitis caprina</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="border-b-1">Memorias</p>
                        <p className="border-b-1">Abel Manuel Trujillo García</p>
                        <p className="border-b-1">Facultad de Medicina Veterinaria y Zootecnia</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 4 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="mt-2">El nuevo malestar en la cultura</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Estudios moleculares y serológicos para la detección del virus de la artritis encefalitis caprina</p>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="border-b-1">Memorias</p>
                        <p className="border-b-1">Abel Manuel Trujillo García</p>
                        <p className="border-b-1">Facultad de Medicina Veterinaria y Zootecnia</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 5 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="">Conferencias filosofía de la psicología</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Liga de las conferencias sobre Filosofía de la Psicología y disponibles en línea</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="border-b-1">Videoconferencía</p>
                        <p className="border-b-1">Zuraya Monroy Nasr</p>
                        <p className="border-b-1">Facultad de Psicología</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 6 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="">El nombre del Popocatépetl</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">El nombre del Popocatépetl. Religión popular y paisaje ritual en la Sierra Nevada</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="border-b-1">Reseña</p>
                        <p className="border-b-1">David Lorente Fernández</p>
                        <p className="border-b-1">Instituto de Investigaciones Históricas</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 7 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div className="">
                        <h2 className="mt-2">Sistemas de impresión y gráfica artística</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm ">Muestra representativa de obra y sistemas gráficos en la casa de la Cultura Anáhuac del Parque Metropolitano de la Ciudad de Santiago</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="border-b-1">Exposición</p>
                        <p className="border-b-1">Arturo Rosales Ramírez</p>
                        <p className="border-b-1">Facultad de Artes y Diseño</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
                {/* 8 */}
                <div className="grid grid-rows-3 h-110 border p-2">
                  
                    {/* <img/> */}
                    <p className="border p-15 text-center"> Image cap</p>
                    <div>
                        <h2 className="mt-2">Un Indio en la cámara legislativa</h2>
                        <div className="w-auto h-auto">
                            <p className="text-sm">Aspecto y personalidad, acerca de quién fue este líder indígena, defensor de los derechos territoriales</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="border-b-1">Fotografía</p>
                        <p className="border-b-1">José Refugio Arellano Sánchez</p>
                        <p className="border-b-1">Facultad de Ciencias Políticas y Sociales</p>
                    </div>
                    <div className="grid place-content-end mr-2 ">
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>

            </div>

           </div>
            
        </div>
        </>
 )
}

export default Busqueda