import CartWidget from "./CartWidget.jsx"

export default function NavBar(){
    return (
        <header className="flex ">
            <div className="divLogo">
                <h1 className="titulo">Aura Mist</h1>
                <img src="" alt="" className="logo" />
            </div>
            <nav>
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
