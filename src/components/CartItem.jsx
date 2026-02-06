import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function CartItem({nombre, cantidad, img, id}) {
    const { deleteProduct} = useContext(CartContext)
    const handleDelete = () => deleteProduct(id)

    return (
        <div className="flex justify-around items-center border-b p-3 mb-3">
            <div className="w-10 h-10 bg-gray-400 rounded-full">
                <img src={img} alt={nombre}/>
            </div>
            <p>{nombre} x {cantidad}</p>
            <button className="bg-red-500 px-5 py-2 rounded cursor-pointer" onClick={handleDelete}>Eliminar</button>
        </div>
    )
}