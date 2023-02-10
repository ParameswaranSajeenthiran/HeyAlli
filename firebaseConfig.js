// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import { collection, getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app'
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuIdBBf98KbyAItFsTKKibKrCX_G7R3eM",
  authDomain: "heyalli-39ff3.firebaseapp.com",
  projectId: "heyalli-39ff3",
  storageBucket: "heyalli-39ff3.appspot.com",
  messagingSenderId: "802537106958",
  appId: "1:802537106958:web:b13cfd6d1e8b062152165f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a list of cities from your database
export async function getCities() {
  const citiesCol = collection(db, 'users');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList)
  return cityList;
}

export async function createUser(data,dbCollection){
  try {
    const docRef = await addDoc(collection(db, dbCollection), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



// https://heyalli-39ff3.firebaseapp.com/__/auth/handler


export default getCities