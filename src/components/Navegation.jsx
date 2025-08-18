import { useState } from "react"
import { Link } from "react-router-dom"
import logoUnam from '../assets/UNAMhead.svg';
import Wrapper from "../wrapper";

function Navegation(){
    return(
        
        <>
        
        {/* Navbar */}
        
        <header className=" flex  justify-between items-center p-2  ">
            <img src={logoUnam} className="h-15 ml-5"/>
            <h1 className="text-2xl mr-5">Plataforma de trabajos de investigación en Escuelas y Facultades </h1>
        </header>
     
        
        <nav className="flex justify-between bg-secondary-300 text-white p-5">
            <div>
        
            
                <a href="#"  class="rounded-md px-3 py-2 text-sm font-medium text-balck "><Link to="/">Inicio</Link></a>

                <el-dropdown class="inline-block ">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white ">
                        <Link to='Consulta'>Consulta</Link>
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="w-58 origin-top-right rounded-md bg-slate-100 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo áreas de conocimiento</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Catálogo productos</a>
                        
                        </div>
                    </el-menu>
                </el-dropdown>            
                <a href="#" class="rounded-md px-3 py-2 text-sm font-medium text-white "><Link to="registroInv">Registro de productos de Inv.</Link></a>
                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white ">
                        <Link to='Consulta'>Reportes</Link>
                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
                        <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                    </button>

                    <el-menu anchor="bottom end" popover class="w-58 origin-top-right rounded-md bg-slate-100 shadow-lg outline-1 outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                        <div class="py-1">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-900  focus:bg-gray-100 focus:text-gray-900 focus:outline-hidden">Reportes de rendimiento </a>
                        </div>
                    </el-menu>
                </el-dropdown> 
                <el-dropdown class="inline-block">
                    <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white ">
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
                <p className="rounded-md px-3 py-2 text-sm font-medium text-white">Miguel Gutiérrez González</p>
            </div>
            
        </nav>
       
      

        

        </>
    )
}

export default Navegation