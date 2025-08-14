import { useState } from 'react';
import carrusel1 from '../assets/carrusel-1.png';    
import carrusel2 from '../assets/carrusel2.png';    

const imagenes = [carrusel1, carrusel2 ];

function Carrusel() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="border border-primary-600 relative w-[1800px]  mx-auto overflow-hidden">
      <div className="w-[1800px] h-[500px] relative">
        <img
          src={imagenes[indice]}
          alt={`Slide ${indice}`}
          className="w-full h-full object-cover transition duration-500"
        />
      </div>

      {/* Botón Izquierda */}
      <button
        onClick={anterior}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 grid place-content-center  rounded-full w-13 h-13 bg-primary-700"
      > 
            <div className=" text-white text-2xl">
            ◄               
            </div>
            
      </button>

      {/* Botón Derecha */}
      <button
        onClick={siguiente}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 grid place-content-center  rounded-full w-13 h-13 bg-primary-700"
      >
        <div className=" text-white text-2xl">
        ►                
        </div>
              
      </button>

    </div>
  );
}

export default Carrusel;
