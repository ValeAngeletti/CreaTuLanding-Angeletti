import { useState, useContext } from "react"
import { CartContext } from "../context/CartContext"
import toast, { Toaster } from "react-hot-toast"

export default function ItemCount({ producto }) {

    const [ cantidad, setCount ] = useState(1)
    const { addToCarrito } = useContext(CartContext)

    const handleAddToCarrito = () => {
        addToCarrito({...producto, cantidad})
        toast(`Se agregó ${producto.name} al carrito con éxito!`)
    }

    return (
        <div className='p-10 w-[20rem] mt-4 ml-3'>
            <p className='text-center text-[#0F253F]'>Cantidad: {cantidad}</p>
            <div className='flex'>
                <button className="bg-[green] px-7 mr-3 py-2 rounded"
                onClick={() => setCount(cantidad - 1)}
                disabled={cantidad < 2}>Restar</button>

                <button className='bg-[red] px-7 py-2 rounded'
                onClick={() => setCount(cantidad + 1)}>Sumar</button>

                <button className='bg-black px-7 py-2 rounded' onClick={handleAddToCarrito}>Agregar al carrito</button>
            </div>
            <Toaster />
        </div>
    )
}