 // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPvLso3vrV8TaCwMIpR_ydi-VHF0HG2zE",
    authDomain: "farmersmarketv9.firebaseapp.com",
    projectId: "farmersmarketv9",
    storageBucket: "farmersmarketv9.appspot.com",
    messagingSenderId: "441488622930",
    appId: "1:441488622930:web:8a2f0630b6b487e72fa68b",
    //measurementId: "G-1PXTERC9WG"
  };


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };