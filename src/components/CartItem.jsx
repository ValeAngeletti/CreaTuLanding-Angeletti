export default function CartItem({nombre, cantidad, img}) {
    return (
        <div className="flex justify-around items-center border-b p-3 mb-3">
            <div className="w-10 h-10 bg-gray-400 rounded-full">
                <img src={img} alt={nombre}/>
            </div>
            <p>{nombre} x {cantidad}</p>
            <button className="bg-red-500 px-5 py-2 rounded cursor-pointer">Eliminar</button>
        </div>
    )
}