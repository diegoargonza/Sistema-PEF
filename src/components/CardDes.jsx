function CardDes({ title, content, img }) {
  return (
    <>

    <div class="card group relative  text-white mt-auto h-110 overflow-hidden">
        <div className="group-hover:scale-110 absolute inset-0  bg-cover bg-center transition-transform duration-300 " style={{backgroundImage: `url(${img})`}}></div>
        <a
          href="#"
          className="absolute grid grid-rows-2 bg-black/50 w-full h-full "
        >
          <div className="p-4 mt-5">
            <h3>{title}</h3>
            
          </div>
          <div className="bg-black/50 p-4">
          <p>{content}</p>
           
          </div>
        </a>
      </div>
     
      
    </>
  );
}

export default CardDes;