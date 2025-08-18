import { Outlet, Link } from "react-router-dom";
import Buscador from "./components/Buscador";
import Wrapper from "./wrapper";
import CardDes from "./components/CardDes";
import item1 from './assets/item1.webp'
import item2 from './assets/item2.webp'
import item3 from './assets/item3.webp'
import item4 from './assets/item4.webp'
import Carrusel from "./components/Carrusel";
import CarruselProd from "./components/CarruselProd";



const Layout = () => {

    const facultades = ["Facultad de Arquitectura", "Facultad de Artes y Diseño", "Facultad de Ciencias", "Facultad de Ciencias Políticas y Sociales", "Facultad de Contaduría y Administración", "Facultad de Derecho", "Facultad de Economía", "Facultad de Estudios Superiores (FES) Acatlán", "Facultad de Estudios Superiores (FES) Aragón", "Facultad de Estudios Superiores (FES) Cuautitlán", "Facultad de Estudios Superiores (FES) Iztacala", "Facultad de Estudios Superiores (FES) Zaragoza", "Facultad de Filosofía y Letras", "Facultad de Ingeniería", "Facultad de Medicina", "Facultad de Medicina Veterinaria y Zootecnia", "Facultad de Música", "Facultad de Odontología", "Facultad de Psicología" ];

    const anio = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012" ];

    const tipoProductos= ["Artículos Científicos", "Libros", "Capítulos de libros", "Tesis", "Monografías", "Patentes", "Prototipos", "Modelos de utilidad", "Productos tecnologícos", "Software", "Informes técnicos", "Consultorias cientifico-teconlógicas", "Obras astisicas"];

    const areaConocimiento =["Microbiología", "Virología", "Bioingeniería", "Toxicología", "Cristalografía", "Bioinformática Genómica", "Fisología", "Biología molecular de eucariotes", "Ciencias de la computación", "Física matemática", "Probabilidad y estadística", "Materiales", "Otros"];
 
  return (
    <>
{/* Buscador */}
<div>
    <Buscador></Buscador>
</div>

{/* Carrusel */}
<div className="mt-5">
<Carrusel></Carrusel>
</div>



<Wrapper>

    
    <h2 className="font-display text-center text-4xl text-secondary-300">Criterios básicos de clasificación</h2>

    {/*Clasificaciones principales  */}
    <div className="border border-primary-400 bg-primary-50 rounded-md p-10 mt-5 ">
        
      <div className="flex space-x-10 justify-center ">
        <div className="flex border border-slate-400 w-80 ">
            <div className="bg-primary-700 w-80 ">
                <div className="flex">
                    <h2 className="p-3 text-white w-60 ">Entidad académica</h2>
                    <h2 className="p-3 text-white  border-l-1 "></h2>
                </div>
                <div className="flex justify-between space-x-20 bg-white overflow-auto h-100 p-2">
                    <div>

                        {facultades.map((item, index)=>(
                            <p key={index} className="mt-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        
                        {facultades.map((item, index)=>(
                            <p key={index} className="mt-2">{index}</p>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>


        <div className="flex border border-slate-400 w-80  ">
            <div className="bg-primary-700 w-80 ">
                <div className="flex">
                    <h2 className="p-3 text-white w-60 ">Año de publicación</h2>
                    <h2 className="p-3 text-white  border-l-1 "></h2>
                </div>
                <div className="flex justify-between bg-white overflow-auto h-100 p-2">
                    <div>

                        {anio.map((item, index)=>(
                            <p key={index} className="mt-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        
                        {anio.map((item, index)=>(
                            <p key={index} className="mt-2 ">{index}</p>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="flex border border-slate-400 w-80 ">
            <div className="bg-primary-700 w-80 ">
                <div className="flex">
                    <h2 className="p-3 text-white w-60 ">Tipo de producto</h2>
                    <h2 className="p-3 text-white  border-l-1 "></h2>
                </div>
                <div className="flex  justify-between space-x-20 bg-white overflow-auto h-100 p-2 ">
                    <div>

                        {tipoProductos.map((item, index)=>(
                            <p key={index} className="mt-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        
                        {tipoProductos.map((item, index)=>(
                            <p key={index} className="mt-2">{index}</p>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="flex border border-slate-400 w-80 ">
            <div className="bg-primary-700 w-80 ">
                <div className="flex">
                    <h2 className="p-3 text-white w-60 ">Área de conocimiento</h2>
                    <h2 className="p-3 text-white  border-l-1 "></h2>
                </div>
                <div className="flex justify-between space-x-20 bg-white overflow-auto h-100 p-2">
                    <div>

                        {areaConocimiento.map((item, index)=>(
                            <p key={index} className="mt-2">{item}</p>
                        ))}
                    </div>
                    <div>
                        
                        {areaConocimiento.map((item, index)=>(
                            <p key={index} className="mt-2">{index}</p>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
        




  
      </div>

    </div>


    <h2 className="font-display text-center text-4xl text-secondary-300 mt-5">Datos de producción de investigación respecto al tiempo</h2>

    {/* Estadísticas*/}
    <div className="border border-primary-400 bg-primary-50 rounded-md p-10 mt-5">
      
        
      
      <div className=" p-10">

      </div>
    </div>
    

    <h2 className="font-display text-center text-4xl text-secondary-300 mt-5">Productos destacados</h2>

        {/* destacados*/}
        <div id="indicators-carousel" class="border border-primary-400 bg-primary-50 rounded-md p-10 mt-5" data-carousel="static">
          
          <div class="flex  space-x-10 relative h-56 overflow-hidden rounded-lg md:h-96 justify-center items-center">
            
              <div class="  h-auto w-80" data-carousel-item="active">
                        
                    <CardDes
                        content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                        title='Control de artrítis ecefalis caprina en México'
                        img={item1}
                     
                    />  
                    
                        
              </div>
              <div class="  h-auto w-80" data-carousel-item="active">
                        
                    <CardDes
                        content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                        title='Control de artrítis ecefalis caprina en México'
                        img={item2}
                     
                    />
                    
                        
              </div>
              

             <div class="  h-auto w-80" data-carousel-item="active">
                        
                    <CardDes
                        content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                        title='Control de artrítis ecefalis caprina en México'
                        img={item3}
                     
                    />
                    
                    
                        
              </div>
             <div class="  h-auto w-80" data-carousel-item="active">
                        
                    <CardDes
                        content='Some quick example text to build on the card title and make up the bulk of the cards content.'
                        title='Control de artrítis ecefalis caprina en México'
                        img={item4}
                     
                    />                    
              </div>

              
          </div>

          
        
          
          
      </div>
    </Wrapper>


  

     
    </>
  )
}

export default Layout;