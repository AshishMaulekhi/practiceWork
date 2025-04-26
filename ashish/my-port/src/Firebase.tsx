import{getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCl7HXTIh7DfDv6CfhqGnXBO53zB4i6rfI",
  authDomain: "portfolio-51e29.firebaseapp.com",
  projectId: "portfolio-51e29",
  storageBucket: "portfolio-51e29.firebasestorage.app",
  messagingSenderId: "195060038189",
  appId: "1:195060038189:web:c6e02b731d3dddf01616a4",
  measurementId: "G-HWQK4GNC3W"
};


const app = initializeApp(firebaseConfig); 
 export const db= getFirestore(app);