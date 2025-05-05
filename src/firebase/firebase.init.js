// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu3o5kabKhuHWdHXvxtZkDYsUlc5t2zX0",
  authDomain: "safu-a9.firebaseapp.com",
  projectId: "safu-a9",
  storageBucket: "safu-a9.firebasestorage.app",
  messagingSenderId: "922580463285",
  appId: "1:922580463285:web:1cb4d9da25b90486d5d8fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);