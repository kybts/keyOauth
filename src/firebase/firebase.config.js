import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBki5Yd49gwcSWChagQ8JEDZLx_f3a5sM",
  authDomain: "proyectoauth-69adb.firebaseapp.com",
  projectId: "proyectoauth-69adb",
  storageBucket: "proyectoauth-69adb.appspot.com",
  messagingSenderId: "131127743657",
  appId: "1:131127743657:web:d89825dda7f1e3050f45b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)