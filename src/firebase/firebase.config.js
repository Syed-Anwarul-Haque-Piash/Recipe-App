// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTI1KBtS1AUzC8biIOik-SCejxH6nwjtU",
  authDomain: "recipe-hunter-a2dfd.firebaseapp.com",
  projectId: "recipe-hunter-a2dfd",
  storageBucket: "recipe-hunter-a2dfd.appspot.com",
  messagingSenderId: "413908784094",
  appId: "1:413908784094:web:930aca0e1379c22c0d834f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;