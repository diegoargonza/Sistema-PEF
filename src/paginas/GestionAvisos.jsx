import aviso1 from '/img/aviso-1.png'
import aviso2 from '/img/aviso-2.png'
import Modal from '../components/Modal';
function GestionAvisos(){
    return(
        <>
        
        <h1 className="text-center text-xl">Gestión de avisos del Portal de Productos de Investigación UNAM</h1>
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
                    <p>Reorganizar producto </p>
                </div>
                <div className="border bg-green-50 rounded-md p-2">
                <button command="show-modal" commandfor="dialog-1" class="cursor-pointer">+ Capturar nuevo anuncio</button>
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
        {/* Tabla para la gestión de avisos */}
        <table className='mx-auto w-4/6'>
            <tr>
                <th className='border p-5'>Imagen del anuncio</th>
                <th className='border p-5'>Descripción</th>
                <th className='border p-5'>URL</th>
                <th className='border p-5'>Acciones</th>
            </tr>
            <tr>
                <td className='border p-5'>
                    <img src={aviso2} className='w-100 h-30 mx-auto'></img>
                </td>
                <td className='w-80 border p-5 '>
                    <p className=''></p>
                </td>
                <td className='w-80 border text-center p-5 '>
                    <p>www.pdi-faes.unam.mx</p>
                </td>
                <td className='w-50 border p-5 '>
                    <div className="flex space-x-2 items-center">
                            <div>
                                <Modal
                                    button ='Eliminar'
                                    id= 'dialog-elimnar'
                                    title ='Confirmación para eliminar el anuncio'
                                    text ='Al eliminar el anuncio, este se borrará y no podrá volver a acceder a él.'
                                    text2 ='¿Desea continuar?'
                                />
                            </div>
                            <div>
                                <a>Editar</a>
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
            <tr>
                <td className='border p-5'>
                    <img src={aviso1} className='w-100 h-30 mx-auto'></img>
                </td>
                <td className='w-80 border p-5'>
                    <p className=''></p>
                </td>
                <td className='w-80 border text-center p-5'>
                    <p>www.pdi-faes.unam.mx</p>
                </td>
                <td className='w-50 border p-5'>
                    <div className="flex space-x-2 items-center">
                        <div>
                                <Modal
                                    button ='Eliminar'
                                    id= 'dialog-elimnar'
                                    title ='Confirmación para eliminar el anuncio'
                                    text ='Al eliminar el anuncio, este se borrará y no podrá volver a acceder a él.'
                                    text2 ='¿Desea continuar?'
                                />
                        </div>
                        <div>
                            <a>Editar</a>
                            
                        </div>
                        <div class="relative inline-block">
                            {/* <input  id="switch-component-ga2" type="checkbox" class="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300" />
                            <label for="switch-component-ga2" class="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
                            </label> */}
                            <Modal
                                    button ='Activar'
                                    id= 'dialog-activar'
                                    title ='Confirmación para activar el anuncio'
                                    text ='Al activar el anuncio, este se presentará en la sección de Difusión de 
                                    actualizaciones de catálogos de Productos de Investigación UNAM'
                                    text2 ='¿Desea continuar?'
                                
                                ></Modal>
                        </div>
                    </div>
                </td>
            </tr>
        </table>

{/* Modal */}
<el-dialog>
  <dialog id="dialog-1" aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
    <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in "></el-dialog-backdrop>
    <div tabindex="0" class="flex min-h-full items-end justify-center p-4  focus:outline-none sm:items-center sm:p-0">
    <el-dialog-panel class="relative transform overflow-hidden rounded-md w-full max-w-4xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95 ">
        <div className='bg-white mx-auto '>
            <div className='flex justify-between border-b-1 border-slate-200'>
                <h3 className='text-xl p-2 '>Captura de nuevo anuncio</h3>
                <button type="button" command="close" commandfor="dialog-1" className='w-15 font-bold  cursor-pointer rounded-md p-3 ' >X</button>
            </div>
            <div className='w-auto m-3'>
                <p className='text-center'>Los campos marcados con asterisco rojo <sapn className='text-red-600'>*</sapn> son obligatorios.</p>
                <div className='grid grid-cols-1 mt-5'>
                    <label>Imagen del anuncio <sapn className='text-red-600'>*</sapn></label>
                    <p className='text-gray-400'>Se permite archivo .jpg, .png o .webp. Medidas 1500 x 392 px. Densidad 72 dpi y tamaño máximo de 100 kb.</p>
                    <input type='file' className='border border-slate-400  rounded-md h-20'></input>
                </div>
                <div className='grid grid-cols-1 mt-5'>
                    <label>Descripción del anuncio <sapn className='text-red-600'>*</sapn></label>
                    <input type='text' className='w-150 border border-slate-400  rounded-md p-2'></input>
                </div>
                <div className='grid grid-cols-1 mt-5'>
                    <label>URL que debe mostrarse al presionar la imagen</label>
                    <input type='text' className='w-150 border border-slate-400 rounded-md p-2'></input>
                </div>
            </div>
        </div>
          {/* Botones */}
        <div class="bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t-1 border-slate-200 p-4 ">
          <button type="button" command="close" commandfor="dialog-1" class="inline-flex w-full justify-center rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-salte-500 sm:ml-3 sm:w-auto">Cancelar</button>
          <button type="button" command="close" commandfor="dialog-1" class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-blue-500 sm:mt-0 sm:w-auto">Agregar</button>
        </div>
      </el-dialog-panel>
    </div>
  </dialog>
</el-dialog>






        </>
    )
}

export default GestionAvisos;