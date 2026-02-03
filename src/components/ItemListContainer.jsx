import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router"
import { getProducts, getProductsByCategory } from "../firebase/db.js"

export default function ItemListContainer() {
    const { id } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {

        if (id) {
            getProductsByCategory(id).then(productos => setItems(productos))
        }else{

            getProducts().then(productos => setItems(productos))
        }

    }, [id])


    return <ItemList items={items} />
}
