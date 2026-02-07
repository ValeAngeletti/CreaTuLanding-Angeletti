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
        <div className='w-full pr-3 font-[Montserrat]'>
            <p className='text-start text-[1.2rem] md:text-[1.4rem] pl-6 pb-3 text-[#0F253F]'>Cantidad: {cantidad}</p>
            <div className='flex flex-col md:flex-row items-start'>
                <div className="flex flex-row pb-5 md:pb-0">
                    <button className="bg-[#3A4A5D] hover:scale-[1.2] transition duration-700 p-3 ml-6 mr-4 rounded text-[1.5rem] font-semibold shadow-xl"
                    onClick={() => setCount(cantidad - 1)}
                    disabled={cantidad < 2}>Restar</button>

                    <button className='bg-[#E3D7BB] hover:scale-[1.2] transition duration-700 p-3 mr-4 rounded text-[1.5rem] font-semibold text-black shadow-xl'
                    onClick={() => setCount(cantidad + 1)}>Sumar</button>
                </div>

                <button className='bg-[#AEB4BC] text-[#0F253F] hover:scale-[1.1] w-[15rem] md:w-[17rem] transition duration-700 p-3 rounded text-[1.5rem] font-semibold shadow-xl ml-6' onClick={handleAddToCarrito}>Agregar al carrito</button>
            </div>
            <Toaster />
        </div>
    )
}