function Buscador(){
    return(
        <>
        {/* bg-linear-65 from-primary-300  to-secondary-100 p-20 */}
          {/* Buscador */}
          <div className="  bg-linear-65 from-primary-400  to-secondary-200 ">
            <div className="bg-[url(assets/bg_busqueda.png)] bg-center">
                <div class="w-full max-w-sm min-w-[600px] mx-auto p-20 bg-cover">
                    <div class="relative flex items-center space-x-2">
                        
                    
                        <input
                        class="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" aria-label="buscar"
                
                        />
                        <a
                        class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        type="button"
                        >
                            Buscar
                        </a> 
                        
                    </div>
                    <div className="flex justify-between mt-3 ">
                        <p className="text-primary-600">Ver todos los catálogos</p>
                        <a href="/busqueda" className="text-primary-600">Búsqueda Avanzada</a>
                    </div>
                </div> 
            </div>
          </div>
        
        
        </>
    );
}

export default Buscador