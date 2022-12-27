// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiTAA-dxFvwblr0kidi87Vo-CaGT4ir9g",
  authDomain: "my-tasks-ab6e7.firebaseapp.com",
  projectId: "my-tasks-ab6e7",
  storageBucket: "my-tasks-ab6e7.appspot.com",
  messagingSenderId: "254643168873",
  appId: "1:254643168873:web:77040018f63de6ad66a4f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;