import { ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function CartWidget(){
    const navegacion = useNavigate()
    const { getItemsCarrito } = useContext(CartContext)
    const totalItems = getItemsCarrito()

    return (
        <div className="carrito flex gap-1 bg-[#E3D7BB] p-3 me-2 rounded-lg" onClick={() => navegacion('/cart')}>
            <ShoppingCart color="#3A4A5D" size={30}/>
            <p className="cantidadCarrito px-3 py-1 rounded-[50%] bg-[#6E7C89] text-[#FBF8F1] text-[0.9rem]">{totalItems}</p>
        </div>
    )
}
