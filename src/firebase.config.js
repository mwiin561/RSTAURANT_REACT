import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRNaPHlPiQ0bhJu2ffd33TlHvolFr8Akw",
  authDomain: "restaurant-app-1b234.firebaseapp.com",
  projectId: "restaurant-app-1b234",
  storageBucket: "restaurant-app-1b234.appspot.com",
  messagingSenderId: "641424263542",
  appId: "1:641424263542:web:150ce5f0a33465b194d257"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
