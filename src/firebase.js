// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// require('dotenv').config();

const firebaseConfig = {
  apiKey: "AIzaSyB4v7X9f8mOqRj9WJpqkS1hrLwMkvfEc2w",
  authDomain: "agroconnect-3ccde.firebaseapp.com",
  projectId: "agroconnect-3ccde",
  storageBucket: "agroconnect-3ccde.appspot.com",
  messagingSenderId: "309476229960",
  appId: "1:309476229960:web:ea6e93de8c2cdff61d297d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);   
export const storage = getStorage(app);