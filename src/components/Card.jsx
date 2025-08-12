function Card({ title, content, tipo, autor, depend, anio }) {
  return (
    <>
      <div class="card group relative  text-white mt-auto h-110 overflow-hidden">
        <div className="group-hover:scale-110 absolute inset-0 bg-[url('assets/item1.webp')] bg-cover bg-center transition-transform duration-300 "></div>
        <a
          href="#"
          className="absolute grid grid-rows-2 bg-black/50 w-full h-full "
        >
          <div className="p-4">
            <h3>{title}</h3>
            <p>{content}</p>
          </div>
          <div className="bg-black/50 p-4">
            <p>{tipo}</p>
            <p>{autor}</p>
            <p>{depend}</p>
            <p>{anio}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Card;
