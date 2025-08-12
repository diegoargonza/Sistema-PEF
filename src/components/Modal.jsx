function Modal(props){
  return(
    <>  
      <button command="show-modal" commandfor={props.id} class="">{props.button}</button>
      <el-dialog>
        <dialog id={props.id} aria-labelledby="dialog-title" class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent">
          <el-dialog-backdrop class="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

          <div tabindex="0" class="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
            <el-dialog-panel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 id="dialog-title" class="text-base font-semibold text-gray-900 border-b-1 border-gray-200">{props.title}</h3>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{props.text}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">{props.text2}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 border-t-1 border-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button type="button" command="close" commandfor={props.id} class="inline-flex w-full justify-center rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 sm:ml-3 sm:w-auto">Cancelar</button>
                <button type="button" command="close" commandfor={props.id} class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-blue-500 sm:mt-0 sm:w-auto">Aceptar</button>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>

    </>
  )
}

export default Modal