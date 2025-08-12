import Modal from "../components/Modal";
function EdicionUsuario(){
    return(
        <>
            <h1 className="text-center text-2xl">Edición de usuario</h1>
            <p className="text-center mt-5">Los campos marcados con * son obligatorios</p>
            <div className="border ">
                <h2 className="border-b-1 text-xl p-2">Captura de nuevo usuario</h2>
                <div className="grid grid-cols-3 gap-5 m-8">
                    <div className="grid grid-cols-1 ">
                        <label>Nombre *</label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Primer Apellido *</label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Segundo Apellido </label>
                        <input className="border  rounded-md p-2"></input>
                    </div>

                    <div className="grid grid-cols-1 col-span-3 w-115">
                        <label>Número de trabajador o RFC </label>
                        <select className="border rounded-md p-2 mt-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>

                     <div className="grid grid-cols-1">
                        <label>CURP ó FM3 </label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Correo electronico </label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Entidad académica </label>
                        <select className="border rounded-md p-2 mt-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1">
                        <label>Área académica </label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Departameto</label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Orcid, Reserchagate ó CVU</label>
                        <input className="border  rounded-md p-2"></input>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Nivel académico</label>
                        <select className="border rounded-md p-2 mt-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1">
                        <label>Nivel de acceso</label>
                        <select className="border rounded-md p-2 mt-2">
                            <option>Seleccione una opción</option>
                        </select>
                    </div>

                </div>
                {/* Botones */}
                <div class=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 border-t-1 border-slate-200 p-4 ">
                    <button type="button" command="close" commandfor="dialog-1" class="inline-flex w-full justify-center rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-salte-500 sm:ml-3 sm:w-auto">Cancelar</button>
                    <button type="button" command="close" commandfor="dialog-1" class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring inset-ring-gray-300 hover:bg-blue-500 sm:mt-0 sm:w-auto">
                        
                        
                        
                        
                        
                        <Modal
                        button ='Guardar'
                        id= 'dialog-activar'
                        title ='Confirmación para guardar los datos del usuario'
                        text ='¿Esta seguro de guardar los cambios aplicados en los datos del 
                        usuario?'
                        text2 =''   
                    >
                    </Modal></button>
                    

                </div>

            </div>
        </>
    );
}

export default EdicionUsuario;