import { ShoppingCart } from 'lucide-react'

export default function CartWidget({ text }){
    return (
        <div className="carrito">
            <ShoppingCart color="red"/>
            <p className="cantidadCarrito">3</p>
        </div>
    )
}
