function Producto(){
    return(
        <>
        <div className="flex items-center m-3">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 24 24" className="h-10">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" ></path>
            </svg>
            <h1 className="text-2xl m-3">/ Búsqueda</h1>
        </div>
        <div className="grid grid-cols-2 gap-5">
            {/* Contenido del artículo */}
            <div className="col-span-1">
                <div className="border text-xl w-30 p-2">
                    <h1>Artículo</h1>
                </div>
                <div className="border w-full mt-3">
                    <h1 className="text-xl">Ingesta de bebidas azucaradas y obesidad central</h1>
                    <div className="m-5">
                        <p >Mendoza Vázquez, Andrea Itzel, Delgado Jacobo, Dolores Patricia</p>
                        <p >Facultad de Estudios Superiores Zaragoza, UNAM</p>
                    </div>

                </div>

                <div className="border text-xl w-60 p-2 mt-10">
                    <h1>Contenido Completo</h1>
                </div>

                <div className="border w-full mt-3">
                    <h1 className="text-xl">Descripción del recurso</h1>
                    <div className="m-5">
                        <p >Autor(es)</p>
                        <p >Mendoza Vázquez, Andrea Itzel; Delgado Jacobo, Dolores Patricia</p>
                    </div>
                    <div className="m-5">
                        <p >Tipo</p>
                        <p >Artículo Técnico-Profesional</p>
                    </div>
                    <div className="m-5">
                        <p >Título</p>
                        <p >Ingesta de bebidas azucaras y obesidad central</p>
                    </div>
                    <div className="m-5">
                        <p >Fecha</p>
                        <p >2021-09-21</p>
                    </div>
                    <div className="m-5">
                        <p >Idioma</p>
                        <p >spa</p>
                    </div>
                    <div className="m-5">
                        <p >ISSN</p>
                        <p >ISSN electrónico: 2007-5502</p>
                    </div>
                    <div className="m-5">
                        <p >Entidad</p>
                        <p >Facultad de Estudios Superiores Zaragoza</p>
                    </div>
                    <div className="m-5">
                        <p className="font-bold" >Enlaces</p>
                        <p className="">texto completo</p>
                    </div>

                </div>

            </div>
            {/* Mostrando el contenido del artículo */}
            <div className="grid place-content-center col-span-1 border ">
                <div className="border w-150 h-180">
                    

                </div>

            </div>

        </div>
        </>
    );
}
export default Producto;