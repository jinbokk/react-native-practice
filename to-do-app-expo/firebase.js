// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyALuaw0CmEuGso82saBvYqchz4V3PYaq6c",
  authDomain: "to-do-app-expo.firebaseapp.com",
  projectId: "to-do-app-expo",
  storageBucket: "to-do-app-expo.appspot.com",
  messagingSenderId: "517444308945",
  appId: "1:517444308945:web:6ccdbf0e8989cdfad6daf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
