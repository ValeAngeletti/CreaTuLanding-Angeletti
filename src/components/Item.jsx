import { Link } from "react-router"

export default function Item({ item }){
  return (
    <Link
      to={`/item/${item.id}`}
      className="flex w-80 p-3 rounded-xl mb-3 hover:bg-[#CBB892]/30 transition-all duration-300 ease-out"
    >
    <div className="card flex items-center bg-[#E3D7BB] w-full h-100 shadow-sm">
        <figure>
            <img
            src={item.thumbnail}
            alt={item.title}
            className="w-32 h-32 object-cover"/>
        </figure>
        <div className="card-body text-[#0F253F] flex flex-col">
            <div className="presentacion">
                <h2 className="card-title">hola</h2>
                <p>{item.description}</p>
            </div>
            <div className="card-actions">
                <span className="btn bg-[#3A4A5D] text-white border-none hover:bg-[#CBB892] hover:text-[#0F253F] transition-all duration-300 ease-out">
                    Ver Producto
                </span>
            </div>
        </div>
    </div>
    </Link>
  )
}
