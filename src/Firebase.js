// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD378Wi2SvPnzbiA0o0bWDMZligIlwGCOE",
  authDomain: "d-chatz-chat-app.firebaseapp.com",
  projectId: "d-chatz-chat-app",
  storageBucket: "d-chatz-chat-app.appspot.com",
  messagingSenderId: "275788310841",
  appId: "1:275788310841:web:ce7654dc1041fdbda660e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()