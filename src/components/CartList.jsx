import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from 'lucide-react';

export default function CartList({ carrito, total}) {
    const { vaciarCarrito } = useContext(CartContext)
    const vaciarClick = () => vaciarCarrito()

    return (
        <div className="w-full h-screen flex flex-col justify-center px-10 md:px-38"> 
            {carrito.map(producto => <CartItem key={producto.id} id={producto.id} nombre={producto.name} cantidad={producto.cantidad} img={producto.img}/>)}
            <div className="flex justify-between w-full items-center my-6">
                <p className="text-3xl font-[Montserrat] font-semibold">Total = ${total}</p>
                <div className="flex bg-[#AEB4BC] shadow-xl rounded hover:scale-[1.1] transition duration-700 text-[#0F253F] text-2xl p-3 justify-around items-center font-semibold">
                    <Trash2 className="mr-3"/>
                    <button onClick={vaciarClick}>Vaciar Carrito</button>
                </div>
            </div>
        </div>
    )
}