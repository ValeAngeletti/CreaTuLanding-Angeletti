import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrden } from "../firebase/db";
import EmptyCart from "./EmptyCart";
import CheckoutForm from "./CheckoutForm";
import CartList from "./CartList";
import toast from "react-hot-toast"

export default function CartContainer() {
    const { carrito, getTotal, vaciarCarrito } = useContext(CartContext)
    const total = getTotal()
    const vaciar = () => vaciarCarrito()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target 
        const nombre = form.formName.value
        const email = form.formEmail.value
        const telefono = form.formPhone.value
        const direccion = form.formDireccion.value

        const user = { nombre, email, telefono, direccion}

        console.log(user)

        const idOrden = await createOrden(user, carrito, Number(total))
        toast(`La orden con el id ${idOrden} fue creada con éxito!`)
        vaciar()
    }

    if(carrito.length < 1){
        return (
            <EmptyCart/>
        )
    }
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center  bg-[#3A4A5D]">
            <h2 className="text-5xl pt-20 text-white pb-10 titulo text-[#E3D7BB]" >Carrito de Compras</h2>
            <CartList carrito={carrito} total={total}/>
            <CheckoutForm onSubmit={handleSubmit}/>
        </div>
    )
}