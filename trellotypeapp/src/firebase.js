import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

//APIKEY Y DATOS DE LOG PARA AUTORIZACIÓN DE USO DE FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyByfYePhLQz3zs7Tjnork2MJaEwo4rTRAU",
    authDomain: "trellotypeapp.firebaseapp.com",
    projectId: "trellotypeapp",
    storageBucket: "trellotypeapp.appspot.com",
    messagingSenderId: "668774197763",
    appId: "1:668774197763:web:7bb841a86d173a612e7c36",
    measurementId: "G-CD2MSYCB2V"
  }; 

const app = initializeApp(firebaseConfig); //Inicializamos Firebase
const analytics = getAnalytics(app);

const auth = getAuth(app);
const firestore = getFirestore(app); //Configuración de Firebase DB

export { auth,firestore };