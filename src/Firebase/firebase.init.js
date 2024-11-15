// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDYxOsk3bH8FGYww1_HrUMCwJKjtD-6vM",
  authDomain: "news-hub-auth.firebaseapp.com",
  projectId: "news-hub-auth",
  storageBucket: "news-hub-auth.firebasestorage.app",
  messagingSenderId: "591545536810",
  appId: "1:591545536810:web:b0ffeb640ddb77b4310e53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;