import { ShoppingCart } from 'lucide-react'

export default function CartWidget(){
    return (
        <div className="carrito flex gap-1 bg-[#E3D7BB] p-3 me-2 rounded-lg">
            <ShoppingCart color="#3A4A5D" size={30}/>
            <p className="cantidadCarrito px-3 py-1 rounded-[50%] bg-[#6E7C89] text-[#FBF8F1] text-[0.9rem]">3</p>
        </div>
    )
}
