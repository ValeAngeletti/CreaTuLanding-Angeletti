import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail.jsx"
import { getDetail } from "../firebase/db.js"

export default function ItemDetailContainer(){
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getDetail(id).then(detalle => setItem(detalle))
  }, [id])


  return <ItemDetail item={item} />
}
