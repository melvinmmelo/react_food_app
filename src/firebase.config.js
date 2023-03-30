import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDCeWLiTMJTF4GgoJFLSWoVvvQVryrgSWg",
  authDomain: "ubinventory-6c5c4.firebaseapp.com",
  databaseURL:
    "https://ubinventory-6c5c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ubinventory-6c5c4",
  storageBucket: "ubinventory-6c5c4.appspot.com",
  messagingSenderId: "638612838735",
  appId: "1:638612838735:web:e031d88d046273cce80d3a",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)

const storage = getStorage(app)

export  { app, firestore, storage }