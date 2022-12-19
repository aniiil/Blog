import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database";
import {getAuth} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyD8tIewj1ifR3tDl4zjSB81aSFPdYPb5nQ",
  authDomain: "blog-app-e3359.firebaseapp.com",
  projectId: "blog-app-e3359",
  storageBucket: "blog-app-e3359.appspot.com",
  messagingSenderId: "819784598072",
  appId: "1:819784598072:web:f49f32d631f9a58fa4dccd"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app)
const auth = getAuth();
const database= getDatabase(app);

 export {app, auth, db, database};