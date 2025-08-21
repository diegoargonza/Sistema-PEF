import item1 from '../assets/item1.webp'
import item2 from '../assets/item2.webp'
import item3 from '../assets/item3.webp'
import item4 from '../assets/item4.webp'
import { useState } from "react";

function CarruselProd() {
  const cards = [
    { id: 1, title: "Card 1", description: "Descripción de la card 1.", image: item1},
    { id: 2, title: "Card 2", description: "Descripción de la card 2.", image: item2},
    { id: 3, title: "Card 3", description: "Descripción de la card 3.", image: item3},
    { id: 4, title: "Card 4", description: "Descripción de la card 4.", image: item4},
    { id: 5, title: "Card 5", description: "Descripción de la card 5.", image: item1},
    { id: 6, title: "Card 6", description: "Descripción de la card 6.", image: item2},
    { id: 7, title: "Card 7", description: "Descripción de la card 7.", image: item3},
    { id: 8, title: "Card 8", description: "Descripción de la card 8.", image: item4},
  ];

  const [indice, setIndice] = useState(0);
  const totalSlides = Math.ceil(cards.length / 4); // total de "páginas" de 4 en 4

  const anterior = () => {
    setIndice((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const siguiente = () => {
    setIndice((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-[1600px] mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${indice * 100}%)` }}
      >
        {cards.map((card) => (
          <div key={card.id} className="min-w-[25%] flex justify-center p-4">
            <div className="card group relative text-white w-[300px] h-[400px] overflow-hidden  shadow-lg">
              <div
                className="group-hover:scale-110 absolute inset-0 bg-cover bg-center transition-transform duration-300"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <a
                href="#"
                className="absolute grid grid-rows-2 bg-black/50 w-full h-full"
              >
                <div className="p-4 mt-5">
                  <h3 className="text-xl font-bold">{card.title}</h3>
                </div>
                <div className="bg-black/50 p-4">
                  <p>{card.description}</p>
                </div>
              </a>
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

export default CarruselProd;
