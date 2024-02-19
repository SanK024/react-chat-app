import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKwU6kNvqz7lh1r3KOhG8isf0bvq3InLs",
  authDomain: "friendly-unify-chat-kornor.firebaseapp.com",
  projectId: "friendly-unify-chat-kornor",
  storageBucket: "friendly-unify-chat-kornor.appspot.com",
  messagingSenderId: "1084974171868",
  appId: "1:1084974171868:web:074e3001d5b95fd42d9619",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();