import { Link } from "react-router"
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/logo.png"

export default function NavBar({categorias}){
    return (
        <header className="flex justify-between items-center p-3 bg-[#0F253F] text-[#CBB892]">
            <Link to="/" className="divLogo flex items-end">
                <img src={ logo } alt="" className="logo w-15" />
                <h1 className="titulo text-[2.2rem]">Aura Mist</h1>
            </Link>
            <nav className="flex justify-between gap-8 text-[#E3D7BB] text-[1.1rem]">
                {categorias.map(categoria => (
                    <li key={categoria.id}>

                        <Link to={`/categoria/${categoria.name}`} className="itemNav">{categoria.name}</Link>
                    </li>
                ))}
            </nav>
            <CartWidget/>
        </header>
    )
}
