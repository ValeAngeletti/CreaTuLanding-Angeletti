import ItemCount from "./ItemCount.jsx"

export default function ItemDetail({ item }){
  return (
    <div className="card flex flex-row justify-center gap-6 items-center w-full h-screen bg-[#F4EEDF] shadow-sm">
        <figure className="grow-3 shadow rounded-lg ml-30 ">
            <img
            src={item.thumbnail}
            alt="{item.title}" />
        </figure>
        <div className="card-body grow flex flex-column gap-6  text-[#0F253F] ml-10">
            <h2 className="card-title text-[5rem] titulo">{item.title}</h2>
            <p className="text-[2rem] tipografiaInter">{item.description}</p>
            <p className="text-[2rem] tipografiaInter font-semibold">$ {item.price}</p>
        </div>
        <ItemCount  />
    </div>
  )
}
