import grafica1 from '../assets/grafica1.png'
import grafica2 from '../assets/grafica2.png'
import grafica3 from '../assets/grafica3.png'
import { useState } from "react";

function CarruselEsta() {
  const graficas = [
    { id: 1,  image: grafica1},
    { id: 2,  image: grafica2},
    { id: 3,  image: grafica3},
    { id: 3,  image: grafica1},
    { id: 3,  image: grafica2},
    { id: 3,  image: grafica3},
   

  ];

  const [indice, setIndice] = useState(0);
  const totalSlides = Math.ceil(graficas.length / 2); // total de "páginas" de 4 en 4

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[1600px] mx-auto overflow-hidden ">
      <div
        className="flex space-x-5 transition-transform duration-300"
        style={{ transform: `translateX(-${indice * 100}%)` }}
      >
        {graficas.map((grafica) => (
          <div key={grafica.id} className='min-w-[50%] ' >
                <div className="flex justify-center w-[700px] mx-auto ">
                    <img src={grafica.image} className='w-[800px] h-[300px] '/>
                </div>
          </div>
        ))}
      </div>

      {/* Botón Izquierda */}
      <button
        onClick={anterior}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 grid place-content-center rounded-full w-12 h-12 bg-primary-700 z-10 text-4xl text-white"
      >
        <div className=" text-white text-2xl">

        &larr;             
        </div>

      </button>

      {/* Botón Derecha */}
      <button
        onClick={siguiente}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 grid place-content-center rounded-full w-12 h-12 bg-primary-700 z-10"
      >
        <div className=" text-white text-2xl">
        &rarr;              
        </div>
      </button>
    </div>
  );
}

export default CarruselEsta;