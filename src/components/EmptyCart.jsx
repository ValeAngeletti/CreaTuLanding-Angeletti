import { Toaster} from "react-hot-toast"
import { HeartCrack } from 'lucide-react';
import Latido from "./Latido";

export default function EmptyCart(){
    return (
        <div className="bg-[#3A4A5D] w-full h-screen flex flex-col justify-center items-center">
            <p className="text-5xl leading-15 text-center p-3 md:p-0 md:text-6xl titulo font-medium">No hay productos en el carrito</p>
            <Latido>
                <HeartCrack className="w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] stroke-1 text-[#CBB892]"/>
            </Latido>
            <Toaster />
        </div>
    )
}