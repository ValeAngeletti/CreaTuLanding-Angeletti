import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-tO5Sv1P1O_rEhIFYuPRsFXeE7VJnaEE",
    authDomain: "aura-mist-db.firebaseapp.com",
    projectId: "aura-mist-db",
    storageBucket: "aura-mist-db.firebasestorage.app",
    messagingSenderId: "583101313792",
    appId: "1:583101313792:web:0f1d14820f5d731d6af9e5"
};

export const app = initializeApp(firebaseConfig);