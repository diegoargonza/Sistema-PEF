function NuevoProducto(){
    return(
        <>
        <h1 className="text-xl text-center">Nuevo producto de investigación</h1>
        <div className="mx-auto w-5/6 bg-slate-100">
            <p className="border mt-10 ">Importante: Al agregar un nuevo producro de investigación, este será incluido en el catálogo utilizado durante la captura del "Registro de producto de investigación" y, si se especifica, también será visible en el "Portal de Productos de Investigación UNAM".</p>
        </div>
        <p className="text-center mt-5">Ingrese la información que se solicita en cada apartado. Los campos marcados con *son obligatorios.</p>

        <div className="m-8 border  ">
            <h2 className="bg-blue-50 text-xl font-bold p-2"> Información del producto de investigación - Registro de producto de investigación</h2>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 m-8">
                <div className="grid grid-cols-1">
                    <label>Nombre del producto de investigación *</label>
                    <input type="text" className="border rounded-md p-2" placeholder="Diseño estructural de puentes colgantes"/>
                </div>
                <div className="grid grid-cols-1" >
                    <label>Tipo del producto *</label>
                    <select className="border rounded-md p-2">
                        <option>Artículo</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label>Subtipo del producto</label>
                    <select className="border rounded-md p-2">
                        <option>Científico</option>
                    </select>
                </div>

            </div>
            <div className="m-10">
                <p>Palabras clave</p>
                <p>Para seleccionar las palabras clave que estarán relacionadas con el software presione el símbolo "+", de lo contrario en "x".Si la(s) palabra(s) clave relacionadas con el software no se encuentra(n), puede añadirlo en el campo "Añadir nueva palabra clave".</p>
                <div className="flex space-x-5 border rounded-md  p-4">
                    <div className="flex space-x-8 border items-center p-1 w-30">
                        <p className="  ">Palabra 1</p>
                        <p>x</p>
                    </div>
                    <div className="flex space-x-8 border items-center p-1 w-30">
                        <p className="  ">Palabra 2</p>
                        <p>x</p>
                    </div>
                    <div className="flex space-x-8 border items-center p-1 w-30">
                        <p className="  ">Palabra 3</p>
                        <p>x</p>
                    </div>
                    <div className="flex space-x-8 border items-center p-1 w-30 bg-slate-50 ">
                        <p className="  ">Palabra 4</p>
                        <p className="">+</p>
                    </div>

                </div>
                <div className="flex items-center">
                    <div className="grid grid-cols-1 m-3">
                        <label>Palabra clave</label>
                        <input type="text" className="border rounded-md p-2 "></input>
                    </div>
                    <div className="grid place-content-center border  rounded-full w-5 h-5">
                        +
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 m-8">
                <label>Resumen *</label>
                <textarea className="border"></textarea>
            </div>
            <div className="m-8">
                <h2 className="font-bold">Información sobre la publicación o exhibición</h2>
                <div className="grid grid-cols-3 gap-10 mt-2 ">
                    <div className="grid grid-cols-1 ">
                        <label>Fecha de publicación / exhibición *</label>
                        <input type="date" className="border rounded-md p-2 w-60"/>
                    </div>
                    <div className="grid grid-cols-1" >
                        <label>Medio de difusión *</label>
                        <select className="border rounded-md p-2 w-80">
                            <option>Artículo</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>País de publicación / exhibición *</label>
                        <select className="border rounded-md p-2 w-80">
                            <option>Científico</option>
                        </select>
                    </div>


                    <div className="col-span-3">
                        <label>Registro (DOI / ISBN / URL) *</label>
                        <p>(En el detalle de la ficha del software se incluirá el botón que abrirá la página indicada.).</p>
                        <input type="text" className="border rounded-md w-[800px] p-2"></input>
                    </div>
                </div>
            </div>
            {/* Sección Clasificación académica del producto de investigación */}

            <div className="border border-b-0 border-r-0 border-l-0 ">
                <h2 className="bg-blue-50 text-xl p-2 ">Clasificación académica del Producto de Investigación</h2>
                <hr></hr>

               
                <div className="grid grid-cols-3 gap-5 m-8">
                    <div className="grid grid-cols-1">
                        <label>Área de conocimiento *</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Subárea de conocimiento</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Registro o folio institucional</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2"/>
                    </div>

                    <div className="grid grid-cols-1">
                        <label>Escuela o Facultad que acredita *</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Línea de generación o aplicación</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Idioma</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 col-span-3">
                        <label>Nivel de impacto</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 col-span-3">
                        <label>Vinculación social/Institucional</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>

                </div>

            </div>
            {/* Sección Autores */}
            <div className="border border-b-0 border-r-0 border-l-0 ">
                <h2 className="  bg-blue-50 text-xl p-2">Autores</h2>
                <hr></hr>
                 <div className="flex space-x-5 items-center m-8">
                    <label>Cantidad de autores</label>
                    <input type="number" className="border rounded-md w-15 p-2"></input>
                </div>


                <div className="grid grid-cols-3 gap-5 m-8">
                    <div className="grid grid-cols-1">
                        <label>Nombre *</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Primer apellido *</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Segundo Apellido</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2"/>
                    </div>

                    <div className="grid grid-cols-1">
                        <label>Rol en el producto *</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Otro rol en el producto</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Número de trabajador o RFC *</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    

                    <div className="grid grid-cols-1">
                        <label>CURP / FM3 *</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Correo electronico</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Entidad académica</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    

                    <div className="grid grid-cols-1">
                        <label>Área académica</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Departameto *</label>
                        <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Orcid, Reserchagate ó CVU</label>
                         <input type="text" className="w-90 mt-2 border rounded-md p-2" />
                    </div>
                

                    <div className="grid grid-cols-1 col-span-3">
                        <label>Vinculación social/Institucional</label>
                        <select className="w-90 mt-2 border rounded-md p-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>

                </div>

            </div>
        </div>



       
        </>
    )
}

export default NuevoProducto;