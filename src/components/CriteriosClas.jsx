function Criterios(props){
   
    const listaDeElementos = ["Facultad de Arquitectura", "Facultad de Artes y Diseño", "Facultad de Ciencias", "Facultad de Ciencias Políticas y Sociales", "Facultad de Contaduría y Administración", "Facultad de Derecho", "Facultad de Economía", "Facultad de Estudios Superiores (FES) Acatlán", "Facultad de Estudios Superiores (FES) Aragón", "Facultad de Estudios Superiores (FES) Cuautitlán", "Facultad de Estudios Superiores (FES) Iztacala" ];

    const años = ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015" ];

    return(
        <>
        <div className="border overflow-auto ">
            <div className="flex bg-white">
                <div className="">
                    <div className=" bg-primary-600 ">
                        <h3 className="text-2xl text-white ">{props.title}</h3>
                    </div>
                    <div>
                        <div className="text-left p-3" id="contenido-1">
                          <ul>
                            {listaDeElementos.map((item, index)=>(
                                <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                    </div>

                </div>

                <div className="">
                    <div className="border-l-1 border-white  bg-primary-600 ">
                        <div className="p-4">

                        </div>
                        
                    </div>
                    <div>
                        <div className="text-left">
                            <ul>
                                {listaDeElementos.map((item, index)=>(
                                    <li key={index}>{index}</li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>
            </div>      
           
        </div>
        </>
    );
}

export default Criterios