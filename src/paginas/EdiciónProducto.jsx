function EdicionProducto(){
    return(
        <>
         <h1 className="text-center text-xl">Edición Producto de Investigación</h1>
        <div className="border mx-auto  w-250 ">
            <h2 className="p-2 font-bold">Edición datos del producto de investigación</h2>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 m-8 ">
                <div className="grid grid-cols-1">
                    <label className="font-bold">Nombre del producto de investigación</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Tipo de producto</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Subtipo de  producto</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Área de conocimiento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Subárea de conocimiento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Fecha de publicación</label>
                    <input type="date" className="border rounded-md p-2 mt-2"></input>
                </div>
            </div>

            <div className="flex space-x-10 m-8">
                <div className="grid grid-cols-1 w-150">
                    <label className="font-bold">Palabra clave</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
                <div className="grid grid-cols-1 w-1/3">
                    <label className="font-bold">Medio de difusión</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
            </div>
            <div className="flex space-x-10 m-8">
                <div className="grid grid-cols-1 w-68">
                    <label className="font-bold">Lugar</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
                <div className="grid grid-cols-1 w-68">
                    <label className="font-bold">DOI / ISBN / URL</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
            </div>
            <div className="flex space-x-10 m-8">
                <div className="grid grid-cols-1 rounded-md">
                    <label className="font-bold">Resumen</label>
                    <textarea className="border w-4xl mt-2"></textarea>
                </div>
            </div>
        </div> 
        <div className="border border-t-0 mx-auto  w-250 ">
            {/* Edición 2 */}
            <h2 className="p-2 font-bold">Edición datos del producto de investigación</h2>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 m-8 ">
                <div className="grid grid-cols-1">
                    <label className="font-bold">Área de conocimiento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Subárea de conocimiento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Subárea de conocimiento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Escuela o Facultad que acredita</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Línea de generación o aplicación</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Idioma</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Vinculación solcial/institucional</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Nivel de impacto</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            
            </div>
        </div> 
        <div className="border border-t-0 mx-auto  w-250 ">
            {/* Edición 3 */}
            <h2 className="p-2 font-bold">Edición autores del producto de investigación</h2>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 m-8 ">
                <div className="grid grid-cols-1">
                    <label className="font-bold">Nombre </label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Primer Apellido</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Segundo Apellido</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Rol en el producto de investigación</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Otro rol en el producto de investigación</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Numero de empleado o RFC</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">CURP / FM3</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Correo electrónico</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Entidad académica</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Área académica</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Departamento</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Orcid, Reserchagate ó CVU</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Nivel académico</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
            
            </div>
        </div> 

        <div className="flex justify-center space-x-5 p-3">
            <button className="border w-35 rounded-md p-2">Guardar</button>
            <button className="border w-35 rounded-md p-2">Salir</button>
        </div>
                
        </>
    )
}

export default EdicionProducto