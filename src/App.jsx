import { BrowserRouter, Routes, Route } from "react-router"
import NavBar from "./components/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"

function App() {
  return (
    <BrowserRouter>
        <NavBar/>

        <Routes>

            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:nombreCategoria" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
