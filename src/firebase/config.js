import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyADpfN2syGRrwPzuX-I0v0HIiyoStWYlqw",
  authDomain: "wishstore-db.firebaseapp.com",
  projectId: "wishstore-db",
  storageBucket: "wishstore-db.firebasestorage.app",
  messagingSenderId: "544975564738",
  appId: "1:544975564738:web:0402ccd5a3b2f1c788f05b"
};

export const app = initializeApp(firebaseConfig)