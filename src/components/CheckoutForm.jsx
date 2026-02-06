export default function CheckoutForm({ onSubmit}){
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre completo" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formName"/>
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formEmail"/>
                <input type="tel" placeholder="Teléfono" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formPhone"/>
                <input type="text" placeholder="Dirección de envío" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formDireccion"/>
                <button className="bg-white text-black p-3 rounded w-full">Finalizar Compra</button>
            </form>
        </div>
    )
}