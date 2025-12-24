import { Link } from "react-router"
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/logo.png"

export default function NavBar(){
    return (
        <header className="flex justify-between items-center p-3 bg-[#0F253F] text-[#CBB892]">
            <Link to="/" className="divLogo flex items-end">
                <img src={ logo } alt="" className="logo w-15" />
                <h1 className="titulo text-[2.2rem]">Aura Mist</h1>
            </Link>
            <nav className="flex justify-between gap-8 text-[#E3D7BB] text-[1.1rem]">
                <Link to="categoria/beauty" className="itemNav">Belleza</Link>
                <Link to="categoria/fragrances" className="itemNav">Fragancias</Link>
                <Link to="categoria/skin-care" className="itemNav">Skin Care</Link>
                <Link to="categoria/womens-bags" className="itemNav">Carteras</Link>
                <Link to="categoria/womens-jewellery" className="itemNav">Joyería</Link>
            </nav>
            <CartWidget/>
        </header>
    )
}
