import { NavLink } from "react-router"
import { useState } from "react"
import CartWidget from "./CartWidget.jsx"
import logo from "../assets/logo.png"

export default function NavBar({ categorias }) {
  const [open, setOpen] = useState(false)
  const stylesCategorias = "capitalize hover:text-[1.58rem] transition"
  const stylesCategoriasActive = "bg-[#E3D7BB] text-[#0F253F] px-2 rounded"

  return (
    <header className="bg-[#0F253F] text-[#CBB892]">
      <div className="flex justify-between items-center p-3">

        
        <NavLink to="/" className="flex items-end gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="hidden md:block text-4xl font-semibold titulo">Aura Mist</h1>
        </NavLink>

        <nav className="hidden md:flex gap-8 text-[#E3D7BB] text-[1.5rem]">
          {categorias.map(cat => (
            <NavLink
              key={cat.id}
              to={`/categoria/${cat.name}`}
              className={({ isActive }) =>
                `${stylesCategorias} ${
                  isActive ? `${stylesCategoriasActive}` : ""
                }`
              }
            >
              {cat.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex gap-4">
          <CartWidget />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-[#0F253F] border-t border-[#CBB892]/30">
          <ul className="flex flex-col gap-4 p-4 text-[#E3D7BB]">
            {categorias.map(cat => (
              <NavLink
                key={cat.id}
                to={`/categoria/${cat.name}`}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `capitalize ${
                    isActive ? `${stylesCategoriasActive}` : ""
                  }`
                }
              >
                {cat.name}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
