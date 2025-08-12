import ModalForm from "../components/ModalForm";
import Modal from "../components/Modal";
import { Link } from "react-router-dom"
import { useState } from "react";

function GestionUsuario(){

    
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
                    <select className="border rounded-md  mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1">
                    <label className="font-bold">Subtipo de  producto</label>
                    <select className="border rounded-md mt-2">
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
                <div className="grid grid-cols-1">
                    <label className="font-bold">Palabra clave</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
                <div className="grid grid-cols-1 ">
                    <label className="font-bold">Estatus en Registro</label>
                    <select className="border rounded-md p-2 mt-2">
                        <option>Todos</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 ">
                    <label className="font-bold">Registro Institucional</label>
                    <input type="text" className="border rounded-md p-2 mt-2"></input>
                </div>
            </div>
             {/* Botones  */}

             <div className="flex justify-center space-x-5 p-3">
                <button className="w-35  border bg-blue-200 rounded-md p-2">Filtrar</button>
                <button className="w-35  border bg-gray-200 rounded-md p-2">Limpiar</button>
            </div>
            
        </div> 

        {/* Filtrado de número de registros  */}
        <div className="flex justify-between m-8">     
            <div className="flex space-x-5 items-center">
                <label>Mostrar</label>
                <select className="w-20 border rounded-md p-2 ">
                    <option >25</option>
                </select>
                <p>registros</p>
            </div>
            <div className="flex space-x-10">

                <div className="border bg-blue-50  rounded-md p-2 ">
                    <p>Reorganizar producto  </p>
                </div>
                <div className="border bg-green-50 rounded-md p-2">
                <button command="show-modal" commandfor="dialog-1" class="cursor-pointer">+ Capturar nuevo producto</button>
                <ModalForm
                    title ='Captura de nuevo usuario'
                ></ModalForm>
                </div>
            </div>
        </div>
        {/* Paginador con tailwindcss */}
      
        <div class="flex items-center justify-between   sm:px-6 ">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300  px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
            <p class="text-sm text-gray-700 space-x-1">
                Mostrando 
                <span class="font-medium mx-1">1</span>
                al
                <span class="font-medium mx-1">5</span>
                de
                <span class="font-medium mx-1">5</span>
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

        {/* Tabla de usuarios */}

        <form className=" mt-2">
            <tr >
                <th className="border p-5 bg-gray-200">ID</th>
                <th className="border p-5 bg-gray-200">Nombre(s)</th>
                <th className="border p-5 bg-gray-200">Apellidos</th>
                <th className="border p-5 bg-gray-200">Número de trabajor</th>
                <th className="border p-5 bg-gray-200">Adscripción</th>
                <th className="border p-5 bg-gray-200">Número de productos</th>
                <th className="border p-5 bg-gray-200">Nivel acádemico </th>
                <th className="border p-5 bg-gray-200">Permisos</th>
                <th className="border p-5 bg-gray-200">Estatus</th>
                <th className="border p-5 bg-gray-200">Acciones</th>
            </tr>
            <tr>
                <td className="border p-5">1</td>
                <td className="border p-5">Juan José</td>
                <td className="border p-5">Peréz Gavilán </td>
                <td className="border p-5">9999999</td>
                <td className="border p-5">Facultad de Ingeniería </td>
                <td className="border p-5">2</td>
                <td className="border p-5">Doctorado</td>
                <td className="border p-5">Consulta Registro</td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                    <div className="flex space-x-5">
                        <div>
                            Editar
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
                <td className="border p-5">2</td>
                <td className="border p-5">Irene</td>
                <td className="border p-5">Hernes Reiss</td>
                <td className="border p-5">9999999</td>
                <td className="border p-5">Facultad de Ciencias políticas</td>
                <td className="border p-5">1</td>
                <td className="border p-5">Doctorado</td>
                <td className="border p-5">Consulta, Registro</td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                     <div className="flex space-x-5">
                        <div>
                            Editar
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
                <td className="border p-5">3</td>
                <td className="border p-5">Ocativo </td>
                <td className="border p-5">Manero Brito</td>
                <td className="border p-5">9999999</td>
                <td className="border p-5">Facultad de Ingeniería</td>
                <td className="border p-5">3</td>
                <td className="border p-5">Maestría</td>
                <td className="border p-5"> Consulta</td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                     <div className="flex space-x-5">
                        <div>
                            Editar
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
                <td className="border p-5">4</td>
                <td className="border p-5">Cecilia</td>
                <td className="border p-5">Gutierrez Arriola</td>
                <td className="border p-5">9999999</td>
                <td className="border p-5">Facultad de Artes y Diseño </td>
                <td className="border p-5">4</td>
                <td className="border p-5">Doctorado </td>
                <td className="border p-5">Consulta, Registro</td>
                <td className="border p-5">Activo</td>
                <td className="border p-5">
                     <div className="flex space-x-5">
                        <div>
                            Editar
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
                <td className="border p-5">5</td>
                <td className="border p-5">Johan </td>
                <td className="border p-5">Krauss</td>
                <td className="border p-5">9999999</td>
                <td className="border p-5">Facultad de Ciencias Políticas</td>
                <td className="border p-5">1</td>
                <td className="border p-5">Doctorado</td>
                <td className="border p-5">Consulta</td>
                <td className="border p-5">Inactivo</td>
                <td className="border p-5">
                     <div className="flex space-x-5">
                        <div>
                            <a>
                                <Link to='editarUsuario'>
                                    Editar
                                </Link>
                            </a>
                        </div>

                        <div class="relative inline-block w-11 h-5">
                            <input  id="switch-component-20" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" /> 
                            <label for="switch-component-20" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label>
                        </div>
                        <div class="relative inline-block ">
                                {/* <input  id="switch-component-ga1"  type="checkbox" className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" /> */}
                                <Modal
                                    button ='Activar'
                                    id= 'dialog-activar'
                                    title ='Confirmación para activar el anuncio'
                                    text ='Al activar el anuncio, este se presentará en la sección de Difusión de 
                                    actualizaciones de catálogos de Productos de Investigación UNAM'
                                    text2 ='¿Desea continuar?'
                                
                                ></Modal>

                                {/* <label for="switch-component-ga1" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                                </label> */}
                            </div>
                       
                    </div>
                </td>
            </tr>
        </form>

        </>
    );
}

export default GestionUsuario