import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrden } from "../firebase/db";


export default function CartContainer() {
    const { carrito, getTotal } = useContext(CartContext)
    const total = getTotal()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target 
        const nombre = form.formName.value
        const email = form.formEmail.value
        const telefono = form.formPhone.value
        const direccion = form.formDireccion.value

        const user = { nombre, email, telefono, direccion}

        console.log(user)

        createOrden(user, carrito, Number(total))
    }

    if(carrito.length < 1){
        return (
            <div>
                <p>No hay productos en el carrito</p>
            </div>
        )
    }
    return (
        <div className="flex flex-col justify-center items-center mt-20">
            <div>
                {carrito.map(producto => <CartItem key={producto.id} nombre={producto.name} cantidad={producto.cantidad} img={producto.img}/>)}
            </div>
            <div>
                <p className="text-3xl mb-10">Total = ${total}</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre completo" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formName"/>
                    <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formEmail"/>
                    <input type="tel" placeholder="Teléfono" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formPhone"/>
                    <input type="text" placeholder="Dirección de envío" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formDireccion"/>
                    <button className="bg-white text-black p-3 rounded w-full">Finalizar Compra</button>
                </form>
            </div>
        </div>
    )
}