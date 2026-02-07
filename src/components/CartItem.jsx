import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { X } from 'lucide-react';

export default function CartItem({nombre, cantidad, img, id}) {
    const { deleteProduct} = useContext(CartContext)
    const handleDelete = () => deleteProduct(id)

    return (
        <div className="flex justify-between items-center border-b py-3 mb-3">
            <div className="w-15 md:w-25 h-15 md:h-25 bg-[#F4EEDF] p-0 nmd:p-2 rounded-full">
                <img src={img} alt={nombre}/>
            </div>
            <p className="font-[Montserrat] text-[#CBB892] text-2xl md:text-3xl">{nombre} x {cantidad}</p>
            <div className=" flex items-center justify-center bg-[#E3D7BB] hover:scale-[1.2] transition duration-700 p-3 mr-4 rounded text-[1rem] md:text-[1.5rem] font-semibold text-black shadow-xl cursor-pointer">
                <X className="mr-2"/>
                <button  onClick={handleDelete}>Eliminar</button>
            </div>
        </div>
    )
}