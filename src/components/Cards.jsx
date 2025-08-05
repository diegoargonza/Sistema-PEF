function Cards(){
    return(
        <>
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
                        <button className="border rounded-full w-20 ">Ver más</button>
                    </div>
                </div>
        
        </>
    );
}

export default Cards;