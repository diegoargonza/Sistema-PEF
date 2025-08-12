import { Outlet, Link } from "react-router-dom";
import Buscador from "./components/Buscador";
import Wrapper from "./wrapper";

const Layout = () => {

    const listaDeElementos = ["Facultad de Arquitectura", "Facultad de Artes y Diseño", "Facultad de Ciencias", "Facultad de Ciencias Políticas y Sociales", "Facultad de Contaduría y Administración", "Facultad de Derecho", "Facultad de Economía", "Facultad de Estudios Superiores (FES) Acatlán", "Facultad de Estudios Superiores (FES) Aragón", "Facultad de Estudios Superiores (FES) Cuautitlán", "Facultad de Estudios Superiores (FES) Iztacala" ];

    const años = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015" ];
 
  return (
    <>
{/* Buscador */}
<Buscador></Buscador>




{/*Carrusel */}
<Wrapper>

    <div id="indicators-carousel" class="relative w-full" data-carousel="static">
        
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
           
            {/* <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src={imgFondo1} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
         
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={imgFondo2} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div> */}

        </div>
       
        <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        
        <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
    <h2 className="font-display text-center text-2xl text-secondary-300">Criterios básicos de clasificación</h2>

    {/*Clasificaciones principales  */}
    <div className="grid grid-cols-4  gap-5 border border-primary-400 bg-primary-50 rounded-md p-10 mt-5 ">
        
      <div className="border">

        <ul>
            {listaDeElementos.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
                      
        <ul>
            {años.map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
                      

                   
      </div>

    </div>


    <h2 className="font-display text-center text-2xl text-secondary-300 mt-5">Datos de producción de investigación respecto al tiempo</h2>

    {/* Estadísticas*/}
    <div className="border border-primary-400 bg-primary-50 rounded-md p-10 mt-5">
      
        
      
      <div className=" p-10">

      </div>
    </div>

    <h2 className="font-display text-center text-2xl text-secondary-300 mt-5">Productos destacados</h2>

        {/* destacados*/}
        <div id="indicators-carousel" class="border border-primary-400 bg-primary-50 rounded-md p-10 mt-5" data-carousel="static">
          
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            
              <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
                  <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
          
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
              
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
            
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
          </div>
        
          <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
              <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span class="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span class="sr-only">Next</span>
              </span>
          </button>
      </div>
    </Wrapper>


     
    </>
  )
}

export default Layout;