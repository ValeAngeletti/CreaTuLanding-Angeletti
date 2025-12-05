import CartWidget from "./CartWidget.jsx"
import logo from "../assets/logo.png"

export default function NavBar(){
    return (
        <header className="flex justify-between items-center p-3 bg-[#0F253F] text-[#CBB892]">
            <div className="divLogo flex items-end">
                <img src={ logo } alt="" className="logo w-15" />
                <h1 className="titulo text-[2.2rem]">Aura Mist</h1>
            </div>
            <nav className="flex justify-between gap-8 text-[#E3D7BB] text-[1.1rem]">
                <a href="" className="itemNav">Femeninas</a>
                <a href="" className="itemNav">Masculinas</a>
                <a href="" className="itemNav">Unisex</a>
                <a href="" className="itemNav">Cuidado Corporal</a>
                <a href="" className="itemNav">Cuidado Facial</a>
            </nav>
            <CartWidget/>
        </header>
    )
}
