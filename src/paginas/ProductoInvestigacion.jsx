import { Link } from "react-router-dom"
function ProductoInv(){
    return(
        <>
        <h1 className="text-center text-xl">Producto de Investigación</h1>
        <div className="border mx-auto  w-250 ">
            <h2 className="p-2 font-bold">Criterios de búsqueda</h2>
            <hr></hr>
            <div className="grid grid-cols-3 gap-10 m-8 ">
                <div className="grid grid-cols-1">
                    <label className="font-bold">Título del producto</label>
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
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Palabra clave</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Estatus en Registro</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Registro Institucional</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
            </div>
            {/* Botones  */}

            <div className="flex justify-center space-x-5 p-3">
                <button className="border w-35 rounded-md p-2">Filtrar</button>
                <button className="border w-35 rounded-md p-2">Limpiar</button>
            </div>
            
        </div>

        {/* Tabla de filtrado */}
        <div className="flex justify-between mt-10 ">
            <div className="flex space-x-3 items-center">
                <label>Mostrar</label>
                <select className="border rounded-md w-20 p-2">
                    <option>25</option>
                </select>
                <p>registros</p>
            </div>
            <div className="flex space-x-10">

                <div className="border rounded-md p-2 ">
                    <p>Reorganizar producto </p>
                </div>
                <div className="border rounded-md p-2">
                    <p>Capturar nuevo producto</p>
                </div>
            </div>
        </div>
        {/* Paginador con tailwindcss */}
        <div class="flex items-center justify-between border-t border-gray-200  px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
            <p class="text-sm text-gray-700 space-x-1">
                Mostrando 
                <span class="font-medium ">1</span>
                al
                <span class="font-medium">5</span>
                de
                <span class="font-medium">5</span>
                resultados
            </p>
            </div>
            <div>
            <nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-xs">
                <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                    <path d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                </a>
            
                <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5">
                    <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
                </a>
            </nav>
            </div>
        </div>
        </div>

        {/* Tabla */}
        <table>
            <tr>
                <th className="border p-5">Título</th>
                <th className="border p-5">Autor</th>
                <th className="border p-5">Tipo de producto</th>
                <th className="border p-5">Subtipo de producto</th>
                <th className="border p-5">Área del conocimiento</th>
                <th className="border p-5">Subárea del conocimiento</th>
                <th className="border p-5">Fecha de publicación </th>
                <th className="border p-5">Escuela o Facultad </th>
                <th className="border p-5">Estatus en registro </th>
                <th className="border p-5">Acciones </th>
            </tr>
            <tr>
                <td className="border p-5">Recomendación de diseño de muros sobre trabes</td>
                <td className="border p-5">Juan José Pérez Gavilán Escalante</td>
                <td className="border p-5">Artículo</td>
                <td className="border p-5">Informe Técnico </td>
                <td className="border p-5">Ciencias físico matemáticas y de ingeniería </td>
                <td className="border p-5">Desarrollo de tecnológico</td>
                <td className="border p-5">29/09/2024</td>
                <td className="border p-5">Facultad de ingeniería</td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <p>Editar</p>
                        </div>
                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-1" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-1" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="border p-5">Mural Vida y obra del General Ignacio Allende</td>
                <td className="border p-5">Irene Herner Reiss</td>
                <td className="border p-5">Otro</td>
                <td className="border p-5">De divulgación</td>
                <td className="border p-5">Ciencias Sociales </td>
                <td className="border p-5">Ciencias Políticas</td>
                <td className="border p-5">15/05/2024</td>
                <td className="border p-5">Facultad de Ciencias Políticas y Socailes </td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <p>Editar</p>
                        </div>
                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-2" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-2" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="border p-5">Técnicas de ultrasonido aplicadas a la producción de nanocompuestos poliméricos</td>
                <td className="border p-5">Octavio Manero Brito</td>
                <td className="border p-5">Publicación</td>
                <td className="border p-5">Folleto</td>
                <td className="border p-5">Ciencias físico-matemáticas y de la ingeniería </td>
                <td className="border p-5">Desarrollo Tecnológico</td>
                <td className="border p-5">06/06/2011</td>
                <td className="border p-5">Facultad de Ingeniería </td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <p>Editar</p>
                        </div>
                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-3" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-3" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="border p-5">IGLESIA DE NUESTRA SEÑORA DEL TRANSITO </td>
                <td className="border p-5">Cecilia Guitiérrez Arriola</td>
                <td className="border p-5">Obra artística</td>
                <td className="border p-5">Fotografía</td>
                <td className="border p-5">Humanidades y de las artes</td>
                <td className="border p-5">Estetica</td>
                <td className="border p-5">04/11/2003</td>
                <td className="border p-5">Facultad de Artes y Diseño  </td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <p>Editar</p>
                        </div>
                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-4" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-4" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="border p-5">Situación socioeconómica de las personas mayores en México. En el periodo de 2005-2014   </td>
                <td className="border p-5">Johan Krauss Alcaraz</td>
                <td className="border p-5">Artículo</td>
                <td className="border p-5">De divulgación </td>
                <td className="border p-5">Ciencias Sociales</td>
                <td className="border p-5">Ciencias Sociales</td>
                <td className="border p-5">08/12/2016</td>
                <td className="border p-5">Facultad de Ciencias Sociales</td>
                <td className="border p-5">Inactivo</td>
                <td className="border p-5">
                    <div className="flex space-x-2 items-center">
                        <div>
                            <p><Link to="edicionProducto">Editar</Link></p>
                        </div>
                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-5" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-5" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                       
                        </div>
                    </div>
                </td>
            </tr>
        </table>



        </>
    );
}

export default ProductoInv

