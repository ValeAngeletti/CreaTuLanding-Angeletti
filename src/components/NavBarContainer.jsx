import { useState, useEffect } from "react"
import { getCategories } from "../firebase/db"
import NavBar from "./NavBar"

export default function NavBarContainer(){
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        getCategories().then(categoria => setCategorias(categoria) )
    }, [])

    return (
        <NavBar categorias={categorias} />
    )
}