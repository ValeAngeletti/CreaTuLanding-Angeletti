import { useEffect, useState } from "react"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router"

export default function ItemListContainer() {
    const { nombreCategoria } = useParams()
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProductos = new Promise((resolve, reject) => {
            const url = nombreCategoria ? `https://dummyjson.com/products/category/${nombreCategoria}` : "https://dummyjson.com/products"

        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data.products))
            .catch(error => reject(error))
        })

        getProductos
        .then(res => setItems(res))
        .catch(err => console.error("Error al cargar los productos", err))
        .finally(() => setLoading(false))
    }, [nombreCategoria])

    if (loading) return <p>Cargando productos ...</p>

    return <ItemList items={items} />
}
