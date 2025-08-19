import { Link } from "react-router-dom"
import Card from "../components/Card"
import Buscador from "../components/Buscador"
import Wrapper from "../wrapper"


import item from '../assets/item1.webp'
import item2 from '../assets/item2.webp'
import item3 from '../assets/item3.webp'
import item4 from '../assets/item4.webp'


function Busqueda(){
    function toggleContent(e) {
       const id = e.target.id;
       const contenido = document.getElementById("contenido-tipo-producto");
       const contenido2 = document.getElementById("contenido-facultades");
       const contenido3 = document.getElementById("contenido-area");
       const contenido4 = document.getElementById("contenido-medio");
       const contenido5 = document.getElementById("contenido-año");
       
       switch(id){
        case '1':
            contenido.classList.toggle('hidden');
            break;
        case '2':
            contenido2.classList.toggle('hidden');
            break;

        case '3':
            contenido3.classList.toggle('hidden');
            break;

        case '4':
            contenido4.classList.toggle('hidden');
            break;


        case '5':
            contenido5.classList.toggle('hidden');
            break;
       }
    

    }
    return(
        <>
        {/* Busador */}
        <Buscador></Buscador>
        {/* Contenido */}
    <Wrapper>

        <h1 className=" text-center">Todos los catálogos</h1>
        <div className="flex space-x-5 ">
            <div className=" text-2xl ml-30">
                <h2 className="text-secondary-500 font-semibold">Filtros</h2>
            </div>
            <div className="ml-50">
                <h2 className="font-semibold text-xl">Resultados de búsqueda para "riesgo social"</h2>
            </div>
        </div>
        <div className="flex space-x-4   w-full  ">
           
       
           <div className="w-120 mt-2 ">
            
            <div class="relative flex items-center ">
                <input
                    class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" aria-label="buscar"
                />
                <a
                class="rounded-md bg-primary-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                type="button"
                >
                Buscar
                </a>      
            </div>

            <div className="mt-5">
                    <div className="flex items-center justify-between bg-primary-700 h-10">
                        <h1 className="text-sm text-white p-2 ">Tipo de producto</h1>
                        <button className="  text-white font-bold  text-2xl  w-15 " onClick={toggleContent} id="1">+</button>
                    </div>
                    <div>
                        <div className="p-2" id="contenido-tipo-producto">
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

                    <div className="flex items-center justify-between bg-primary-700 h-10 mt-5">
                        <h1 className="text-sm text-white p-2 ">Entidad de desarrollo</h1>
                        <button className=" text-white font-bold  text-2xl  w-15 " onClick={toggleContent} id="2">+</button>
                    </div>
                    <div>
                        <div className="p-2" id="contenido-facultades">
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

                    <div className="flex items-center justify-between bg-primary-700 h-10 mt-5">
                        <h1 className="text-sm text-white p-2 ">Área de conocimiento</h1>
                        <button className="  text-white font-bold  text-2xl  w-15 " onClick={toggleContent} id="3">+</button>
                    </div>
                    <div>
                        <div className="p-2" id="contenido-area">
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

                
                    <div className="flex items-center justify-between bg-primary-700 h-10 mt-5">
                        <h1 className="text-sm text-white p-2 ">Medio de Difusión</h1>
                        <button className="  text-white font-bold  text-2xl  w-15 " onClick={toggleContent} id="4">+</button>
                    </div>
                    <div >
                        <div className="p-2" id="contenido-medio">
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

                    <div className="flex items-center justify-between bg-primary-700 h-10 mt-5">
                        <h1 className="text-sm text-white p-2 ">Año de publicación</h1>
                        <button className="  text-white font-bold  text-2xl  w-15 " onClick={toggleContent} id="5">+</button>
                    </div>
                    <div>
                        <div className="p-2" id="contenido-año">
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
        
            </div>
            

        <div className="w-full  p-2 mt-2 ">
            <div className="grid grid-cols-4 gap-3 mt-3">
                
                <Card
                    title='Tesis'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend='fasd'
                    anio='Año'
                    img={item}
                />
                <Card
                    title='Riesgo climático en México'
                    content='Análisis de flujo de humedad y lluvias en el Valle de México.'
                    tipo='Ponencia'
                    autor='Víctor Orlando Magaña Rueda'
                    depend='Instituto de Geografía'
                    anio='2025'
                    img={item2}
                />
                <Card
                    title='Control de la artritis encefalitis caprina en México'
                    content='Muestra representativa de obra y sistemas gráficos en la casa de la Cultura Anáhuac del Parque Metropolitano de la Ciudad de Santiago'
                    tipo='Exposición'
                    autor='Arturo Rosales Ramírez'
                    depend='Facultad de Artes y Diseño'
                    anio='2025'
                    img={item3}
                />
                <Card
                    title='El nuevo malestar en la cultura'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                    img={item4}
                />
                <Card
                    title='Tesis'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend='fasd'
                    anio='Año'
                    img={item}
                />
                <Card
                    title='Riesgo climático en México'
                    content='Análisis de flujo de humedad y lluvias en el Valle de México.'
                    tipo='Ponencia'
                    autor='Víctor Orlando Magaña Rueda'
                    depend='Instituto de Geografía'
                    anio='2025'
                    img={item2}
                />
                <Card
                    title='Control de la artritis encefalitis caprina en México'
                    content='Muestra representativa de obra y sistemas gráficos en la casa de la Cultura Anáhuac del Parque Metropolitano de la Ciudad de Santiago'
                    tipo='Exposición'
                    autor='Arturo Rosales Ramírez'
                    depend='Facultad de Artes y Diseño'
                    anio='2025'
                    img={item3}
                />
                <Card
                    title='El nuevo malestar en la cultura'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                    img={item4}
                />
                <Card
                    title='Tesis'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend='fasd'
                    anio='Año'
                    img={item}
                />
                <Card
                    title='Riesgo climático en México'
                    content='Análisis de flujo de humedad y lluvias en el Valle de México.'
                    tipo='Ponencia'
                    autor='Víctor Orlando Magaña Rueda'
                    depend='Instituto de Geografía'
                    anio='2025'
                    img={item2}
                />
                <Card
                    title='Control de la artritis encefalitis caprina en México'
                    content='Muestra representativa de obra y sistemas gráficos en la casa de la Cultura Anáhuac del Parque Metropolitano de la Ciudad de Santiago'
                    tipo='Exposición'
                    autor='Arturo Rosales Ramírez'
                    depend='Facultad de Artes y Diseño'
                    anio='2025'
                    img={item3}
                />
                <Card
                    title='El nuevo malestar en la cultura'
                    content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                    tipo='Facultad o esculea'
                    autor='Autor'
                    depend=''
                    anio='Año'
                    img={item4}
                />

            </div>

        </div>
            
    </div>
    </Wrapper>
        </>
 )
}

export default Busqueda