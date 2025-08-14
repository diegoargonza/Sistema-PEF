
import imgItem from '../assets/item2.webp';
function CardDes({ title, content, tipo, autor, depend, anio }) {
  return (
    <>

    <div className="border h-150 w-80 border-slate-200  rounded-3xl bg-white  ">
        
        <div className="p-4">
            <div className='mx-auto  w-70 h-40'>
                <img src={imgItem} className='w-70 h-40'></img>
            </div>
            <div className='w-70'>
                <h2 className="font-semibold mt-2">{title}</h2>
            </div>
            
        </div>
          <div className="p-4">
            <p className="font-bold">{content}</p>
            <p>{tipo}</p>
            <p>{autor}</p>
            <p>{depend}</p>
            <p>{anio}</p>
          </div>

    </div>
      
    </>
  );
}

export default CardDes;