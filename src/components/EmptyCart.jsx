import { Toaster} from "react-hot-toast"


export default function EmptyCart(){
    return (
        <div>
            <p>No hay productos en el carrito</p>
            <Toaster />
        </div>
    )
}