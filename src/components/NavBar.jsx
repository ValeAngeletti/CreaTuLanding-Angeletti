import { NavLink } from "react-router"
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/logo.png"

export default function NavBar({categorias}){
    return (
        <header className="flex justify-between items-center p-3 bg-[#0F253F] text-[#CBB892]">
            <NavLink to="/" className="divLogo flex items-end">
                <img src={ logo } alt="" className="logo w-15" />
                <h1 className="titulo text-[2.2rem]">Aura Mist</h1>
            </NavLink>
            <nav className="flex justify-between gap-8 text-[#E3D7BB] text-[1.1rem]">
                {categorias.map(categoria => (
                    <li key={categoria.id}>
                        <NavLink className={({ isActive }) => isActive ? 'text-red-600' : ''} to={`/categoria/${categoria.name}`} >{categoria.name}</NavLink>
                    </li>
                ))}
            </nav>
            <CartWidget/>
        </header>
    )
}
