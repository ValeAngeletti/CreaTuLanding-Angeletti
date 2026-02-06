import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartList({ carrito, total}) {
    const { vaciarCarrito } = useContext(CartContext)
    const vaciarClick = () => vaciarCarrito()

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} id={producto.id} nombre={producto.name} cantidad={producto.cantidad} img={producto.img}/>)}
            <p className="text-3xl mb-10">Total = ${total}</p>
            <button className="btn btn-error" onClick={vaciarClick}>vaciar carrito</button>
        </div>
    )
}