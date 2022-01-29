import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2h1WO-qFVjoi0ZWvaNeBpTk4ld6HFHUw",
  authDomain: "biuro-app.firebaseapp.com",
  projectId: "biuro-app",
  storageBucket: "biuro-app.appspot.com",
  messagingSenderId: "714021405626",
  appId: "1:714021405626:web:f8e7a83ceb870019341383",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();
