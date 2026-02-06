import { BrowserRouter, Routes, Route } from "react-router"
import NavBarContainer from "./components/NavBarContainer.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import CartContainer from "./components/CartContainer.jsx"

function App() {
  return (
    <BrowserRouter>
        <NavBarContainer/>
        <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartContainer />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
