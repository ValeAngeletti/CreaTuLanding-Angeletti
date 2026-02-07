import { Link } from "react-router"

export default function Item({ item }){
  return (
    <Link
      to={`/item/${item.id}`}
      className="flex w-80 p-3 rounded-xl mb-3  transition-all duration-300 ease-out"
    >
    <div className="card flex flex-col hover:shadow-xl bg-[#E3D7BB] w-full h-[30rem] shadow-sm items-center">
        <figure className="h-[50%] flex justify-center items-center">
            <img
            src={item.img}
            alt={item.title}
            className="max-h-full object-contain py-2"/>
        </figure>
        <div className="card-body h-[40%] text-[#0F253F] flex flex-col justify-between">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
                <span className="btn bg-[#3A4A5D] text-white border-none hover:bg-[#CBB892] hover:text-[#0F253F] transition-all duration-300 ease-out">
                    Ver Producto
                </span>
            </div>
        </div>
    </div>
    </Link>
  )
}
