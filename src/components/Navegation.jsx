import { useState } from "react"
import { Link } from "react-router-dom"

function Navegation(){
    return(
        
        <>
        
        {/* Navbar */}
        
        <nav className="flex   justify-between bg-slate-100 p-5">
            <div>
        
            
                <a href="#"  class="rounded-md px-3 py-2 text-sm font-medium text-balck "><Link to="/">Inicio</Link></a>

                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-black ">
                        <Link to='Consulta'>Consulta</Link>
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="w-58 origin-top-right rounded-md bg-slate-100 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo áreas de conocimiento</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo productos</a>
                        
                        </div>
                    </el-menu>
                </el-dropdown>            
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-black "><Link to="registroInv">Registro de productos de Inv.</Link></a>
                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-black ">
                        <Link to='Consulta'>Reportes</Link>
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="w-58 origin-top-right rounded-md bg-slate-100 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Reportes de rendimiento </a>
                        </div>
                    </el-menu>
                </el-dropdown> 
                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-black ">
                        <Link to='Consulta'>Administración</Link>
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="w-58 origin-top-right rounded-md bg-slate-100 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Usuarios </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Roles </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo áreas de conocimiento </a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo productos </a>
                        </div>
                    </el-menu>
                </el-dropdown> 
                
            </div>
            <div>
                <p className="rounded-md px-3 py-2 text-sm font-medium text-black">Miguel Gutiérrez González</p>
            </div>
            
        </nav>
       
        {/* Buscador */}

        <div class="w-full max-w-sm min-w-[500px] mx-auto md:mt-3">
            <div class="relative flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                </svg>
            
                <input
                class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="UI Kits, Dashboards..." 
                />
                
                <button
                class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
                >
                Search
                </button> 
            </div>
            <div className="flex justify-between">
                <p><Link to="/busqueda">Ver todos los catálogos</Link></p>
                <p>Búsqueda Avanzada</p>
            </div>
        </div>

        </>
    )
}

export default Navegation