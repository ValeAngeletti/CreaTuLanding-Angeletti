import { count } from "firebase/firestore";
import { CartContext } from "./CartContext";
import { useState } from "react";

export default function CartProvider ({children}) {
    const [carrito, setCarrito] = useState([])

    const getItemsCarrito = () => carrito.reduce((acc, current) => acc + current.cantidad, 0)

    const enElCarrito = producto => carrito.some(item => item.id === producto.id)

    const addToCarrito = producto => {
        setCarrito(carrito => 
            carrito.some(item => item.id === producto.id)
            ? carrito.map(item => 
                item.id === producto.id
                ? {...item, cantidad: item.cantidad + producto.cantidad}
                : item
            )
            : [...carrito, producto]
        )
    }

    const getTotal = () => {
        const total = carrito.reduce((acc, current) => acc + (current.cantidad*current.price), 0)
        return total.toFixed(2)
    }

    const deleteProduct = id => {
        const carritoCopia = carrito.filter(producto => producto.id != id)
        setCarrito(carritoCopia)

    }

    const vaciarCarrito = () => setCarrito([])

    return (
        <CartContext.Provider value={{ carrito, getItemsCarrito, addToCarrito, getTotal, deleteProduct, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}