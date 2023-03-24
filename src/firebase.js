// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD16V7z2jrhgCGTQb2hLVCYcHn1Gn8vKjI",
  authDomain: "realstate-clone.firebaseapp.com",
  projectId: "realstate-clone",
  storageBucket: "realstate-clone.appspot.com",
  messagingSenderId: "31934289878",
  appId: "1:31934289878:web:9fff3fc297bea5b741f677",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
