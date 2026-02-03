import { getFirestore, collection, query, where, getDocs, doc, getDoc, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from './config.js'

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    const products = []

    querySnapshot.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id })
    });

    return products
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categorias"));
    const categories = []

    querySnapshot.forEach((doc) => {
        categories.push({ ...doc.data(), id: doc.id })
    });

    return categories
}



export const getProductsByCategory = async (categoria) => {
    const q = query(collection(db, "productos"), where("category", "==", categoria));
    const querySnapshot = await getDocs(q);
    const filterProducts = []

    querySnapshot.forEach((doc) => {
        filterProducts.push({ ...doc.data(), id: doc.id })
    });

    return filterProducts

}

export const getDetail = async (id) => {

    const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return { ...docSnap.data(), id: docSnap.id }
    }
}

export const createOrden = async (user, items, total) => {
    const ordenCompra = {
        user, items, total, time: serverTimestamp()
    }

    try {
        const docRef = await addDoc(collection(db, "orders"), ordenCompra)
        console.log("Orden creada con ID:", docRef.id)
    } catch (error) {
        console.error("Error al crear orden", error)
    }

}