// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvqYFm8UWQHl1i5HXq3MAPV5JJ8cUzK0U",
  authDomain: "newspaper-layout.firebaseapp.com",
  projectId: "newspaper-layout",
  storageBucket: "newspaper-layout.appspot.com",
  messagingSenderId: "912066463736",
  appId: "1:912066463736:web:39a6011ce3e00f32f2380d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
