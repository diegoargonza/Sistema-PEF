import { useState } from 'react';
import CardDes from './CardDes'; 

const cards = 4;

function CarruselProd() {
  const [indice, setIndice] = useState(0);

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="border border-primary-600 relative w-[1500px]  mx-auto overflow-hidden">
      <div className="w-[1500px] h-[500px] relative">
        <CardDes
            content='Some quick example text to build on the card title and make up the bulk of the cards content.'
            title='Control de artrítis ecefalis caprina en México'
            img={item1}
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

export default CarruselProd;
