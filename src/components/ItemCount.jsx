import { useState } from "react"

export default function ItemCount() {

    const [ contador, setCount ] = useState(1)

    return (
        <div className='p-10 w-[20rem] mt-4 ml-3'>
            <p className='text-center text-[#0F253F]'>Cantidad: {contador}</p>
            <div className='flex'>
                <button className="bg-[green] px-7 mr-3 py-2 rounded"
                onClick={() => setCount(contador - 1)}
                disabled={contador < 2}>Restar</button>

                <button className='bg-[red] px-7 py-2 rounded'
                onClick={() => setCount(contador + 1)}>Sumar</button>

                <button className='bg-black px-7 py-2 rounded'>Agregar al carrito</button>
            </div>
        </div>
    )
}