function ModalForm(){
    return(
        <>
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

export default ModalForm