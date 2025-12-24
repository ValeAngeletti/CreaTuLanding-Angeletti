import ItemCount from "./ItemCount.jsx"

export default function ItemDetail({ item }){
  return (
    <div className="card flex flex-row justify-center gap-6 items-center w-full h-screen bg-[#F4EEDF] shadow-sm">
        <figure className="w-1/2 shadow rounded-lg">
            <img
            src={item.thumbnail}
            alt="{item.title}"
            className="w-[16rem] h-[16rem]" />
        </figure>
        <div className="detalles h-screen flex flex-col w-1/2">

            <div className="card-body flex flex-col gap-6  text-[#0F253F]">
                <h2 className="card-title text-[4rem] titulo">{item.title}</h2>
                <p className="text-[2rem] tipografiaInter">{item.description}</p>
                <p className="text-[2rem] tipografiaInter font-semibold">$ {item.price}</p>
            </div>
            <ItemCount  />
        </div>
    </div>
  )
}
