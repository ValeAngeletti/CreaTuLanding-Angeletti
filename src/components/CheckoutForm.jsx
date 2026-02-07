export default function CheckoutForm({ onSubmit}){
    return (
        <div className="w-full h-screen flex flex-col justify-center px-38">
            <h2 className="text-5xl titulo pb-6 text-[#CBB892]">Tus Datos:</h2>
            <form className=" flex flex-col gap-3" onSubmit={onSubmit}>
                <input type="text" placeholder="Nombre completo" className="w-full bg-[#0F253F] rounded-xl border-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formName"/>
                <input type="email" placeholder="Email" className="w-full bg-[#0F253F] rounded-xl border-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formEmail"/>
                <input type="tel" placeholder="Teléfono" className="w-full bg-[#0F253F] rounded-xl border-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formPhone"/>
                <input type="text" placeholder="Dirección de envío" className="w-full bg-[#0F253F] rounded-xl border-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition" required id="formDireccion"/>
                <button className="bg-[#CBB892] text-[#0F253F] p-3 text-2xl font-semibold rounded w-full">Finalizar Compra</button>
            </form>
        </div>
    )
}