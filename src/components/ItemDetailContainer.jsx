import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail.jsx"

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProducto = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })

    getProducto
    .then(res => setItem(res))
    .catch(error => console.error("Error al cargar el producto", error))
    .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Cargando detalle ...</p>

  return <ItemDetail item={item} />
}
