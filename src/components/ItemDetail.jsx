import ItemCount from "./ItemCount.jsx"

export default function ItemDetail({ item }){
  return (
    <div className="card flex justify-center gap-6 items-center w-full h-screen bg-[#F4EEDF] shadow-sm md:flex-row py-5">
        <figure className="w-2/3 md:w-1/3 h-[25rem] md:h-auto items-center shadow-xl rounded-lg bg-[#E3D7BB]">
            <img
            src={item?.img}
            alt={item?.name}
            className="w-full h-full object-contain " />
        </figure>
        <div className="detalles  flex flex-col 1/2 md:w-1/2">

            <div className="card-body flex flex-col  text-[#0F253F]">
                <h2 className="card-title text-[2rem] md:text-[4rem] titulo">{item?.name}</h2>
                <p className="text-[1rem] md:text-[2rem] tipografiaInter">{item?.description}</p>
                <p className="text-[1rem] md:text-[2rem] tipografiaInter font-semibold">$ {item?.price}</p>
            </div>
            <ItemCount producto={item}/>
        </div>
    </div>
  )
}
